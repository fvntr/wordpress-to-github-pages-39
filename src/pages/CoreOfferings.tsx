import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Lightbulb, Rocket, Handshake, Video, ExternalLink } from "lucide-react";

const coreOfferings = [
  {
    title: "Community Wealth Building Learning & Action Circles",
    description: "Regular gatherings where community stewards share stories, insights, and strategies for building regenerative economies. Learn from the experiences and wisdom of fellow community stewards.",
    icon: Users,
  },
  {
    title: "Networked Communities of Practice",
    description: "Connect with leaders who share your vision for community transformation. Build relationships across sectors and geographies to amplify collective impact.",
    icon: Lightbulb,
  },
  {
    title: "FS Accelerator Cohort",
    description: "An intensive program supporting community stewards to develop and launch community wealth building initiatives. Work alongside peers with dedicated mentorship and resources.",
    icon: Rocket,
    hasInterestForm: true,
  },
  {
    title: "Direct Partnership with Community & Ecosystem Stewards",
    description: "Develop integrated capital strategies to advance community plans, priorities, and economic strategies. We work alongside you to design approaches that center community voice and ownership.",
    icon: Handshake,
  },
];

const videos = [
  {
    title: "Introduction to Community Wealth Building",
    embedId: "dQw4w9WgXcQ", // placeholder - replace with actual video IDs
  },
  {
    title: "Capital Stewardship in Practice",
    embedId: "dQw4w9WgXcQ",
  },
  {
    title: "Building Regenerative Economies",
    embedId: "dQw4w9WgXcQ",
  },
];

const CoreOfferings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Core Offerings</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We support community stewards and capital stewards to align financial value 
            with sacred values and accelerate the flow of capital to community priorities.
          </p>
        </div>
      </section>

      {/* Core Offerings Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreOfferings.map((offering) => (
              <div 
                key={offering.title}
                className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <offering.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{offering.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {offering.description}
                </p>
                {offering.hasInterestForm && (
                  <a 
                    href="https://airtable.com/appXXXXXXXX/shrXXXXXXXX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                  >
                    Interested in joining our next cohort? 
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Capital Stewards Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Supporting Capital Stewards
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
              We help capital stewards align financial value and sacred values, 
              accelerating the flow of capital to community priorities. Through our 
              incubation platform, we support the design and launch of critical community 
              economic infrastructure and community wealth building enterprises and funds.
            </p>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold text-lg px-8 py-6 btn-sweep">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Resource Gallery
              </h2>
            </div>
            <p className="text-muted-foreground mb-8">
              2023 Learning Series Videos and other resources for community stewards.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="w-10 h-10 text-muted-foreground/50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm text-foreground">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="gradient-text">Ready to Get Started?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're a community steward building local wealth or a capital steward 
            seeking alignment, we're here to support your journey.
          </p>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold text-lg px-8 py-6 btn-sweep">
              Connect With Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoreOfferings;
