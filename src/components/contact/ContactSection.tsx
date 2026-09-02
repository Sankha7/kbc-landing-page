import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
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
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Kolkata, West Bengal, India",
  },
  {
    icon: <Mail className="w-5 h-5" />,
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
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          phone: phoneValue,
          message: messageValue,
        }),
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
    <section className="glass-section py-24 overflow-hidden">
      <div className="section-grid" />
      <div className="glow-orb anim-float-slow w-[500px] h-[500px] -top-64 -right-40 opacity-30" />
      <div className="container relative mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="tag-pill mb-5">Contact Us</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mt-5 mb-5">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hi? Fill out the
            form below and we'll get back to you as soon as possible.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto" delay={0.1}>
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="premium-card flex items-start gap-4 p-6"
              >
                <div className="icon-badge w-11 h-11 shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div className="premium-card p-6 flex-1 flex flex-col justify-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Have any questions or need more information? Get in touch
                with us and we'll be happy to help.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="premium-card lg:col-span-3 p-6 sm:p-8">
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
                  className="h-28"
                  placeholder="Write your message here"
                  required
                />
              </div>

              <motion.div whileTap={{ scale: 0.98 }} className="self-start">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-[0_0_40px_-8px_hsl(var(--primary)/0.6)] transition-all border-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </motion.div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
