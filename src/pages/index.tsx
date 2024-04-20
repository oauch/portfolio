import AboutMeSection from "@/components/AboutMeSection";
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";

function Home() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <AboutMeSection />
      </main>
    </>
  );
}

export default Home;
