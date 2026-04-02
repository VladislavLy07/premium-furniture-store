import { AboutSection } from '@/components/about-section';
import { CollectionsSection } from '@/components/collections-section';
import { FeaturesSection } from '@/components/features-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProductGrid } from '@/components/product-grid';

export default function HomePage() {
  return (
    <div className="bg-ivory text-walnut">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-16 pt-6 md:px-8">
        <HeroSection />
        <FeaturesSection />
        <ProductGrid />
        <CollectionsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
