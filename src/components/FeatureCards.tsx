import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Blocks, Shield } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      link: "Browse all",
      href: "#",
      visual: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
          </div>
          <div className="absolute inset-4 grid grid-cols-5 gap-x-0 gap-y-1 scale-105 z-10">
            {Array.from({ length: 25 }, (_, i) => (
              <div
                key={i}
                className="size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out"
                style={{
                  animation: `4s ease-in-out ${i * 150}ms infinite normal none running float${i % 5}`,
                  opacity: 0.85
                }}
              >
                <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                  <span className="text-xs">🤖</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Higher Availability", 
      description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      link: "Learn more",
      href: "#",
      visual: (
        <div className="h-full flex items-center justify-center">
          <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
            <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
              anthropic/claude-3.7-sonnet
            </div>
            <svg 
              width="100%" 
              height="70" 
              viewBox="0 0 200 70" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-muted-foreground/60"
            >
              <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
              <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
              <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
            </svg>
            <div className="flex justify-between w-full">
              {["🔍", "🤖", "☁️"].map((icon, index) => (
                <div key={index} className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
                  <span className="text-sm">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.",
      link: "Learn more", 
      href: "#",
      visual: (
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-0 z-10">
            <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-t via-transparent opacity-20"></div>
            <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-r via-transparent opacity-20"></div>
          </div>
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-primary/20" />
          </div>
        </div>
      )
    },
    {
      title: "Custom Data Policies",
      description: "Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.",
      link: "View docs",
      href: "#",
      visual: (
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-52">
            <div className="flex justify-between items-end w-full px-[45px] -mb-2">
              <Shield className="size-4 text-muted-foreground" />
              <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
                <div className="w-5 h-5 bg-green-9 rounded-full flex items-center justify-center text-white text-xs">✓</div>
              </div>
              <Shield className="size-4 text-muted-foreground" />
            </div>
            <Shield className="size-32 text-muted-foreground/60" strokeWidth={0.3} />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-4 md:space-y-8 max-w-screen-2xl">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {features.map((feature) => (
          <a key={feature.title} className="h-full" href={feature.href}>
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
              <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
                {feature.visual}
              </div>
              <div className="flex flex-col gap-2 px-6 py-4 h-full">
                <div className="flex flex-col gap-2 h-full">
                  <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <span className="text-primary group-hover/card:underline">
                  {feature.link}
                  <ExternalLink className="ml-1 inline-block w-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}