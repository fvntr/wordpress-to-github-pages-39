import { Quote } from "lucide-react";
import leselieyImage from "@/assets/leseliey-welch.png";
import tajImage from "@/assets/taj-james.jpg";

const testimonials = [
  {
    quote:
      "Full Spectrum Labs has been instrumental in helping us scale our community programs. Their approach combines deep listening with practical action.",
    author: "Leseliey Welch",
    role: "Community Leader",
    image: leselieyImage,
  },
  {
    quote:
      "The capacity building support we received transformed our organization's ability to create lasting impact in our neighborhood.",
    author: "Taj James",
    role: "Executive Director",
    image: tajImage,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-navy to-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Voices from Our Community
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Hear from the leaders and changemakers we've had the privilege to support
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 text-center"
            >
              <Quote className="w-10 h-10 text-accent/60 mb-6 mx-auto" />

              <blockquote className="text-lg lg:text-xl leading-relaxed mb-10 text-primary-foreground/90 max-w-3xl mx-auto">
                “{testimonial.quote}”
              </blockquote>

              {/* Author row (matches your screenshot layout) */}
              <div className="flex items-center justify-center gap-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-accent"
                />

                <div className="text-left">
                  <p className="font-semibold text-primary-foreground text-xl leading-tight">
                    {testimonial.author}
                  </p>
                  <p className="text-base text-primary-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
