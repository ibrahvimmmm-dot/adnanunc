"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "@/components/theme-provider";

export function ServicesSection() {
  const router = useRouter();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const services = [
    {
      title: "Design and Consulting",
      description:
        "Modular, edge, colocation data centres and office communication rooms ICT design and consultancy.",
      href: "/services/design",
    },
    {
      title: "Projects and Programs",
      description:
        "End-to-end technical planning, execution and delivery of Data Centre infrastructure projects.",
      href: "/services/projects",
    },
    {
      title: "Operations and Services",
      description:
        "Operational support, field services, DCIM monitoring, and hands-on infrastructure management.",
      href: "/services/operations",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          What We Do
        </span>
        <h2 className="mt-3 mb-12 text-3xl font-bold text-foreground md:text-4xl font-heading">
          Our Core Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => router.push(service.href)}
              className={`cursor-pointer rounded-2xl border p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 ${
                isDarkMode
                  ? "border-border bg-card hover:bg-card/80"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              <h3 className={`mb-4 text-xl font-bold ${
                isDarkMode ? "text-card-foreground" : "text-gray-900"
              }`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? "text-muted-foreground" : "text-gray-600"
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}