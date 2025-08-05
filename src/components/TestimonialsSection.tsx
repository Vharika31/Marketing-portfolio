import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      image: "/lovable-uploads/5f02728b-f32f-42a3-b768-256553952637.png",
      quote: "There is always something about her that keeps us inspired.",
      fullText: "Harika has this rare ability to bring warmth and purpose into everything she does. During the Thrift Sale, I watched her lead with so much heart. She wasn’t just managing things, she was making people feel seen and valued. Whether it was coordinating hundreds of volunteers or just comforting someone who felt out of place, she did it all with empathy and grace.What amazes me most is how naturally she connects with people. She listens, she cares, and she always finds a way to lift others up. Harika’s not the kind of person who looks for credit, she quietly puts in the work and makes everything around her better. Honestly, she doesn’t just organize events, she creates experiences that leave a lasting impact.",
      author: "D Mounica Sri Pranamya",
      position: "LEAD @ YUVA Young Indians Vizag",
      expandedText: true
    },
    {
      image: "/lovable-uploads/5f02728b-f32f-42a3-b768-256553952637 (4).png",
      quote: "Harika is the calm in every storm.",
      fullText: "Working with Harika on national-level hackathons was an incredible experience. She managed 600+ participants while she made each one feel seen, supported, and excited to be part of something bigger. Her organizational skills are honestly unmatched. From coordinating mentor sessions to handling last-minute glitches, she stayed calm, collected, and always a step ahead.What stood out most was how approachable she remained throughout the chaos. Participants constantly praised how smooth everything felt, and that was all thanks to her behind-the-scenes efforts. She has this amazing ability to balance professionalism with warmth, which made the whole team feel more like a family. If there’s anyone I’d want leading a high-stakes, high-energy event again it’s Harika, hands down.",
      author: "N Geeth Sowri",
      position: "CP LEAD @ CODECHEF",
      expandedText: true
    },
    {
      image: "/lovable-uploads/5f02728b-f32f-42a3-b768-256553952637 (5).png",
      quote: "An outstanding community builder with remarkable vision.",
      fullText: "Harika is the kind of student every mentor values deeply. She builds Communities with a shared purpose. Whether it’s organizing a campus initiative or volunteering at sustainability events, Harika consistently shows a rare blend of empathy, precision, and foresight. Her remarkable attention to detail ensures that every voice is heard, every corner is covered, and every participant feels a sense of belonging. What truly sets her apart is her ability to bring people together across teams, backgrounds, and challenges. She leads with warmth, listens with intent, and acts with clarity. It’s no surprise that her peers look up to her not just as an organizer, but as someone who genuinely uplifts the community around her.",
      author: "Deepa Kodali",
      position: "Director @ CTFS",
      expandedText: true
    },
    
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleExpanded = (index: number) => {
    const updated = [...testimonials];
    updated[index].expandedText = !updated[index].expandedText;
    setCurrentTestimonial(index);
  };

  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-16">
            A few things people usually say about me
          </h2>

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
                  {testimonials[currentTestimonial].expandedText 
                    ? testimonials[currentTestimonial].fullText
                    : `${testimonials[currentTestimonial].fullText.slice(0, 200)}...`
                  }
                </div>

                

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
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-elegant ${
                          index === currentTestimonial 
                            ? 'bg-primary' 
                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;