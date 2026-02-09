"use client";

import { Cpu, CpuIcon, Cable, Zap, Server, Thermometer, LayoutGrid, DraftingCompass } from "lucide-react";
import Image from "next/image";
import { Navigation } from "@/components/navigation"; // Import Navigation

export default function DesignAndConsulting() {
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
    <>
      <Navigation />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-background to-secondary/50 pt-24 lg:pt-32 pb-24 lg:pb-32">
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
            {/* Header with Tag */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-600 text-sm font-medium">Expert Engineering Services</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl font-heading leading-tight">
                Data Centre{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  ICT Design Engineering
                </span>
                {" "}& Consulting
              </h1>

              <p className="mb-10 text-xl leading-relaxed text-muted-foreground max-w-3xl">
                Delivering tailored, high-performance infrastructure designs that align with ICT and business demands. 
                Specializing in modular, edge, colocation data centres and office communication rooms.
              </p>

              {/* Enhanced Image Section */}
              <div className="relative my-12 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border">
                  {/* Use Next.js Image component for better optimization */}
                  <div className="relative w-full h-64 md:h-80 lg:h-96">
                    <Image
                      src="/images/design.jpg"
                      alt="Data Centre Design Illustration showing modern server racks, cooling systems, and network infrastructure"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      priority
                    />
                  </div>
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium">
                      Advanced data centre layout with optimized airflow management and power distribution
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
                  Modern data centre design showcasing advanced cooling solutions, efficient rack layouts, 
                  and optimized cable management systems
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Request Consultation
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "100+", label: "Projects Completed" },
                { value: "99.9%", label: "Design Accuracy" },
                { value: "24/7", label: "Support Available" },
                { value: "ISO", label: "Certified Designs" }
              ].map((stat, index) => (
                <div key={index} className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-blue-300 transition-colors">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Comprehensive Design Features
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                End-to-end design engineering services covering all aspects of data centre infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-xl p-6 border border-border hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Our Design Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Structured methodology ensuring precision, compliance, and optimal performance
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'} md:pr-8 md:pl-0 pl-8`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2" />
                    
                    <div className={`bg-background rounded-xl p-6 border border-border hover:border-blue-300 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {service.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
                  Ready to Transform Your Infrastructure?
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  Partner with our expert design engineers to create optimized, future-proof 
                  data centre solutions tailored to your specific needs.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="px-10 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    Start Your Project
                  </button>
                  <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}