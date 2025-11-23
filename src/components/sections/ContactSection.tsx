import { Card } from "@/components/ui/card";
import { Mail, Instagram, Linkedin, Twitter, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/androidclubvitb",
      color: "from-pink-500 to-orange-500",
      handle: "@androidclubvitb",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/androidclubvitb",
      color: "from-blue-600 to-blue-400",
      handle: "/company/androidclubvitb",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/AndroidClubVITB",
      color: "from-sky-500 to-blue-500",
      handle: "@AndroidClubVITB",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/androidclubvitb",
      color: "from-gray-700 to-gray-900",
      handle: "/androidclubvitb",
    },
  ];

  return (
    <footer id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions? Suggestions? Want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <Card className="p-8 bg-gradient-card border-border hover:border-primary/50 card-hover group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Email Us</h3>
                  <a
                    href="mailto:androidclub@vitbhopal.ac.in"
                    className="text-gradient font-semibold hover:underline text-lg"
                  >
                    androidclub@vitbhopal.ac.in
                  </a>
                  <p className="text-sm text-muted-foreground">
                    For membership inquiries, collaborations, or general questions
                  </p>
                </div>
              </div>
            </Card>

            {/* Location */}
            <Card className="p-8 bg-gradient-card border-border hover:border-orange/50 card-hover group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-orange/10 border border-orange/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-orange" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Visit Us</h3>
                  <p className="text-foreground/80 font-medium">
                    VIT Bhopal University
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Kothrikalan, Sehore, Madhya Pradesh 466114
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Club Room: Innovation Lab, Tech Block
                  </p>
                </div>
              </div>
            </Card>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7438094534736!2d77.78195631496163!3d23.218762784871743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4290e04f8d85%3A0xc15a0e267eaa7e9a!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="VIT Bhopal Location"
              ></iframe>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us on Social Media</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card
                      className="p-6 bg-gradient-card border-border hover:border-primary/50 card-hover group cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all">
                            {social.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>

            {/* Discord Banner */}
            <Card className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30 text-center">
              <div className="space-y-3">
                <div className="text-3xl">💬</div>
                <h4 className="text-xl font-bold text-foreground">Join our Discord</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with members, get help, and stay updated in real-time
                </p>
                <p className="text-xs text-muted-foreground italic">Coming soon!</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center font-bold text-lg">
                AC
              </div>
              <div className="text-sm text-muted-foreground">
                © 2025 Android Club VIT Bhopal • Made with ❤️ by the club
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="https://androidclubvitb.tech" className="hover:text-gradient transition-colors">
                Official Website
              </a>
              <span>•</span>
              <a href="#about" className="hover:text-gradient transition-colors">
                About
              </a>
              <span>•</span>
              <a href="#projects" className="hover:text-gradient transition-colors">
                Projects
              </a>
              <span>•</span>
              <a href="#events" className="hover:text-gradient transition-colors">
                Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
