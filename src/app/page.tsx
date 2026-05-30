import BestProducts from "@/components/BestProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KidsCollection from "@/components/KidsCollection";
import MensCollection from "@/components/MensCollection";
import ProductsCollection from "@/components/ProductsCollection";
import Reviews from "@/components/Reviews";
import SareeCollection from "@/components/SareeCollection";
import SubscribeBanner from "@/components/SubscribeBanner";
import TrendingSarees from "@/components/TrendingSarees";
import WinterSale from "@/components/WinterSale";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-x-hidden">
      <Hero />
      <KidsCollection />
      <MensCollection />
      <ProductsCollection />
      <BestProducts />
      <WinterSale />
      <TrendingSarees />
      <SubscribeBanner />
      <SareeCollection />
      <Reviews />
      <Footer />
    </div>
  );
}



