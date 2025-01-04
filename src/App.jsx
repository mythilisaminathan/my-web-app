import React, { useState, useEffect, Suspense } from "react";
import Preloader from "./Preloader";

const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const Hero = React.lazy(() => import("./Components/Hero/Hero"));
const About = React.lazy(() => import("./Components/About/About"));
const Services = React.lazy(() => import("./Components/Services/Services"));
const MyWork = React.lazy(() => import("./Components/MyWork/MyWork"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),3000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Suspense fallback={<Preloader/>}> 
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
