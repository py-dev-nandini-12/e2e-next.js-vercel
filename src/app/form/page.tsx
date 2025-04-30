"use client";

import { useState } from "react";
import WeatherWidget from "../weather-widget";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Both Name and Email are required");
      return false;
    }
    if (formData.name.length > 50) {
      setError("Name must be 50 characters or less");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format");
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    if (!validateInputs()) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");
      const data = await res.json();
      setMessage(data.message);
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "" });
    setMessage("");
    setError("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h1>Form Page</h1>
      <WeatherWidget />
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">{loading ? "Submitting..." : "Submit"}</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <p
        id="error"
        style={{ color: "red", visibility: error ? "visible" : "hidden" }}
      >
        {error}
      </p>
      <p
        id="message"
        style={{ color: "purple", visibility: message ? "visible" : "hidden" }}
      >
        {message}
      </p>
    </div>
  );
}
