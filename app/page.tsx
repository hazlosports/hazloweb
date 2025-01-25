"use client";

import { useRef } from "react";
import { CTA } from "@/components/landing/CTA";
import { FAQs } from "@/components/landing/FAQs";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import { Location } from "@/components/landing/Location";
import { ProductShowcase } from "@/components/landing/ProductShowcase";

export default function Home() {
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      <Hero ctaRef={ctaRef} />
      <Features />
      <Location />
      <FAQs />
      <ProductShowcase />
      <div ref={ctaRef}>
        <CTA />
      </div>
      <Footer />
    </>
  );
}
