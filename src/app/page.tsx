import Navbar from "./component/navbar";

import Solutions from "./component/solutions";
import Features from "./component/features";
import Hero from "./component/hero";
import AnalyticsDashboard from "./component/analytics";
import Pricing from "./component/pricing";
import Testimonials from "./component/testimonials";
import ContactForm from "./component/contact";
import Footer from "./component/footer";

export default function Home() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Solutions />
      <Features />
      <AnalyticsDashboard />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
      </div>
  );
}
