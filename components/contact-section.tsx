"use client";

import { useState } from "react";
import { Globe, Mail, Phone, User, Send, MessageSquare, FileText } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send this to your backend/email service
    // For now, we'll simulate API call
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your API
      console.log("Form submitted:", formData);
      
      // Show success message
      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Get Started
            </span>
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground md:text-5xl text-balance mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch to discuss your Data Centre ICT requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-card-foreground mb-2">
                Send us a Message
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                    Subject *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your Data Centre ICT requirements..."
                    />
                  </div>
                </div>

                {/* Submit Button & Status Messages */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      isSubmitting
                        ? "bg-primary/70 cursor-not-allowed"
                        : "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]"
                    } shadow-lg`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-center">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-center">
                      Failed to send message. Please try again or contact us directly.
                    </div>
                  )}
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* General Enquiries */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-6">
                General Enquiries
              </h3>
              <div className="space-y-5">
                <a
                  href="https://www.opticoresolutions.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Website</div>
                    <div className="text-sm">www.opticoresolutions.com.au</div>
                  </div>
                </a>
                <a
                  href="mailto:services@opticoresolutions.com.au"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm">services@opticoresolutions.com.au</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Technical Enquiries */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-6">
                Technical Enquiries
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Contact Person</div>
                    <div className="text-sm">Adnan Abbassi</div>
                  </div>
                </div>
                <a
                  href="mailto:adnan.abbassi@opticoresolutions.com.au"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm">adnan.abbassi@opticoresolutions.com.au</div>
                  </div>
                </a>
                <a
                  href="tel:+61407688331"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-sm">+61-407-688-331</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl border border-border bg-primary/5 p-6 text-center">
              <div className="text-primary font-semibold mb-2">Response Time</div>
              <div className="text-sm text-muted-foreground">
                We typically respond to inquiries within 24 hours during business days
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}