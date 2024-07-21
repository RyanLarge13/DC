import Hero from "@/components/Hero";
import Sec3 from "@/components/Sec3";
import Sec2 from "@/components/Sec2";
import Sec4 from "@/components/Sec4";
import Sec5 from "@/components/Sec5";
import Sec6 from "@/components/Sec6";
import Sec7 from "@/components/Sec7";
import Sec8 from "@/components/Sec8";
import Sec9 from "@/components/Sec9";
import Sec10 from "@/components/Sec10";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="md:px-40 lg:px-80">
        <Hero />
      </div>
      <Sec2 />
      <div className="md:px-40 lg:px-80">
        <Sec3 />
        <Sec4 />'
      </div>
      <Sec5 />
      <div className="md:px-40 lg:px-80">
        <Sec6 />
      </div>
      <Sec7 />
      <div className="md:px-40 lg:px-80">
        <Sec8 />
        <Sec9 />
      </div>
      <Sec10 />
      <Footer />
    </main>
  );
}
