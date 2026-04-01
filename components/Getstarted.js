"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function GetStarted() {

  const searchParams = useSearchParams();
  const selectedPlan = typeof window !== "undefined" ? searchParams.get("plan") : null;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const planFromUrl = searchParams.get("plan");

    if (planFromUrl) {
      setForm((prev) => ({
        ...prev,
        plan: planFromUrl
      }));
    }
  }, [searchParams]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "",
    message: ""
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updatePlan = () => {
      const storedPlan = localStorage.getItem("selectedPlan");

      if (storedPlan) {
        setForm((prev) => ({
          ...prev,
          plan: storedPlan
        }));
      }
    };

    updatePlan();

    window.addEventListener("planUpdated", updatePlan);

    return () => {
      window.removeEventListener("planUpdated", updatePlan);
    };
  }, []);

  // HANDLE CHANGE (with name filter)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const filtered = value.replace(/[^A-Za-z ]/g, "");
      setForm({ ...form, name: filtered });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.plan) {
      alert("Please select a plan");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/xkoprngl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Form submitted successfully!");

        setForm({
          name: "",
          phone: "",
          email: "",
          plan: "",
          message: "",
        });

        localStorage.removeItem("selectedPlan");

      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      alert("Network error. Try again.");
    }
  };

  return (
    <div id="get-started" className="py-24 px-6 bg-[#0b0f1a] text-white border-t border-gray-800">

      {/* HEADING */}
      <div className="text-center mb-16">
        <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
        bg-[#0f1f2f] text-[#5eead4] border border-[#1e3a5f] text-sm mb-4">
          ✦ Get Started
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Build Your{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Digital Growth
          </span>
        </h2>

        <p className="text-gray-400">
          Tell us about your goals and we’ll help you get started.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTACT */}
        <div className="space-y-6">

          <h3 className="text-2xl font-semibold mb-6">
            Contact Information
          </h3>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center 
            rounded-2xl bg-[#0f1f2f] border border-[#1e3a5f] 
            text-[#5eead4] text-2xl shadow-[0_0_15px_rgba(94,234,212,0.15)]">
              ✉️
            </div>

            <div>
              <p className="text-gray-300 font-medium">Email</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=divyanshu@sociosarthi.in&su=Inquiry from Website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                >
                divyanshu@sociosarthi.in
                </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center 
            rounded-2xl bg-[#0f1f2f] border border-[#1e3a5f] 
            text-[#5eead4] text-2xl shadow-[0_0_15px_rgba(94,234,212,0.15)]">
              📞
            </div>

            <div>
              <p className="text-gray-300 font-medium">Phone</p>
              <a
                href="tel:+916204827667"
                className="text-gray-400 hover:text-white transition"
                >
                +91 62048 27667
                </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center 
            rounded-2xl bg-[#0f1f2f] border border-[#1e3a5f] 
            text-[#5eead4] text-2xl shadow-[0_0_15px_rgba(94,234,212,0.15)]">
              📍
            </div>

            <div>
              <p className="text-gray-300 font-medium">Location</p>
              <p className="text-gray-400">Saharsa, Bihar, India</p>
            </div>
          </div>

        </div>

        {/* FORM */}
        <form 
          onSubmit={handleSubmit}
          className="bg-[#111827] p-8 rounded-2xl border border-gray-800 space-y-6"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            pattern="[A-Za-z ]+"
            title="Name should not contain numbers"
            required
            className="w-full bg-[#0b0f1a] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength="10"
            title="Enter a valid 10-digit phone number"
            required
            className="w-full bg-[#0b0f1a] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-[#0b0f1a] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* PLAN */}
          <select
            name="plan"
            value={form.plan}
            onChange={handleChange}
            required
            className="w-full bg-[#0b0f1a] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 text-gray-400"
          >
            <option value="">Choose your plan</option>
            <option>Starter</option>
            <option>Growth</option>
            <option>Leader</option>
            <option>Custom</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Tell us about your goals..."
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-[#0b0f1a] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 py-3 rounded-lg text-white font-semibold 
            hover:opacity-90 transition cursor-pointer active:scale-95"
          >
            Get Started
          </button>

        </form>

      </div>

    </div>
  );
}