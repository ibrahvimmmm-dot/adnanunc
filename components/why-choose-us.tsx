import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 mb-16">
          {/* Left Column - Why Opti-Core Solutions */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why Opti-Core Solutions?
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Trusted Expertise You Can Rely On
            </h2>
            <div className="mt-10 flex flex-col gap-5">
              {[
                "Proven expertise in mission-critical Data Centre environments",
                "Trusted by global enterprises and service providers",
                "Seamless integration with your delivery teams",
                "Commitment to safety, compliance, and excellence"
              ].map((reason) => (
                <div key={reason} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base leading-relaxed text-secondary-foreground">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Industry Insight */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Industry Insight
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance mb-8">
              Comprehensive Data Centre Expertise
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                "ENTERPRISE DATA CENTRES",
                "COLOCATION DATA CENTRES (Colo)",
                "HYPERSCALE DATA CENTRES",
                "EDGE DATA CENTRES",
                "MICRO DATA CENTRES",
                "MODULAR DATA CENTRES",
                "HIGH-PERFORMANCE COMPUTING (HPC) DATA CENTRES",
                "OFFICE COMMUNICATION ROOMS"
              ].map((insight) => (
                <div key={insight} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {insight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full width image below both columns */}
        <div className="rounded-2xl overflow-hidden">
          <div className="relative h-80 w-full">
            <Image
              src="/images/whychooseus.jpg"
              alt="Why Choose Opti-Core Solutions - Trusted Data Centre Expertise"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}