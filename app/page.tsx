import HeroSection from "@/components/home/HeroSection";
import CategoryStrip from "@/components/home/CategoryStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CollectionGrid from "@/components/home/CollectionGrid";
import CampaignBanner from "@/components/home/CampaignBanner";
import ShoreProducts from "@/components/home/ShoreProducts";
import BrandStatement from "@/components/home/BrandStatement";
import MaterialHighlight from "@/components/home/MaterialHighlight";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryStrip />
      <FeaturedProducts />
      <CollectionGrid />
      <CampaignBanner />
      <ShoreProducts />
      <BrandStatement />
      <MaterialHighlight />
    </>
  );
}
