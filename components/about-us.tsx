"use client";

import { useTheme } from "@/components/theme-provider";
import { Users, Target, Shield, Zap } from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function AboutUs() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Enablement",
      description: "Empowering service providers through precise execution and strategic guidance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted Partnership",
      description: "Acting as an extension of your team with proven reliability and expertise"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Operational Excellence",
      description: "Driving efficiency, compliance, and business continuity across all engagements"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Experience",
      description: "Over two decades of hands-on experience in global data centre environments"
    }
  ];

  return (
    <>
    <Navigation/>
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Our Consultancy
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="block">OPTI CORE</span>
              <span className="block text-primary">DC SOLUTIONS</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Specialised Data Centre ICT infrastructure consultancy with global expertise
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Description */}
            <div className="space-y-6">
              <div className={`p-8 rounded-2xl ${
                isDarkMode 
                  ? "bg-card/50 backdrop-blur-sm border border-border" 
                  : "bg-white/80 backdrop-blur-sm border border-gray-200"
              }`}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OPTI CORE DC SOLUTIONS is a consultancy delivering specialised Data Centre ICT infrastructure technical project delivery, ICT design engineering, operations and support services.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  With over two decades of hands-on experience in Global Data Centre environments, our team empowers service providers through strategic enablement and precision execution.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  We act as a trusted extension of your team, delivering scalable, future-ready solutions that drive operational efficiency, compliance, and business continuity.
                </p>
              </div>

              {/* Experience Badge */}
              <div className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? "bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20" 
                  : "bg-gradient-to-br from-primary/5 to-blue-50 border border-primary/10"
              }`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">20+</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">Years of Global Experience</h4>
                    <p className="text-muted-foreground text-sm">
                      Hands-on expertise across diverse data centre environments worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Values */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Our Core Values
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                      isDarkMode 
                        ? "bg-card border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10" 
                        : "bg-white border border-gray-200 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isDarkMode 
                          ? "bg-primary/10 border border-primary/20" 
                          : "bg-primary/10 border border-primary/20"
                      }`}>
                        <div className="text-primary">
                          {value.icon}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div className={`mt-8 p-6 rounded-xl ${
                isDarkMode 
                  ? "bg-gradient-to-br from-card to-card/80 border border-border" 
                  : "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
              }`}>
                <h4 className="text-lg font-bold text-foreground mb-4">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Technical Project Delivery",
                    "ICT Design Engineering", 
                    "Operations Management",
                    "Support Services",
                    "Infrastructure Deployment",
                    "Compliance & Governance"
                  ].map((service, idx) => (
                    <span 
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        isDarkMode 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicator */}
          <div className={`mt-16 p-8 rounded-2xl text-center ${
            isDarkMode 
              ? "bg-card/50 backdrop-blur-sm border border-border" 
              : "bg-white/80 backdrop-blur-sm border border-gray-200"
          }`}>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted Extension of Your Team
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We seamlessly integrate with your organization to deliver scalable, future-ready solutions 
              that align with your business objectives while maintaining the highest standards of operational 
              efficiency and compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}