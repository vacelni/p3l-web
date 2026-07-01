'use client';

interface InHouseBannerProps {
  onRegisterClick: () => void;
}

export default function InHouseBanner({ onRegisterClick }: InHouseBannerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Ambient lighting effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 text-balance">
          In-House Training & Konsultasi Pabrik
        </h2>
        <p className="text-lg text-[#E5E5EA] mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
          Datangkan tim P3L ke instansi Anda. Custom quotation disesuaikan dengan kapasitas dan parameter IPAL perusahaan Anda.
        </p>
        <button
          onClick={onRegisterClick}
          className="px-8 py-3 bg-white text-black rounded-full font-medium text-base hover:scale-[1.02] active:scale-98 transition-transform"
        >
          Minta Penawaran In-House
        </button>
      </div>
    </section>
  );
}
