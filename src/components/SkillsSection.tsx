import { 
  Megaphone, 
  Users, 
  Calendar, 
  Palette, 
  Figma, 
  Code, 
  PenTool,
  Crown 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Megaphone,
      title: "Product Marketing",
      description: "Strategic planning, market research, and brand positioning"
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description: "Building strong relationships with stakeholders by understanding their needs and aligning expectations for successful outcomes."
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Large-scale event coordination and project management"
    },
    {
      icon: Palette,
      title: "Branding & Graphic Design",
      description: "Visual identity creation and brand development"
    },
    {
      icon: Figma,
      title: "UI/UX Design",
      description: "User interface design and prototyping with Figma"
    },
    
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Content creation and strategic communication planning"
    },
    {
      icon: Crown,
      title: "Leadership & Coordination",
      description: "Team management and strategic organizational leadership"
    },
    {
      icon: Calendar,
      title: "Project Management",
      description: "Led end-to-end initiatives, from planning and coordination to execution and delivery"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning technology, marketing, and leadership
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group card-elegant p-8 rounded-2xl text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-elegant"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-elegant">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-poppins mb-3 text-foreground group-hover:text-primary transition-elegant">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold font-poppins text-center mb-12">Technical Proficiency</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Product Marketing", level: 97 },
              { skill: "Cross-functional Collaboration", level: 93 },
              { skill: "Leadership & Communication", level: 96 },
              { skill: "Go-to-Market (GTM) Strategy", level: 90 },
              { skill: "Campaign Planning & Execution", level: 98 },
              { skill: "Graphic Designing", level: 86 },
              { skill: "Analytics & Data Interpretation", level: 89 },
              { skill: "Project Management", level: 92 },
              
              
              
            ].map((item, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
