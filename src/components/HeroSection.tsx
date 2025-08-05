import { ArrowDown, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 hero-gradient">
        <div className="floating-animation absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating-animation absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="floating-animation absolute bottom-40 left-1/4 w-24 h-24 bg-primary-light/10 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl font-bold font-poppins mb-6 my-0 mx-0 md:text-7xl">
            <span className="text-gradient">Harika</span>
            <br />
            <span className="text-foreground">Vavilapalli</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter">
            <span className="block text-4xl">CSUG'26 | Product Marketing | AI + Strategy</span>
          </div>

          <p className="text-muted-foreground mb-10 max-w-1xl leading-relaxed text-xl mx-0 px-0 my-0 py-0">
            I lead with empathy, think in systems, and market with intent.
            <br />
            Fueled by my Ikigai - what I love, what I do best, and what creates value.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
           <a
  href="https://drive.google.com/file/d/1uGhqWy0CXw_WY3kc2Q8LB0bog6RmvpN2/view?usp=sharing" // Replace with your actual resume path or external link
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary px-8 py-4 text-lg font-semibold rounded-full inline-flex items-center"
>
  View Resume
  <Mail className="ml-2 w-5 h-5" />
</a>

            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/harika31/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-muted transition-elegant border shadow-md hover:shadow-lg"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>

              {/* Email */}
              <a
                href="mailto:vharika.1505@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-muted transition-elegant border shadow-md hover:shadow-lg"
                title="Email"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>

          <div className="animate-pulse-glow">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-elegant"
            >
              <span className="text-sm mb-2">Discover More</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
