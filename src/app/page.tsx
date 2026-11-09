import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Packages } from "@/components/Packages";
import { PlanForm } from "@/components/PlanForm";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { StoryGallery } from "@/components/StoryGallery";
import { WhyHalo } from "@/components/WhyHalo";
import { Work } from "@/components/Work";
import { getHaloContent } from "@/lib/halo";

// Admin edits (Allure › Halo & Halo) appear within a minute.
export const revalidate = 60;

export default async function Home() {
  const { images, portfolio, packages } = await getHaloContent();

  return (
    <main className="bg-ivory">
      <Header />
      <Hero image={images.hero} />
      <Intro images={images} />
      <Services image={images["services-decor"]} />
      <Statement />
      <Packages packages={packages} />
      <Work items={portfolio} />
      <StoryGallery images={images} />
      <Process />
      <WhyHalo image={images["why-halo"]} />
      <PlanForm />
      <Footer />
    </main>
  );
}
