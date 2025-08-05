import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  User,
  LogIn
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OR</span>
            </div>
            <span className="font-semibold text-lg">OpenRouter</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-10 bg-muted border-0"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 text-[10px] font-medium text-muted-foreground opacity-100">
              ⌘
            </kbd>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Models
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Chat
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Rankings
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Enterprise
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
        </nav>

        {/* Sign In */}
        <div className="flex items-center space-x-4 ml-6">
          <Button variant="ghost" size="sm">
            <LogIn className="h-4 w-4 mr-2" />
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}