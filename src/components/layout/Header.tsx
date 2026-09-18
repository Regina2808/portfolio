import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Projets", path: "/work" },
  { name: "À propos", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Header(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial",
          isScrolled
            ? "bg-background/95 backdrop-blur-sm py-4"
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl text-ink transition-opacity duration-300 hover:opacity-70"
            >
              Régina Awadjihe
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "editorial-link text-sm font-medium tracking-wide text-ink-light transition-colors duration-300 hover:text-ink",
                      location.pathname === link.path && "text-ink"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-ink transition-opacity duration-300 hover:opacity-70"
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation mobile"
          className="fixed inset-0 z-[100] bg-white md:hidden h-screen w-screen flex flex-col justify-between p-6 animate-in fade-in duration-300"
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-serif text-xl text-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Régina Awadjihe
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-ink transition-opacity duration-300 hover:opacity-70"
              aria-label="Fermer le menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="my-auto">
            <ul className="space-y-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "font-serif text-4xl text-ink-light transition-colors duration-300 hover:text-ink block",
                      location.pathname === link.path && "text-ink font-semibold"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="pt-8 border-t border-divider">
            <div className="flex gap-6">
              <a
                href="https://github.com/Regina2808"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                GitHub
              </a>
              <a
                href="https://gitlab.com/reginaawadjihe38/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                GitLab
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}