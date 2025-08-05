import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Users, Mic, Code, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoriesSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      category: "Hackathon Leadership",
      title: "Mission SUSHACKS 2.0",
      description: "As the Student Coordinator of SUSHACKS 2.0, From managing 600+ participants nationwide to collaborating with judges and faculty, I honed my skills in event management, crisis handling, cross-functional coordination, and community building.  Proud to have turned a vision into reality with a crew that made every second count.",
      
      testimonial: "We're extremely grateful for her support. She managed to provide us accomodation at the last moment, and stayed with us till we boarded our train back home",
      author: "Participating Student",
      type: "leadership"
    },
    {
      category: "Community Building",
      title: "Growing LinkedIn Network to 3K+",
      description: "Building a genuine network of 3,000+ followers on LinkedIn wasn't just about numbers, it was about creating meaningful connections, sharing valuable content, and establishing myself as a thought leader in the product marketing and community building space.",
      
      testimonial: "Harika's content on LinkedIn is always on-point, always focussed on reaching out for those who are learning. She's built an amazing community around herself not only for her growth but for the well-being of her juniors.",
      author: "LinkedIn Connection",
      type: "community"
    },
    {
      category: "Public Speaking",
      title: "Hosting Technical Events",
      description: "From nervous first-time speaker to confident event host, my public speaking journey has been transformative. Speaking at numerous technical events has not only improved my communication skills but also helped me inspire others in the tech community.",
      
      testimonial: "Harika is a natural speaker who can engage any audience. Her presentations are both informative and inspiring.",
      author: "Event Organizer",
      type: "speaking"
    },
    {
      category: "Design & Branding",
      title: "Leading Algozenith's Visual Identity",
      description: "As the Graphic Designing Lead and Branding Content Head for Algozenith, I've had the opportunity to shape the visual narrative of a growing platform. Creating cohesive brand experiences and designing impactful content has been incredibly fulfilling.",
      
      testimonial: "The brand transformation under Harika's leadership has been remarkable. Her design sense is exceptional.",
      author: "Team Member",
      type: "design"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'leadership': return Users;
      case 'community': return Heart;
      case 'speaking': return Mic;
      case 'design': return Code;
      default: return Users;
    }
  };

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Journey highlights, experiences, and testimonials from my path in tech and leadership
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        {/* Main Story Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="order-2 lg:order-1">
              <div className="card-elegant p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">{stories[activeStory].image}</div>
                  <div>
                    <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                      {stories[activeStory].category}
                    </span>
                    <h3 className="text-2xl font-bold font-poppins text-foreground">
                      {stories[activeStory].title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {stories[activeStory].description}
                </p>

                {/* Testimonial */}
                <div className="bg-muted/50 p-6 rounded-2xl relative">
                  <Quote className="absolute top-4 left-4 w-6 h-6 text-primary opacity-50" />
                  <blockquote className="text-foreground font-medium italic mb-4 pl-8">
                    "{stories[activeStory].testimonial}"
                  </blockquote>
                  <div className="flex items-center gap-3 pl-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {stories[activeStory].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{stories[activeStory].author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Navigation */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                {stories.map((story, index) => {
                  const IconComponent = getTypeIcon(story.type);
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveStory(index)}
                      className={`w-full text-left p-6 rounded-2xl transition-elegant ${
                        index === activeStory 
                          ? 'card-elegant border-2 border-primary' 
                          : 'bg-card hover:bg-muted border border-border'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          index === activeStory 
                            ? 'bg-gradient-to-br from-primary to-accent text-white' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                            {story.category}
                          </p>
                          <h4 className="font-bold text-foreground">
                            {story.title}
                          </h4>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex gap-4 mt-8 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevStory}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextStory}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Story Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
