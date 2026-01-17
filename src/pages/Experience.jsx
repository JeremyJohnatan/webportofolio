import React from 'react';
import { 
  ArrowLeft, 
  Plus, 
  // Ikon Tech & Dev
  LayoutDashboard, Database, Users, 
  // Ikon Toko & Ops
  Package, MessageCircle, Star, FileSpreadsheet, ClipboardCheck,
  Store, CheckCircle2, Truck, BookOpen, TrendingUp,
  // Ikon Event & Org
  FileText, Megaphone, Wallet, Calculator, ClipboardList
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    role: "FULL STACK DEVELOPER",
    company: "PG Krebet",
    period: "2025",
    desc: "Membuat sistem informasi untuk analisis data dengan fokus pada integrasi backend dan frontend yang seamless.",
    details: [
      { text: "Mengembangkan dashboard analytics menggunakan React.js dan Node.js", icon: LayoutDashboard },
      { text: "Implementasi database design untuk performa optimal", icon: Database },
      { text: "Kolaborasi dengan tim untuk mengumpulkan requirements dan feedback", icon: Users }
    ]
  },
  {
    id: 2,
    role: "ADMIN ONLINESHOP",
    company: "Blesstoresurabaya",
    period: "2015 - 2024",
    desc: "Mengelola operasional toko di marketplace (Shopee, Tokopedia, TikTok Shop), pemrosesan pesanan, manajemen stok, dan customer service dengan rating 4.9+.",
    details: [
      { text: "Pengelolaan inventory real-time di 3 platform marketplace utama", icon: Package },
      { text: "Handling customer inquiries dengan response time < 30 menit", icon: MessageCircle },
      { text: "Mempertahankan rating toko di atas 4.8 stars", icon: Star },
      { text: "Rekapitulasi data penjualan dan analisis trend menggunakan Excel", icon: FileSpreadsheet },
      { text: "Mengelola stok dan minimalisir selisih antara sistem dan fisik", icon: ClipboardCheck }
    ]
  },
  {
    id: 3,
    role: "ADMIN ONLINESHOP",
    company: "Djamin Elektronik",
    period: "2018 - 2024",
    desc: "Mengelola operasional toko di marketplace (Shopee, Tokopedia, TikTok Shop), pemrosesan pesanan, manajemen stok, dan customer service dengan rating 4.8+.",
    details: [
      { text: "Mengelola operasional 3 toko online di marketplace terkemuka", icon: Store },
      { text: "Proses fulfillment order dengan akurasi 99.5%", icon: CheckCircle2 },
      { text: "Koordinasi dengan supplier untuk supply chain yang efisien", icon: Truck },
      { text: "Training tim untuk standard operasional yang konsisten", icon: BookOpen },
      { text: "Analisis data penjualan untuk strategi pricing dan promo", icon: TrendingUp }
    ]
  },
  {
    id: 4,
    role: "EVENT ORGANIZER & COORDINATOR",
    company: "Universitas Merdeka Malang",
    period: "2023 - 2024",
    desc: "Berkontribusi dalam berbagai event dan kompetisi universitas sebagai panitia dan koordinator.",
    details: [
      { text: "PKKMB Panitia (2023): Mengajukan proposal sponsor", icon: FileText },
      { text: "FTI Workshop Fest SIE Humas (2023): Proposal sponsor dan publikasi event", icon: Megaphone },
      { text: "3CC Competition Wakil Bendahara (2024): Manajemen budget dan keuangan event", icon: Wallet },
      { text: "3CC Competition Bendahara (2024-2025): Pengelolaan anggaran keseluruhan event", icon: Calculator },
      { text: "Koordinator Kelas (2023-2024): Notulensi, distribusi informasi, koordinasi akademik", icon: ClipboardList }
    ]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Header Minimalis */}
      <div className="bg-paper border-b border-black">
        <div className="p-4 md:p-8 max-w-5xl mx-auto flex items-center justify-center relative">
          <Link to="/" className="absolute left-4 md:left-8 inline-flex items-center gap-2 text-xs font-bold uppercase text-red-600 hover:text-black transition-colors px-4 py-2 border border-red-600 hover:border-black hover:bg-red-600 hover:text-white">
            <ArrowLeft size={14} /> Kembali
          </Link>
          <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight">PENGALAMAN</h1>
        </div>
      </div>

      {/* Experience List */}
      <div className="p-6 md:p-12 max-w-5xl mx-auto">
        <div className="space-y-8 md:space-y-10">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="border border-black overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Experience Header */}
              <div className="border-b border-black p-6 md:p-8 bg-paper hover:bg-black hover:text-white transition-colors duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase">{exp.role}</h2>
                    <p className="text-base md:text-lg font-bold text-red-600 group-hover:text-red-400 mt-2">{exp.company}</p>
                  </div>
                  <span className="text-xs md:text-sm uppercase tracking-widest font-bold px-3 py-2 border border-current rounded whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 md:p-8 border-b border-black">
                <p className="text-sm md:text-base leading-relaxed">
                  {exp.desc}
                </p>
              </div>

              {/* Details Section Updated */}
              {exp.details && (
                <div className="p-6 md:p-8 bg-paper/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Plus size={16} className="text-red-600" />
                    <p className="text-xs font-bold uppercase tracking-widest">Pencapaian & Tanggung Jawab</p>
                  </div>
                  <ul className="space-y-4"> {/* Space y diperbesar sedikit agar lebih rapi */}
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-sm md:text-base flex items-start gap-3 group/item">
                        {/* Container Ikon */}
                        <div className="mt-1 p-1.5 rounded-md bg-red-50 text-red-600 group-hover/item:bg-red-600 group-hover/item:text-white transition-colors duration-200 flex-shrink-0">
                          <detail.icon size={16} strokeWidth={2.5} />
                        </div>
                        {/* Text */}
                        <span className="text-gray-700 leading-relaxed">{detail.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-black mt-16 p-6 md:p-12 bg-ink text-paper">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 leading-tight">
            Tertarik Untuk<br />Berkolaborasi?
          </h3>
          <p className="text-sm md:text-base mb-8 text-paper/80">
            Saya siap untuk diskusi tentang project, partnership, atau peluang karir yang menarik.
          </p>
          <Link to="/" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-red-600 text-white font-black uppercase hover:bg-red-700 transition-colors border border-red-600 hover:border-red-700">
            Hubungi Saya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
