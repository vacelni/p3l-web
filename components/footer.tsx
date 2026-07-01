'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <span className="font-semibold text-black text-lg">P3L</span>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed">
              Pusat Pengolahan dan Pemanfaatan Limbah — Solusi terpadu engineering IPAL Indonesia.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-black mb-6 text-sm">KONTAK KAMI</h3>
            <div className="space-y-4">
              <a
                href="tel:+62812345678"
                className="flex items-start gap-3 text-sm text-[#555555] hover:text-black transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 text-black group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </a>
              <a
                href="mailto:info@p3l.id"
                className="flex items-start gap-3 text-sm text-[#555555] hover:text-black transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 text-black group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>info@p3l.id</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-[#555555]">
                <MapPin className="w-4 h-4 mt-0.5 text-black flex-shrink-0" />
                <span>Semarang, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-black mb-6 text-sm">LAYANAN KAMI</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[#555555] hover:text-black transition-colors">
                  Pelatihan IPAL
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#555555] hover:text-black transition-colors">
                  Konsultasi Teknis
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#555555] hover:text-black transition-colors">
                  Desain Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#555555] hover:text-black transition-colors">
                  Audit Lingkungan
                </a>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="font-semibold text-black mb-6 text-sm">INFORMASI</h3>
            <ul className="space-y-3">
              <li>
                <a href="#schedules" className="text-sm text-[#555555] hover:text-black transition-colors">
                  Jadwal Pelatihan
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#555555] hover:text-black transition-colors">
                  Kurikulum
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#555555] hover:text-black transition-colors">
                  Testimoni Klien
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#555555] hover:text-black transition-colors">
                  Sertifikasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-[#E5E5EA] pt-8">
          <p className="text-xs text-[#86868B] text-center">
            © 2026 Pusat Pengolahan dan Pemanfaatan Limbah (P3L). Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
