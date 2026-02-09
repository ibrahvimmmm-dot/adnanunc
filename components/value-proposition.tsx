import { Shield } from "lucide-react"

export function ValueProposition() {
  return (
    <section id="value-proposition" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Value Proposition
          </h2>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="relative max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center md:p-14">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <blockquote className="font-heading text-2xl font-bold text-foreground md:text-3xl text-balance">
              {'"We become a TRUSTED EXTENSION of your team."'}
            </blockquote>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              By partnering with OPTI CORE SOLUTIONS, our client gains a reliable extension of their DC team—on an ad-hoc, short-term, or long-term basis. This partnership enhances efficiency, reduces delivery risks, and drives customer satisfaction while enabling you to scale confidently with expert support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
