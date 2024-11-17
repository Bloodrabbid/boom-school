import Header from '@/components/Header';
import Section from '@/components/Section';
import Reviews from '@/components/Reviews';
import Advantages from '@/components/Advantages';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Quiz from '@/components/Quiz';
import AnimatedDrumButton from '@/components/AnimatedDrumButton';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section
        backgroundColor="bg-black"
        tornBottom
        bottomColor="#FF4B26"
        spacing={80}
        className="min-h-screen flex items-center justify-center"
      >
        <HeroSection />
      </Section>

      {/* About Section */}
      <Section
        backgroundColor="bg-[#FF4B26]"
        tornTop
        tornBottom
        topColor="black"
        bottomColor="black"
        spacing={80}
      >
        <div className="container mx-auto px-4">
          <AboutUs />
        </div>
      </Section>

      {/* Reviews Section */}
      <Section
        backgroundColor="bg-black"
        tornTop
        tornBottom
        topColor="#FF4B26"
        bottomColor="#FF4B26"
        spacing={80}
      >
        <div className="container mx-auto px-4">
          <Reviews />
        </div>
      </Section>

      {/* Advantages Section */}
      <Section
        backgroundColor="bg-[#FF4B26]"
        tornTop
        tornBottom
        topColor="black"
        bottomColor="black"
        spacing={80}
      >
        <div className="container mx-auto px-4">
          <Advantages />
        </div>
      </Section>

      {/* Quiz Section */}
      <Section
        backgroundColor="bg-black"
        tornTop
        tornBottom
        topColor="#FF4B26"
        bottomColor="#FF4B26"
        spacing={80}
      >
        <div className="container mx-auto px-4">
          <Quiz />
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section
        backgroundColor="bg-[#FF4B26]"
        tornTop
        topColor="black"
        spacing={80}
      >
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </Section>

      <Footer />
      <AnimatedDrumButton />
    </main>
  );
}