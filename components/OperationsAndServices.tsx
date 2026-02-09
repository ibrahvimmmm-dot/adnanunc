"use client";

import Image from "next/image";
import OASImage from "@/public/images/OAS.jpg";
import { CheckCircle2, Shield, Cpu, BarChart3, Settings, Zap } from "lucide-react";
import { Navigation } from "@/components/navigation"; // Add Navigation import

export default function OperationsAndServices() {
  const operationalItems = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Strategic Advisory & Roadmaps",
      description: "Aligning data centre strategies with business goals—supporting migration, consolidation, scaling, and long-term transformation initiatives."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Governance, Risk & Compliance",
      description: "Implementing control frameworks to ensure operational integrity, security, and regulatory compliance."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Standards & Specifications",
      description: "Defining Data Centre operating standards, policies, procedures, and specifications."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Data Centre Portfolio Management",
      description: "Managing 125 Data Centre facilities operations globally, ensuring operational efficiency and compliance."
    }
  ];

  const toolsItems = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Installation & Remote Hands Support",
      description: "Deployment of IT/OT infrastructure including racks, servers, storage, structured cabling, and remote hands services."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Audits & Infrastructure Assessments",
      description: "Comprehensive audits and benchmarking to identify gaps, optimize capacity, and improve data centre performance."
    }
  ];

  return (
    <>
      <Navigation /> {/* Add Navigation component */}
      <main className="bg-background min-h-screen">
        {/* Enhanced Hero Section - Unified styling */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-background to-secondary/50 pt-24 lg:pt-32 pb-24 lg:pb-32"> {/* Adjusted padding */}
          <div className="absolute inset-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{
                backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                                  linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>

          <div className="container relative mx-auto px-6">
            {/* Header with Tag - Unified styling */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-600 text-sm font-medium">Operational Excellence</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl font-heading leading-tight">
                Operations &{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Field Services
                </span>
              </h1>

              <p className="mb-10 text-xl leading-relaxed text-muted-foreground max-w-3xl">
                Comprehensive data centre management solutions ensuring operational excellence, 
                infrastructure reliability, and strategic alignment with business objectives.
              </p>

              {/* Enhanced Image Section - Unified styling */}
              <div className="relative my-12 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border">
                  <div className="relative w-full h-64 md:h-80 lg:h-96">
                    <Image
                      src={OASImage}
                      alt="Operations & Field Services showing data centre management and monitoring"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      priority
                      style={{
                        objectPosition: "center 30%",
                      }}
                    />
                  </div>
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium">
                      Advanced operations management with real-time monitoring and 24/7 support
                    </p>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-500 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-blue-500 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Image Description */}
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground">
                  Proactive operations management ensuring optimal performance and reliability of data centre infrastructure
                </p>
              </div>

              {/* CTA Buttons - Unified styling */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Explore Solutions
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                  Contact Experts
                </button>
              </div>
            </div>

            {/* Stats Bar - Unified styling */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "125+", label: "Global Data Centres Managed" },
                { value: "99.99%", label: "Uptime SLA Guarantee" },
                { value: "24/7", label: "Remote Hands Support" },
                { value: "ISO", label: "Certified Operations" }
              ].map((stat, index) => (
                <div key={index} className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-blue-300 transition-colors">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 py-20">
          {/* Operational Excellence - Unified header styling */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Operational Excellence
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Delivering strategic advisory and comprehensive management solutions for global data centre operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {operationalItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-xl p-6 border border-border hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Bar - Updated to unified styling */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">125+</div>
                  <div className="text-blue-100">Global Data Centres Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.99%</div>
                  <div className="text-blue-100">Uptime SLA Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-100">Remote Hands Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hands-On Tools - Updated split layout */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Hands-On Tools & Support
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Expert field services providing comprehensive technical support and infrastructure management
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {toolsItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                      <div className="text-green-600">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
                  <div className="space-y-4">
                    {["Server Rack Installation", "Cable Management", "Hardware Deployment", "Infrastructure Audits"].map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span className="text-white/90">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-white/80 text-sm italic">
                      "Our expert field services team provides rapid deployment and maintenance support, 
                      ensuring your infrastructure operates at peak performance."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DCIM & Monitoring - Updated to unified styling */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
                  DCIM & Monitoring Solutions
                </h2>
              </div>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Advanced Data Centre Infrastructure Management providing real-time visibility, 
                automated asset tracking, and comprehensive monitoring.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {["Real-time Monitoring", "Asset Tracking", "Energy Management", "Predictive Analytics"].map((feature, index) => (
                  <div key={index} className="bg-background rounded-xl p-4 border border-border shadow-sm text-center hover:border-blue-300 transition-colors">
                    <div className="text-sm font-medium text-foreground">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/30 to-background rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our integrated solutions enable predictive analytics, energy optimization, and seamless remote operations, 
                  ensuring maximum efficiency and reliability for your data centre infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section - Unified styling */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
                Ready to Optimize Your Operations?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Partner with us to transform your data centre operations with cutting-edge 
                solutions and expert field services.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Schedule a Consultation
                </button>
                <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  Request Service Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}