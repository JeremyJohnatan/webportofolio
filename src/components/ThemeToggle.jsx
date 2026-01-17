import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggle }) => {
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      // PERUBAHAN DI SINI:
      // 1. bg-black text-white: Kontras maksimal.
      // 2. border-2 border-red-600: Border merah tebal.
      // 3. shadow-[...] : Bayangan merah keras (tanpa blur).
      // 4. hover/active: Efek tombol "tertekan" secara fisik.
      className="fixed top-6 right-6 z-50 p-3 
                 bg-black text-white 
                 border-2 border-red-600 
                 shadow-[5px_5px_0px_0px_#dc2626] 
                 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] 
                 active:bg-red-600 active:border-black active:text-black
                 transition-all duration-200 ease-out"
    >
      {theme === 'dark' ? (
        // Ikon Matahari (Saat mode gelap, biar user switch ke terang)
        <Sun className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
      ) : (
        // Ikon Bulan (Saat mode terang)
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;