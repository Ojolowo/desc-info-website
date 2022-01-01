import { Banner } from "containers/banner";
import { Connect } from "containers/connect";
import { Features } from "containers/features";
import { Stats } from "containers/stats";
import { Subscribe } from "containers/subscribe";
import { Testimonials } from "containers/testimonials";

export default function Home() {
   return (
      <div>
         <Banner />
         <Stats />
         <Features />
         <Testimonials />
         <Connect />
         <Subscribe />
      </div>
   );
}
