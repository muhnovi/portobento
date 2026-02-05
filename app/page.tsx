"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  MapPin,
  MessageCircle,
  Music,
  Link as LinkIcon,
  Facebook,
  AtSign,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { button } from "framer-motion/client";

// --- Data Mockup (Berdasarkan Screenshot) ---
const profileData = {
  name: "MuhFI",
  title: "Frontend | Designer | Creator",
  avatar:
    "https://avatar.iran.liara.run/public/1", // Placeholder avatar
  handle: "@muhfi",
};

// --- Variabel Animasi (Spring Physics ala Bento) ---
const bentoTransition = {
  type: "spring" as const,
  stiffness: 400, // Sedikit lebih kaku agar responsif di HP
  damping: 25,
};

const hoverEffect = {
  scale: 1.02,
  rotate: 1, // Rotasi sedikit saat hover di desktop
  boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
  zIndex: 10,
};

// Animasi khusus saat disentuh di layar HP
const tapEffect = {
  scale: 0.96, // Mengecil sedikit
  opacity: 0.8, // Sedikit transparan saat ditekan (feedback visual)
  rotate: 0, // Reset rotasi agar stabil saat ditekan
  transition: {
    duration: 0.1, // Respons instan
    ease: "easeOut" as const,
  },
};

// --- Komponen Kartu Dasar (Bento Card Base) ---
const BentoCard = ({
  children,
  className,
  href,
  colSpan = 1,
  rowSpan = 1,
  bg = "bg-white",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  colSpan?: number;
  rowSpan?: number;
  bg?: string;
}) => {
  const handleRedirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href) {
      e.preventDefault();
      // Delay sedikit untuk membiarkan animasi tap selesai sebelum pindah halaman
      setTimeout(() => {
        window.open(href, "_blank");
      }, 200);
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleRedirect}
      className={`
        relative overflow-hidden rounded-4xl ${bg} p-6 
        cursor-pointer block no-underline text-gray-900 shadow-sm border border-transparent hover:border-black/5
        ${colSpan === 2 ? "col-span-2" : "col-span-1"}
        ${rowSpan === 2 ? "row-span-2" : "row-span-1"}
        ${className}
      `}
      layout
      // Menggunakan whileInView agar animasi jalan saat di-scroll di HP
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }} // Animasi jalan sekali saja saat elemen masuk layar
      whileHover={hoverEffect}
      whileTap={tapEffect}
      transition={bentoTransition}
    >
      {children}
    </motion.a>
  );
};

// --- Komponen Konten Spesifik ---

// 1. Kartu Instagram Besar
const InstagramCard = () => (
  <BentoCard
    colSpan={2}
    rowSpan={2}
    href="https://www.instagram.com/muh.noviyanto/"
    className="flex flex-col justify-between h-full group"
  >
    <div className="flex justify-between items-center mb-4">
      <div className="w-10 h-10 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center text-white">
        <Instagram size={20} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-colors">
        Follower 100
      </button>
    </div>

    <div className="text-sm font-semibold text-gray-500 mb-4">
      muh.noviyanto
    </div>

    {/* Grid Foto Mockup */}
    <div className="grid grid-cols-3 gap-2 h-full">
      {[1, 3, 4, 5, 7, 10].map((i) => (
        <div
          key={i}
          className="bg-gray-100 rounded-lg overflow-hidden relative aspect-square"
        >
          <img
            src={`https://picsum.photos/200/200?random=${i}`}
            alt="post"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="bg-white/80 p-2 rounded-full backdrop-blur-sm">
        <ArrowUpRight size={16} />
      </div>
    </div>
  </BentoCard>
);

// 2. Kartu Map / Lokasi
const MapCard = () => (
  <BentoCard href="https://goo.gl/maps/5jLeApUdHk7j6VCX6" className="p-0! relative group">
    <div className="absolute inset-0 bg-blue-100">
      {/* Mockup Map Image */}
      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        alt="Indonesia"
        className="w-full h-full object-cover"
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
    </div>

    {/* Pin Animasi */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <div className="relative bg-blue-500 text-white p-2 rounded-full border-2 border-white shadow-lg">
          <MapPin size={20} fill="currentColor" />
        </div>
      </div>
    </div>

    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-sm font-bold shadow-sm">
      Indonesia
    </div>
  </BentoCard>
);

// 3. Kartu Social Media Simple (Facebook/Threads)
const SocialLinkCard = ({
  icon: Icon,
  title,
  sub,
  bgIcon,
  href,
}: {
  icon: React.ElementType;
  title: string;
  sub: string;
  bgIcon: string;
  href: string;
}) => (
  <BentoCard
    href={href}
    className="flex flex-col justify-between h-64 sm:h-auto"
  >
    <div
      className={`w-12 h-12 ${bgIcon} rounded-2xl flex items-center justify-center text-white mb-4`}
    >
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-bold text-lg leading-tight mb-1">{title}</h3>
      <p className="text-gray-400 text-sm truncate">{sub}</p>
    </div>
  </BentoCard>
);

// 4. Kartu TikTok (Background Merah di tombol) - SUDAH DIPERBAIKI PADDINGNYA
const TikTokCard = () => (
  <BentoCard
    href="https://tiktok.com/@muhnov_"
    className="flex flex-col justify-between"
  >
    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-2">
      <Music size={24} />
    </div>
    <div className="mt-auto">
      <h3 className="font-bold text-lg mb-2">TikTok</h3>
      <div className="text-sm text-gray-500 mb-4">@muhnov_</div>
      <button className="w-full bg-[#ff0050] text-white py-3 px-6 rounded-full font-bold text-sm shadow-md hover:brightness-110 transition-all active:scale-95">
        Follow 50
      </button>
    </div>
  </BentoCard>
);

// 5. Kartu Discord
const DiscordCard = () => (
  <BentoCard
    href="https://discord.gg/rNsHsk3W"
    bg="bg-[#5865F2]"
    className="text-white flex flex-col justify-between"
  >
    <MessageCircle size={32} />
    <div>
      <h3 className="font-bold text-xl mt-4">Chat with me here!</h3>
      <p className="text-white/70 text-sm">discord.gg</p>
    </div>
  </BentoCard>
);

// 6. Kartu Relume (Link generic)
const LinkPreviewCard = () => (
  <BentoCard colSpan={2} href="https://relume.1stcollab.com" className="flex flex-row items-center gap-4">
    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
      <LinkIcon size={24} className="text-gray-600" />
    </div>
    <div className="overflow-hidden">
      <h3 className="font-bold text-lg truncate">Relume Websites</h3>
      <p className="text-gray-400 text-sm truncate">relume.1stcollab.com</p>
    </div>
    <div className="ml-auto bg-gray-100 p-2 rounded-full">
      <ArrowUpRight size={20} className="text-gray-500" />
    </div>
  </BentoCard>
);

// --- Main App Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-900 font-sans pb-20 pt-10 px-4 sm:px-6">
      <div className="max-w-300 mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="relative mb-6 group cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <img
                src={profileData.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-gray-900">
            {profileData.name}
          </h1>
          <p className="text-lg text-gray-500 max-w-lg font-medium">
            {profileData.title}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Row 1 */}
          <SocialLinkCard
            icon={Facebook}
            title="Muhammad Noviyanto"
            sub="facebook.com"
            bgIcon="bg-[#1877F2]"
            href="https://facebook.com/muhammad.noviyanto.2025"
          />

          <TikTokCard />

          <InstagramCard />

          {/* Row 2 (Flows around the big Instagram card on desktop) */}
          <SocialLinkCard
            icon={AtSign}
            title="MuhFI"
            sub="threads.com"
            bgIcon="bg-black"
            href="https://threads.net"
          />

          <MapCard />

          {/* Row 3 */}
          <DiscordCard />

          <LinkPreviewCard />

          <SocialLinkCard
            icon={Globe}
            title="My Portfolio"
            sub="muhfi.my.id"
            bgIcon="bg-orange-500"
            href="https://muhfi.my.id"
          />
        </div>

        {/* Footer Credit */}
        <div className="mt-20 text-center flex items-center justify-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-sm">Muhammad Noviyanto</span>
        </div>
      </div>
    </div>
  );
}
