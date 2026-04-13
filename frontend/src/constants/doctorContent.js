import doctorImg from "../assets/doctorPage/doctorImage.png"
import DrAnjali from "../assets/doctorPage/DrAnjali.jpg"

export const doctorContent = {
  hero: {
    badge: "Trusted by 500+ labs & clinics",
    title: {
      line1: "AI Summarizes.",
      line2: "You Diagnose.",
      line3: "Patients Recover."
    },
    description: "The Clinical Curator for modern medicine. Reduce burnout with an AI clinical assistant that treats data as high-end intelligence.",
    buttonText: "Get Started",
    placeholderImage: doctorImg
  },
  aiEngagement: {
    title: "AI-Powered Patient Engagement",
    subtitle: "Get started in minutes and manage everything from one simple dashboard.",
    cards: [
      {
        title: "Upload Patient Reports",
        description: "Securely ingest Blood Tests, X-rays, and EHR data through our HIPAA-compliant gateway.",
        tags: ["PDF", "DICOM", "HL7"],
      },
      {
        title: "AI Prepares Summary",
        description: "The engine identifies critical findings, flags potential risks, and cross-references patient history.",
        quote: "\"Significant elevation in CRP levels detected. Correlating with prior respiratory symptoms...\""
      },
      {
        title: "Review & Take Action",
        description: "Confirm diagnosis with a consolidated view of key history, AI insights, and recommended next steps.",
        actionText: "Explore Editor"
      }
    ]
  },
  schedule: {
    title: "Stay on Top of Your Day",
    subtitle: "Zudoc organizes your patient queue based on clinical urgency and report availability.",
    managementTitle: "Schedule Management",
    managementSubtitle: "Your intelligent daily orchestration",
    appointments: [
      { time: "09:00 AM", name: "Sarah Khan", type: "Post-Op Follow-up", isActive: false },
      { time: "10:30 AM", name: "Ayush Ranjan", type: "Cardiac Review • New Reports", isActive: true },
      { time: "11:45 AM", name: "Suraj Solanki", type: "General Wellness", isActive: false }
    ],
    syncTitle: "Calendar Sync Everywhere",
    syncSubtitle: "Connect your professional ecosystem. Zudoc integrates seamlessly with your existing tools, keeping your life in perfect harmony.",
    syncOptions: ["Google Calendar", "Outlook Office 365", "Apple iCloud"]
  },
  treatmentJourney: {
    title: "The Treatment Journey",
    steps: [
      { number: "1", title: "Initial Intake & Screening", description: "AI analyzes historical records to flag potential risks immediately." },
      { number: "2", title: "Active Care Management", description: "Real-time status updates and collaborative note-taking for the entire clinical team." },
      { number: "3", title: "Post-Care Transition", description: "Automated discharge papers and patient recovery tracking." }
    ],
    testimonial: {
      score: "95%",
      label: "Clinical Trust Score",
      quote: "\"Zudoc has redefined how I manage my complex patient load. The summaries are so accurate they feel like they were written by a senior resident.\"",
      doctorName: "Dr. Anjali Verma",
      doctorTitle: "Chief of Cardiology, Buddha hospital",
      image: DrAnjali
    }
  },
  postCare: {
    title: "Effortless Post-Care",
    description: "Never let a patient fall through the cracks again. Our automation engine handles the follow-ups, medication reminders, and survey collection while you focus on the next diagnosis.",
    badgeText: "Reduces admin overhead by AI",
    tasks: [
      { title: "Medication Reminder Sent", details: "To: John D. | 08:00 AM", status: "DELIVERED" },
      { title: "Review Call Scheduled", details: "To: Maria G. | Tomorrow", status: "PENDING" }
    ],
    moreTasksText: "+ 12 More Tasks Automated Today"
  },
  controlTower: {
    title: "Control Tower",
    subtitle: "The executive overview of your practice's health, from patient growth to financial performance.",
    growthTitle: "Monthly Patient Growth",
    growthStat: "+12% this month",
    revenueTitle: "Practice Revenue",
    revenueAmount: "₹1,28,450",
    revenueSubtitle: "Year-to-date earnings",
    revenueBreakdown: { label: "Insurance", percentage: "65%" },
    patientsTitle: "Recent Patients",
    patients: [
      { name: "Liam Taylor", time: "Last visit: 2h ago", status: "Critical", statusVariant: "critical" },
      { name: "Sophia Martinez", time: "Last visit: Yesterday", status: "Stable", statusVariant: "stable" },
      { name: "Noah Wilson", time: "Last visit: 3d ago", status: "Stable", statusVariant: "stable" }
    ],
    directoryText: "View Full Directory"
  },
  cta: {
    title: "Start Managing Your Practice Smarter Today",
    description: "Join the future of healthcare management. Secure, fast, and designed for clinical serenity.",
    buttonText: "Get Started Free"
  }
};
