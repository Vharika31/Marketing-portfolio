import { CheckCircle } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const AboutSection = () => {
  const remarkablePoints = [
    "Built a network of 3K+ followers on LinkedIn",
    "Main student coordinator for 2 national-level 24hr hackathons, managing 600+ students from across India and judges from the US",
    "Graphic Designing Lead and Branding Content Head for Algozenith",
    "Content Administrator at Algozenith",
    "Campus Body Lead for GeeksforGeeks Vizag, Point of Contact for GFG admins",
    "Google Student Ambassador, promoting Gemini and Google products on campus",
    "Excellent public speaker, hosted and spoken at numerous technical events",
    "Award-winning Hackathon leader",
    "Winner of multiple coding contests across Vizag",
    "Top 10 in GenAI Hackathon",
    "1st place winner in a National Hackathon organized by HackerRank",
    "Known for resilience, proactiveness, and exceptional management skills"
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse-glow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img 
                  src="public/profile.png"
                  alt="Harika Vavilapalli" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-6">
                A Resilient mind with a heart for Impact.
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                 I combine empathy, storytelling, and strategy to shape products that connect with people and spark change.
                  What sets me apart is my core belief that solutions should never be built in isolation, they must begin with an 
                   understanding of real people and their challenges, As one of my favorite quotes by Julie Zhuo says, 
                  "The best products don't start with technology. They start with a clear understanding of the user."
This mindset, along with resilience as one of my greatest strengths, is reflected in my track record of leading student 
communities, executing marketing campaigns, and organizing large scale tech events. I’m at my best at the intersection 
of product, people, and purpose. Whether launching tools, hosting hackathons, or crafting go-to-market strategies, I
 lead with intention and compassion to improve user's lives.
              </p>

              

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg transition-elegant"
                >
                  Let's Connect
                </a>
                <a 
                  href="#work" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-elegant"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Remarkable Section */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
            I'm <span className="text-gradient">Remarkable</span> Because...
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {remarkablePoints.map((point, index) => (
              <div 
                key={index}
                className="card-elegant p-6 rounded-2xl flex items-start gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;