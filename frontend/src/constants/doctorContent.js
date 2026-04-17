import doctorImg from "../assets/doctorPage/doctorImage.png"
import DrAnjali from "../assets/doctorPage/DrAnjali.jpg"

export const doctorContent = {
  hero: {
    badge: "Trusted by Doctors & clinics",
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
        title: "Review Uploaded Patient Records",
        description: "View all previously uploaded patient documents, lab reports, scans, prescriptions, and EHR records in one secure workspace.",
        tags: ["PDF", "DICOM", "EHR"],
      },
      {
        title: "AI Highlights Critical Insights",
        description: "The engine identifies critical findings, flags potential risks, and cross-references patient history.",
        quote: "\"Significant elevation in CRP levels detected.\nCorrelating with prior respiratory symptoms...\""
      },
      {
        title: "Review & Take Action",
        description: "Confirm diagnosis with a consolidated view of key history, AI insights, and recommended next steps.",
        actionText: "Open Dashboard"
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
    syncOptions: [
      { name: "Google Calendar", enabled: true },
      { name: "Outlook Office 365", enabled: true },
      { name: "Apple iCloud", enabled: false }
    ]
  },
  treatmentJourney: {
    title: "The Treatment Journey",
    steps: [
      { number: "1", title: "Initial Intake & Screening", description: "AI analyzes historical records to flag potential risks immediately.", active: true },
      { number: "2", title: "Active Care Management", description: "Real-time status updates and collaborative note-taking for the entire clinical team.", active: true },
      { number: "3", title: "Post-Care Transition", description: "Automated discharge papers and patient recovery tracking.", active: false }
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
      { title: "Medication Reminder Sent", details: "To: John D. | 08:00 AM", status: "DELIVERED", highlighted: false },
      { title: "Review Call Scheduled", details: "To: Maria G. | Tomorrow", status: "PENDING", highlighted: true }
    ],
    moreTasksText: "+ 12 More Tasks Automated Today"
  },
  controlTower: {
    title: "Control Tower",
    subtitle: "The executive overview of your practice's health, from patient growth to financial performance.",
    growthTitle: "Monthly Patient Growth",
    growthStat: "+12% this month",
    growthBars: [56, 80, 80, 112, 160, 176],
    revenueTitle: "Practice Revenue",
    revenueAmount: "₹1,28,450",
    revenueSubtitle: "Year-to-date earnings",
    patientsToday: {
      title: "Patients Today",
      count: "24",
      change: "+12%",
      changeLabel: "vs yesterday",
      peakHour: "11:30 AM"
    },
    patientsTitle: "All Patients",
    patients: [
      { name: "Aryan Raj", time: "Last visit: 2h ago", status: "Critical", statusVariant: "critical" },
      { name: "Seema Singh", time: "Last visit: Yesterday", status: "Stable", statusVariant: "stable" },
      { name: "Rahul Kumar", time: "Last visit: 3d ago", status: "Stable", statusVariant: "stable" }
    ],
    directoryText: "View All"
  },
  cta: {
    title: "Run Your Clinic Smarter, Starting Today",
    description: "Simplify appointments, patient records, billing, and daily operations — secure, fast, and built for modern doctors.",
    buttonText: "Start for Free"
  }
};
