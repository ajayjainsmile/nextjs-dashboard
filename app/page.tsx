import Header from "./components/ui/Header";
import HeroHome from "./components/ui/HeroHome";
import SellerRating from "./components/ui/SellerRating";
import Featutes from "./components/ui/Featutes";
import CategorySupport from "./components/ui/CategorySupport";
import HowItWorks from "./components/ui/HowItWorks";
import Package from "./components/ui/Package";
import WhoItFor from "./components/ui/WhoItFor";
import Testimonials from "./components/ui/Testimonials";
import Photography from "./components/ui/Photography";
import Footer from "./components/ui/Footer";
import { getUserFromSession } from "@/app/lib/auth.server";

export default async function HomePage() {
    const user = await getUserFromSession();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header user={user} />
      {/* HERO SECTION */}
      <HeroHome />
      {/* FEATURES */}
      <SellerRating />
      {/* HOW IT WORKS */}
      <Featutes />
      {/* CATEGORY SUPPORT */}
      <CategorySupport />
      {/* HoW IT SUPPORT */}
      <HowItWorks />
       {/* Price Package */}
      <Package />
      {/*Who It For */}
      <WhoItFor />
      {/* Testimonial */}
      <Testimonials />
      {/* Photography */}
      <Photography />
      {/* Footer */}
      <Footer />
    </div>
  );
}

