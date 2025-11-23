import { Card } from "@/components/ui/card";
import { Smartphone, Code2, Palette } from "lucide-react";

const AboutSection = () => {
  const focuses = [
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Master Kotlin, Jetpack Compose, and Firebase to build cutting-edge mobile applications",
      color: "cyan",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Material Design"],
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Create powerful full-stack web applications with modern frameworks and tools",
      color: "green",
      technologies: ["React", "Node.js", "Next.js", "TypeScript"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design beautiful, user-centered experiences with industry-standard tools",
      color: "orange",
      technologies: ["Figma", "Prototyping", "User Research", "Design Systems"],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black">
            <span className="text-gradient">Who We Are</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate community of <span className="text-gradient font-semibold">200+ developers and designers</span> building 
            real-world apps, websites, and experiences. We conduct workshops, hackathons, projects, and industry talks 
            to help you grow your skills and network.
          </p>
        </div>

        {/* Focus Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {focuses.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <Card
                key={focus.title}
                className="p-8 bg-gradient-card border-border hover:border-primary/50 card-hover group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-${focus.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-${focus.color}/10 border border-${focus.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${focus.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all">
                    {focus.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {focus.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {focus.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Whether you're a beginner or an expert, there's a place for you here
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-6 py-3 rounded-xl bg-cyan/10 border border-cyan/30">
              <span className="font-semibold text-cyan">Weekly Workshops</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-green/10 border border-green/30">
              <span className="font-semibold text-green">Hands-on Projects</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-orange/10 border border-orange/30">
              <span className="font-semibold text-orange">Industry Mentorship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
