import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    {
      date: "Mar 15, 2025",
      time: "4:00 PM - 6:00 PM",
      title: "Android Mastery Workshop",
      description: "Deep dive into Jetpack Compose and modern Android architecture patterns with hands-on coding exercises",
      location: "Tech Block, Room 301",
      attendees: 45,
      status: "upcoming",
    },
    {
      date: "Mar 22, 2025",
      time: "10:00 AM - 5:00 PM",
      title: "Web Dev Summit 2025",
      description: "Full-day conference featuring talks on React Server Components, Next.js 14, and modern web performance",
      location: "Auditorium",
      attendees: 120,
      status: "upcoming",
    },
    {
      date: "Apr 5-6, 2025",
      time: "24 Hours",
      title: "App-a-Thon Spring Edition",
      description: "48-hour hackathon to build innovative mobile and web applications. Prizes worth ₹50,000!",
      location: "Innovation Lab",
      attendees: 80,
      status: "upcoming",
    },
  ];

  const pastEvents = [
    {
      date: "Feb 10, 2025",
      title: "UI/UX Design Bootcamp",
      description: "Figma masterclass covering design systems, prototyping, and user research methodologies",
      attendees: 60,
    },
    {
      date: "Jan 28, 2025",
      title: "Firebase Integration Workshop",
      description: "Learn to integrate Firebase services including Authentication, Firestore, and Cloud Functions",
      attendees: 55,
    },
    {
      date: "Dec 15, 2024",
      title: "Winter Hackathon 2024",
      description: "24-hour coding marathon with industry mentors and exciting project presentations",
      attendees: 95,
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black">
            <span className="text-gradient">Events & Workshops</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Regular workshops, hackathons, and industry talks to keep you learning and growing
          </p>
        </div>

        {/* Upcoming Events - Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center space-x-3">
            <div className="w-2 h-8 bg-gradient-accent rounded-full"></div>
            <span>Upcoming Events</span>
          </h3>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Connector */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-gradient-accent glow"></div>
                  {index < upcomingEvents.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-accent/30 mt-2"></div>
                  )}
                </div>

                {/* Event Card */}
                <Card className="flex-1 p-6 md:p-8 bg-gradient-card border-border hover:border-primary/50 card-hover group">
                  <div className="space-y-4">
                    {/* Date Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm font-semibold text-primary">{event.date}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all">
                      {event.title}
                    </h4>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} Registered</span>
                      </div>
                    </div>

                    {/* RSVP Button */}
                    <Button className="bg-gradient-accent hover:opacity-90 transition-all font-semibold">
                      RSVP Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center space-x-3">
            <div className="w-2 h-8 bg-muted rounded-full"></div>
            <span>Past Events</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card
                key={event.title}
                className="p-6 bg-gradient-card border-border hover:border-muted-foreground/30 transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  {/* Date */}
                  <div className="text-sm text-muted-foreground font-medium">{event.date}</div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all">
                    {event.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

                  {/* Attendees */}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} Attended</span>
                  </div>

                  {/* Watch Recording Button */}
                  <Button variant="ghost" size="sm" className="w-full hover:bg-muted">
                    Watch Recording
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
