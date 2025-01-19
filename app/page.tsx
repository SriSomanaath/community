import AboutCommunity from "@/components/aboutCommunity/AboutCommunity";
import Footer from "@/components/footer/Footer";
import GetCertificate from "@/components/getCertificate/GetCertificate";
import { HeroSection } from "@/components/heroSection/HeroSection";
import JobsIntro from "@/components/jobsIntro/JobsIntro";
import { JoinUsBanner } from "@/components/joinUsBanner/JoinUsBanner";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <div >
      <NavBar />
      <div>
        <div className="contGrad">
          <HeroSection />   
        </div>
        <div className="contGrad">
          <AboutCommunity />
        </div>
        <div className="contGrad">
          <JobsIntro />
          <GetCertificate />
        </div>
        <JoinUsBanner />
        <Footer />
      </div>
    </div>
  );
}
