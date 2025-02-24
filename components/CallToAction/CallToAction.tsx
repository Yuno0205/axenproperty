"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  position: string;
  phone: string;
  achievements: string;
  cv: FileList;
}

export default function CallToAction({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) return; // Ngăn spam submit
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("position", data.position);
    formData.append("phone", data.phone);
    formData.append("achievements", data.achievements);
    if (data.cv.length > 0) {
      formData.append("cv", data.cv[0]);
    }

    const response = await fetch("/api/apply", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("✅ Ứng tuyển thành công!");
      reset();
      onClose();
    } else {
      alert("❌ Gửi thất bại, vui lòng thử lại.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[800px] relative">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 transition"
        >
          ✖
        </button>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Ứng tuyển nhanh
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Họ tên */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Fullname
            </label>
            <input
              {...register("name")}
              placeholder="Full name"
              required
              className="w-full p-2 border border-gray-300 rounded-lg  "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300 rounded-lg  "
            />
          </div>

          {/* Vị trí ứng tuyển */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Position
            </label>
            <input
              {...register("position")}
              placeholder="Position"
              required
              className="w-full p-2 border border-gray-300 rounded-lg  "
            />
          </div>

          {/* Số điện thoại */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Phone number
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone number"
              required
              className="w-full p-2 border border-gray-300 rounded-lg  "
            />
          </div>

          {/* Giới thiệu bản thân */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              About yourself
            </label>
            <textarea
              {...register("achievements")}
              placeholder="Please tell us some more about your achievements and skills that are relevant to the job position."
              required
              className="w-full p-2 border border-gray-300 rounded-lg  "
              rows={3}
            ></textarea>
          </div>

          {/* Upload CV */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Upload CV (PDF, DOCX)
            </label>
            <input
              {...register("cv")}
              type="file"
              required
              className="w-full border border-gray-300 p-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-blue-500 hover:file:bg-blue-600"
            />
          </div>

          {/* Nút gửi */}
          <button
            type="submit"
            className={`w-full py-3 text-lg rounded-lg transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Apply now"}
          </button>
        </form>
      </div>
    </div>
  );
}
