'use client';

import { Award, Users, BookOpen } from 'lucide-react';

export default function ProgramTraining() {
  const programs = [
    {
      icon: Award,
      title: 'Opsi Sertifikasi Ganda',
      description:
        'Sertifikat kompetensi resmi negara BNSP/KLHK atau sertifikat keahlian internal P3L.',
    },
    {
      icon: Users,
      title: 'Instruktur Gabungan Elite',
      description:
        'Diajar kolaborasi Akademisi Universitas & Praktisi Senior Lapangan yang mendesain IPAL setiap hari.',
    },
    {
      icon: BookOpen,
      title: 'Bedah Kasus Lapangan',
      description:
        'Kurikulum berbasis penyelesaian masalah nyata IPAL rumah sakit dan industri terkini.',
    },
  ];

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 text-balance">
            Program Pelatihan Rutin P3L
          </h2>
          <p className="text-lg text-[#555555]">
            Standar kelas dunia dengan pengalaman lokal Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white border border-[#E5E5EA] rounded-2xl hover:scale-[1.02] active:scale-98 transition-transform duration-300"
              >
                <div className="mb-6 w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {program.title}
                </h3>
                <p className="text-[#555555] leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
