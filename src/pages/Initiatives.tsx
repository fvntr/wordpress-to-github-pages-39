// src/pages/Initiatives.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

type Initiative = {
  title: string;
  description: string;
  secondaryDescription?: string;
  href?: string;
  buttonLabel?: string;
};

const initiatives: Initiative[] = [
  {
    title: "Full Spectrum Capital Partners",
    description:
      "FSL collaborates with partners across the capital ecosystem to provide incubation, acceleration, and capacity building support to communities to receive full spectrum capital resources.",
    href: "https://fullspectrumcapitalpartners.us",
    buttonLabel: "Learn More",
  },
  {
    title: "Community Capital Infrastructure Initiative",
    description:
      "FSL joins with capital strategists and experts to build forms of economic infrastructure that communities and investors need to advance vision and priorities.",
    // Original site shows “Learn More” without an actual link.
    // Leave href undefined to render disabled button.
    buttonLabel: "Learn More",
  },
  {
    title: "Good Life Pledge",
    description:
      "The Good Life Pledge is a philanthropic commitment for a donor to transfer one-third their assets toward building critical infrastructure in these communities, and unlocking capital investments for those who have historically suffered, and who still suffer redlining, disinvestment, institutional racism, and environmental injustice.",
    href: "https://www.goodlifepledge.com",
    buttonLabel: "Learn More",
  },
  {
    title: "Blueprint Collaborative",
    description:
      "For communities a tool for making visible plans, priorities and full spectrum capital needs.",
    secondaryDescription:
      "For asset stewards, investors and funders a portal for investing in community priorities",
    href: "https://blueprintcollaborative.org",
    buttonLabel: "Learn More",
  },
  {
    title: "Communities First",
    description:
      "FSL is a member of the Communities First Working Group, which is bringing together leaders in government, philanthropy, and investment who are committed to getting resources to communities in ways that support community plans, solutions, priorities, needs, and visions for a thriving future.",
    secondaryDescription:
      "Simultaneously, the Working Group invites aligned capacity builders and fiscal agents committed to supporting communities to strengthen relationships and skills toward building the community infrastructure needed to implement community-driven solutions. We support communities to steward resources in ways that honor community leadership, plans, and priorities.",
    href: "https://www.communitiesfirst.us",
    buttonLabel: "Learn More",
  },
];

function InitiativeRow({ item }: { item: Initiative }) {
  const hasLink = Boolean(item.href);

  return (
    <div className="rounded-2xl border border-border bg-white shadow-sm">
      <div className="p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          {item.title}
        </h2>

        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>{item.description}</p>
          {item.secondaryDescription ? <p>{item.secondaryDescription}</p> : null}
        </div>

        <div className="mt-6">
          {item.buttonLabel ? (
            hasLink ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                {item.buttonLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-muted px-5 py-3 text-sm font-semibold text-muted-foreground"
                title="No link available yet"
              >
                {item.buttonLabel}
              </button>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Initiatives() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <section className="pt-16 sm:pt-20 pb-10 sm:pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Initiatives
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn about our larger ecosystem.
          </p>
        </section>

        {/* Rows */}
        <section className="pb-20 space-y-8">
          {initiatives.map((item) => (
            <InitiativeRow key={item.title} item={item} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
