import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, Plus, MessageCircle,MapPin,Briefcase,GraduationCap, FolderOpen,Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

// --- DATA KAMU (GANTI DI SINI) ---
const content = {
  mainTitle: "JEREMY JOHNATAN", // Judul Besar di Tengah
  subTitle: "WEB DEVELOPER & FULL STACK DEVELOPER",
  topBar: [
    "FULL STACK DEV",
    "BASED IN MALANG", 
    "OPEN FOR WORK"
  ],
  about: [
    {
      title: "SIAPA SAYA",
      text: "Lulusan Sistem Informasi Universitas Merdeka Malang (Cum Laude, IPK 3.87). Passionate dalam Web Development dengan keahlian HTML, CSS, JavaScript, React.js, Next.js, dan Node.js. Aktif mengikuti kompetisi dan terus mengembangkan diri melalui proyek dan pembelajaran berkelanjutan."
    },
    {
      title: "PENDEKATAN",
      text: "Saya percaya bahwa development yang baik bukan hanya tentang kode, tapi tentang memahami kebutuhan user dan menciptakan solusi yang elegan, scalable, dan maintainable. Problem solving dan komunikasi tim adalah kunci kesuksesan."
    }
  ],
  skills: [
    "REACT.JS / NEXT.JS",
    "JAVASCRIPT / NODE.JS",
    "HTML / CSS / TAILWIND",
    "MYSQL / POSTGRESQL / SQL",
    "GIT / GITHUB",
    "UI/UX DESIGN"
  ],
  experience: [
    {
      id: 1,
      role: "FULL STACK DEVELOPER",
      company: "PG Krebet",
      period: "2025",
      desc: "Membuat sistem informasi untuk analisis data dengan fokus pada integrasi backend dan frontend yang seamless."
    },
    {
      id: 2,
      role: "ADMIN ONLINESHOP",
      company: "Blesstoresurabaya",
      period: "2015 - 2024",
      desc: "Mengelola operasional toko di marketplace (Shopee, Tokopedia, TikTok Shop), pemrosesan pesanan, manajemen stok, dan customer service dengan rating 4.9+."
    },
    {
      id: 3,
      role: "ADMIN ONLINESHOP",
      company: "Djamin Elektronik",
      period: "2018 - 2024",
      desc: "Mengelola operasional toko di marketplace (Shopee, Tokopedia, TikTok Shop), pemrosesan pesanan, manajemen stok, dan customer service dengan rating 4.8+."
    }
  ],
  education: [
    {
      id: 1,
      degree: "S1 SISTEM INFORMASI (CUMLAUDE)",
      school: "Universitas Merdeka Malang",
      logo: "/unmer.png",
      period: "2022 - 2026",
      gpa: "3.87 / 4.0"
    },
    {
      id: 2,
      degree: "SMA KATOLIK YOS SUDARSO (JURUSAN IPA)",
      school: "Batu, Jawa Timur",
      logo: "yos.png",
      period: "2019 - 2022",
      gpa: "Fokus: Akademik & Organisasi"
    }
  ],
  projects: [
    {
      id: 1,
      title: "DASHBOARD ANALISIS PRODUKSI",
      category: "WEB APP",
      desc: "Sistem dashboard untuk visualisasi data analisis pabrik dan produk secara real-time.",
      image: "/pgkrebet.png",
      link: "https://github.com/JeremyJohnatan/db_pg",
      tags: ["LARAVEL", "DASHBOARD", "ANALYTICS"]
    },
    {
      id: 2,
      title: "SISTEM MANAJEMEN PEMESANAN",
      category: "WEB APP",
      desc: "Aplikasi web untuk digitalisasi pencatatan pesanan pelanggan dan manajemen stok bahan baku.",
      image: "/dapuradida.png",
      link: "https://dapur-adida.vercel.app/",
      tags: ["NEXT.JS", "REACT.JS", "INVENTORY"]
    },
    {
      id: 3,
      title: "KAERU N & CO. E-COMMERCE",
      category: "PROJECT LEAD",
      desc: "Platform thrift shop online dengan management fitur end-to-end dari design hingga rilis.",
      image: "/kaeru.png",
      link: "https://kaeru-and-co.vercel.app/id/",
      tags: ["TYPESCRIPT", "E-COMMERCE", "PM"]
    },
    {
      id: 4,
      title: "INDEVPRO COMPANY PROFILE",
      category: "ASSISTANT PROJECT MANAGER ",
      desc: "Website profil organisasi dengan team management dari tahap planning hingga deployment.",
      image: "/indev.png",
      link: "https://indevpro.dev/",
      tags: ["LARAVEL", "REACT", "APM"]
    }
  ]
};
const Home = () => {
  // --- 1. LOGIC & STATE (PINDAHKAN KE SINI) ---
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    message: ''
  });

  // GANTI DENGAN NOMOR WA ANDA
  const phoneNumber = "6285182734247"; 

  const handleSendMessage = () => {
    const { name, contact, message } = formState;

    if (!name || !message) {
      alert("Mohon isi Nama dan Pesan terlebih dahulu.");
      return;
    }

    const whatsappMessage = `
Halo Jeremy, 

Perkenalkan saya: *${name}*
Kontak: ${contact}

Pesan:
${message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // --- Scroll Reveal Hooks ---
  const [experienceRef, experienceVisible] = useScrollReveal();
  const [educationRef, educationVisible] = useScrollReveal();
  const [projectsRef, projectsVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();

  // --- 2. MAIN RETURN (HANYA BOLEH ADA SATU) ---
  return (
    <div className="min-h-screen font-sans selection:bg-red-600 selection:text-white pb-20">
      
      {/* --- SECTION 1: TOP BAR INFO --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black text-sm uppercase tracking-wider font-bold">
        {content.topBar.map((item, idx) => (
          <div key={idx} className={`p-4 flex items-center justify-center gap-2 ${idx !== 2 ? 'md:border-r border-black' : ''}`}>
            {idx === 1 ? (
              <MapPin className="text-red-600 w-4 h-4" />
            ) : idx === 2 ? (
               <Briefcase className="text-red-600 w-4 h-4" />
            ) : null}
            {item}
          </div>
        ))}
      </div>

      {/* --- SECTION 2: HERO --- */}
      <div className="relative border-b border-black overflow-hidden">
        <div className="grid grid-cols-12 h-[50vh] md:h-[85vh]">
          {/* Gambar Kiri */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="col-span-4 border-r border-black relative overflow-hidden group hidden md:block"
          >
            <img src="/4.jpg" alt="Profile Vibe" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </motion.div>
          
          {/* Area Tengah */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="col-span-12 md:col-span-4 border-r border-black flex flex-col items-center justify-between py-6 md:py-10 px-4 bg-paper relative z-10"
          >
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 text-center">
              <a href="https://www.behance.net/gallery/199509095/Portofolio-Jeremy-Johnatan-2024" target="_blank" rel="noopener noreferrer" className="inline-block px-6 md:px-8 py-2 md:py-3 border border-black text-xs md:text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">
                Lihat Portfolio
              </a>
              <a href="/CV-Jeremy-Johnatan.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-6 md:px-8 py-2 md:py-3 border border-black text-xs md:text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">
                Lihat CV
              </a>
            </div>
            
            <div className="text-center px-2 md:px-4">
                <p className="font-bold text-red-600 mb-2 text-xs md:text-base">SCROLL DOWN</p>
                <ArrowDownRight className="mx-auto animate-bounce"/>
            </div>
          </motion.div>

          {/* Gambar Kanan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="col-span-12 md:col-span-4 relative overflow-hidden group"
          >
            <img src="/3..jpg" alt="Tech Vibe" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </motion.div>
        </div>

        {/* JUDUL BESAR */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-[15vw] font-black tracking-tighter text-[#D73535] leading-none mix-blend-normal pointer-events-none select-none z-20 w-full text-center px-3 sm:px-4 hero-title"
          style={{ textShadow: 'none', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) drop-shadow(-2px -2px 4px rgba(255,255,255,0.5))' }}
        >
          {content.mainTitle}
        </motion.h1>
      </div> 

      {/* --- SECTION 3: ABOUT & SKILLS --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
        <div className="col-span-12 md:col-span-8 p-4 md:p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center">
          <div className="mb-8 md:mb-12">
            <p className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-widest mb-4">
            HI, I'M <span className="text-black font-bold">JEREMY JOHNATAN</span>
          </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-tight">Information Systems<br />Graduate & Web Developer</h2>
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed mb-8">
            Mengubah ide menjadi realitas digital menggunakan React.js, Next.js, dan Node.js.
          </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/projects" className="px-8 py-3 border-2 border-black font-black uppercase text-sm hover:bg-black hover:text-white transition-colors">
              Lihat Proyek Saya
            </Link>
            <a href="#contact" className="px-8 py-3 border-2 border-black font-black uppercase text-sm hover:bg-black hover:text-white transition-colors">
              Kontak Saya
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-paper p-4 md:p-8 flex flex-col justify-center gap-4 md:gap-8 border-t md:border-t-0 border-black">
          {content.skills.map((skill, idx) => (
             <div key={idx} className="group cursor-pointer">
                <div className="flex items-center justify-between border-b border-black pb-1 md:pb-2 mb-1 md:mb-2 group-hover:pl-2 md:group-hover:pl-4 transition-all">
                  <span className="text-sm md:text-2xl font-bold uppercase">{skill}</span>
                  <ArrowDownRight size={14} className="md:w-5 md:h-5 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"/>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 4: EXPERIENCE --- */}
      <div ref={experienceRef} className="border-b border-black p-4 md:p-12 bg-paper">
        <div className="mb-8 md:mb-12 flex items-center justify-between">
         <h3 className="text-xl md:text-4xl font-bold uppercase flex items-center gap-2">
          PENGALAMAN 
          <Briefcase className="hidden md:block text-red-600 w-5 h-5 md:w-9 md:h-9 mt-[2px]" />
        </h3>
          <Link to="/experience" className="hidden md:flex items-center gap-2 px-6 py-3 border border-black uppercase font-bold text-sm hover:bg-black hover:text-white transition-all">
            Lihat Semua <ArrowRight size={16}/>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {content.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={experienceVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="border border-black p-4 md:p-6 hover:bg-black hover:text-white transition-all duration-300"
            >
              <div className="mb-3 md:mb-4">
                <h4 className="text-base md:text-xl font-black uppercase mb-1">{exp.role}</h4>
                <p className="text-xs md:text-sm font-bold text-red-600 hover:text-red-400">{exp.company}</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-300 mt-2">{exp.period}</p>
              </div>
              <p className="text-xs md:text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
        <Link to="/experience" className="md:hidden w-full mt-8 bg-black text-white font-black py-4 uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center justify-center gap-3 text-sm inline-block text-center">
          Lihat Semua Pengalaman <ArrowRight size={16}/>
        </Link>
      </div>

      {/* --- SECTION 6: EDUCATION --- */}
      <div ref={educationRef} className="border-b border-black p-4 md:p-12 bg-paper">
        <h3 className="text-xl md:text-4xl font-bold uppercase mb-8 md:mb-12 flex items-center gap-2">
          PENDIDIKAN 
          <GraduationCap className="hidden md:block text-red-600 w-5 h-5 md:w-9 md:h-9 mt-[2px]"/>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {content.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={educationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="border-l-4 border-red-600 pl-3 md:pl-6 py-2 md:py-4 hover:pl-4 md:hover:pl-8 transition-all flex items-start gap-3 md:gap-4"
            >
              <div className="shrink-0 mt-1"> 
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-300 rounded-lg overflow-hidden bg-white flex items-center justify-center p-2">
                  <img src={edu.logo} alt={`${edu.school} Logo`} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-base md:text-xl font-black uppercase mb-1 md:mb-2">{edu.degree}</h4>
                <p className="text-xs md:text-sm font-bold text-gray-700 mb-1 md:mb-2">{edu.school}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-widest text-gray-500">{edu.period}</p>
                  <span className="text-xs md:text-sm font-bold text-red-600">{edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SECTION 7: PROJECTS --- */}
      <div ref={projectsRef} className="border-b border-black p-4 md:p-12">
        <div className="mb-8 md:mb-12 flex items-center justify-between">
         <h3 className="text-xl md:text-4xl font-bold uppercase flex items-center gap-2">
          PROJECTS 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" className="hidden md:block text-red-600 w-5 h-5 md:w-9 md:h-9 mt-[2px]">
            <path d="M440 432H72a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H440a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40M32 192h448"/>
          </svg>
        </h3>
          <Link to="/projects" className="hidden md:flex items-center gap-2 px-6 py-3 border border-black uppercase font-bold text-sm hover:bg-black hover:text-white transition-all">
            Lihat Semua <ArrowRight size={16}/>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {content.projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={projectsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: idx * 0.12, duration: 0.7, ease: 'easeOut' }}
              className="group border border-black overflow-hidden bg-paper hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-40 md:h-64 overflow-hidden bg-black">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-red-600 text-white px-2 md:px-4 py-1 md:py-2 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </div>
              </div>
              <div className="p-3 md:p-6 flex flex-col">
                <h4 className="text-base md:text-2xl font-black uppercase mb-1 md:mb-2 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 font-medium mb-2 md:mb-4 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 md:px-3 py-0.5 md:py-1 border border-black font-bold uppercase tracking-wider bg-white group-hover:bg-black group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
          href={project.link} // Mengambil link dari data
          target="_blank"     // Membuka di tab baru
          rel="noopener noreferrer" // Keamanan untuk target blank
          className="w-full border-t border-black pt-2 md:pt-4 flex items-center justify-between font-bold uppercase text-xs md:text-sm hover:pl-2 md:hover:pl-4 transition-all group/btn"
        >
          Lihat Project
          <ArrowRight size={12} className="md:w-4 md:h-4 text-red-600 group-hover/btn:translate-x-1 transition-transform"/>
        </a>
              </div>
            </motion.div>
          ))}
        </div>
        <Link to="/projects" className="md:hidden w-full mt-8 bg-black text-white font-black py-4 uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center justify-center gap-3 text-sm">
          Lihat Semua Projects <ArrowRight size={16}/>
        </Link>
      </div>

      {/* --- SECTION 8: CONTACT FORM (DISATUKAN, TIDAK BOLEH ADA 'return' LAGI) --- */}
      <div id="contact" ref={contactRef} className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[500px] border-t border-black">
        {/* Kiri: Judul Besar */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={contactVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="border-r border-black p-6 md:p-16 flex flex-col justify-center relative overflow-hidden bg-ink text-paper"
        >
           <h2 className="text-2xl md:text-6xl font-black uppercase z-10 relative leading-tight">
             Ubah Ide<br/>Menjadi<br/><span className="text-red-600">Realitas.</span>
           </h2>
        </motion.div>

        {/* Kanan: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={contactVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="p-6 md:p-16 flex flex-col justify-center bg-paper"
        >
           <div className="flex items-center gap-2 mb-6 md:mb-8 text-red-600 font-bold uppercase tracking-widest text-sm md:text-base">
             <Phone size={16} className="md:w-5 md:h-5"/> Kontak Saya
           </div>
           
           <form className="space-y-4 md:space-y-6">
             <input 
               type="text" 
               name="name" 
               value={formState.name}
               onChange={handleChange}
               placeholder="NAMA KAMU" 
               className="w-full bg-transparent border-b-2 border-black p-2 md:p-4 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors uppercase font-bold text-sm md:text-lg dark:text-gray-800"
             />
             <input 
               type="text" 
               name="contact" 
               value={formState.contact}
               onChange={handleChange}
               placeholder="EMAIL / WHATSAPP" 
               className="w-full bg-transparent border-b-2 border-black p-2 md:p-4 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors uppercase font-bold text-sm md:text-lg dark:text-gray-800"
             />
             <textarea 
               name="message" 
               value={formState.message}
               onChange={handleChange}
               placeholder="Halo Jeremy, saya ingin membuat website untuk bisnis..." 
               rows="3" 
               className="w-full bg-transparent border-b-2 border-black p-2 md:p-4 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors uppercase font-bold text-sm md:text-lg dark:text-gray-800"
             ></textarea>
             
             <button 
               type="button" 
               onClick={handleSendMessage} 
               className="w-full bg-red-600 text-white font-black py-4 md:py-6 uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-3 mt-6 md:mt-8 text-sm md:text-xl cursor-pointer"
             >
               Kirim Pesan <ArrowRight size={16} className="md:w-6 md:h-6"/>
             </button>
           </form>

            {/* Social Links */}
            <div className="border-t border-black mt-8 md:mt-12 pt-6 md:pt-8">
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-600 mb-4 md:mb-6">Atau hubungi langsung:</p>
              <div className="flex gap-3 md:gap-4">
               <a href="https://wa.me/62518273427" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 border border-black rounded-md hover:bg-black hover:text-white transition-colors group" title="WhatsApp">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                   <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/>
                 </svg>
               </a>
                <a href="https://www.linkedin.com/in/jeremyjohnatan/" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 border border-black rounded-md hover:bg-black hover:text-white transition-colors" title="LinkedIn">
                  <Linkedin size={20} className="md:w-6 md:h-6" />
                </a>
                <a href="http://github.com/JeremyJohnatan" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 border border-black rounded-md hover:bg-black hover:text-white transition-colors" title="Behance Portfolio">
                  <Github size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>
        </motion.div>
      </div>

    </div> // Penutup Div Utama
  ); // Penutup Return
}; // Penutup Component Home

export default Home;