import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Helmet>
        <title>FC BUSHAHR | Local Indian Football Team | Himachal Football Clubs | FC Bushahr Match Score</title>
        <meta name="description" content="FC Bushahr - Local Indian football team from Bushahr, Rampur, Himachal Pradesh. Get the latest match scores, news, and updates about FC Bushahr, Himachal football clubs, and local Indian football teams." />
        <meta name="keywords" content="FC Bushahr, Bushahr, Rampur, Himachal Pradesh, Football Club, Local Indian football team, Himachal football clubs, FC Bushahr match score, Sports, Soccer, India" />
        <meta property="og:title" content="FC Bushahr - Local Indian Football Team | Himachal Football Clubs | Match Score" />
        <meta property="og:description" content="Follow FC Bushahr for match scores, news, and updates. Discover more about local Indian football teams and Himachal football clubs." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FC Bushahr - Local Indian Football Team | Himachal Football Clubs | Match Score" />
        <meta name="twitter:description" content="Follow FC Bushahr for match scores, news, and updates. Discover more about local Indian football teams and Himachal football clubs." />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
