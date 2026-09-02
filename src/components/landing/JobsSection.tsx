import React, { useState } from "react";
import { ArrowRight, MapPin, Wallet, Clock } from "lucide-react";

type JobType = "Full-Time" | "Consulting" | "Freelance & Gigs";

interface Job {
  id: number;
  title: string;
  company: string;
  type: JobType;
  location: string;
  budget: string;
  postedAgo: string;
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
    postedAgo: "2 days ago",
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
    postedAgo: "5 days ago",
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
    postedAgo: "1 day ago",
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
    postedAgo: "3 days ago",
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
    postedAgo: "1 week ago",
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
    postedAgo: "4 days ago",
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

const JobCard = ({ job }: { job: Job }) => (
  <div className="premium-card group flex h-full flex-col p-7">
    <div className="flex items-start justify-between gap-3 mb-4">
      <div className="flex items-center gap-3">
        <div className="icon-badge w-11 h-11 shrink-0 font-serif font-bold text-lg">
          {job.company.charAt(0)}
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-foreground leading-snug">
            {job.title}
          </h3>
          <p className="text-sm text-muted-foreground">{job.company}</p>
        </div>
      </div>
    </div>

    <span className="tag-pill w-fit mb-4">{job.type}</span>

    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
      {job.description}
    </p>

    <div className="space-y-2 mb-5 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-accent shrink-0" />
        {job.location}
      </div>
      <div className="flex items-center gap-2">
        <Wallet className="h-4 w-4 text-accent shrink-0" />
        {job.budget}
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-accent shrink-0" />
        Posted {job.postedAgo}
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      {job.skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
        >
          {skill}
        </span>
      ))}
    </div>

    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-accent">
      Apply Now
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </div>
  </div>
);

const JobsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | JobType>("All");

  const filteredJobs =
    activeFilter === "All"
      ? jobs
      : jobs.filter((job) => job.type === activeFilter);

  return (
    <section className="glass-section py-24 overflow-hidden">
      <div className="section-grid" />
      <div className="glow-orb anim-float-medium w-[500px] h-[500px] -top-64 -left-40 opacity-40" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <span className="tag-pill mb-5">Jobs &amp; Gigs</span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mt-5 mb-5">
            Gigs &amp; Project Board
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Post one-off freelance tasks, hire verified members, or find your
            next full-time role &mdash; all within the club.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "border-accent bg-accent/15 text-accent shadow-[0_0_20px_-4px_hsl(var(--accent)/0.5)]"
                  : "border-border text-muted-foreground hover:border-accent/40 hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
