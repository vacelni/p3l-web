'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    company: '',
    contact: '',
    email: '',
    program: '',
  });

  const programs = [
    'PPPA (12-15 Okt 2026)',
    'PPPA (9-12 Nov 2026)',
    'POPAL (19-22 Okt 2026)',
    'POPAL (16-19 Nov 2026)',
    'Teknologi & Operasional - Semarang',
    'Teknologi & Operasional - Jakarta',
    'Teknologi & Operasional - Medan',
    'In-House Training',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- MESIN PENCETAK INVOICE PDF ---
  const generatePDF = (data: typeof formData) => {
    const doc = new jsPDF();
    
    // 1. KOP SURAT
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("PROFORMA INVOICE", 105, 20, { align: "center" });
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Pusat Pengolahan dan Pemanfaatan Limbah (P3L)", 105, 28, { align: "center" });
    doc.setLineWidth(0.5);
    doc.line(14, 32, 196, 32);

    // 2. DETAIL INVOICE & PELANGGAN
    const invoiceNumber = `INV/P3L/2026/${Math.floor(1000 + Math.random() * 9000)}`;
    const today = new Date().toLocaleDateString('id-ID');
    
    doc.setFont("helvetica", "bold");
    doc.text("Ditagihkan Kepada:", 14, 45);
    doc.setFont("helvetica", "normal");
    doc.text(`Nama Instansi : ${data.company}`, 14, 52);
    doc.text(`Nama Peserta  : ${data.fullName} (${data.position})`, 14, 58);
    
    doc.text(`No. Invoice : ${invoiceNumber}`, 130, 45);
    doc.text(`Tanggal     : ${today}`, 130, 52);

    // 3. LOGIKA HARGA OTOMATIS
    let priceText = "Rp 0";
    if (data.program.includes("PPPA")) { priceText = "Rp 8.500.000"; }
    else if (data.program.includes("POPAL")) { priceText = "Rp 7.000.000"; }
    else if (data.program.includes("Teknologi")) { priceText = "Rp 4.500.000"; }
    else { priceText = "Custom Quotation"; } // Untuk In-House

    // 4. TABEL TAGIHAN
    autoTable(doc, {
      startY: 68,
      head: [['Deskripsi Program Pelatihan', 'Total Investasi']],
      body: [
        [data.program, priceText],
      ],
      theme: 'grid',
      headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] },
      styles: { fontSize: 10, cellPadding: 6 },
    });

    // 5. INSTRUKSI PEMBAYARAN KORPORAT
    // @ts-ignore
    const finalY = doc.lastAutoTable.finalY || 100;
    
    doc.setFont("helvetica", "bold");
    doc.text("INSTRUKSI PEMBAYARAN:", 14, finalY + 15);
    doc.setFont("helvetica", "normal");
    doc.text("Pembayaran sah hanya dilakukan melalui transfer ke Rekening Operasional P3L:", 14, finalY + 22);
    doc.text("Bank           : BCA", 14, finalY + 28);
    doc.text("No. Rekening   : 1234567890", 14, finalY + 34);
    
    // GANTI NAMA BAPAK ANDA DI SINI NANTI
    doc.setFont("helvetica", "bold");
    doc.text("Atas Nama      : BAPAK [NAMA LENGKAP BAPAK ANDA]", 14, finalY + 40); 
    doc.setFont("helvetica", "normal");
    doc.text("Keterangan     : Penanggung Jawab Operasional P3L", 14, finalY + 46);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text("*Mohon sertakan No. Invoice pada berita transfer atau konfirmasi ke WA P3L.", 14, finalY + 60);

    // 6. DOWNLOAD OTOMATIS
    doc.save(`Invoice_P3L_${data.fullName.replace(/\s+/g, '_')}.pdf`);
  };
  // ------------------------------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('pendaftar')
        .insert([
          {
            nama_lengkap: formData.fullName,
            Jabatan: formData.position,
            Instansi: formData.company,
            Kontak: `WA: ${formData.contact} | Email: ${formData.email}`,
            Program: formData.program,
          }
        ]);

      if (error) {
        console.error("Detail Error Supabase:", error);
        throw error;
      }

      // PICU CETAK PDF JIKA DATA BERHASIL MASUK DATABASE
      generatePDF(formData);

      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          fullName: '',
          position: '',
          company: '',
          contact: '',
          email: '',
          program: '',
        });
      }, 3000);

    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Terjadi kesalahan koneksi ke server. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E5EA]">
          <h2 className="text-2xl font-bold text-black">Pendaftaran Program Pelatihan</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F5F5F7] rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Nama Lengkap Peserta *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E5E5EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-[#86868B]"
                  placeholder="Nama lengkap Anda"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Jabatan / Posisi *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E5E5EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-[#86868B]"
                  placeholder="Jabatan atau posisi Anda"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Nama Instansi / Perusahaan *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E5E5EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-[#86868B]"
                  placeholder="Nama perusahaan atau instansi"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  WhatsApp & Email Korporat *
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E5E5EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-[#86868B] mb-3"
                  placeholder="Nomor WhatsApp"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E5E5EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-[#86868B]"
                  placeholder="Email korporat"
                />
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Pilihan Program *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E5E5EA] rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                >
                  <option value="">Pilih program pelatihan</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-black text-white rounded-full font-medium hover:scale-[1.02] active:scale-98 transition-transform disabled:opacity-75 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? 'Memproses Pendaftaran & Mencetak Invoice...' : 'Daftar Sekarang'}
              </button>
            </form>
          ) : (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Pendaftaran Berhasil!</h3>
              <p className="text-[#555555]">
                Proforma Invoice telah otomatis diunduh ke perangkat Anda. Tim P3L akan segera menghubungi Anda.
              </p>
            </div>
          )}
        </div>
      </div>  
    </div>
  );
}