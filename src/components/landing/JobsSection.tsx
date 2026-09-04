import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Wallet } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type JobType = "Full-Time" | "Consulting" | "Freelance & Gigs";

interface Job {
  id: number;
  title: string;
  company: string;
  type: JobType;
  location: string;
  budget: string;
  description: string;
  skills: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Business Development Executive",
    company: "Salt Lake Fintech Co.",
    type: "Full-Time",
    location: "Kolkata, Salt Lake",
    budget: "₹4L – ₹6L /year",
    description:
      "Drive B2B partnerships and manage key accounts for a fast-growing fintech startup expanding across Eastern India.",
    skills: ["B2B Sales", "Partnerships", "CRM"],
  },
  {
    id: 2,
    title: "CA & GST Audit Consultant",
    company: "Retail Chain Group",
    type: "Consulting",
    location: "Kolkata / Remote",
    budget: "₹15,000 – ₹30,000 /project",
    description:
      "Conduct GST compliance audits and filing reviews for small and mid-sized retail businesses across the city.",
    skills: ["GST", "Compliance", "Auditing"],
  },
  {
    id: 3,
    title: "Social Media & Content Manager",
    company: "D2C Fashion Label",
    type: "Freelance & Gigs",
    location: "Remote",
    budget: "₹18,000 /month",
    description:
      "Own Instagram and LinkedIn content calendars for a homegrown fashion brand launching this quarter.",
    skills: ["Content", "Instagram", "Branding"],
  },
  {
    id: 4,
    title: "Video Editor — Product Launch Campaign",
    company: "Home Appliances Startup",
    type: "Freelance & Gigs",
    location: "Remote",
    budget: "₹8,000 /project",
    description:
      "Edit a 3-part launch video series ahead of a festive-season product release. Raw footage provided.",
    skills: ["Video Editing", "Premiere Pro", "Motion Graphics"],
  },
  {
    id: 5,
    title: "Bookkeeping & Accounts Support",
    company: "Logistics & Freight Co.",
    type: "Consulting",
    location: "Kolkata",
    budget: "₹10,000 /month",
    description:
      "Maintain monthly books, reconcile accounts, and manage GST filings for a growing logistics company.",
    skills: ["Bookkeeping", "Tally", "GST Filing"],
  },
  {
    id: 6,
    title: "Frontend Developer — Directory Revamp",
    company: "Kolkata Business Club",
    type: "Freelance & Gigs",
    location: "Remote",
    budget: "₹50,000 /project",
    description:
      "Rebuild the club's member business directory in React with a modern, mobile-first design system.",
    skills: ["React", "Tailwind", "UI/UX"],
  },
];

const filters: Array<"All" | JobType> = [
  "All",
  "Full-Time",
  "Consulting",
  "Freelance & Gigs",
];

const JobRow = React.forwardRef<HTMLDivElement, { job: Job; onCtaClick?: () => void; index: number }>(
  ({ job, onCtaClick, index }, ref) => (
  <motion.div
    ref={ref}
    layout
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35, delay: index * 0.03, ease: EASE }}
    className="group grid grid-cols-1 items-start gap-4 border-b border-border p-6 transition-colors duration-300 last:border-b-0 hover:bg-secondary/50 sm:grid-cols-12 sm:items-center sm:gap-6 sm:p-7"
  >
    <div className="flex items-center gap-4 sm:col-span-4">
      <div className="icon-badge h-11 w-11 shrink-0 font-serif text-base font-bold">
        {job.company.charAt(0)}
      </div>
      <div className="min-w-0">
        <h3 className="font-sans text-base font-bold text-foreground sm:truncate">{job.title}</h3>
        <p className="truncate text-sm text-muted-foreground">{job.company}</p>
      </div>
    </div>

    <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-4 sm:line-clamp-2">
      {job.description}
    </p>

    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground sm:col-span-3 sm:flex-col sm:items-start sm:gap-1">
      <span className="tag-pill">{job.type}</span>
      <span className="inline-flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 text-primary" />
        {job.location}
      </span>
      <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
        <Wallet className="h-3.5 w-3.5 text-primary" />
        {job.budget}
      </span>
    </div>

    <div className="sm:col-span-1 sm:flex sm:justify-end">
      <button
        type="button"
        onClick={onCtaClick}
        aria-label={`Apply to ${job.title}`}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
      >
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  </motion.div>
  ),
);
JobRow.displayName = "JobRow";

interface JobsSectionProps {
  onCtaClick?: () => void;
}

const JobsSection = ({ onCtaClick }: JobsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<"All" | JobType>("All");

  const filteredJobs =
    activeFilter === "All" ? jobs : jobs.filter((job) => job.type === activeFilter);

  return (
    <section className="section-periwinkle overflow-hidden py-24 md:py-32">
      <div className="section-grid" />
      <div className="container relative mx-auto px-4">
        <div className="mb-10 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl" y={18}>
            <span className="section-label mb-6">Jobs &amp; Gigs</span>
            <h2 className="font-serif text-5xl font-extrabold leading-[1.02] text-foreground sm:text-6xl">
              The board where members hire members
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Post one-off freelance tasks, hire verified members, or find
              your next full-time role — all within the club.
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap gap-2.5 md:justify-end" delay={0.1}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </Reveal>
        </div>

        <p className="mb-6 text-xs uppercase tracking-wider text-muted-foreground/70">
          Example listings &mdash; the kind of opportunities members post
        </p>

        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-[0_20px_60px_-32px_rgba(6,19,38,0.35)]">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, index) => (
              <JobRow key={job.id} job={job} onCtaClick={onCtaClick} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <Reveal className="mt-10 text-center" delay={0.15}>
          <button
            type="button"
            onClick={onCtaClick}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <span className="border-b border-primary/40 pb-0.5 group-hover:border-primary">
              Post a job or gig
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default JobsSection;
