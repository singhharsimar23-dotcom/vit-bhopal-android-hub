import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Code2, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(187_100%_42%/0.1),transparent_50%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-green/20 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-orange/20 blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-gradient">VIT Bhopal's Premier Tech Club</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-gradient">Android Club</span>
            <br />
            <span className="text-foreground">VIT Bhopal</span>
          </h1>

          {/* Tagline */}
          <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl font-semibold text-foreground/80">
            <span className="text-cyan">Innovate</span>
            <span className="text-foreground/40">•</span>
            <span className="text-green">Create</span>
            <span className="text-foreground/40">•</span>
            <span className="text-orange">Connect</span>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The official technical club for Android, Web & UI/UX enthusiasts at VIT Bhopal
          </p>

          {/* Tech Icons */}
          <div className="flex items-center justify-center space-x-8 pt-4">
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-cyan" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Android</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-green" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Web Dev</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-orange" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">UI/UX</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent hover:opacity-90 transition-all text-lg px-8 py-6 rounded-xl font-bold shadow-lg animate-pulse-glow group"
            >
              <a href="#join" className="flex items-center space-x-2">
                <span>Join Our Community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-gradient">200+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-gradient">30+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-2 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
