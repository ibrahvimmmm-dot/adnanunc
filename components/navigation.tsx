"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "/services/About" },
  { label: "Case Studies", href: "/services/CaseStudies" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },

];

// Services categories for dropdown (now routes)
const servicesDropdown = [
  { label: "Design and Consulting", href: "/services/design" },
  { label: "Projects and Programs", href: "/services/projects" },
  { label: "Operations and Services", href: "/services/operations" },
];

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
    } else if (href.startsWith("#")) {
      const sectionId = href.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServicesClick = (isMobile: boolean = false) => {
    if (isMobile) {
      setIsMobileMenuOpen(false);

      if (pathname === "/") {
        setTimeout(() => {
          const servicesSection = document.getElementById("services");
          if (servicesSection) {
            servicesSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }, 100);
      } else {
        router.push("/#services");
      }
    } else {
      setIsServicesOpen(!isServicesOpen);
    }
  };

  const scrollToServices = () => {
    if (pathname === "/") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      router.push("/#services");
    }
    setIsServicesOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Theme-based color classes
  const isDarkMode = theme === "dark";

  // Text color classes based on theme
  const textColorClass = isDarkMode
    ? "text-white hover:text-primary/80"
    : "text-gray-800 hover:text-primary";

  const logoTextColor = isDarkMode
    ? "text-white"
    : "text-gray-900";

  const logoSubtextColor = isDarkMode
    ? "text-muted-foreground"
    : "text-gray-600";

  const iconColorClass = isDarkMode
    ? "text-white"
    : "text-gray-800";

  const dropdownTextColor = isDarkMode
    ? "text-muted-foreground hover:text-white"
    : "text-gray-700 hover:text-primary";

  const dropdownBg = isDarkMode
    ? "border-border bg-card/95 backdrop-blur-sm"
    : "border-gray-200 bg-white/95 backdrop-blur-sm";

  const mobileMenuBg = isDarkMode
    ? "border-border bg-card/95 backdrop-blur-sm"
    : "border-gray-200 bg-white/95 backdrop-blur-sm";

  const mobileTextColor = isDarkMode
    ? "text-muted-foreground hover:text-white"
    : "text-gray-700 hover:text-primary";

  const borderColor = isDarkMode
    ? "border-border"
    : "border-gray-200";

  const underlineColor = isDarkMode
    ? "primary"
    : "primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? `${isDarkMode ? "bg-transparent" : "bg-transparent"} backdrop-blur-sm border-b ${borderColor} shadow-sm`
        : "bg-transparent"
        }`}
    >
      {/* Theme-based gradient overlay - only when scrolled */}
      {isScrolled && isDarkMode && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-400/5" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </>
      )}

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 relative z-10 group">
          {/* Regular img tag - preserves aspect ratio */}
          <div className="transition-all duration-300 group-hover:scale-105">
            <img
              src="/images/logo.jpg"
              alt="OPTI CORE DC SOLUTIONS Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading text-lg font-bold leading-tight ${logoTextColor} transition-colors duration-300 group-hover:text-primary`}>
              OPTI CORE
            </span>
            <span className={`text-xs tracking-wider ${logoSubtextColor} transition-colors duration-300 group-hover:text-primary/80`}>
              DCC SOLUTIONS
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {/* Home */}
          <button
            onClick={() => handleNavigate("/")}
            className={`text-sm font-medium transition-colors duration-300 hover:scale-105 ${textColorClass}`}
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div className="relative group/services">
            <div className="flex items-center gap-2">
              {/* Services text that scrolls to section */}
              <button
                onClick={scrollToServices}
                className={`text-sm font-medium transition-colors duration-300 hover:scale-105 ${textColorClass}`}
              >
                Services
              </button>
              {/* Dropdown arrow */}
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={textColorClass}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>
            </div>
            {isServicesOpen && (
              <div className={`absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden border shadow-xl z-50 ${dropdownBg}`}>
                <ul className="flex flex-col">
                  {servicesDropdown.map((service) => (
                    <li key={service.href}>
                      <button
                        onClick={() => handleNavigate(service.href)}
                        className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-300 hover:bg-accent ${dropdownTextColor}`}
                      >
                        {service.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Remaining nav links */}
          {navLinks.slice(2).map((link) => ( // Changed from slice(1) to slice(2)
            <button
              key={link.href}
              onClick={() => handleNavigate(link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:scale-105 ${textColorClass}`}
            >
              {link.label}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent border border-border hover:bg-accent/80 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
          </button>

          {/* Get In Touch Button */}
          <button
            onClick={() => handleNavigate("#contact")}
            className="relative px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300"
          >
            Get In Touch
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Theme Toggle for mobile */}
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent border border-border hover:bg-accent/80 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
          </button>

          <button
            type="button"
            className={`relative z-10 transition-colors duration-300 ${iconColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`relative border-t lg:hidden ${mobileMenuBg}`}>
          <nav className="relative mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
            {/* Home */}
            <button
              onClick={() => handleNavigate("/")}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 text-left ${mobileTextColor}`}
            >
              Home
            </button>

            {/* Services - Scrolls to section on mobile */}
            <button
              onClick={() => handleServicesClick(true)}
              className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 text-left ${mobileTextColor}`}
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Service pages */}
            <div className={`flex flex-col border-t ${borderColor}`}>
              {servicesDropdown.map((service) => (
                <button
                  key={service.href}
                  onClick={() => handleNavigate(service.href)}
                  className={`w-full px-8 py-3 text-left text-sm font-medium transition-colors duration-300 ${mobileTextColor}`}
                >
                  {service.label}
                </button>
              ))}
            </div>

            {/* Case Studies (Mobile) */}
            <button
              onClick={() => handleNavigate("/case-studies")}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 text-left ${mobileTextColor}`}
            >
              Case Studies
            </button>

            {/* Case Studies (Mobile) */}
            <button
              onClick={() => handleNavigate("/about-us")}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 text-left ${mobileTextColor}`}
            >
              About
            </button>

            {/* Remaining nav links */}
            {navLinks.slice(2).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 text-left ${mobileTextColor}`}
              >
                {link.label}
              </button>
            ))}

            {/* Mobile Get In Touch Button */}
            <button
              onClick={() => handleNavigate("#contact")}
              className="mt-2 px-4 py-3 text-center text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}