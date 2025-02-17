import { useState } from "react";
import { Send } from "lucide-react";
import { Card } from "../ui/card";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from "../../lib/supabase";

export const ContactSection = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("data: ", { name: nameValue, email: emailValue, phone: phoneValue, message: messageValue });
    try {
      const { data: response, error } = await supabase
        .from("enquiries")
        .insert([{ name: nameValue, email: emailValue, phone: phoneValue, message: messageValue }])

        if(error) { 
          toast.error("Error sending message!");
        }else{
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
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold mb-4">Get in Touch </h2>
        <p className="mb-10">
          Have a question, feedback, or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <Card className="p-4 bg-white shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={nameValue}
                  onChange={(event) => setNameValue(event.target.value)}
                  className="border border-primary rounded p-2 w-full text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={emailValue}
                  onChange={(event) => setEmailValue(event.target.value)}
                  className="border border-primary rounded p-2 w-full text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phoneValue}
                  onChange={(event) => setPhoneValue(event.target.value)}
                  className="border border-primary rounded p-2 w-full text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block mb-2 text-sm">
                Message
              </label>
              <textarea
                id="message"
                value={messageValue}
                onChange={(event) => setMessageValue(event.target.value)}
                className="border border-primary rounded p-2 w-full h-20 text-sm"
                placeholder="Write your message here"
              />
            </div>
            <div className="mt-4 text-center">
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded flex items-center justify-center hover:bg-primary/90 transition-colors text-sm">
                Send Message
              </button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

