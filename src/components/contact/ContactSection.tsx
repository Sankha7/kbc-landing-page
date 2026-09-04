import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from "../../lib/config";
import { Reveal } from "../ui/reveal";

const contactDetails = [
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Location",
    value: "Kolkata, West Bengal, India",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "info@kolkatabusinessclub.com",
    href: "mailto:info@kolkatabusinessclub.com",
  },
];

const ContactSection = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameValue.trim();
    const email = emailValue.trim();
    const phone = phoneValue.trim();
    const message = messageValue.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) {
        toast.error("Error sending message!");
      } else {
        toast.success("Message sent successfully! Thank you for reaching out. We'll respond shortly.", {
          position: "top-center",
          style: {
            fontSize: "16px",
            padding: "15px",
            width: "280px",
          },
        });

        setNameValue("");
        setEmailValue("");
        setPhoneValue("");
        setMessageValue("");
      }

    } catch (error) {
      toast.error("Error sending message!");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-pale overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left — dark editorial panel with the pitch + contact details */}
        <div className="section-deep relative flex flex-col justify-between overflow-hidden px-6 py-20 sm:px-10 lg:col-span-5 lg:py-28">
          <div className="section-grid opacity-20" />
          <Reveal className="relative" y={18}>
            <span className="section-label-alt mb-6">Contact Us</span>
            <h1 className="font-serif text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl">
              Let's talk business.
            </h1>
            <p className="mt-6 max-w-sm leading-relaxed text-white/70">
              Have a question, feedback, or just want to say hi? Fill out the
              form and we'll get back to you shortly.
            </p>
          </Reveal>

          <Reveal className="relative mt-16 space-y-1" delay={0.15} y={18}>
            {contactDetails.map((detail, index) => (
              <div
                key={detail.label}
                className={`flex items-center gap-4 py-4 ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-primary">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/45">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="group inline-flex items-center gap-1.5 font-semibold text-white hover:text-primary transition-colors"
                    >
                      {detail.value}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </a>
                  ) : (
                    <p className="font-semibold text-white">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Right — the form, on a plain light surface, full-bleed to the edge */}
        <div className="flex items-center px-6 py-20 sm:px-10 lg:col-span-7 lg:px-16 lg:py-28">
          <Reveal className="w-full max-w-xl" delay={0.1} y={18}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={nameValue}
                    onChange={(event) => setNameValue(event.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="text"
                  id="phone"
                  value={phoneValue}
                  onChange={(event) => setPhoneValue(event.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={messageValue}
                  onChange={(event) => setMessageValue(event.target.value)}
                  className="h-36"
                  placeholder="Write your message here"
                  required
                />
              </div>

              <motion.div whileTap={{ scale: 0.98 }} className="self-start">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 border-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </motion.div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
