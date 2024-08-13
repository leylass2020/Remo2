import AboutUsComp from "../components/AboutUsComp";
import AboutUsComp2 from "../components/AboutUsComp2";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ListServices from "../components/ListServices";
import MeetTeam from "../components/MeetTeam";
import OurProject from "../components/OurProject";
import HomePage from "./HomePage";


function Landing() {
  return (
    <>
      <HomePage />
      <section id="our-project-id">
        <OurProject />
      </section>

      <ListServices />
      <section id="our-process">
        <AboutUsComp />
      </section>

      <AboutUsComp2 />
      <MeetTeam />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Landing;
