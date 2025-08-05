import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function AnnouncementsSection() {
  const announcements = [
    {
      title: "Presets: How To Seamlessly Transfer Model Configurations Across Apps",
      excerpt: "Customize once and use everywhere. Server-side presets now simplify your model workflows.",
      date: "7/28/2025",
      isNew: true,
      href: "#"
    },
    {
      title: "New Privacy-Focused Provider Drop: Venice",
      excerpt: "Venice joins OpenRouter as a new provider, offering its flagship uncensored model for private, powerful, and non-restrictive AI.",
      date: "7/14/2025",
      href: "#"
    },
    {
      title: "Use OpenRouter Models in Cursor: Try it with Moonshot AI's Kimi K2",
      excerpt: "Explore it in action: See how effortlessly you can run Kimi K2 in Cursor using OpenRouter's flexible model routing.",
      date: "7/13/2025", 
      href: "#"
    }
  ];

  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-8 gap-16 md:gap-8">
      {/* Left side - Quick links */}
      <div className="flex flex-col gap-4 h-full w-full md:col-span-3">
        <a className="flex-1" href="#">
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg p-4 flex flex-col gap-4 group h-full">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-lg font-semibold">
                <Blocks className="inline size-6 mr-2 mb-1" />
                <span>Explore Models</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover AI models across our collection, from all major labs and providers.
              </p>
            </div>
            <span className="text-muted-foreground inline-flex items-center">
              View models
              <ArrowRight className="ml-1 inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
        
        <a className="flex-1" href="#">
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg p-4 flex flex-col gap-4 group h-full">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-lg font-semibold">
                <BarChart3 className="inline size-6 mr-2 mb-1" />
                <span>Model & App Rankings</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore token usage across models, labs, and public applications.
              </p>
            </div>
            <span className="text-muted-foreground inline-flex items-center">
              View rankings
              <ArrowRight className="ml-1 inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
      </div>

      {/* Right side - Announcements */}  
      <div className="md:col-span-5 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Recent Announcements</h3>
            <a className="text-slate-10 group inline-flex text-sm" href="#">
              <span className="inline-flex items-center gap-1">
                <span>View all</span>
                <ArrowRight className="inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
          
          <div className="flex flex-col gap-6">
            {announcements.map((announcement) => (
              <a key={announcement.title} className="group" href={announcement.href}>
                <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col gap-2 p-4">
                  <h3 className="group-hover/card:text-slate-12 duration-200 text-lg font-medium transition-colors">
                    {announcement.title}
                  </h3>
                  <p className="text-slate-10 text-sm line-clamp-2">
                    {announcement.excerpt}
                  </p>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <time>{announcement.date}</time>
                    {announcement.isNew && (
                      <span className="bg-muted text-muted-foreground ml-2 rounded-sm px-1.5 py-0.5 text-[10px]">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}