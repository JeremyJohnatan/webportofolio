import React from 'react';
import { ArrowDownRight, ArrowRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

// --- DATA KAMU (GANTI DI SINI) ---
const content = {
  mainTitle: "JEREMY", // Judul Besar di Tengah
  subTitle: "WEB DEVELOPER",
  topBar: [
    "FULL STACK DEV",
    "BASED IN MALANG", 
    "OPEN FOR WORK"
  ],
  about: [
    {
      title: "SIAPA SAYA",
      text: "Saya Jeremy Johnatan, pengembang web yang fokus pada desain fungsional dan kode yang bersih. Spesialisasi di React dan modern web tech."
    },
    {
      title: "METODE",
      text: "Membangun website bukan sekadar koding. Ini tentang solusi. Saya mengubah masalah rumit menjadi antarmuka yang sederhana."
    }
  ],
  skills: [
    "REACT / NEXT.JS",
    "TAILWIND CSS",
    "NODE.JS / BACKEND",
    "UI / UX DESIGN"
  ],
  services: [
    { title: "WEBSITE", desc: "Landing page hingga web app kompleks" },
    { title: "REDESIGN", desc: "Perbaikan tampilan & performa" },
    { title: "SEO", desc: "Optimasi agar mudah dicari Google" },
    { title: "CONSULT", desc: "Diskusi teknis untuk startup" }
  ],
  experience: [
    {
      id: 1,
      role: "FULL STACK DEVELOPER",
      company: "Tech Startup XYZ",
      period: "2023 - Sekarang",
      desc: "Mengembangkan web app dengan React, Node.js, dan database management"
    },
    {
      id: 2,
      role: "JUNIOR WEB DEVELOPER",
      company: "Digital Agency ABC",
      period: "2022 - 2023",
      desc: "Mengerjakan landing page dan website bisnis dengan HTML, CSS, JavaScript"
    },
    {
      id: 3,
      role: "FREELANCER",
      company: "Berbagai Client",
      period: "2021 - 2022",
      desc: "Project personal website, e-commerce, dan web app untuk startup lokal"
    }
  ],
  education: [
    {
      id: 1,
      degree: "SARJANA TEKNIK INFORMATIKA",
      school: "Universitas Negeri Malang",
      period: "2020 - 2024",
      gpa: "3.75 / 4.0"
    },
    {
      id: 2,
      degree: "BOOTCAMP FULL STACK WEB",
      school: "Coding Academy Indonesia",
      period: "2021 - 2022",
      gpa: "Outstanding"
    }
  ],
  projects: [
    {
      id: 1,
      title: "PROJECT SATU",
      category: "WEB APP",
      desc: "Deskripsi singkat project pertama kamu",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
      tags: ["REACT", "TAILWIND", "API"]
    },
    {
      id: 2,
      title: "PROJECT DUA",
      category: "LANDING PAGE",
      desc: "Deskripsi singkat project kedua kamu",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      tags: ["NEXT.JS", "FRAMER"]
    },
    {
      id: 3,
      title: "PROJECT TIGA",
      category: "REDESIGN",
      desc: "Deskripsi singkat project ketiga kamu",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
      tags: ["FIGMA", "TAILWIND"]
    },
    {
      id: 4,
      title: "PROJECT EMPAT",
      category: "WEB APP",
      desc: "Deskripsi singkat project keempat kamu",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      tags: ["REACT", "NODE.JS", "MONGO"]
    },
    {
      id: 5,
      title: "PROJECT LIMA",
      category: "MOBILE APP",
      desc: "Deskripsi singkat project kelima kamu",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
      tags: ["REACT NATIVE", "FIREBASE"]
    },
    {
      id: 6,
      title: "PROJECT ENAM",
      category: "CUSTOM",
      desc: "Deskripsi singkat project keenam kamu",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
      tags: ["CUSTOM", "ADVANCED"]
    }
  ]
};

const Home = () => {
  // Scroll reveal untuk sections
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [experienceRef, experienceVisible] = useScrollReveal();
  const [educationRef, educationVisible] = useScrollReveal();
  const [projectsRef, projectsVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();

  return (
    <div className="min-h-screen font-sans selection:bg-red-600 selection:text-white pb-20">
      
      {/* --- SECTION 1: TOP BAR INFO --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black text-sm uppercase tracking-wider font-bold">
        {content.topBar.map((item, idx) => (
          <div key={idx} className={`p-4 flex items-center justify-center gap-2 ${idx !== 2 ? 'md:border-r border-black' : ''}`}>
            {idx !== 0 && <Plus className="text-red-600 w-4 h-4" />}
            {item}
          </div>
        ))}
      </div>

      {/* --- SECTION 2: HERO (TEXT BESAR & GAMBAR) --- */}
      <div className="relative border-b border-black overflow-hidden">
        <div className="grid grid-cols-12 h-[60vh] md:h-[85vh]">
          
          {/* Gambar Kiri */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="col-span-4 border-r border-black relative overflow-hidden group hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1000" 
              alt="Profile Vibe"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          
          {/* Area Tengah (Kosong untuk Text) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="col-span-12 md:col-span-4 border-r border-black flex flex-col items-center pt-10 bg-paper relative z-10"
          >
            <button className="px-8 py-3 border border-black text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">
              Lihat Portfolio
            </button>
            
            {/* Subtitle Kecil */}
            <div className="mt-auto mb-10 text-center px-4">
                <p className="font-bold text-red-600 mb-2">SCROLL DOWN</p>
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
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000" 
              alt="Tech Vibe"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* JUDUL BESAR (Overlay) */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black tracking-tighter text-red-600 leading-none mix-blend-multiply pointer-events-none select-none z-20 w-full text-center">
          {content.mainTitle}
        </motion.h1>
      </div>

      {/* --- SECTION 3: ABOUT & SKILLS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
        
        {/* Kolom Kiri (Deskripsi) - Span 8 */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2">
          {/* Kotak About 1 */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between h-full">
            <div>
              <h3 className="text-red-600 font-bold mb-4 flex items-center gap-2 text-xl">
                {content.about[0].title} <Plus size={20}/>
              </h3>
              <p className="text-base leading-relaxed font-medium mb-8">
                {content.about[0].text}
              </p>
            </div>
            <div className="aspect-video w-full border border-black overflow-hidden mt-8">
               <img src="https://images.unsplash.com/photo-1607799275518-d58665d096c2?q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"/>
            </div>
          </div>

          {/* Kotak About 2 */}
          <div className="p-8 md:border-r border-black flex flex-col justify-between h-full">
             <div className="aspect-square w-full border border-black overflow-hidden mb-8">
               <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"/>
            </div>
             <div>
                <h3 className="text-red-600 font-bold mb-4 flex items-center gap-2 text-xl">
                  {content.about[1].title}
                </h3>
                <p className="text-base leading-relaxed font-medium">
                  {content.about[1].text}
                </p>
             </div>
          </div>
        </div>

        {/* Kolom Kanan (List Skill) - Span 4 */}
        <div className="col-span-12 md:col-span-4 bg-paper p-8 flex flex-col justify-center gap-8 md:gap-12 border-t md:border-t-0 border-black">
          {content.skills.map((skill, idx) => (
             <div key={idx} className="group cursor-pointer">
                <div className="flex items-center justify-between border-b border-black pb-2 mb-2 group-hover:pl-4 transition-all">
                  <span className="text-xl md:text-2xl font-bold uppercase">{skill}</span>
                  <ArrowDownRight className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"/>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 4: SERVICES (Loop Graphic) --- */}
      <div ref={servicesRef} className="border-b border-black p-8 md:p-12">
         <h3 className="text-2xl font-bold uppercase mb-12 flex items-center gap-2">
           LAYANAN <Plus className="text-red-600"/>
         </h3>
         
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* SVG Dekorasi Garis Merah */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 hidden md:block pointer-events-none opacity-80" viewBox="0 0 800 200">
               <path d="M 0 100 Q 200 0 400 100 T 800 100" fill="none" stroke="#FF2E00" strokeWidth="3" />
            </svg>

            {content.services.map((item, idx) => (
               <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                  className="text-center md:text-left z-10 bg-paper/90 backdrop-blur-sm p-4 border border-transparent hover:border-black transition-all"
               >
                  <h4 className="font-black text-2xl mb-2">{item.title}</h4>
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{item.desc}</p>
               </motion.div>
            ))}
         </div>
      </div>

      {/* --- SECTION 5: EXPERIENCE --- */}
      <div ref={experienceRef} className="border-b border-black p-8 md:p-12 bg-paper">
        <h3 className="text-2xl md:text-4xl font-bold uppercase mb-12 flex items-center gap-2">
          PENGALAMAN <Plus className="text-red-600"/>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={experienceVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="border border-black p-6 hover:bg-black hover:text-white transition-all duration-300"
            >
              <div className="mb-4">
                <h4 className="text-xl font-black uppercase mb-1">{exp.role}</h4>
                <p className="text-sm font-bold text-red-600">{exp.company}</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">{exp.period}</p>
              </div>
              <p className="text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SECTION 6: EDUCATION --- */}
      <div ref={educationRef} className="border-b border-black p-8 md:p-12 bg-paper">
        <h3 className="text-2xl md:text-4xl font-bold uppercase mb-12 flex items-center gap-2">
          PENDIDIKAN <Plus className="text-red-600"/>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={educationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="border-l-4 border-red-600 pl-6 py-4 hover:pl-8 transition-all"
            >
              <h4 className="text-xl font-black uppercase mb-2">{edu.degree}</h4>
              <p className="text-sm font-bold text-gray-700 mb-2">{edu.school}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-widest text-gray-500">{edu.period}</p>
                <span className="text-sm font-bold text-red-600">{edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SECTION 7: PROJECTS GRID --- */}
      <div ref={projectsRef} className="border-b border-black p-8 md:p-12">
        <div className="mb-12 flex items-center justify-between">
          <h3 className="text-2xl md:text-4xl font-bold uppercase flex items-center gap-2">
            PROJECTS <Plus className="text-red-600"/>
          </h3>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-black uppercase font-bold text-sm hover:bg-black hover:text-white transition-all">
            Lihat Semua <ArrowRight size={16}/>
          </button>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={projectsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: idx * 0.12, duration: 0.7, ease: 'easeOut' }}
              className="group border border-black overflow-hidden bg-paper hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                {/* Title */}
                <h4 className="text-xl md:text-2xl font-black uppercase mb-2 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-gray-600 font-medium mb-4 flex-grow">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 border border-black font-bold uppercase tracking-wider bg-white group-hover:bg-black group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full border-t border-black pt-4 flex items-center justify-between font-bold uppercase text-sm hover:pl-4 transition-all group/btn">
                  Lihat Project
                  <ArrowRight size={16} className="text-red-600 group-hover/btn:translate-x-2 transition-transform"/>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <button className="md:hidden w-full mt-12 bg-black text-white font-black py-6 uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center justify-center gap-3 text-lg">
          Lihat Semua Projects <ArrowRight size={20}/>
        </button>
      </div>

      {/* --- SECTION 6: CONTACT FORM --- */}
      <div ref={contactRef} className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[500px]">
        {/* Kiri: Judul Besar */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={contactVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="border-r border-black p-8 md:p-16 flex flex-col justify-center relative overflow-hidden bg-ink text-paper"
        >
           <h2 className="text-4xl md:text-6xl font-black uppercase z-10 relative leading-tight">
             Mari Buat<br/>Sesuatu<br/><span className="text-red-600">Yang Gila.</span>
           </h2>
        </motion.div>

        {/* Kanan: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={contactVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="p-8 md:p-16 flex flex-col justify-center bg-paper"
        >
           <div className="flex items-center gap-2 mb-8 text-red-600 font-bold uppercase tracking-widest">
             <Plus/> Kontak Saya
           </div>
           
           <form className="space-y-6">
              <input type="text" placeholder="NAMA KAMU" className="w-full bg-transparent border-b-2 border-black p-4 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors uppercase font-bold text-lg"/>
              <input type="text" placeholder="EMAIL / WHATSAPP" className="w-full bg-transparent border-b-2 border-black p-4 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors uppercase font-bold text-lg"/>
              <textarea placeholder="CERITAKAN PROJECTMU..." rows="3" className="w-full bg-transparent border-b-2 border-black p-4 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors uppercase font-bold text-lg"></textarea>
              
              <button type="button" className="w-full bg-red-600 text-white font-black py-6 uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-3 mt-8 text-xl">
                Kirim Pesan <ArrowRight size={24}/>
              </button>
           </form>
        </motion.div>
      </div>

    </div>
  );
};

export default Home;