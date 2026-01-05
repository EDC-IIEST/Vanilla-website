import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "DEEPOTSAV",
    description: "Deepotsav is our grand Diwali celebration, emphasizing prosperity and cultural heritage. Join us for a spectacular event filled with traditional festivities, illuminating lights, and joyful gatherings. It's one of our most significant cultural celebrations, fostering community spirit and honoring the rich traditions of Diwali.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    date: "November 2024",
    location: "IIEST Campus",
  },
  {
    id: 2,
    title: "BUILD WITH US",
    description: "Join us for 'Build with US,' an exciting ideathon hosted by EDC! Collaborate with fellow innovators to develop groundbreaking solutions in our hackathon event. Showcase your skills, tackle real-world challenges, and turn your ideas into impactful projects. Don't miss this opportunity to make a difference and connect with the community!",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    date: "December 2024",
    location: "Innovation Hub",
  },
  {
    id: 3,
    title: "ECOFUSION",
    description: "EcoFusion, sponsored by Greenovation Club, champions green innovation and sustainability. This event supports startups focused on eco-friendly solutions, encouraging groundbreaking ideas that promote environmental stewardship. Join us to showcase your sustainable projects, network with like-minded entrepreneurs, and drive positive change for a greener future!",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070&auto=format&fit=crop",
    date: "January 2025",
    location: "Green Tech Center",
  },
  {
    id: 4,
    title: "STARTUP SUMMIT",
    description: "The annual Startup Summit brings together entrepreneurs, investors, and industry leaders for a day of inspiration and networking. Pitch your startup ideas, attend workshops, and connect with venture capitalists looking for the next big thing.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    date: "February 2025",
    location: "Main Auditorium",
  },
  {
    id: 5,
    title: "TECH TALKS",
    description: "A series of inspiring talks by industry experts covering topics from AI and blockchain to sustainable technology. Learn from the best, ask questions, and expand your horizons in the world of technology and entrepreneurship.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    date: "March 2025",
    location: "Seminar Hall",
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const getVisibleEvents = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + events.length) % events.length;
      result.push({ ...events[index], position: i });
    }
    return result;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            EVENTS
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our exciting lineup of events, workshops, and competitions
            designed to ignite your entrepreneurial spirit.
          </p>
        </div>
      </section>

      {/* 3D Carousel Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-12 z-20 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Cards Container */}
            <div className="relative w-full max-w-5xl h-full flex items-center justify-center perspective-1000">
              {getVisibleEvents().map((event) => (
                <div
                  key={`${event.id}-${event.position}`}
                  className={`absolute transition-all duration-500 ease-out ${
                    event.position === 0
                      ? "z-20 scale-100 opacity-100"
                      : event.position === -1
                      ? "z-10 -translate-x-48 md:-translate-x-72 scale-75 opacity-60 rotate-y-12"
                      : "z-10 translate-x-48 md:translate-x-72 scale-75 opacity-60 -rotate-y-12"
                  }`}
                  style={{
                    transform: `
                      translateX(${event.position * 280}px)
                      scale(${event.position === 0 ? 1 : 0.75})
                      rotateY(${event.position * -15}deg)
                    `,
                  }}
                >
                  <div className="w-72 md:w-96 bg-card rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
                    {/* Event Image */}
                    <div className="h-48 md:h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Event Content */}
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-12 z-20 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Events Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            All Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
