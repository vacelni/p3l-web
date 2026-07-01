'use client';

import { Users, Wrench, Zap, TrendingUp, BarChart3, Briefcase } from 'lucide-react';

export default function EngineeringServices() {
  const services = [
    {
      icon: Users,
      title: 'Pelatihan & Manajemen SDM IPAL',
      description: 'Program pengembangan sumber daya manusia untuk pengelolaan IPAL profesional.',
    },
    {
      icon: Wrench,
      title: 'Konsultasi Teknis & Troubleshooting',
      description: 'Solusi teknis dan pemecahan masalah operasional IPAL dari para ahli.',
    },
    {
      icon: Zap,
      title: 'Desain & Rekayasa IPAL Baru',
      description: 'Perancangan sistem pengolahan air limbah yang efisien dan inovatif.',
    },
    {
      icon: TrendingUp,
      title: 'Up-grade & Optimasi IPAL Lama',
      description: 'Modernisasi dan peningkatan performa sistem IPAL yang sudah beroperasi.',
    },
    {
      icon: BarChart3,
      title: 'Audit Limbah & Kinerja IPAL',
      description: 'Evaluasi menyeluruh terhadap sistem limbah dan efektivitas pengolahan.',
    },
    {
      icon: Briefcase,
      title: 'Commissioning, Pendampingan & Supervisi',
      description: 'Pengawasan komprehensif dan dukungan teknis saat operasional IPAL.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 text-balance">
            Portal Layanan Engineering & Konsultasi P3L
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto text-balance">
            Sebagai perusahaan kontraktor IPAL terpadu, kami menyediakan 6 divisi layanan teknis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white border border-[#E5E5EA] rounded-2xl hover:scale-[1.02] active:scale-98 transition-transform duration-300"
              >
                <div className="mb-6 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-[#86868B] hover:text-black transition-colors flex items-center gap-1"
                >
                  Pelajari Detail Layanan →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
