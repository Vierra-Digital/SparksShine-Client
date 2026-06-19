import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseKeepingService",
  name: site.fullName,
  description: `Professional, reliable, and affordable residential & commercial cleaning serving ${site.serviceArea}.`,
  telephone: site.phone.display,
  email: site.email.display,
  founder: { "@type": "Person", name: site.owner.name },
  areaServed: site.serviceArea,
  priceRange: "$$",
  slogan: site.motto,
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
