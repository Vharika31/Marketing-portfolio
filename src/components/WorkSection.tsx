import { Award, Calendar, ExternalLink, Users } from 'lucide-react';

const WorkSection = () => {
  const workExperiences = [
    {
      title: "Graphic Design Lead'24 – Algozenith",
      subtitle: "Design & Branding",
      period: "2023 - 2024",
      description: "Designed branding assets and promotional content for over 15+ events.Led content strategy and managed social media outreach, increasing event participation and club visibility.",
      highlights: ["Visual Identity Design", "Brand Strategy", "Content Adminstration"],
      type: "leadership"
    },
    {
      title: "Product Marketing Ambassodor",
      subtitle: "GeeksforGeeks Community Vizag",
      period: "2025 - Present",
      description: "Managed and led key chapter activities by organizing 12+ events, reaching out to 10+ industry speakers, and creating content that connected with over 1500 students. Hosted coding contests, workshops, and fun engagement sessions that helped nurture a strong problem-solving culture in the community",
      highlights: ["Community Building", "Event Organization", "Technical Leadership"],
      type: "community"
    },
    {
      title: "Google Student Ambassador",
      subtitle: "Google for Developers",
      period: "2025 - Present",
      description: "Promoted Gemini and Google products on campus by organizing 5+ hands-on workshops and awareness sessions, reaching over 300 students.",
      highlights: ["Product Evangelism", "Workshop Facilitation", "Student Outreach"],
      type: "ambassador"
    },
    {
      title: "Hackathon Project Manager",
      subtitle: "National Level 24-hours hackathons",
      period: "2022 - 2024",
      description: "Served as the main coordinator for two national-level 24-hour hackathons, managing 600+ participants from across India and coordinating with 7 virtual judges from top U.S based tech companies. Oversaw end-to-end planning, logistics, and seamless execution delivering high-impact events.",
      highlights: ["Event Management", "International Network", "Large Scale Planning"],
      type: "event"
    },
    {
      title: "Young Indians Volunteer",
      subtitle: "Economic Empowerment",
      period: "2024 - 2024",
      description: "Volunteered for The Thrift Sale, a sustainability-focused initiative that empowered 2,000+ middle-class and underprivileged individuals by offering 500+ quality preowned items at highly affordable prices. Collaborated with 200+ student and faculty volunteers to ensure a seamless, dignified shopping experience. We successfully raised ₹2,00,000, directly supporting climate action initiatives.",
      highlights: ["Strategy planning", "Project management", "Marketing"],
      type: "tech"
    },
    {
      title: "Event & Community Organizer",
      subtitle: "Media cell Vizag",
      period: "2024 - 2025",
      description: "Managed event photography and brand visibility, driving engagement and campus identity as a Media Cell member.",
      highlights: ["Media Manager", "Content adminstrator", "Brand Marketing"],
      type: "community"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'leadership': return 'from-amber-600 to-orange-600';
      case 'community': return 'from-emerald-600 to-teal-600';
      case 'ambassador': return 'from-rose-600 to-pink-600';
      case 'event': return 'from-violet-600 to-purple-600';
      case 'tech': return 'from-cyan-600 to-blue-600';
      default: return 'from-slate-600 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'leadership': return Award;
      case 'community': return Users;
      case 'ambassador': return ExternalLink;
      case 'event': return Calendar;
      case 'tech': return ExternalLink;
      default: return Award;
    }
  };

  return (
    <section id="work" className="section-padding bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading initiatives across technology, community building, and product marketing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {workExperiences.map((work, index) => {
            const IconComponent = getTypeIcon(work.type);
            return (
              <div 
                key={index}
                className="group card-elegant p-8 rounded-2xl relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(work.type)} opacity-0 group-hover:opacity-5 transition-elegant`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getTypeColor(work.type)} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-elegant">
                          {work.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">{work.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {work.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {work.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {work.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${getTypeColor(work.type)} text-white font-medium`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: "2000+", label: "Lives Impacted" },
    
    { number: "600+", label: "Participants Managed" },
    { number: "3000+", label: "LinkedIn Network" },
    { number: "45+", label: "Events Curated" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;