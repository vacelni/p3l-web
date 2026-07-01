'use client';

import { useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProgramTraining from '@/components/program-training';
import EngineeringServices from '@/components/engineering-services';
import TrainingSchedules from '@/components/training-schedules';
import InHouseBanner from '@/components/in-house-banner';
import Footer from '@/components/footer';
import BookingModal from '@/components/booking-modal';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <main className="w-full bg-white">
      <Header />
      <HeroSection onRegisterClick={openBookingModal} />
      <ProgramTraining />
      <EngineeringServices />
      <TrainingSchedules onRegisterClick={openBookingModal} />
      <InHouseBanner onRegisterClick={openBookingModal} />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </main>
  );
}
