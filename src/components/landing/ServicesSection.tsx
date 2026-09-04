import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, CalendarHeart, LineChart, Megaphone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

interface ServicesSectionProps {
  services?: Service[];
  onCtaClick?: () => void;
}

const defaultServices: Service[] = [
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: "Membership Plans",
    description:
      "Flexible membership tiers tailored to your business size, stage, and networking goals.",
    tags: ["Tiered plans", "Priority access"],
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Business Consulting",
    description:
      "Get expert guidance on growth strategy, operations, and market expansion from experienced mentors.",
    tags: ["Strategy", "Mentorship"],
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Advertising & Promotion",
    description:
      "Showcase your business to Kolkata's most active community of entrepreneurs and decision makers.",
    tags: ["Brand reach", "Featured listing"],
  },
];

const ServicesSection = ({
  services = defaultServices,
  onCtaClick,
}: ServicesSectionProps) => {
  return (
    <section className="section-white overflow-hidden py-24 md:py-32">
      <div className="section-grid" />
      <div className="container relative mx-auto px-4">
        <Reveal className="mb-14 max-w-xl md:mb-20" y={18}>
          <span className="section-label mb-6">Services</span>
          <h2 className="font-serif text-5xl font-extrabold leading-[1.02] text-foreground sm:text-6xl">
            Everything KBC does for your business
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Featured service — large, image-backed, does most of the visual work */}
          <Reveal className="group relative overflow-hidden rounded-[1.5rem] lg:col-span-7" y={20}>
            <img
              src="/images/networking-opportunities.webp"
              alt="Kolkata Business Club event and networking session"
              className="h-full min-h-[24rem] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-[28rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/90 via-[#071A2F]/25 to-transparent" />
            <div className="relative flex h-full min-h-[24rem] flex-col justify-end p-8 sm:min-h-[28rem] sm:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                <CalendarHeart className="h-3.5 w-3.5" />
                Event Hosting &amp; Sponsorship
              </span>
              <h3 className="mt-5 max-w-md font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                We plan, host, and promote the club's networking events
              </h3>
              <p className="mt-3 max-w-sm text-white/75">
                Workshops and business meetups across Kolkata — from
                intimate roundtables to citywide mixers.
              </p>
              <button
                type="button"
                onClick={onCtaClick}
                className="group/btn mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white"
              >
                <span className="border-b border-white/50 pb-0.5 group-hover/btn:border-white">
                  Learn more
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </Reveal>

          {/* Remaining services — a tight editorial list, not more boxed cards */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col divide-y divide-border rounded-[1.5rem] border border-border">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
                  className="group flex flex-1 items-center gap-4 p-6 transition-colors duration-300 hover:bg-secondary/60 sm:p-7"
                >
                  <div className="icon-badge h-11 w-11 shrink-0">{service.icon}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-sans text-base font-bold text-foreground">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
