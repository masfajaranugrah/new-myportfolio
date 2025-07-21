"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { createIcons, icons } from "lucide";

const LiveChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; user: boolean }[]>([
    {
      text: "Halo! Saya AI assistant mas Fajar Anugrah. Ada yang bisa saya bantu tentang jasa kami?",
      user: false,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const systemMessage = useMemo(
    () => ({
      role: "system" as const,
      content:
        "Anda adalah AI assistant untuk jasa pembuatan website dan mobile apps. Jawab pertanyaan tentang layanan, harga, dan teknologi yang digunakan. Gunakan bahasa Indonesia yang ramah dan profesional.",
    }),
    []
  );

  useEffect(() => {
    createIcons({ icons });
    setTimeout(() => createIcons({ icons }), 100);
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setOpen(!open);
    setTimeout(() => createIcons({ icons }), 100);
  };

  const handleSend = async () => {
    const input = chatInput.trim();
    if (!input || loading) return;

    setMessages((prev) => [...prev, { text: input, user: true }]);
    setChatInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const reply = data.reply || "Maaf, saya tidak bisa memberikan jawaban saat ini.";
      setMessages((prev) => [...prev, { text: reply, user: false }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Terjadi kesalahan saat menghubungi AI. Silakan coba lagi nanti.", user: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300"
      >
        <i data-lucide="message-circle" className="w-6 h-6"></i>
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 flex flex-col z-50">
          <div className="bg-red-500 text-black p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat AI Assistant</h3>
            <button onClick={toggleChat} className="hover:bg-red-600 rounded-full p-1">
              <i data-lucide="x" className="w-5 h-5"></i>
            </button>
          </div>

          <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.user ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-lg p-3 max-w-xs ${
                    msg.user ? "bg-red-500 text-black" : "bg-gray-800 text-white"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-sm text-gray-400 animate-pulse">Mengetik...</div>
            )}
          </div>

          <div className="p-4 border-t border-gray-700 space-y-2">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ketik pesan..."
                disabled={loading}
                className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded transition-colors disabled:opacity-50"
              >
                <i data-lucide="send" className="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;
