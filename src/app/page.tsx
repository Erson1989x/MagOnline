import HeroSection from '@/components/HeroSection/HeroSection';
import CategorySection from '@/components/CategorySection/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import Testimonials from '@/components/Testimonials/Testimonials';
import AboutUs from '@/components/AboutUs/AboutUs';
import Blog from '@/components/Blog/Blog';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Category Section with larger images */}
      <CategorySection />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Blog Section */}
      <Blog />
    </div>
  );
}
