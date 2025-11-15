import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary tracking-tight">
              News & Updates
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest club activities, workshops, tech insights, and achievements from the CodeSpace community
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 sm:py-16 relative">
        {/* SVG Filter for glassmorphism */}
        <svg style={{ display: "none" }}>
          <filter id="blogDisplacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="200"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block group"
                >
                  <div
                    className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                      backdropFilter: "brightness(1.1) blur(9px) url(#blogDisplacementFilter)",
                      WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                      background: "hsl(var(--glass-bg))",
                    }}
                  >
                    {/* Glassmorphic border effect */}
                    <div
                      className="absolute inset-0 rounded-[28px] pointer-events-none"
                      style={{
                        boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-4 sm:space-y-5 h-full flex flex-col">
                      {/* Category Badge */}
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 self-start">
                        <span className="text-xs sm:text-sm font-bold text-primary">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm sm:text-base text-muted-foreground flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground pt-4 border-t border-border/50">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
