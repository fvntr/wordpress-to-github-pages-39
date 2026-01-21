import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import panel1Bg from "@/assets/man-in-garden.jpg";
import panel2Bg from "@/assets/meeting-pic.jpg";

export default function ValueSection() {
  return (
    <section id="vibrant-solutions" className="scroll-mt-28">
      {/* Panel 1 */}
      <div className="relative w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={panel1Bg}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "75% 35%" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/20" />

        <div className="relative container mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-xl">
            <div className="w-10 h-[2px] bg-accent mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Vibrant solutions need capacity building and partnerships to thrive.
            </h3>
            <p className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed">
              Gaps in the capital ecosystem mean opportunities for impact are missed every day.
            </p>
          </div>
        </div>
      </div>

      {/* Panel 2 */}
      <div className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={panel2Bg}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 45%" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-accent/50 via-black/70 to-navy/100" />

        <div className="relative container mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-2xl lg:ml-auto lg:text-center">
            <div className="w-10 h-[2px] bg-accent mb-4 lg:mx-auto" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              We understand communities. We understand capital. We fill the gaps.
            </h3>
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
              We listen to communities and offer capital strategies to achieve their vision.
              We partner with investors to connect solutions with powerful impact.
            </p>

            <div className="mt-8">
              <Link to="/who-we-are">
                <Button className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-8">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
