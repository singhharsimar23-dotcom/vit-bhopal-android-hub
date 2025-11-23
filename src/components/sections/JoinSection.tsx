import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Award, Gift, Users, Briefcase, ArrowRight } from "lucide-react";

const JoinSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Mentorship",
      description: "Learn from seniors and industry professionals",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn certificates for workshops and projects",
    },
    {
      icon: Gift,
      title: "Club Swag",
      description: "Exclusive t-shirts, stickers, and merchandise",
    },
    {
      icon: Briefcase,
      title: "FAANG Network",
      description: "Connect with alumni working at top tech companies",
    },
  ];

  return (
    <section id="join" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black">
              <span className="text-gradient">Ready to Join the Club?</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
              Become part of the most <span className="text-gradient font-semibold">active tech community</span> on campus!
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  className="p-6 bg-gradient-card border-border hover:border-primary/50 card-hover text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-accent mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-gradient transition-all">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-gradient-card border-2 border-primary/30 relative overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <Mail className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-semibold text-primary">How to Join</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Send Your Resume Today
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Email your resume to{" "}
                  <a
                    href="mailto:androidclub@vitbhopal.ac.in"
                    className="text-gradient font-semibold hover:underline"
                  >
                    androidclub@vitbhopal.ac.in
                  </a>
                  {" "}and become part of our growing community. No prior experience needed – 
                  just bring your passion for technology!
                </p>
              </div>

              {/* Big CTA Button */}
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 transition-all text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl animate-pulse-glow group/btn"
                asChild
              >
                <a
                  href="mailto:androidclub@vitbhopal.ac.in?subject=Club Membership Application"
                  className="flex items-center space-x-3"
                >
                  <Mail className="w-6 h-6" />
                  <span>Send Resume</span>
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </Button>

              {/* Additional Info */}
              <div className="pt-6 space-y-2">
                <p className="text-sm text-muted-foreground">
                  Applications are reviewed on a rolling basis
                </p>
                <p className="text-sm text-muted-foreground">
                  Open to all VIT Bhopal students • No coding test required
                </p>
              </div>
            </div>
          </Card>

          {/* Quote */}
          <div className="pt-8">
            <blockquote className="text-lg md:text-xl italic text-muted-foreground max-w-3xl mx-auto">
              "Joining Android Club was the best decision of my college life. The projects, 
              mentorship, and connections I made here helped me land my dream job at Google."
              <footer className="mt-4 text-sm font-semibold text-gradient not-italic">
                — Priya Sharma, Google SDE • Android Club Alumni 2023
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
