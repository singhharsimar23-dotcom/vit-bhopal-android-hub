import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Campus Connect App",
      description: "A comprehensive Android app for VIT Bhopal students to stay connected with campus events, clubs, and announcements",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["Kotlin", "Firebase", "Material Design"],
      link: "#",
    },
    {
      title: "Club Management Portal",
      description: "Full-stack web platform for managing club activities, member registrations, and event coordination",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Design System Library",
      description: "Comprehensive UI component library and design system for consistent branding across all club projects",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tags: ["Figma", "Storybook", "Design Tokens"],
      link: "#",
    },
    {
      title: "Event Ticketing System",
      description: "QR code-based ticketing and check-in system for workshops and hackathons",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Code Snippet Manager",
      description: "Android app to save, organize, and share code snippets with syntax highlighting",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      tags: ["Kotlin", "Room DB", "Material 3"],
      link: "#",
    },
    {
      title: "Portfolio Builder",
      description: "No-code portfolio website builder for club members to showcase their projects",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["React", "Tailwind", "Vercel"],
      link: "#",
    },
  ];

  const chartData = [
    { name: "Android", value: 40, color: "hsl(187, 100%, 42%)" },
    { name: "Web", value: 30, color: "hsl(122, 39%, 49%)" },
    { name: "UI/UX", value: 30, color: "hsl(14, 100%, 57%)" },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black">
            <span className="text-gradient">Our Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications built by our members, solving problems and making an impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-gradient-card border-border hover:border-primary/50 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full group/btn hover:bg-primary/10"
                  asChild
                >
                  <a href={project.link} className="flex items-center justify-center space-x-2">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Chart */}
          <Card className="p-8 bg-gradient-card border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Project Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* CTA */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black">
              Want to see <span className="text-gradient">more?</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Check out our GitHub organization to explore all our open-source projects, 
              contribute to ongoing work, or start your own initiative!
            </p>
            <Button
              size="lg"
              className="bg-gradient-accent hover:opacity-90 transition-all font-semibold group"
              asChild
            >
              <a
                href="https://github.com/androidclubvitb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>Visit our GitHub</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
