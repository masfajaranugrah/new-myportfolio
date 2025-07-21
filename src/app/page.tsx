'use client'; // HARUS ADA agar bisa pakai useEffect, localStorage, dst

import { useEffect } from 'react';
import Header from '@/components/header/header';
import Profile from '@/components/profile/Profile';
import Services from '@/components/services/Service';
import { Showcase } from '@/components/showcase/showcase';
import LiveChatWidget from '@/components/livechat/live';

export default function HomePage() {
  useEffect(() => {
    const saveToLocalStorage = () => {
      const pageHTML = document.body.innerHTML;
      localStorage.setItem('cachedPageHTML', pageHTML);
     
    };

    const timeout = setTimeout(saveToLocalStorage, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <Showcase />
      <Services />
      <Profile />
      <LiveChatWidget />
    </>
  );
}
