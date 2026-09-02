import React from "react";
import { Home, Users, Calendar, User as UserIcon } from "lucide-react";

interface AppLaunchSectionProps {
  title?: string;
  subtitle?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

const PhoneMockup = () => (
  <div className="relative mx-auto w-[260px] sm:w-[280px]">
    <div className="glow-orb w-[360px] h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
    <div className="relative rounded-[2.5rem] border-8 border-secondary bg-secondary shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
      {/* Notch */}
      <div className="relative bg-background">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-5 w-24 bg-secondary rounded-b-xl z-10" />

        {/* App header */}
        <div className="bg-primary pt-8 pb-4 px-4 flex items-center justify-center">
          <div className="flex items-center font-serif text-xl font-bold">
            <span className="text-white">KB</span>
            <span className="text-[#E31E24]">C</span>
            <span className="text-[#E31E24]">.</span>
          </div>
        </div>

        {/* App content */}
        <div className="px-4 py-5 space-y-3 min-h-[360px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-accent/15 bg-card p-3"
            >
              <div className="h-9 w-9 shrink-0 rounded-full bg-accent/20" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 w-3/4 rounded-full bg-muted" />
                <div className="h-2 w-1/2 rounded-full bg-muted" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around border-t border-accent/15 bg-card py-3">
          <Home className="w-5 h-5 text-accent" />
          <Users className="w-5 h-5 text-muted-foreground" />
          <Calendar className="w-5 h-5 text-muted-foreground" />
          <UserIcon className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  </div>
);

const AppLaunchSection = ({
  title = "The App Is Launching Soon",
  subtitle = "Download Kolkata Business Club the moment it goes live on the App Store and Google Play.",
  playStoreUrl = "https://play.google.com/store/apps/details?id=com.kolkata.business.club",
  appStoreUrl = "https://apps.apple.com/in/app/kolkata-business-club/id6758504391",
}: AppLaunchSectionProps) => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container relative mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <span className="tag-pill mb-6">Coming Soon</span>

            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-foreground mt-5 mb-5 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto md:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppLaunchSection;
