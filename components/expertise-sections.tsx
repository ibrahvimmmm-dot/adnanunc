import Image from "next/image"
import { Cable, Users, Briefcase, UserCheck } from "lucide-react"

const expertiseBlocks = [
  {
    id: "stewardship",
    icon: Cable,
    title: "Data Centre Technical Stewardship",
    description:
      "Our engineers act as a vital technical connection between facilities teams and ICT architects and engineers, ensuring that the physical data centre topology is purpose-built for today\u2019s high-performance ICT requirements. We bring expert-level technical knowledge across facilities infrastructure i.e. Telecommunication, Electrical, Mechanical, Architecture and ICT infrastructure i.e. Network systems, Compute, and Storage hardware \u2014 enabling smooth, efficient deployment and ongoing operation of data centre projects.",
    image: "/images/technical-stewardship.jpg",
    imageAlt: "Data centre engineers reviewing technical infrastructure",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Cross-Functional Collaboration",
    description:
      "Our expertise in collaborating with diverse, cross-functional teams in managing ICT physical infrastructure dependencies and internal and external stakeholders in complex projects enables seamless collaboration across disciplines. We foster alignment between stakeholders, ensuring efficient execution and successful project outcomes.",
    image: "/images/collaboration.jpg",
    imageAlt: "Professional team collaborating on data centre projects",
  },
]

const additionalBlocks = [
  {
    icon: Briefcase,
    title: "Diverse Sector Insight",
    description:
      "Having serviced local and international sectors such as Government, Telecommunication, Insurance, Banking, Data Mining and Natural resources and energy sector. We bring a versatile perspective that allows us to tailor solutions to the unique requirements of each industry.",
    image: "/images/DSI.jpg",
    imageAlt: "Diverse sector industries and markets",
  },
  {
    icon: UserCheck,
    title: "Client-Centric Approach",
    description:
      "With extensive experience of more than two decades on the client-side ENTERPRISE, EDGE, MICRO, MODULAR Data Centre and office communication rooms design, project and operations management. We possess a deep understanding of customer expectations and challenges, enabling us to deliver solutions that are precisely aligned with client needs.",
    image: "/images/CCA.jpg",
    imageAlt: "Client-centric approach and customer focus",
  },
]

export function ExpertiseSections() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Expertise
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Deep Technical Knowledge
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {expertiseBlocks.map((block, index) => (
            <div
              key={block.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <block.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {block.description}
                </p>
              </div>
              <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={block.image || "/placeholder.svg"}
                  alt={block.imageAlt}
                  width={640}
                  height={400}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Updated additionalBlocks with images */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {additionalBlocks.map((block) => (
            <div
              key={block.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={block.image || "/placeholder.svg"}
                  alt={block.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <block.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-card-foreground">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}