"use client";

import { Cpu, CpuIcon, Cable, Zap, Server, Thermometer, LayoutGrid, DraftingCompass } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";

export default function DesignAndConsulting() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const designFeatures = [
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Office Communication Rooms",
      description: "Optimized design for office communication infrastructure ensuring seamless connectivity"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Data Hall Design",
      description: "Comprehensive data hall layouts maximizing space utilization and operational efficiency"
    },
    {
      icon: <Cable className="w-6 h-6" />,
      title: "Structured Cabling Design",
      description: "Future-proof cabling infrastructure design supporting current and emerging technologies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ICT Power Specifications",
      description: "Power distribution and backup solutions ensuring uninterrupted operations"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "ICT Cooling Specifications",
      description: "Precision cooling systems design for optimal thermal management"
    },
    {
      icon: <CpuIcon className="w-6 h-6" />,
      title: "ICT Rack Space",
      description: "Intelligent rack layout and space allocation strategies"
    },
    {
      icon: <DraftingCompass className="w-6 h-6" />,
      title: "DC Physical Topology",
      description: "Complete physical infrastructure topology and layout planning"
    }
  ];

  const services = [
    { name: "Concept Design", value: "Initial planning and feasibility studies" },
    { name: "Detailed Engineering", value: "Comprehensive technical specifications" },
    { name: "Implementation Support", value: "On-site guidance and quality assurance" },
    { name: "Optimization", value: "Performance tuning and efficiency improvements" }
  ];

  return (
    <main className="min-h-screen">
      {/* Professional Hero Section */}
      <section className="relative h-[100vh] min-h-[900px]">
        {/* Background Image with Theme-based Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-datacenter.jpg"
            alt="Modern data centre infrastructure"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
          />
          
          {/* DARK MODE OVERLAY - KEEP EXACTLY AS IS */}
          {isDarkMode ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </>
          ) : (
            /* LIGHT MODE OVERLAY - IMPROVED VERSION */
            <>
              {/* Light gradient that preserves image visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/30 to-secondary" />
              {/* Very subtle tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              {/* Smooth transition to features section */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-secondary to-transparent" />
            </>
          )}
        </div>

        {/* Liquid Glass Stats - Positioned on the side */}
        <div className="absolute top-1/3 right-6 lg:right-12 transform -translate-y-1/2">
          <div className="relative group">
            {/* Liquid glass container */}
            <div className={`relative backdrop-blur-[2px] rounded-2xl border p-6 max-w-xs overflow-hidden mt-80 ${
              isDarkMode 
                ? "bg-white/5 border-white/15"  // DARK MODE - keep as is
                : "bg-white/70 border-gray-300/50" // LIGHT MODE - improved
            }`}>
              {/* Liquid effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                isDarkMode 
                  ? "from-primary/5 via-transparent to-cyan-400/5" // DARK MODE - keep as is
                  : "from-primary/10 via-transparent to-blue-400/10" // LIGHT MODE - lighter
              }`} />
              
              {/* Liquid border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-primary/20 via-transparent to-cyan-300/20 p-[2px] -m-[2px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-300/10 rounded-2xl" />
              </div>
              
              {/* Liquid internal flow effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
              
              {/* Stats content */}
              <div className="relative space-y-6">
                {[
                  { value: "100+", label: "Projects Completed" },
                  { value: "99.9%", label: "Design Accuracy" },
                  { value: "24/7", label: "Support Available" },
                  { value: "ISO", label: "Certified Designs" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold mb-1 ${
                      isDarkMode ? "text-foreground" : "text-gray-900" // LIGHT MODE: dark text
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs font-medium tracking-wide ${
                      isDarkMode ? "text-muted-foreground" : "text-gray-700" // LIGHT MODE: darker text
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Liquid reflection effect */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-sm -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyan-300/5 to-transparent rounded-full blur-sm translate-x-1/2 translate-y-1/2" />
            </div>
            
            {/* Hover liquid flow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/5 to-cyan-300/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
          </div>
        </div>

        {/* Hero Content */}
<div className="relative h-full flex items-center">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl">
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border mb-8 ${
        isDarkMode 
          ? "bg-primary/10 border-primary/20" 
          : "bg-primary/10 border-primary/30"
      }`}>
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className={`text-sm font-medium ${
          isDarkMode ? "text-primary-foreground" : "text-primary"
        }`}>
          Premier Australian Data Centre Consultancy
        </span>
      </div>
      
      {/* Main Heading */}
      <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
        isDarkMode ? "text-foreground" : "text-gray-900"
      }`}>
        Services & Solutions
        <span className="block text-primary">Data Centre ICT</span>
      </h1>
      
      {/* Services List */}
      <div className="mb-8">
        <ul className="space-y-2">
          {[
            "Strategy & Roadmaps",
            "Design Engineering",
            "Technical Project & Program Delivery",
            "Operations Management",
            "Field Services (Infrastructure deployments, remote hands)"
          ].map((service, idx) => (
            <li key={idx} className="text-lg text-foreground">
              • {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

      </section>
{/* Value Proposition Section - Updated for dark mode gradient blending */}
{/* Value Proposition Section */}
<section className="py-24 bg-secondary relative">
  {/* Dark mode gradient overlay at the top to blend with hero section */}
  {isDarkMode && (
    <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background via-background/80 to-secondary" />
  )}
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase tracking-widest mb-4">
          Value Proposition
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          "We become a <span className="text-primary">TRUSTED EXTENSION</span> of your team."
        </h2>
      </div>
      
      {/* Content with Image - Rest of the code remains exactly the same... */}
      
      {/* Content with Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="relative">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/valueprop.jpg"
              alt="Trusted Partnership - OPTI CORE DC SOLUTIONS"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          {/* Decorative element */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-lg" />
        </div>
        
        {/* Right side - Text */}
        <div>
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              By partnering with <span className="font-bold text-foreground">OPTI CORE DC SOLUTIONS</span>, our client gains a reliable extension of their DC team—on an ad-hoc, short-term, or long-term basis.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This partnership enhances efficiency, reduces delivery risks, and drives customer satisfaction while enabling you to scale confidently with expert support.
            </p>
          </div>
          
          {/* Benefits list */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { label: "Enhanced Efficiency", icon: "⚡" },
              { label: "Reduced Risks", icon: "🛡️" },
              { label: "Customer Satisfaction", icon: "⭐" },
              { label: "Confident Scaling", icon: "📈" }
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-2xl">{benefit.icon}</span>
                <span className="text-sm font-medium text-foreground">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Services Section */}
<section className="py-24 bg-background relative">
  {/* Gradient overlay at the top for smooth blending */}
  {isDarkMode ? (
    <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-secondary via-secondary/90 to-background" />
  ) : (
    <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-secondary via-secondary/90 to-background" />
  )}
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 inline-block">
        Our Core Services
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Complete Data Centre ICT Solutions
      </h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        End-to-end expertise across the entire data centre lifecycle
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Design Engineering */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl text-primary">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Data Centre ICT<br />Design Engineering
            </h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            We specialise in designing high-performance, scalable data centre and ICT infrastructure solutions. Our expert team delivers innovative, standards-compliant designs tailored to meet the unique needs of your business.
          </p>
        </div>
      </div>

      {/* Project and Program */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl text-primary">📋</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Data Centre ICT<br />Project and Program
            </h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            From concept to completion, we provide end-to-end project and program delivery for data centre and ICT deployments. Our proven methodologies ensure on-time delivery, risk mitigation, and alignment with your strategic objectives.
          </p>
        </div>
      </div>

      {/* Operations & Field Services */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl text-primary">🔧</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Data Centre ICT<br />Operations & Field Services
            </h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            We offer comprehensive operational support and on-site services to ensure your data centre and ICT environments run reliably and efficiently. Our experienced technicians provide proactive maintenance and rapid response support to minimise downtime.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Features Section */}
<section className="py-24 bg-secondary relative">
  {/* Gradient overlay at the top for smooth blending */}
  {isDarkMode ? (
    <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-background via-background/90 to-secondary" />
  ) : (
    <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-background via-background/90 to-secondary" />
  )}
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Comprehensive Design Features
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        End-to-end design engineering services covering all aspects of data centre infrastructure
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {designFeatures.map((feature, index) => (
        <div
          key={index}
          className="bg-card backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <div className="text-primary">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-card-foreground mb-2">
            {feature.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Process Section */}
<section className="py-24 bg-secondary relative">
  {/* Gradient overlay at the top for smooth blending */}
  {isDarkMode ? (
    <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-secondary via-secondary/90 to-secondary" />
  ) : (
    <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-secondary via-secondary/90 to-secondary" />
  )}
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Our Design Process
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Structured methodology ensuring precision, compliance, and optimal performance
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        {services.map((service, index) => (
          <div key={index} className="relative flex-1 text-center mb-8 md:mb-0 md:px-4">
            {/* Content container */}
            <div className="relative">
              {/* Number bubble */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              
              {/* Connector line - starts from right edge of this bubble */}
              {index < services.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+1.5rem)] right-[-6.5rem] h-0.5 bg-border z-0" />
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {service.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              {service.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-24 bg-secondary relative">
  {/* Gradient overlay at the top for smooth blending */}
  {isDarkMode ? (
    <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-secondary via-secondary/90 to-secondary" />
  ) : (
    <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-secondary via-secondary/90 to-secondary" />
  )}
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
      {/* Optional subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
          Ready to Transform Your Infrastructure?
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-8 md:mb-10">
          Partner with our expert design engineers to create optimized, future-proof 
          data centre solutions tailored to your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="px-8 md:px-10 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300"
>
  Start Your Project
</button>
        </div>
      </div>
    </div>
  </div>
</section>    </main>
  );
}