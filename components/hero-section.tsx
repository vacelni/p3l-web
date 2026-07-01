'use client';

import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-[#F5F5F7] border border-[#E5E5EA] rounded-full">
          <p className="text-xs font-medium text-black">
            Lembaga Pelatihan &amp; Konsultasi IPAL Profesional
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight text-balance">
          Solusi Terpadu Pengolahan Air Limbah &amp; Peningkatan Kompetensi SDM
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-[#555555] mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
          Pelatihan intensif khusus untuk Penanggung Jawab Limbah Industri &amp; Fasilitas Kesehatan dengan instruktur berpengalaman puluhan tahun.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onRegisterClick}
            className="px-8 py-3 bg-black text-white rounded-full font-medium text-base hover:scale-[1.02] active:scale-98 transition-transform"
          >
            Lihat Jadwal Pelatihan
          </button>
          <button className="px-8 py-3 bg-transparent text-black border border-black rounded-full font-medium text-base hover:bg-[#F5F5F7] active:bg-[#E5E5EA] transition-colors flex items-center gap-2">
            Konsultasi In-House
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Trust Strip */}
        <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-6 sm:p-8">
          <p className="text-xs sm:text-sm font-medium text-[#86868B] mb-3">
            DIPERCAYA OLEH LEBIH DARI 500+ PROFESIONAL
          </p>
          <p className="text-sm text-[#555555] leading-relaxed text-balance">
            Melanjutkan rekam jejak keahlian sejak era LPTL, instruktur kami telah dipercaya oleh praktisi dari: <span className="font-semibold text-black">PT Indofood</span>, <span className="font-semibold text-black">SGM</span>, <span className="font-semibold text-black">Ultramilk</span>, dan <span className="font-semibold text-black">ratusan instansi lainnya</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
