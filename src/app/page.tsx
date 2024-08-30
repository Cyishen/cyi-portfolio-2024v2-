import About from "@/components/about/About";
import FeatureWork from "@/components/feature-work/FeatureWork";
import StickyHero from "@/components/hero/StickyHero";
import StickyInfo from "@/components/Info/StickyInfo";


export default function Home() {
  return (
    <section>
      <StickyHero />
      <About />
      <FeatureWork />
      <StickyInfo />
    </section>
  );
}
