"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Music,
  Globe,
  ArrowUpRight,
  Facebook,
  MessageCircle,
  Twitter,
  Mail,
  Github,
} from "lucide-react";

// --- Profile Data ---
const profileData = {
  name: "Muhfi",
  title: "Frontend Developer & Designer",
  subtitle: "Bikin website modern, cepat, dan enak dipakai.",
  subtext: "Link resmi saya ada di bawah — portfolio, social media, dan kontak kolaborasi 👇",
  avatar: "/avatar.jpg",
};

// --- Animation Config ---
const spring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...spring, delay: i * 0.07 },
  }),
};

// --- Base Bento Card ---
const BentoCard = ({
  children,
  className = "",
  href,
  index = 0,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  index?: number;
  dark?: boolean;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href !== "#") {
      e.preventDefault();
      setTimeout(() => window.open(href, "_blank"), 180);
    }
  };

  const base = dark
    ? "bg-zinc-900 text-white border-zinc-800"
    : "bg-white text-zinc-900 border-zinc-100";

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ scale: 1.025, boxShadow: "0 12px 40px rgba(0,0,0,0.10)", zIndex: 10 }}
      whileTap={{ scale: 0.96, opacity: 0.85 }}
      transition={spring}
      className={`relative overflow-hidden rounded-3xl border p-6 cursor-pointer block no-underline ${base} ${className}`}
    >
      {children}
    </motion.a>
  );
};

// --- Instagram Card ---
const InstagramCard = ({ index }: { index: number }) => (
  <BentoCard
    href="https://www.instagram.com/muh.noviyanto/"
    index={index}
    className="col-span-1 sm:col-span-2 row-span-2 flex flex-col justify-between group"
  >
    <div className="flex justify-between items-center mb-4">
      <div className="w-11 h-11 bg-zinc-900 rounded-2xl flex items-center justify-center text-white">
        <Instagram size={20} />
      </div>
      <span className="bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-xs font-mono font-semibold border border-zinc-200">
        100 followers
      </span>
    </div>
    <p className="text-sm font-mono text-zinc-400 mb-4">@muh.noviyanto</p>
    <div className="grid grid-cols-3 gap-2 flex-1">
      {[1, 3, 4, 5, 7, 10].map((i) => (
        <div key={i} className="bg-zinc-100 rounded-xl overflow-hidden aspect-square">
          <img
            src={`https://picsum.photos/200/200?random=${i}`}
            alt="post"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
    <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="bg-zinc-900 text-white p-2 rounded-full">
        <ArrowUpRight size={14} />
      </div>
    </div>
  </BentoCard>
);

// --- Portfolio Card (full width) ---
const PortfolioCard = ({ index }: { index: number }) => (
  <BentoCard
    href="https://portfolio.muhfi.my.id"
    index={index}
    dark
    className="col-span-1 sm:col-span-2 flex flex-row items-center gap-5"
  >
    <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
      <Globe size={24} className="text-white" />
    </div>
    <div className="flex-1 overflow-hidden">
      <h3 className="font-bold text-lg tracking-tight">Portfolio</h3>
      <p className="text-zinc-400 text-sm font-mono truncate">portfolio.muhfi.my.id</p>
    </div>
    <div className="bg-white text-zinc-900 p-2.5 rounded-full shrink-0">
      <ArrowUpRight size={18} />
    </div>
  </BentoCard>
);

// --- TikTok Card ---
const TikTokCard = ({ index }: { index: number }) => (
  <BentoCard href="https://tiktok.com/@muhnov_" index={index} className="flex flex-col justify-between">
    <div className="w-11 h-11 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-3">
      <Music size={20} />
    </div>
    <div>
      <h3 className="font-bold text-lg tracking-tight mb-1">TikTok</h3>
      <p className="text-zinc-400 text-sm font-mono mb-4">@muhnov_</p>
      <div className="w-full bg-zinc-900 text-white py-2.5 px-5 rounded-full font-semibold text-sm text-center">
        50 followers
      </div>
    </div>
  </BentoCard>
);

// --- Facebook Card ---
const FacebookCard = ({ index }: { index: number }) => (
  <BentoCard
    href="https://facebook.com/muhammad.noviyanto.2025"
    index={index}
    className="flex flex-col justify-between"
  >
    <div className="w-11 h-11 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-3">
      <Facebook size={20} />
    </div>
    <div>
      <h3 className="font-bold text-lg tracking-tight leading-tight">Muhammad Noviyanto</h3>
      <p className="text-zinc-400 text-sm font-mono mt-1">facebook.com</p>
    </div>
  </BentoCard>
);

// --- Discord Card ---
const DiscordCard = ({ index }: { index: number }) => (
  <BentoCard
    href="https://discord.gg/rNsHsk3W"
    index={index}
    dark
    className="flex flex-col justify-between"
  >
    <div className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-3">
      <MessageCircle size={20} />
    </div>
    <div>
      <h3 className="font-bold text-xl tracking-tight text-white">Chat with me!</h3>
      <p className="text-zinc-400 text-sm font-mono mt-1">discord.gg</p>
    </div>
  </BentoCard>
);

// --- Twitter/X Card ---
const TwitterCard = ({ index }: { index: number }) => (
  <BentoCard
    href="https://x.com/MuhammadNoviya6"
    index={index}
    className="flex flex-col justify-between"
  >
    <div className="w-11 h-11 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-3">
      <Twitter size={20} />
    </div>
    <div>
      <h3 className="font-bold text-lg tracking-tight">X / Twitter</h3>
      <p className="text-zinc-400 text-sm font-mono mt-1">@MuhammadNoviya6</p>
    </div>
  </BentoCard>
);

// --- GitHub Card ---
const GithubCard = ({ index }: { index: number }) => (
  <BentoCard
    href="https://github.com/muhnov"
    index={index}
    dark
    className="flex flex-col justify-between"
  >
    <div className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-3">
      <Github size={20} />
    </div>
    <div>
      <h3 className="font-bold text-lg tracking-tight text-white">GitHub</h3>
      <p className="text-zinc-400 text-sm font-mono mt-1">@muhnov</p>
    </div>
  </BentoCard>
);

// --- Email Card (full width) ---
const EmailCard = ({ index }: { index: number }) => (
  <BentoCard
    href="mailto:muhnoviyanto815@gmail.com"
    index={index}
    className="col-span-1 sm:col-span-2 flex flex-row items-center gap-5"
  >
    <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0">
      <Mail size={24} className="text-white" />
    </div>
    <div className="flex-1 overflow-hidden">
      <h3 className="font-bold text-lg tracking-tight">Kirim Email</h3>
      <p className="text-zinc-400 text-sm font-mono truncate">muhnoviyanto815@gmail.com</p>
    </div>
    <div className="bg-zinc-900 text-white p-2.5 rounded-full shrink-0">
      <ArrowUpRight size={18} />
    </div>
  </BentoCard>
);

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] dark:bg-[#0a0a0a] text-zinc-900 dark:text-white pb-24 pt-12 px-4 sm:px-6 font-(--font-space-grotesk)">
      <div className="max-w-2xl mx-auto">

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-6"
          >
            <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight mb-1 text-zinc-900 dark:text-white">
            {profileData.name}
          </h1>
          <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mb-2 font-mono">
            {profileData.title}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed mb-3">
            {profileData.subtitle}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-xs leading-relaxed">
            {profileData.subtext}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[minmax(160px,auto)]">
          <PortfolioCard index={0} />
          <InstagramCard index={1} />
          <TikTokCard index={3} />
          <FacebookCard index={4} />
          <DiscordCard index={5} />
          <TwitterCard index={6} />
          <GithubCard index={7} />
          <EmailCard index={8} />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <span className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">
            © 2026 Muhfi — Official Links
          </span>
        </motion.div>
      </div>
    </div>
  );
}
