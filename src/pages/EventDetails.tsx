import { Calendar, Clock, MapPin, ArrowLeft, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { events } from "@/data/events";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Mobile Header */}
      <div className="lg:hidden pt-8 pb-4 px-4 sm:px-6 relative z-10">
        <Link to="/events">
          <Button variant="outline" size="sm" className="gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Button>
        </Link>

        {/* Category Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-4">
          <span className="text-sm font-bold text-primary">
            {event.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-black text-primary tracking-tight leading-tight mb-4">
          {event.title}
        </h1>

        {/* Quick Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Registration Button for Mobile */}
        {event.status === "upcoming" && event.registrationLink && (
          <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full bg-primary text-primary-foreground mb-4">
              Register Now
            </Button>
          </a>
        )}
      </div>

      {/* Desktop & Mobile Two Column Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-[calc(100vh-2rem)] lg:h-[calc(100vh-4rem)] flex flex-col lg:flex-row gap-6 lg:gap-8 py-4 lg:py-8">
        {/* LEFT COLUMN - Description (Scrollable) */}
        <div className="flex-1 lg:max-w-[55%] overflow-y-auto lg:pr-4">
          <div
            className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 lg:p-10 h-full"
            style={{
              filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
              backdropFilter: "brightness(1.1) blur(9px)",
              WebkitBackdropFilter: "brightness(1.1) blur(9px)",
              background: "hsl(var(--glass-bg))",
            }}
          >
            <div
              className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{
                boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
              }}
            />
            
            <div className="relative z-10 space-y-6">
              {/* Desktop Back Button */}
              <div className="hidden lg:block">
                <Link to="/events">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Events
                  </Button>
                </Link>
              </div>

              {/* Desktop Title Section */}
              <div className="hidden lg:block space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
                  <span className="text-sm font-bold text-primary">
                    {event.category}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-primary tracking-tight leading-tight">
                  {event.title}
                </h1>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About This Event</h2>
              <div className="text-base sm:text-lg text-foreground/90 leading-relaxed space-y-4">
                {event.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Venue Details */}
              <div className="pt-6 border-t border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3">Venue Details</h3>
                <p className="text-foreground/90">{event.venue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Event Details (Fixed/Scrollable on small screens) */}
        <div className="flex-1 lg:max-w-[45%] overflow-y-auto space-y-6">
          {/* Event Meta Card */}
          <div
            className="relative overflow-hidden rounded-[28px] p-6 sm:p-8"
            style={{
              filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
              backdropFilter: "brightness(1.1) blur(9px)",
              WebkitBackdropFilter: "brightness(1.1) blur(9px)",
              background: "hsl(var(--glass-bg))",
            }}
          >
            <div
              className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{
                boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
              }}
            />
            
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-4">Event Details</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                {event.attendees && (
                  <div className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{event.attendees} attendees</span>
                  </div>
                )}
              </div>

              {/* Desktop Registration Button */}
              {event.status === "upcoming" && event.registrationLink && (
                <div className="pt-4 hidden lg:block">
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full bg-primary text-primary-foreground">
                      Register Now
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div
              className="relative overflow-hidden rounded-[28px] p-6 sm:p-8"
              style={{
                filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                backdropFilter: "brightness(1.1) blur(9px)",
                WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                background: "hsl(var(--glass-bg))",
              }}
            >
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none"
                style={{
                  boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                }}
              />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Highlights</h3>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-foreground/90">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Sponsors */}
          {event.sponsors && event.sponsors.length > 0 && (
            <div
              className="relative overflow-hidden rounded-[28px] p-6 sm:p-8"
              style={{
                filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                backdropFilter: "brightness(1.1) blur(9px)",
                WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                background: "hsl(var(--glass-bg))",
              }}
            >
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none"
                style={{
                  boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                }}
              />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Sponsors</h3>
                <div className="grid grid-cols-2 gap-3">
                  {event.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-background/30 border border-border/30 flex items-center justify-center text-center"
                    >
                      <span className="text-sm font-semibold text-foreground">{sponsor.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Special Guests */}
          {event.guests && event.guests.length > 0 && (
            <div
              className="relative overflow-hidden rounded-[28px] p-6 sm:p-8"
              style={{
                filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                backdropFilter: "brightness(1.1) blur(9px)",
                WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                background: "hsl(var(--glass-bg))",
              }}
            >
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none"
                style={{
                  boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                }}
              />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Special Guests</h3>
                <div className="space-y-4">
                  {event.guests.map((guest, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="text-base font-bold text-primary">{guest.name}</h4>
                      <p className="text-sm text-foreground/80">{guest.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Back Button at bottom for desktop */}
          <div className="hidden lg:flex justify-center pt-4">
            <Link to="/events">
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden pb-6 px-4 sm:px-6 relative z-10">
        <Link to="/events" className="block">
          <Button variant="outline" size="lg" className="w-full gap-2">
            <ArrowLeft className="w-4 h-4" />
            View All Events
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
