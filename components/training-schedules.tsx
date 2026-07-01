'use client';

import { useState } from 'react';
import { Calendar, MapPin, DollarSign } from 'lucide-react';

interface TrainingSchedulesProps {
  onRegisterClick: () => void;
}

export default function TrainingSchedules({ onRegisterClick }: TrainingSchedulesProps) {
  const [activeTab, setActiveTab] = useState('bnsp');

  const bnspPrograms = [
    {
      title: 'PPPA',
      dates: ['12-15 Okt 2026', '9-12 Nov 2026'],
      price: 'Rp 8.500.000 / orang',
      location: 'Hotel REDTOP, Jakarta Pusat',
    },
    {
      title: 'POPAL',
      dates: ['19-22 Okt 2026', '16-19 Nov 2026'],
      price: 'Rp 7.000.000 / orang',
      location: 'Hotel REDTOP, Jakarta Pusat',
    },
  ];

  const techPrograms = [
    {
      title: 'Teknologi Pengolahan Air Limbah & Ops. IPAL',
      location: 'Semarang (Hotel Padma)',
      date: '18 - 20 Agustus 2026',
      price: 'Rp 4.500.000 / orang',
    },
    {
      title: 'Teknologi Pengolahan Air Limbah & Ops. IPAL',
      location: 'Jakarta (Hotel REDTOP)',
      date: '31 Agust - 2 Sept 2026',
      price: 'Rp 4.500.000 / orang',
    },
    {
      title: 'Teknologi Pengolahan Air Limbah & Ops. IPAL',
      location: 'Medan (Hotel Santika Premiere)',
      date: '14 - 16 September 2026',
      price: 'Rp 4.500.000 / orang',
    },
  ];

  return (
    <section id="schedules" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 text-balance">
            Jadwal Pelatihan & Sertifikasi P3L
          </h2>
          <p className="text-lg text-[#555555]">Q3/Q4 2026</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-[#E5E5EA]">
          <button
            onClick={() => setActiveTab('bnsp')}
            className={`pb-4 px-4 font-medium text-lg transition-all ${
              activeTab === 'bnsp'
                ? 'text-black border-b-2 border-black'
                : 'text-[#86868B] hover:text-black'
            }`}
          >
            Sertifikasi Resmi BNSP
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`pb-4 px-4 font-medium text-lg transition-all ${
              activeTab === 'tech'
                ? 'text-black border-b-2 border-black'
                : 'text-[#86868B] hover:text-black'
            }`}
          >
            Pelatihan Teknologi & Operasional
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {/* BNSP Tab */}
          {activeTab === 'bnsp' && (
            <div>
              <p className="text-sm text-[#86868B] mb-6">
                *Syarat jalan: Min 10 Peserta
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {bnspPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white border border-[#E5E5EA] rounded-2xl hover:scale-[1.02] active:scale-98 transition-transform"
                  >
                    <h3 className="text-2xl font-bold text-black mb-6">
                      {program.title}
                    </h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                        <div className="flex flex-col gap-1">
                          {program.dates.map((date, i) => (
                            <p key={i} className="text-sm text-[#555555]">
                              {date}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#555555]">{program.price}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#555555]">{program.location}</p>
                      </div>
                    </div>
                    <button
                      onClick={onRegisterClick}
                      className="w-full px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:scale-[1.02] active:scale-98 transition-transform"
                    >
                      Daftar Sekarang
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tab */}
          {activeTab === 'tech' && (
            <div>
              <p className="text-sm text-[#86868B] mb-6">
                *Syarat jalan: Min 5 Peserta
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {techPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white border border-[#E5E5EA] rounded-2xl hover:scale-[1.02] active:scale-98 transition-transform"
                  >
                    <h3 className="text-lg font-bold text-black mb-6">
                      {program.title}
                    </h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#555555]">{program.location}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#555555]">{program.date}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#555555]">{program.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={onRegisterClick}
                      className="w-full px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:scale-[1.02] active:scale-98 transition-transform"
                    >
                      Daftar Sekarang
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
