"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CustomerNotice from "@/components/CustomerNotice";
import ZeroExperience from "@/components/ZeroExperience";
import TrainingFleet from "@/components/TrainingFleet";
import SimulatorSection from "@/components/SimulatorSection";
import AwardsSection from "@/components/AwardsSection";
import GallerySection from "@/components/GallerySection";
import FeeCalculator from "@/components/FeeCalculator";
import RoadSignsQuiz from "@/components/RoadSignsQuiz";
import WhyChooseUs from "@/components/WhyChooseUs";
import RealEstateSection from "@/components/RealEstateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import EnrollModal from "@/components/EnrollModal";
import NoticeModal from "@/components/NoticeModal";
import AdminSignInModal from "@/components/AdminSignInModal";
import AdminDashboardModal from "@/components/AdminDashboardModal";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white relative">
      <Header />
      <Hero />
      <CustomerNotice />
      <ZeroExperience />
      <TrainingFleet />
      <SimulatorSection />
      <AwardsSection />
      <GallerySection />
      <FeeCalculator />
      <RoadSignsQuiz />
      <WhyChooseUs />
      <RealEstateSection />
      <ContactSection />
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Popups & Dialogs */}
      <EnrollModal />
      <NoticeModal />
      <AdminSignInModal />
      <AdminDashboardModal />
    </main>
  );
}
