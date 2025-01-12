import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/ITServices/MainBanner";
import OurSolutions from "../components/ITServices/OurSolutions";
import OurServices from "../components/ITServices/OurServices";
import OurFeatures from "../components/ITServices/OurFeatures";
import TeamMember from "../components/ITServices/TeamMember";
import RecentProjects from "../components/ITServices/RecentProjects";
import Testimonials from "../components/ITServices/Testimonials";
import ProjectStartArea from "../components/ITServices/ProjectStartArea";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <OurSolutions />

      <OurServices />

      <OurFeatures />

      <TeamMember />

      <RecentProjects />

      {/* <Pricing /> */}

      <Testimonials />

      {/* <Partner /> */}

      {/* <OurBlog /> */}

      <ProjectStartArea />

      <Footer />
    </>
  );
}
