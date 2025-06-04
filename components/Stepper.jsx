"use client";
import { useState } from "react";

export default function Stepper() {
  const steps = [
    "Postcode",
    "Waste Time",
    "Select Type",
    "Permit Check",
    "Choose Date",
    "Payment",
  ];
  const [currentStep, setCurrentStep] = useState(2);
  const [complete, setComplete] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4">

      <div className="flex items-center justify-between relative mb-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex flex-col items-center relative z-10 ${
              i <= currentStep ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                i <= currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {i < currentStep || complete ? "✓" : i + 1}
            </div>
            <span className="text-xs mt-2 text-center">{step}</span>
          </div>
        ))}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-1">
          <div
            className={`h-full bg-blue-600 transition-all duration-300 ease-in-out`}
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
