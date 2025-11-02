import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {
  registrationSchema,
  RegistrationFormData,
} from "../schemas/registrationSchema";
import { FORM_ACTION_URL } from "../config/formConfig";

export default function BeginTraining() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const hearAboutUs = watch("hearAboutUs");
  const proofOfPayment = watch("proofOfPayment");

  const onSubmit = async (data: RegistrationFormData) => {
    console.log("Form validated successfully:", data);
    
    // Show success feedback
    setShowSuccess(true);
    
    // If action URL is configured, submit the form natively
    if (FORM_ACTION_URL && formRef.current) {
      // Allow time for user to see validation success message
      setTimeout(() => {
        formRef.current?.submit();
      }, 1500);
    } else {
      console.warn("FORM_ACTION_URL not configured. Please set it in src/config/formConfig.ts");
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Form */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Begin Your{" "}
            <span className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              Training Journey
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join Senpai's PM Dojo Cohort 1 and master the art of Product
            Management
          </p>
        </div>

        {/* Action URL Warning */}
        {!FORM_ACTION_URL && (
          <div className="mb-8 bg-yellow-50 border-2 border-yellow-500 rounded-xl p-6 flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-1">
                Configuration Required
              </h3>
              <p className="text-yellow-700">
                Form action URL is not configured. Please set <code className="bg-yellow-100 px-2 py-1 rounded">FORM_ACTION_URL</code> in <code className="bg-yellow-100 px-2 py-1 rounded">src/config/formConfig.ts</code>
              </p>
            </div>
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 bg-green-50 border-2 border-green-500 rounded-xl p-6 flex items-start space-x-4 animate-in slide-in-from-top">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-green-900 mb-1">
                Validation Successful!
              </h3>
              <p className="text-green-700">
                {FORM_ACTION_URL 
                  ? "Submitting your registration..."
                  : "Your form has been validated successfully."}
              </p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
            action={FORM_ACTION_URL}
            method="POST"
            encType="multipart/form-data"
          >
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-bold text-gray-900 mb-2"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                    errors.firstName
                      ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                      : "border-gray-300 focus:border-red-600 focus:ring-red-200"
                  } focus:outline-none focus:ring-4`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-bold text-gray-900 mb-2"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                    errors.lastName
                      ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                      : "border-gray-300 focus:border-red-600 focus:ring-red-200"
                  } focus:outline-none focus:ring-4`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-900 mb-2"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                  errors.email
                    ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                    : "border-gray-300 focus:border-red-600 focus:ring-red-200"
                } focus:outline-none focus:ring-4`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label
                htmlFor="whatsappNumber"
                className="block text-sm font-bold text-gray-900 mb-2"
              >
                WhatsApp Number <span className="text-red-600">*</span>
              </label>
              <input
                {...register("whatsappNumber")}
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                  errors.whatsappNumber
                    ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                    : "border-gray-300 focus:border-red-600 focus:ring-red-200"
                } focus:outline-none focus:ring-4`}
                placeholder="+234 XXX XXX XXXX"
              />
              {errors.whatsappNumber && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.whatsappNumber.message}
                </p>
              )}
            </div>

            {/* Expectations */}
            <div>
              <label
                htmlFor="expectations"
                className="block text-sm font-bold text-gray-900 mb-2"
              >
                What are your expectations from this course?{" "}
                <span className="text-red-600">*</span>
              </label>
              <textarea
                {...register("expectations")}
                id="expectations"
                name="expectations"
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                  errors.expectations
                    ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                    : "border-gray-300 focus:border-red-600 focus:ring-red-200"
                } focus:outline-none focus:ring-4 resize-none`}
                placeholder="Tell us what you hope to achieve from this course..."
              />
              {errors.expectations && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.expectations.message}
                </p>
              )}
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-4">
                How did you hear about this course?{" "}
                <span className="text-red-600">*</span>
              </label>
              <div className="space-y-3">
                {["WhatsApp", "Twitter", "LinkedIn", "Other"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center p-4 rounded-xl border-2 border-gray-300 hover:border-red-600 cursor-pointer transition-all"
                  >
                    <input
                      {...register("hearAboutUs")}
                      type="radio"
                      value={option}
                      className="w-5 h-5 text-red-600 focus:ring-red-500 focus:ring-2"
                    />
                    <span className="ml-3 text-gray-900 font-medium">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {errors.hearAboutUs && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.hearAboutUs.message}
                </p>
              )}

              {/* Other Source Input */}
              {hearAboutUs === "Other" && (
                <div className="mt-4">
                  <input
                    {...register("otherSource")}
                    type="text"
                    placeholder="Please specify..."
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                      errors.otherSource
                        ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                        : "border-gray-300 focus:border-red-600 focus:ring-red-200"
                    } focus:outline-none focus:ring-4`}
                  />
                  {errors.otherSource && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.otherSource.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Proof of Payment */}
            <div>
              <label
                htmlFor="proofOfPayment"
                className="block text-sm font-bold text-gray-900 mb-2"
              >
                Upload Proof of Payment <span className="text-red-600">*</span>
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Upload 1 supported file. Max 10 MB. (JPG, PNG, WEBP, or PDF)
              </p>
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  dragActive
                    ? "border-red-600 bg-red-50"
                    : errors.proofOfPayment
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 hover:border-red-600"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  {...register("proofOfPayment")}
                  type="file"
                  id="proofOfPayment"
                  name="proofOfPayment"
                  accept=".jpg,.jpeg,.png,.webp,.pdf"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-red-600" />
                  </div>
                  {proofOfPayment && proofOfPayment.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-900">
                        Selected file:
                      </p>
                      <p className="text-sm text-gray-700">
                        {proofOfPayment[0].name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(proofOfPayment[0].size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-900">
                        Drop your file here, or{" "}
                        <span className="text-red-600">browse</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        Supports: JPG, PNG, WEBP, PDF (Max 10MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {errors.proofOfPayment && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.proofOfPayment.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    <span>Submit Registration</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Payment Info */}
        <div className="mt-8 bg-red-50 border-2 border-red-600 rounded-2xl p-6">
          <h3 className="font-bold text-red-900 mb-4 text-lg">
            Payment Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-700 font-semibold">Bank:</p>
              <p className="text-gray-900">Access Bank</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Account Number:</p>
              <p className="text-gray-900">1239389517</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Account Name:</p>
              <p className="text-gray-900">Adaeze Chukwu</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-4">
            <strong>Early Bird:</strong> ₦25,000 | <strong>Regular:</strong>{" "}
            ₦39,000 (after Oct 31)
          </p>
        </div>
      </main>
    </div>
  );
}
