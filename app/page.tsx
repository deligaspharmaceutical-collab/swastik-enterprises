import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero />
        
        {/* Stats Counter Bar Section */}
        <StatsBar />
        
        {/* Solutions for Every Industry Section */}
        <Industries />
        
        {/* Built on Quality / Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Our Products Section */}
        <Products />
        
        {/* Call to Action Section */}
        <CTA />
      </main>

      {/* Footer Contact Details & Links */}
      <Footer />
    </div>
  );
}
