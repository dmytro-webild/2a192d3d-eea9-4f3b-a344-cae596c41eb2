"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  Shield,
  BarChart3,
  Lock,
  Zap,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Eye,
  Award,
  Star,
  Brain,
  Code,
  Lightbulb,
} from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumSizeLargeTitles"
      background="none"
      cardStyle="subtle-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="AstroSec"
          navItems={[
            { name: "Services", id: "expertise" },
            { name: "Expertise", id: "expertise" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Get Started",            href: "contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Next-Generation Security & AI Solutions"
          description="Comprehensive end-to-end cybersecurity, advanced AI automation, and full-stack development. Protect your systems, accelerate your business, and stay ahead of threats."
          tag="Cybersecurity & AI Excellence"
          tagIcon={Shield}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Solutions", href: "expertise" },
            { text: "Schedule Consultation", href: "contact" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          dashboard={{
            title: "Security Operations Center",            logoIcon: Shield,
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/a-sleek-cybersecurity-dashboard-interfac-1772646995274-0c5cb9e7.png",            searchPlaceholder: "Search threats...",            sidebarItems: [
              { icon: BarChart3, active: true },
              { icon: Lock, active: false },
              { icon: Zap, active: false },
            ],
            buttons: [
              { text: "Live Monitor", href: "#" },
              { text: "Export Report", href: "#" },
            ],
            stats: [
              {
                title: "Threats Blocked",                values: [12487, 15632, 18945],
                description: "This week"
              },
              {
                title: "System Uptime",                values: [99.98, 99.99, 99.97],
                valueSuffix: "%",                description: "Average performance"
              },
              {
                title: "Active Clients",                values: [456, 523, 687],
                description: "Protected globally"
              },
            ],
            chartTitle: "Security Events Timeline",            chartData: [
              { value: 45 },
              { value: 62 },
              { value: 38 },
              { value: 71 },
              { value: 55 },
            ],
            listTitle: "Recent Security Actions",            listItems: [
              {
                icon: AlertCircle,
                title: "Intrusion Attempt Blocked",                status: "Mitigated"
              },
              {
                icon: CheckCircle,
                title: "Compliance Audit Passed",                status: "Verified"
              },
              {
                icon: Shield,
                title: "Firewall Updated",                status: "Complete"
              },
            ],
          }}
        />
      </div>

      <div id="expertise" data-section="expertise">
        <FeatureCardTwelve
          features={[
            {
              id: "ai-systems",              label: "AI Systems & Agents",              title: "Advanced AI Automation & Development",              items: [
                "Custom AI Agents Development",                "Business Process Automation",                "AI Monitoring & Decision Systems"
              ],
              buttons: [
                { text: "Learn More", href: "#" }
              ]
            },
            {
              id: "cybersecurity",              label: "Cybersecurity",              title: "Enterprise-Grade Protection",              items: [
                "Security Audits & WMPT",                "Cloud & Infrastructure Security",                "Incident Response & Hardening"
              ],
              buttons: [
                { text: "Learn More", href: "#" }
              ]
            },
            {
              id: "engineering",              label: "IT & Engineering",              title: "Robust Infrastructure & Development",              items: [
                "Secure Web & App Development",                "Cloud Architecture & DevOps",                "Server & System Engineering"
              ],
              buttons: [
                { text: "Learn More", href: "#" }
              ]
            },
            {
              id: "consulting",              label: "Strategy & Consulting",              title: "Expert Advisory & Implementation",              items: [
                "AI & Security Consulting",                "Startup Tech Architecture",                "Custom Enterprise Solutions"
              ],
              buttons: [
                { text: "Learn More", href: "#" }
              ]
            },
          ]}
          animationType="blur-reveal"
          title="Our Expertise"
          description="Comprehensive digital solutions under one roof. From securing your servers to building your AI future."
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          metrics={[
            {
              id: "1",              value: "500",              title: "+",              description: "Systems Secured Globally",              icon: Shield,
            },
            {
              id: "2",              value: "99.99",              title: "%",              description: "Average Uptime Achievement",              icon: TrendingUp,
            },
            {
              id: "3",              value: "0",              title: "Breaches",              description: "Among Our Clients",              icon: CheckCircle,
            },
            {
              id: "4",              value: "24",              title: "/7",              description: "Threat Monitoring",              icon: Eye,
            },
          ]}
          title="Proven Track Record"
          description="Delivering excellence across cybersecurity and AI innovation"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join forward-thinking companies leveraging our security and AI expertise"
          tag="Enterprise Partners"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "TechCorp Global",            "SecureNet Systems",            "CloudScale AI",            "DataVault Inc",            "InnovateX Labs",            "CyberShield Pro",            "AI Dynamics"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              role: "CTO",              company: "TechCorp Global",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/uploaded-1772648769599-68c70eso.png?_wi=1",              imageAlt: "Sarah Chen, CTO at TechCorp Global"
            },
            {
              id: "2",              name: "Michael Rodriguez",              role: "Security Director",              company: "SecureNet Systems",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/uploaded-1772648769599-68c70eso.png?_wi=2",              imageAlt: "Michael Rodriguez, Security Director at SecureNet Systems"
            },
            {
              id: "3",              name: "Emma Watson",              role: "Operations Lead",              company: "CloudScale AI",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUTy5QR9k4M4P80OQXSbT6XGLr/uploaded-1772648769599-68c70eso.png?_wi=3",              imageAlt: "Emma Watson, Operations Lead at CloudScale AI"
            },
          ]}
          kpiItems={[
            { value: "180+", label: "Projects Completed" },
            { value: "96%", label: "Client Satisfaction" },
            { value: "15+", label: "Years of Excellence" },
          ]}
          animationType="slide-up"
          title="What Our Clients Say"
          description="Hear from those who've experienced our transformative solutions"
          tag="Client Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your security posture and unlock AI-driven innovation? Let's build something extraordinary together."
          animationType="entrance-slide"
          buttons={[
            { text: "Start Your Journey", href: "#" },
            { text: "View Case Studies", href: "#" },
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Navigate",              items: [
                { label: "Home", href: "/" },
                { label: "Services", href: "#expertise" },
                { label: "Expertise", href: "#expertise" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Cybersecurity", href: "#" },
                { label: "AI Solutions", href: "#" },
                { label: "Development", href: "#" },
                { label: "Consulting", href: "#" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Security", href: "#" },
                { label: "Compliance", href: "#" },
              ],
            },
          ]}
          bottomLeftText="© 2025 AstroSec. All rights reserved."
          bottomRightText="Securing Tomorrow, Today"
        />
      </div>
    </ThemeProvider>
  );
}