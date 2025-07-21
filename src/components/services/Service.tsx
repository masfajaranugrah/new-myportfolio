"use client"
import { useEffect } from "react";
import { createIcons, icons } from "lucide";

const services = () => {
  useEffect(() => {
    createIcons({ icons });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".tech-stack").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-5", "transition", "duration-700");
      observer.observe(el);
    });
  }, []);

  const openModal = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-red-950/20 to-black py-20 px-4">      {/* Background Effects & Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { icon: "laravel", title: "Frontend", top: "15%", left: "10%", delay: "0.3s" },
          { icon: "server", title: "Backend", top: "75%", left: "5%", delay: "0.7s" },
          { icon: "layers", title: "Framework", top: "20%", right: "12%", delay: "1.2s" },
          { icon: "database", title: "Database", top: "60%", right: "8%", delay: "1.8s" },
          { icon: "cog", title: "DevOps", top: "40%", left: "30%", delay: "2.1s" },
          { icon: "cloud", title: "Cloud", top: "80%", left: "45%", delay: "1.5s" },
          { icon: "git-branch", title: "Version Control", top: "10%", left: "60%", delay: "2.6s" },
          { icon: "activity", title: "Monitoring", top: "50%", right: "40%", delay: "0.4s" },
        ].map((item, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-bounce"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animationDuration: `${3 + i * 0.3}s`,
              animationDelay: item.delay,
            }}
          >
            <div
              title={item.title}
              className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center"
            >
              <i data-lucide={item.icon} className="w-6 h-6 text-red-400"></i>
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Siap untuk <span className="text-red-500">Level Up</span> Website & Aplikasi Mobile-mu?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
Transformasikan bisnis digital Anda dengan website custom dan aplikasi mobile yang powerful, cepat, dan SEO-friendly. Solusi lengkap untuk meningkatkan visibilitas dan efisiensi bisnis Anda di dunia digital.          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              { icon: "zap", title: "Website & Mobile Apps", desc: "Full-stack development untuk web & aplikasi mobile native" },
              { icon: "shield", title: "Cross Platform", desc: "Aplikasi mobile untuk iOS & Android dengan satu codebase" },
              { icon: "trending-up", title: "Performa Optimal", desc: "Website cepat & aplikasi mobile dengan performa maksimal" },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <i data-lucide={item.icon} className="w-5 h-5 text-black"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}

            <div>
              <h4 className="text-lg font-semibold mb-4">Tech Stack yang Saya Gunakan</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  // Bahasa Pemrograman
                  { name: "JavaScript", icon: "fa-brands fa-js" },
                  { name: "TypeScript", icon: "fa-solid fa-code" },
                  { name: "HTML", icon: "fa-brands fa-html5" },
                  { name: "CSS", icon: "fa-brands fa-css3-alt" },
                  { name: "Golang", icon: "fa-solid fa-terminal" },
                  { name: "PHP", icon: "fa-brands fa-php" },
                  { name: "Kotlin", icon: "fa-solid fa-mobile-screen-button" },
                  { name: "Dart", icon: "fa-solid fa-pen-nib" },

                  // Framework & Library
                  { name: "React.js", icon: "fa-brands fa-react" },
                  { name: "Next.js", icon: "fa-solid fa-layer-group" },
                  { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
                  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
                  { name: "Laravel", icon: "fa-brands fa-laravel" },
                  { name: "Express.js", icon: "fa-solid fa-server" },
                  { name: "Flutter", icon: "fa-brands fa-android" },

                  // Database
                  { name: "MySQL", icon: "fa-solid fa-database" },
                  { name: "MongoDB", icon: "fa-solid fa-leaf" },

                  // Cloud & Infrastruktur
                  { name: "AWS", icon: "fa-brands fa-aws" },
                  { name: "Alibaba Cloud", icon: "fa-solid fa-cloud" },

                  // Tools & OS
                  { name: "Git", icon: "fa-brands fa-git-alt" },
                  { name: "Docker", icon: "fa-brands fa-docker" },
                  { name: "Linux", icon: "fa-brands fa-linux" },
                ].map((item, i) => (
                  <div key={i} className="tech-stack bg-gray-800 rounded-lg p-3 text-center">
                    <i className={`${item.icon} text-red-500 text-2xl mb-2`}></i>
                    <div className="text-sm text-gray-300">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>


          </div>

          {/* Pricing Card */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="text-center mb-6">
                <span className="text-sm text-red-500 font-semibold tracking-wider uppercase">Limited Time Offer</span>
                <h3 className="text-3xl font-bold mt-2">Paket Website Pro</h3>
              </div>

              <div className="space-y-4 mb-6">
                {["Desain & Pengembangan Kustom", "Mobile Friendly & Responsive", "CMS Integration (untuk Website)","Android & iOS Support (untuk Mobile App)", "Free Maintenance 3 Bulan"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <i data-lucide="check" className="w-5 h-5 text-red-500"></i>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold">
                  <span className="text-gray-400 line-through">2jt</span>
                  <span className="text-red-500 ml-2">900rb</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Bayar 50% diawal, 50% saat live</p>
              </div>

              <button id="ctaButton" onClick={openModal} className="w-full bg-red-500 hover:bg-red-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 pulse-glow">
                Konsultasikan Project-mu
              </button>


              <p className="text-xs text-center text-gray-500 mt-4">
                *Gratis konsultasi untuk diskusi kebutuhan website
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        id="modal"
        onClick={handleModalClick}
        className="fixed inset-0 bg-black/80 hidden items-center justify-center z-50"
      >
        <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4">
         

               <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Layanan Jasa Joki Tersedia!</h3>
                <p className="text-gray-400 mb-6">
                    Silakan kunjungi website joki.fajaranugrahdev.my.id untuk informasi lengkap dan pemesanan
                </p>
                
                <div className="space-y-4">
                    <a href="https://joki.fajaranugrahdev.my.id" target="_blank" className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        <i data-lucide="external-link" className="inline w-5 h-5 mr-2"></i>
                        Kunjungi joki.fajaranugrahdev.my.id
                    </a>
                </div>

            <button onClick={closeModal} className="mt-6 text-gray-400 hover:text-white transition-colors">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;