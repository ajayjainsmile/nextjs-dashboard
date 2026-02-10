"use client";

import Header from "../components/ui/Header";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Footer from "../components/ui/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    if (!formData.subject.trim()) {
      setError("Please enter a subject");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "support@studioai.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subtext: "Mon-Fri, 9 AM - 6 PM EST",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "San Francisco, CA",
      subtext: "United States",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      subtext: "For all inquiries",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <Header user={null} />

      {/* Hero */}
      <section
        style={{
          padding: "120px 24px 80px",
          background:
            "linear-gradient(135deg, #e0f2ff 0%, #eef2ff 100%)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>
          Get in{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Touch
          </span>
        </h1>
        <p style={{ fontSize: 18, color: "#555" }}>
          Have questions? We'd love to hear from you.
        </p>
      </section>

      {/* Info Cards */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 24,
          }}
        >
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <Icon size={40} color="#6366f1" />
                <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 12 }}>
                  {info.title}
                </h3>
                <p style={{ fontWeight: 600 }}>{info.content}</p>
                <p style={{ fontSize: 14, color: "#666" }}>
                  {info.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "80px 24px", background: "#f5f5f5" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: 32,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>
              Send us a Message
            </h2>

            {submitted && (
              <div
                style={{
                  marginTop: 16,
                  padding: 12,
                  background: "#ecfdf5",
                  border: "1px solid #bbf7d0",
                  borderRadius: 8,
                  color: "#065f46",
                  fontWeight: 600,
                }}
              >
                Thank you! We'll be in touch soon.
              </div>
            )}

            {error && (
              <div
                style={{
                  marginTop: 16,
                  padding: 12,
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: 8,
                  color: "#991b1b",
                  fontWeight: 600,
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
              <div style={{ display: "grid", gap: 16 }}>
                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <button
                  type="submit"
                  style={{
                    padding: "14px",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    color: "#fff",
                    background:
                      "linear-gradient(90deg,#6366f1,#8b5cf6)",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #ccc",
  fontSize: 14,
};
