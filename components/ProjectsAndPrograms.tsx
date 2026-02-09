"use client";

import Image from "next/image";
import ProjectsImage from "@/public/images/Projects.jpg";
import { Calendar, Target, CpuIcon, Zap, GitCompare, RefreshCw, Network, Users } from "lucide-react";
import { Navigation } from "@/components/navigation"; // Add Navigation import

export default function ProjectsAndPrograms() {
  const projectTypes = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Data Centre Commissioning & Decommissioning",
      description: "Complete lifecycle management from initial setup to final decommissioning"
    },
    {
      icon: <GitCompare className="w-6 h-6" />,
      title: "Data Centre Migrations",
      description: "Seamless migration planning and execution with zero downtime strategies"
    },
    {
      icon: <CpuIcon className="w-6 h-6" />,
      title: "ICT Compute/Storage/Network Deployments",
      description: "End-to-end deployment of computing, storage, and networking infrastructure"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Infrastructure Upgrades",
      description: "Structured cabling, power distribution, and cooling system enhancements"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Technical Service Cutovers",
      description: "Smooth transition from implementation to operational phases"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Controlled Shutdown & Startup",
      description: "Planned maintenance and system lifecycle management procedures"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "System Dependency Mapping",
      description: "Comprehensive analysis of system interdependencies and relationships"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-Functional Collaboration",
      description: "Coordinated efforts across multiple teams and stakeholders"
    }
  ];

  const phases = [
    {
      phase: "Planning",
      tasks: ["Requirement Analysis", "Risk Assessment", "Resource Planning", "Timeline Development"]
    },
    {
      phase: "Execution",
      tasks: ["Deployment", "Integration", "Testing", "Quality Assurance"]
    },
    {
      phase: "Delivery",
      tasks: ["Documentation", "Training", "Handover", "Post-Implementation Support"]
    }
  ];

  return (
    <>
      <Navigation /> {/* Add Navigation component */}
      <main className="bg-background min-h-screen">
        {/* Enhanced Hero Section with same styling */}
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
            {/* Header with Tag - Same styling */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-600 text-sm font-medium">End-to-End Project Delivery</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl font-heading leading-tight">
                Technical{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Programs & Projects
                </span>
              </h1>

              <p className="mb-10 text-xl leading-relaxed text-muted-foreground max-w-3xl">
                Comprehensive planning, execution, and delivery of Data Centre infrastructure projects 
                with proven methodologies and technical excellence.
              </p>

              {/* Enhanced Image Section - Same styling */}
              <div className="relative my-12 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border">
                  <div className="relative w-full h-64 md:h-80 lg:h-96">
                    <Image
                      src={ProjectsImage}
                      alt="Technical Programs and Projects showing project management and data centre deployment"
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
                      Strategic project delivery with meticulous planning and execution oversight
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
                  Professional project management ensuring successful delivery of complex data centre initiatives
                </p>
              </div>

              {/* CTA Buttons - Same styling */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  View Case Studies
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                  Start a Project
                </button>
              </div>
            </div>

            {/* Stats Bar - Same styling */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "99.5%", label: "On-Time Delivery" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Project Support" }
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
          {/* Introduction - Updated styling */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
              Comprehensive Project Delivery
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              End-to-end technical planning, execution and delivery of Data Centre infrastructure 
              projects using industry-leading methodologies and best practices.
            </p>
          </div>

          {/* Project Types Grid - Updated to match Design & Consulting */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectTypes.map((project, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-xl p-6 border border-border hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Phases - Enhanced styling */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Our Delivery Methodology
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Structured approach ensuring successful project execution from conception to completion
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-background rounded-xl p-8 border border-border hover:border-blue-300 transition-all duration-300 h-full group hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {phase.phase}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                          <span className="text-muted-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Connector Line - Enhanced */}
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-blue-300 to-cyan-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section - Updated to match Design & Consulting */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.5%</div>
                <div className="text-blue-100">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100">Project Support</div>
              </div>
            </div>
          </div>

          {/* CTA Section - Updated to match Design & Consulting */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
                Start Your Project with Confidence
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Leverage our proven project delivery expertise to ensure your data centre 
                initiatives are executed flawlessly, on time, and within budget.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Request Proposal
                </button>
                <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  Schedule Discovery Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}