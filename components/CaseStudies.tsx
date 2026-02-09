"use client";

import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { ArrowUpRight, Network, Building2, Server, Cloud, Zap, Cpu } from "lucide-react";
import { Navigation } from "@/components/navigation";
export default function CaseStudies() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const caseStudies = [
    {
      title: "Office fit out & Data Cabling",
      description: "Designed and implemented a cross-connect cabling solution for ICT office fitouts, streamlining end-to-end connectivity across IT/OT systems, reducing technician intervention, project complexity, and earning praise from stakeholders and industry partners.",
      icon: <Network className="w-5 h-5" />
    },
    {
      title: "EDGE Data Centre facilities Uplift",
      description: "Successfully delivered a multi-million-dollar EDGE Data Centre Uplift Program across 20+ remote sites, upgrading cabling, power, cooling, and electrical systems in collaboration with engineers, architects, and key stakeholders.",
      icon: <Building2 className="w-5 h-5" />
    },
    {
      title: "DCIM & Monitoring",
      description: "Successfully led a DCIM and monitoring implementation for a multinational enterprise, integrating smart PDUs and critical infrastructure via SNMP/Modbus for real-time alerts, Splunk dashboards, and 24/7 remote support with robust support models and event playbooks.",
      icon: <Server className="w-5 h-5" />
    },
    {
      title: "Cloud & Colocation Migration",
      description: "Led complex cloud and colocation migrations for a multinational enterprise, executing hybrid strategies to transition from on-prem to colocation and cloud with minimal downtime, improved scalability, optimized performance, and alignment to technical requirements and business objectives.",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "DC Migration & Capacity Optimisation",
      description: "Led global Data Centre migrations and capacity optimization across co-located sites, reducing costs while enhancing scalability, flexibility, and efficiency to support future growth and evolving business requirements.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Autonomous Technology Infrastructure",
      description: "Our team acted as a Technical Data Centre SME, supporting senior project managers in the deployment of Autonomous Truck Driving Infrastructure across remote mine site computer rooms. This included the implementation of modular Data Center structured cabling, compute, storage, and network systems to support cutting-edge mining technologies and enhance operational efficiency.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Global Network Deployment",
      description: "Led the physical deployment of global network transformation initiatives, including Cisco ACI, DNAC, SD-WAN, firewall and DWDM upgrades, Aviatrix, and WAN link upgrades from 1Gbps to 10Gbps. Successfully managed the segregation of IT and OT networks to enhance security and operational efficiency, along with seamless service cutovers.",
      icon: <Network className="w-5 h-5" />
    },
    {
      title: "Edge Hosting & Compute Infrastructure Deployment",
      description: "Deployed servers and storage for a multinational financial firm, delivering edge compute capabilities by installing racks, upgrading power, cooling, and cabling to bring processing closer to data sources.",
      icon: <Server className="w-5 h-5" />
    }
  ];

  // Group case studies into rows of 2
  const rows = [];
  for (let i = 0; i < caseStudies.length; i += 2) {
    rows.push(caseStudies.slice(i, i + 2));
  }

  const stats = [
    { value: "100+", label: "Projects Completed", icon: "✓", color: "from-blue-500 to-cyan-500" },
    { value: "20+", label: "Remote Sites", icon: "📍", color: "from-green-500 to-emerald-500" },
    { value: "24/7", label: "Support", icon: "🛡️", color: "from-purple-500 to-pink-500" },
    { value: "Global", label: "Reach", icon: "🌍", color: "from-orange-500 to-red-500" }
  ];

  return (
      <>
      <Navigation />
    <section id="case-studies" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Service Delivery Case Studies
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="block">Real-World</span>
            <span className="block text-primary mt-2">Implementation Examples</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Demonstrating our expertise through successful data centre and ICT implementations 
            across diverse industries and complex challenges
          </p>
        </div>
        </div>

{/* HORIZONTAL IMAGE AT THE TOP */}
        <div className="mb-16 relative group m-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ContSect.jpg"
              alt="OPTI CORE DC SOLUTIONS - Case Studies Overview"
              width={1200}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            
            {/* Image caption overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg inline-block mb-2">
                    <span className="text-gray-900 font-semibold text-sm">Implementation Portfolio</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Global Data Centre & ICT Deployments
                  </h3>
                </div>
                <div className="mt-4 md:mt-0 flex gap-4">
                  <div className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg">
                    <div className="text-white font-bold text-lg">8+</div>
                    <div className="text-white/70 text-xs">Case Studies</div>
                  </div>
                  <div className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg">
                    <div className="text-white font-bold text-lg">Global</div>
                    <div className="text-white/70 text-xs">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
        {/* Case Studies Grid - Horizontal Rows */}
        <div className="space-y-8 mt-10 m-15">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid md:grid-cols-2 gap-6">
              {row.map((study, colIndex) => {
                const studyIndex = rowIndex * 2 + colIndex;
                return (
                  <div 
                    key={studyIndex} 
                    className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] h-full ${
                      isDarkMode 
                        ? "bg-card border-border/50 hover:border-primary hover:shadow-xl hover:shadow-primary/10" 
                        : "bg-white border-gray-200/70 hover:border-primary hover:shadow-xl hover:shadow-primary/5"
                    }`}
                  >
                    {/* Card header with icon and title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isDarkMode 
                          ? "bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20" 
                          : "bg-gradient-to-br from-primary/10 to-blue-50 border border-primary/20"
                      }`}>
                        <div className="text-primary">
                          {study.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground line-clamp-2">
                          {study.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="px-2 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                            Case Study #{studyIndex + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed line-clamp-4">
                      {study.description}
                    </p>
                    
                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-primary text-sm font-medium">View Details</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 p-8 rounded-2xl border-2 ${
          isDarkMode 
            ? "bg-gradient-to-br from-card to-card/80 border-primary/20" 
            : "bg-gradient-to-br from-white to-gray-50 border-primary/10"
        }`}>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Delivery Impact Metrics
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
                <div className="mt-3 text-2xl opacity-60">{stat.icon}</div>
              </div>
            ))}
          </div>
          
          {/* Bottom note */}
          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              Proven track record across <span className="text-primary font-semibold">enterprise, government, and industrial sectors</span>
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
            <span>Request Detailed Case Studies</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            Comprehensive documentation available upon request
          </p>
        </div>
      </div>
    </section>
    </>
  );
}