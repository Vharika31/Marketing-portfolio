import { Trophy, Award, Star, Target, Calendar } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      year: "2025",
      title: "2nd Prize - IWD'25 Hackathon",
      organization: "International Women's day",
      description: "Product Manager, AgriConnect – Championed a user-first approach to build an AI-powered platform that empowers farmers with accessible insights, climate solutions, and modern agricultural tools tailored to their real needs.",
      icon: Award,
      type: "major"
    },
    {
      year: "2024",
      title: "1st Prize - GenAI Hackathon",
      organization: "HackerRank",
      description: "Top 10 Finalist in a competitive GenAI Hackathon. Showcased impactful and user-centric AI solutions with real-world applicability.",
      icon: Star,
      type: "AI"
    },
    {
      year: "2023",
      title: "Top 1 among 500 in Coding Contest ",
      organization: "Tech Fest",
      description: "Consistently won multiple coding contests across Vizag, demonstrating strong problem-solving and technical algorithmic skills.",
      icon: Award,
      type: "Technical"
    },
    {
      year: "2023",
      title: "App Design Contest Winner",
      organization: "National Tech Fest",
      description: "Secured 1st position out of 250+ senior designers in national-level tech fest, recognized for outstanding UI/UX design and a strong user-first mindset.",
      icon: Target,
      type: "design"
    },
    {
      year: "2023",
      title: "National Ideathon Winner & Recognized Tech Speaker",
      
      description: "Received recognition for outstanding public speaking skills at numerous technical events and conferences.",
      icon: Calendar,
      type: "speaking"
    },
    {
      year: "2023",
      title: "Community Leadership Award",
      organization: "GeeksforGeeks",
      description: "Recognized for exceptional leadership in building and managing the tech community in Vizag region.",
      icon: Award,
      type: "leadership"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'major': return 'from-amber-500 to-yellow-600';
      case 'design': return 'from-rose-500 to-pink-600';
      case 'speaking': return 'from-emerald-500 to-teal-600';
      case 'leadership': return 'from-violet-500 to-purple-600';
      default: return 'from-slate-500 to-gray-600';
    }
  };

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and awards that mark my journey of growth and excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div 
                    className="card-elegant p-8 rounded-2xl group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${getTypeColor(achievement.type)} text-white font-bold text-sm mb-4`}>
                      {achievement.year}
                    </div>

                    {/* Achievement Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getTypeColor(achievement.type)} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-elegant mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-primary font-semibold">{achievement.organization}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Achievement Type Label (Desktop Only) */}
                <div className={`hidden md:block md:w-2/12 text-center ${isEven ? 'order-first' : 'order-last'}`}>
                  <span className="inline-block transform -rotate-90 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {achievement.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="card-elegant p-8 rounded-2xl">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gradient mb-2">15+</h3>
            <p className="text-muted-foreground">Awards & Certifications</p>
          </div>

          <div className="card-elegant p-8 rounded-2xl">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gradient mb-2">Top 10</h3>
            <p className="text-muted-foreground">National Rankings</p>
          </div>

          <div className="card-elegant p-8 rounded-2xl">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gradient mb-2">50+</h3>
            <p className="text-muted-foreground">Speaker Sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;