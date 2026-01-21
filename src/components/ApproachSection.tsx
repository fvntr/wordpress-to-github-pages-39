import { Compass, TrendingUp, Users } from "lucide-react";

const approaches = [
  {
    icon: Compass,
    title: "Listen & Guide",
    description: "We begin by deeply understanding community needs, challenges, and aspirations to provide tailored guidance and strategic direction.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "We nurture promising initiatives with resources, mentorship, and capacity building to help them scale their impact sustainably.",
  },
  {
    icon: Users,
    title: "Build",
    description: "We forge lasting partnerships and networks that strengthen communities and create pathways for regenerative economic development.",
  },
];

const ApproachSection = () => {
  return (
    <section id="initiatives" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Approach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for catalyzing community-driven transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {approaches.map((approach, index) => (
            <div 
              key={approach.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-teal/10 group-hover:from-primary/20 group-hover:to-teal/20 transition-colors duration-300 mb-6">
                <approach.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {approach.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
