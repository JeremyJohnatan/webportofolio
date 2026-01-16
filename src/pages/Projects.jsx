import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "DASHBOARD ANALISIS PRODUKSI",
    category: "WEB APP",
    client: "PG Krebet Baru Bululawang",
    desc: "Sistem dashboard untuk visualisasi data analisis pabrik dan produk secara real-time.",
    fullDesc: "Mengembangkan sistem dashboard untuk visualisasi data analisis pabrik dan produk secara real-time. Sistem ini membantu manajemen pabrik dalam monitoring performa produksi dan mengambil keputusan berbasis data.",
    image: "/pgkrebet.png",
    tags: ["LARAVEL", "DASHBOARD", "ANALYTICS"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "SISTEM MANAJEMEN PEMESANAN",
    category: "WEB APP",
    client: "UMKM Dapur Adida",
    desc: "Aplikasi web untuk digitalisasi pencatatan pesanan pelanggan dan manajemen stok bahan baku.",
    fullDesc: "Membangun aplikasi web untuk digitalisasi pencatatan pesanan pelanggan dan manajemen stok bahan baku. Solusi ini meningkatkan efisiensi operasional dan meminimalkan kesalahan pencatatan pesanan.",
    image: "/dapuradida.png",
    tags: ["NEXT.JS", "REACT.JS", "INVENTORY"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "KAERU N & CO. E-COMMERCE",
    category: "PROJECT LEAD",
    client: "Universitas Merdeka Malang",
    desc: "Platform thrift shop online dengan management fitur end-to-end dari design hingga rilis.",
    fullDesc: "Memimpin pengembangan platform thrift shop online, mengatur alur fitur dari tahap perancangan hingga rilis. Bertanggung jawab terhadap timeline, kualitas deliverable, dan koordinasi tim teknis.",
    image: "/kaeru.png",
    tags: ["TYPESCRIPT", "E-COMMERCE", "PM"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "INDEVPRO COMPANY PROFILE",
    category: "WEBSITE",
    client: "Universitas Merdeka Malang",
    desc: "Website profil organisasi dengan team management dari tahap planning hingga deployment.",
    fullDesc: "Mengelola tim teknis dalam pembuatan website profil organisasi, memastikan kesesuaian hasil dengan kebutuhan pengguna. Berperan sebagai Asst. Project Manager untuk koordinasi tim dan quality assurance.",
    image: "/indev.png",
    tags: ["LARAVEL", "REACT", "APM"],
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Header Minimalis */}
      <div className="bg-paper border-b border-black">
        <div className="p-4 md:p-8 max-w-6xl mx-auto flex items-center justify-center relative">
          <Link to="/" className="absolute left-4 md:left-8 inline-flex items-center gap-2 text-xs font-bold uppercase text-red-600 hover:text-black transition-colors px-4 py-2 border border-red-600 hover:border-black hover:bg-red-600 hover:text-white">
            <ArrowLeft size={14} /> Kembali
          </Link>
          <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight">PROJECTS</h1>
        </div>
      </div>

      {/* Projects Grid */}
     <div className="p-6 md:p-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group border border-black overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-black uppercase mb-1 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs font-bold text-red-600 mb-3">{project.client}</p>

                <p className="text-xs md:text-sm text-gray-600 font-medium mb-4 flex-grow">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 border border-black font-bold uppercase tracking-wider bg-white group-hover:bg-black group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-4 border-t border-black">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 py-2 font-bold uppercase text-xs hover:bg-black hover:text-white transition-colors"
                  >
                    <ExternalLink size={12} /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 py-2 font-bold uppercase text-xs hover:bg-black hover:text-white transition-colors border-l border-black"
                  >
                    <Github size={12} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-black mt-16 p-6 md:p-12 bg-ink text-paper">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 leading-tight">
            Ada Project Lain?<br />
            Mari Diskusikan!
          </h3>
          <p className="text-sm md:text-base mb-8 text-paper/80">
            Hubungi saya untuk project collaboration atau melihat portfolio yang lebih lengkap.
          </p>
          <Link to="/" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-red-600 text-white font-black uppercase hover:bg-red-700 transition-colors border border-red-600 hover:border-red-700">
            Hubungi Saya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
