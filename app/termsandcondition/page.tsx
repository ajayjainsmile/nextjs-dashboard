"use client";

import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { ChevronRight } from "lucide-react";

export default function Terms() {
  const sections = [
    { title: "1. Acceptance of Terms", content: "By accessing and using the StudioAI website and services ('Platform'), you accept and agree to be bound by these terms..." },
    { title: "2. License", content: "StudioAI grants you a limited, non-exclusive, non-transferable license..." },
    { title: "3. User Responsibilities", content: "You are responsible for maintaining account security and acceptable use..." },
    { title: "4. Intellectual Property Rights", content: "All content on the Platform is the property of StudioAI..." },
    { title: "5. Subscription and Payment", content: "Subscription plans, billing, refunds and cancellation policies..." },
    { title: "6. Service Availability", content: "The Platform is provided on an as-is basis..." },
    { title: "7. Limitation of Liability", content: "StudioAI will not be liable for indirect or consequential damages..." },
    { title: "8. Disclaimer of Warranties", content: "The Platform is provided 'as is' without warranties..." },
    { title: "9. Indemnification", content: "You agree to indemnify and hold harmless StudioAI..." },
    { title: "10. Termination", content: "Your account may be terminated for violations..." },
    { title: "11. Governing Law", content: "These Terms are governed by California law..." },
    { title: "12. Dispute Resolution", content: "Disputes shall be resolved by arbitration..." },
    { title: "13. Severability", content: "If any provision is invalid, others remain in effect..." },
    { title: "14. Entire Agreement", content: "These Terms constitute the entire agreement..." },
    { title: "15. Changes to Terms", content: "StudioAI may update these Terms at any time..." },
    { title: "16. Contact Information", content: "Email: legal@studioai.com" }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <Header user={null} />

      {/* Hero */}
      <section
        style={{
          padding: "140px 20px 80px",
          background: "linear-gradient(135deg, #e0f2ff, #eef2ff)"
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ fontSize: 48, fontWeight: 800, color: "#111827" }}>
            Terms &{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Conditions
            </span>
          </h1>
          <p style={{ color: "#4b5563", marginTop: 10 }}>
            Last updated: January 2024
          </p>
          <p style={{ color: "#6b7280", marginTop: 10 }}>
            Please read these terms and conditions carefully before using our service.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section style={{ padding: 40, background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>
            Table of Contents
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: 12,
                  borderRadius: 8,
                  textDecoration: "none",
                  color: "#374151",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
                }}
              >
                <ChevronRight size={16} color="#2563eb" />
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {sections.map((section, index) => (
            <div key={index} id={`section-${index}`} style={{ marginBottom: 50 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: "#111827", marginBottom: 12 }}>
                {section.title}
              </h2>
              <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
