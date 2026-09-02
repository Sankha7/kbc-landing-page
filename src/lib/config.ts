// The real member/admin web app (kbc-client-react) — every "Login" / "Get Started" CTA on
// this marketing site should end up here, not in a waitlist form.
export const APP_URL = (import.meta.env.VITE_APP_URL || "http://localhost:5173").replace(/\/$/, "");

// Backend API origin, used only for the contact form.
export const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8086/api").replace(/\/$/, "");

/** Deep-links into the app's login or signup tab. */
export function appAuthUrl(tab: "login" | "signup" = "login"): string {
  return `${APP_URL}/auth${tab === "signup" ? "?tab=signup" : ""}`;
}
