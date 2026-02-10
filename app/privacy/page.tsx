import Header from "../components/ui//Header";
import { ChevronRight } from "lucide-react";
import Footer from "../components/ui/Footer";

export default function Privacy() {
  const sections = [
    { title: "1. Introduction", content: "Welcome to StudioAI ('Company', 'we', 'our', or 'us'). StudioAI is committed to protecting your privacy..." },
    { title: "2. Information We Collect", content: "We collect information you provide directly and automatically..." },
    { title: "3. How We Use Your Information", content: "We use your information to provide and improve our services..." },
    { title: "4. Data Retention", content: "We retain personal data as long as necessary..." },
    { title: "5. Sharing Your Information", content: "We may share information with service providers and legal authorities..." },
    { title: "6. Data Security", content: "We implement security measures to protect your data..." },
    { title: "7. Your Privacy Rights", content: "You have rights to access, correct, and delete your data..." },
    { title: "8. Cookies and Tracking Technologies", content: "We use cookies to enhance user experience..." },
    { title: "9. Third-Party Links", content: "We are not responsible for third-party websites..." },
    { title: "10. International Data Transfers", content: "Your data may be processed in other countries..." },
    { title: "11. Children's Privacy", content: "Our services are not intended for children under 13..." },
    { title: "12. Contact Us", content: "Email: privacy@studioai.com" }
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
            Privacy{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Policy
            </span>
          </h1>
          <p style={{ color: "#4b5563", marginTop: 10 }}>
            Last updated: January 2024
          </p>
          <p style={{ color: "#6b7280", marginTop: 10 }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              <p style={{ color: "#4b5563", lineHeight: 1.7, whiteSpace: "pre-line" }}>
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
