import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import tajJames from "@/assets/team/taj-james.png";
import sihleDinani from "@/assets/team/sihle-dinani.png";
import rachelBurrows from "@/assets/team/rachel-burrows.png";
import vinitaGoyal from "@/assets/team/vinita-goyal.png";
import dorcasGilmore from "@/assets/team/dorcas-gilmore.png";
import rubenHernandez from "@/assets/team/ruben-hernandez.png";
import anandJahi from "@/assets/team/anand-jahi.png";
import felipeVentura from "@/assets/team/felipe-ventura.png";
import aliciaDelia from "@/assets/team/alicia-delia.png";

type PersonTile = {
  name: string;
  image: string;
  objectPosition?: string; // e.g. "50% 25%"
  aspect?: "portrait" | "landscape" | "square";
};

const coreTeam: PersonTile[] = [
  { name: "Taj James", image: tajJames, aspect: "portrait", objectPosition: "50% 30%" },
  { name: "Ruben Hernandez", image: rubenHernandez, aspect: "landscape", objectPosition: "50% 35%" },
  { name: "Alicia DeLia", image: aliciaDelia, aspect: "portrait", objectPosition: "50% 30%" },

  { name: "Dorcas R. Gilmore", image: dorcasGilmore, aspect: "landscape", objectPosition: "50% 35%" },
  { name: "Sihle Dinani", image: sihleDinani, aspect: "square", objectPosition: "50% 35%" },
  { name: "Rachel Burrows", image: rachelBurrows, aspect: "landscape", objectPosition: "50% 40%" },

  { name: "Vinita Goyal", image: vinitaGoyal, aspect: "portrait", objectPosition: "50% 35%" },
  { name: "Anand Jahi", image: anandJahi, aspect: "square", objectPosition: "50% 45%" },
  { name: "Felipe Ventura", image: felipeVentura, aspect: "portrait", objectPosition: "50% 35%" },
];

type RoleRow = { name: string; role: string };

const facultyLeft: RoleRow[] = [
  { name: "Rachel Burrows", role: "Facilitation & Network Weaving, Cohort Navigator" },
  { name: "Taj James", role: "Strategy & Fund Design Coaching" },
  { name: "Anand Jahi", role: "Cohort Navigator" },
  { name: "Vinita Goyal", role: "Cohort Navigator" },
  { name: "Dorcas Gilmore", role: "Legal Counsel, Gilmore Khandhar, LLC, a solidarity economy law firm." },
  { name: "Parag Khandhar", role: "Legal Counsel, Gilmore Khandhar, LLC, a solidarity economy law firm." },
];

const facultyRight: RoleRow[] = [
  { name: "Sihle Dinani", role: "Community Economic Infrastructure Initiative, Financial Strategy Advising" },
  { name: "Alicia DeLia", role: "Fundraising Advising and Investor Engagement Strategy" },
  { name: "Ruben Hernandez", role: "Portfolio Construction and Management Advising" },
  { name: "Chad Dyer", role: "Investor Strategy Advising" },
  { name: "Felipe Ventura", role: "Blueprint Enterprise, Portfolio and Data Management Platform" },
  { name: "Paper+Screen", role: "Graphic Design and Pitch Deck Development" },
];

function aspectClass(aspect: PersonTile["aspect"]) {
  switch (aspect) {
    case "portrait":
      return "aspect-[3/4]";
    case "landscape":
      return "aspect-[4/3]";
    case "square":
    default:
      return "aspect-square";
  }
}

function MosaicCard({ person }: { person: PersonTile }) {
  return (
    <div className="mb-6 break-inside-avoid overflow-hidden bg-white shadow-sm">
      <div className={`relative w-full ${aspectClass(person.aspect)}`}>
        <img
          src={person.image}
          alt={person.name}
          className="absolute inset-0 w-full h-full object-cover grayscale"
          style={{ objectPosition: person.objectPosition ?? "50% 35%" }}
        />
      </div>

      <div className="bg-navy text-white px-6 py-5">
        <div className="text-lg sm:text-xl font-medium leading-tight">{person.name}</div>
      </div>
    </div>
  );
}

function RoleList({ rows }: { rows: RoleRow[] }) {
  return (
    <div className="space-y-10">
      {rows.map((r) => (
        <div key={r.name} className="leading-snug">
          <div className="font-semibold text-[20px] underline underline-offset-4 decoration-black/80">
            {r.name}
          </div>
          <div className="mt-1 text-[18px] text-black/85">{r.role}</div>
        </div>
      ))}
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* MORE SPACE UP TOP */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left: slide title */}
              <div className="lg:col-span-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-black/90">
                  The Core Team
                  <br />
                  in Support of the
                  <br />
                  Accelerator
                </h1>

                {/* Who We Are text */}
                <div className="mt-10 max-w-md">
                  <h2 className="text-sm uppercase tracking-[0.22em] text-black/60">
                    Who We Are
                  </h2>
                  <p className="mt-4 text-[18px] leading-relaxed text-black/75">
                    Full Spectrum Labs, founded by Taj James, Sihle Dinani and Rachel Burrows, launched in 2020. Committed to a Just Transition towards reparative and regenerative economies, FSL works to nurture and grow the ecosystem of people, organizations and networks advancing community ownership and wealth building strategies. 
                  </p>
                  <p className="mt-4 text-[18px] leading-relaxed text-black/75">
                 Our core group represents a diverse range of design-thinkers, strategists and practitioners. We are a growing network of solitary economy lawyers, financial strategists, capital and community stewards, researchers and facilitators. 
                  </p>
                </div>
              </div>

              {/* Right: Mosaic */}
              <div className="lg:col-span-8">
                {/* Masonry columns = true mosaic */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                  {coreTeam.map((p) => (
                    <MosaicCard key={p.name} person={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 134: Core Faculty & Partners */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-6">
              <h2 className="text-4xl font-semibold text-[#2b3f8a]">
                Core Faculty &amp; Partners
              </h2>
              <div className="hidden sm:block h-2 flex-1 bg-[#7dd3d7]/60" />
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* LEFT COLUMN: NO BORDER BOX (REMOVED) */}
              <div className="pt-2">
                <RoleList rows={facultyLeft} />
              </div>

              {/* Right column */}
              <div className="pt-2">
                <RoleList rows={facultyRight} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
