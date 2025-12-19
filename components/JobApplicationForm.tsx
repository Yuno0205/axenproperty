"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface JobApplicationFormProps {
  position: string;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  achievements: string;
  cv: FileList;
}

export default function JobApplicationForm({
  position,
  className,
}: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", position);
      formData.append("achievements", data.achievements);

      if (data.cv && data.cv[0]) {
        const file = data.cv[0];
        const maxSize = 10 * 1024 * 1024; // 10MB
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (file.size > maxSize) {
          setError("File size must be less than 10MB");
          setIsSubmitting(false);
          return;
        }

        if (!allowedTypes.includes(file.type)) {
          setError("Only PDF, DOC, and DOCX files are allowed");
          setIsSubmitting(false);
          return;
        }

        formData.append("cv", data.cv[0]);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application.");
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
      setError("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className={cn(
          "bg-green-50 border border-green-200 rounded-xl p-8 text-center space-y-4",
          className
        )}
      >
        <div className="flex justify-center">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Application Sent!</h3>
        <p className="text-gray-600">
          Thank you for applying for the <strong>{position}</strong> position.{" "}
          <br />
          Our HR team will contact you soon.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="mt-2"
        >
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white p-6 rounded-xl border border-gray-200 shadow-sm",
        className
      )}
    >
      <div className="mb-6 border-b border-gray-100 pb-4">
        <h3 className="font-bold text-xl text-gray-900">Apply Now</h3>
        <p className="text-sm text-gray-500 mt-1">
          Position: <span className="font-semibold text-black">{position}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Nguyen Van A"
            className="bg-gray-50/50"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && (
            <p className="text-xs text-red-500 flex items-center mt-1">
              <AlertCircle className="w-3 h-3 mr-1" /> {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            placeholder="email@example.com"
            className="bg-gray-50/50"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-xs text-red-500 flex items-center mt-1">
              <AlertCircle className="w-3 h-3 mr-1" /> {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <Input
            type="tel"
            placeholder="0912..."
            className="bg-gray-50/50"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 flex items-center mt-1">
              <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            About You / Achievements <span className="text-red-500">*</span>
          </label>
          <textarea
            className="flex min-h-[100px] w-full rounded-md border border-input bg-gray-50/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Tell us briefly about your experience..."
            {...register("achievements", {
              required: "Please provide a brief introduction",
            })}
          />
          {errors.achievements && (
            <p className="text-xs text-red-500 flex items-center mt-1">
              <AlertCircle className="w-3 h-3 mr-1" />{" "}
              {errors.achievements.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Upload CV (PDF/DOC) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              className="cursor-pointer file:cursor-pointer pl-10 pt-1.5 bg-gray-50/50"
              {...register("cv", { required: "Please upload your CV" })}
            />
            <Upload className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          {errors.cv && (
            <p className="text-xs text-red-500 flex items-center mt-1">
              <AlertCircle className="w-3 h-3 mr-1" /> {errors.cv.message}
            </p>
          )}
        </div>

        {error && (
          <div className="p-3 rounded-md bg-red-50 text-red-600 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white font-bold h-12 text-base transition-all mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </div>
  );
}
