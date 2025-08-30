import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {supabase} from "../../lib/supabase"; 

interface RegistrationDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  business_type: string;
  about: string;
}

const RegistrationDialog = ({
  open,
  onOpenChange,
}: RegistrationDialogProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    const submissionData = { ...data, business_type: selectedOption };
    setIsSubmitting(true);
    try {

        const apiResponse = await fetch("https://kbc-node.dotlinkertech.com/waitlist/addUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });
``
        if (!apiResponse.ok) {
          throw new Error("Failed to call external API");
        }

        toast.success("Successfully joined waitlist");
        reset();

    } catch (error) {
      toast.error("Failed to join waitlist");
      console.log("response", error);
    } finally {
      setIsSubmitting(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Join the Waitlist
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Be among the first to access the Kolkata Business Club mobile app
              when it launches.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  id="first_name"
                  placeholder="John"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                  className={errors.first_name ? "border-red-500" : ""}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                  id="last_name"
                  placeholder="Doe"
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                  className={errors.last_name ? "border-red-500" : ""}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                placeholder="Business Name Ltd."
                {...register("company", {
                  required: "Company name is required",
                })}
                className={errors.company ? "border-red-500" : ""}
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="business_type">Business Type</Label>
              <Select
                {...register("business_type")}
                value={selectedOption}
                onValueChange={(value) => setSelectedOption(value)}
              >
                <SelectTrigger
                  className={errors.business_type ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                  <SelectItem value="sme">SME</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                </SelectContent>
              </Select>
              {/* {errors.business_type && (
                <p className="text-red-500 text-sm">
                  {errors.business_type?.message}
                </p>
              )} */}
            </div>

            <div className="space-y-2">
              <Label htmlFor="about">About Your Business</Label>
              <Textarea
                id="about"
                placeholder="Tell us about your business and what you hope to achieve as a member"
                className={`h-24 ${errors.about ? "border-red-500" : ""}`}
                {...register("about", {
                  required: "Please tell us about your business",
                })}
              />
              {errors.about && (
                <p className="text-red-500 text-sm">{errors.about.message}</p>
              )}
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange?.(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#E31E24] text-white hover:bg-[#0A2558]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join Waitlist"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;

