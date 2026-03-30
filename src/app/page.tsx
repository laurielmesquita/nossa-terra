import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProofStrip from "@/components/sections/ProofStrip";
import ProblemSection from "@/components/sections/ProblemSection";
import PillarsSection from "@/components/sections/PillarsSection";
import AudienceSection from "@/components/sections/AudienceSection";
import AlineTeaser from "@/components/sections/AlineTeaser";
import ComingSoonSection from "@/components/sections/ComingSoonSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Nossa Terra Imobiliária — Consultoria Completa em Imóveis Rurais",
  description:
    "Segurança jurídica especializada, análise técnica de solo e crédito rural. A consultoria completa para quem quer investir no campo com inteligência. Norte do PI e Sul do MA.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofStrip />
      <ProblemSection />
      <PillarsSection />
      <AudienceSection />
      <AlineTeaser />
      <ComingSoonSection />
      <FinalCTA />
    </>
  );
}
