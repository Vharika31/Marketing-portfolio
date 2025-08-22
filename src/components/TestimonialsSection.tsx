import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

type Testimonial = {
  image: string;
  quote: string;
  fullText: string;
  author: string;
  position: string;
};

const testimonials: Testimonial[] = [
  {
    
    quote: "This platform completely transformed how I approach learning!",
    fullText:
      author: "",
    position: "",
  },
  
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setExpanded(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setExpanded(false);
  };

  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/20" />

                <div className="text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </div>

                <div className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {expanded
                    ? testimonials[currentTestimonial].fullText
                    : `${testimonials[currentTestimonial].fullText.slice(
                        0,
                        200
                      )}...`}
                </div>

                {/* Read more / less */}
                <button
                  onClick={() => setExpanded((prev) => !prev)}
                  className="text-primary font-medium hover:underline mb-6"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-foreground">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentTestimonial(index);
                          setExpanded(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-elegant ${
                          index === currentTestimonial
                            ? "bg-primary"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Arrow Navigation */}
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full p-0"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full p-0"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* End content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
