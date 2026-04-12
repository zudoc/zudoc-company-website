import doctorXpatient from '../assets/aboutPage/dockerXpatient.png';
import rocket from '../assets/aboutPage/rocket.png';
import doctor from '../assets/aboutPage/doctor.png';
import doctorProfile from '../assets/aboutPage/doctorProfile.jpg';
import hospital from '../assets/aboutPage/hospital.png';
import labs from '../assets/aboutPage/labs.png';
import patient from '../assets/aboutPage/patient.png';
import patientProfile from '../assets/aboutPage/patientProfile.jpg';
import zudocApp from '../assets/aboutPage/zudocApp.png';

export const aboutContent = {
  hero: {
    badge: "Our Story",
    titleLine1: "We exist to bring",
    titleHighlight: "trust",
    titleLine2: "back into\nhealthcare.",
    subtitle: "Zudoc is rebuilding the clinical foundation with\ntransparency at its core, ensuring every decision is\nbacked by clarity.",
    primaryButton: "Get Started",
    secondaryButton: "See How It Works →"
  },
  metrics: [
    { value: "4", suffix: "+", label: "Stakeholder platforms in one ecosystem" },
    { value: "1", suffix: "", label: "Universal Zudoc ID for every patient" },
    { value: "PTJ", suffix: "", label: "Patient treatment journey visible in real time" },
    { value: "PSAT", suffix: "", label: "Patient satisfaction scored, measured improved" }
  ],
  offers: {
    sectionTitle: "What we offer",
    sectionSubtitle: "Intelligent tools that support both Healthcare Providers and patients at every step.",
    items: [
      {
        number: "01",
        target: "For Patients — ",
        highlight: "Your health, in your hands.",
        description: "Personalized care at your fingertips with a focus on ease and security.",
        icon: "user",
        features: [
          { text: "Easy appointment booking & tracking", icon: "calendar" },
          { text: "All medical records in one place", icon: "shield" },
          { text: "Real-time treatment updates", icon: "refresh" },
          { text: "Manage family health", icon: "users" }
        ],
        tags: ["UHID", "Treatment Journey", "Health Records"]
      },
      {
        number: "02",
        target: "For Doctors — ",
        highlight: "Empowering medical excellence.",
        description: "Advanced tools designed to streamline workflows and patient care.",
        icon: "plus",
        features: [
          { text: "Smart clinical insights", icon: "sparkles" },
          { text: "Pre-summarised reports", icon: "document" },
          { text: "Instant access to patient history", icon: "search" },
          { text: "Pre-summarised reports", icon: "clock" }
        ],
        tags: ["Patient History", "Smart Insights", "Slot Management"]
      },
      {
        number: "03",
        target: "For Hospitals — ",
        highlight: "Scaling clinical intelligence.",
        description: "Interoperable systems built for high-scale resource management.",
        icon: "office",
        features: [
          { text: "Track full patient journey", icon: "chart" },
          { text: "Real-time billing transparency", icon: "cash" },
          { text: "Monitor patient satisfaction", icon: "star" },
          { text: "Efficient resource management", icon: "collection" }
        ],
        tags: ["Control Tower", "Billing", "PSAT"]
      },
      {
        number: "04",
        target: "For Labs — ",
        highlight: "Precision diagnostics simplified.",
        description: "Automation-first platform for swift and accurate laboratory processing.",
        icon: "beaker",
        features: [
          { text: "End-to-end sample tracking", icon: "microscope" },
          { text: "Real-time status updates", icon: "refresh" },
          { text: "Seamless booking", icon: "calendar" },
          { text: "Easy report delivery", icon: "mail" }
        ],
        tags: ["Sample Tracking", "Reports", "Automation"]
      }
    ]
  },
  patientFirst: {
    title: "Patient-first always",
    description: "Every feature we build starts with the question: how does this make life easier for the person receiving care? The patient is always at the centre of every decision.",
    img1: doctorXpatient,
    img2: rocket
  },
  aiEnablement: {
    title: "What We’re Enabling with AI",
    subtitle: "Making healthcare simpler, smarter, and more connected for everyone",
    roles: [
      {
        title: "🧑‍⚕️ Patients",
        features: ["AI-powered assistant for instant support", "Simplified and easy-to-read reports", "Smart reminders for better health management", "Multilingual support for wider accessibility"],
        img: patient
      },
      {
        title: "👨‍⚕️ Doctors",
        features: ["Quick and clear patient summaries", "Intelligent decision support", "Seamless voice-based notes", "Actionable smart insights"],
        img: doctor
      },
      {
        title: "🏥 Hospitals",
        features: ["Predictive patient load management", "Optimized queue systems", "Automated workflows", "Data-driven analytics"],
        img: hospital
      },
      {
        title: "🧪 Labs",
        features: ["Structured and standardized reports", "Early abnormality detection", "Reliable quality checks"],
        img: labs
      }
    ]
  },
  howWeHelp: {
    title: "How We Help",
    subtitlePrefix: "Zudoc is creating a ",
    subtitleHighlight: "transparent healthcare ecosystem",
    subtitleSuffix: " powered by AI.",
    howWeDeliver: {
      title: "How We Deliver",
      subtitle: "We use AI as an enabler — not a replacement — to simplify and enhance healthcare.",
      points: [
        { icon: "⚡", title: "Simplifying Workflows", description: "Automation that reduces administrative chaos and complexity." },
        { icon: "🧠", title: "Enhancing Clinical Efficiency", description: "Tools that help doctors do more with less — accurately and efficiently." },
        { icon: "📊", title: "Making Data Usable", description: "Turning fragmented data into clear, actionable insights." }
      ]
    },
    whatThisMeans: {
      title: "What This Means",
      patient: {
        title: "For Patients",
        img: patientProfile,
        points: ["Clarity in every decision", "Confidence in your care", "Less stress, more support"]
      },
      doctor: {
        title: "For Doctors",
        img: doctorProfile,
        points: ["More time for patients", "Faster, better insights", "Reduced admin burden"]
      }
    }
  },
  whyWeDoIt: {
    title: "We Love What We Do.",
    subtitlePrefix: "Not because it’s easy — ",
    subtitleHighlight: "but because it matters.",
    cards: [
      {
        title: "Core Value",
        description: "Empathy First. We design for people, not just patients. we prioritizing the emotions journey of care as much as the clinical outcome.",
        bgColor: "bg-zinc-800"
      },
      {
        title: "Our Mission",
        description: "To accelerate the transition to transparent healthcare by empowering doctors and patients with AI-driven clarity and empathy.",
        bgColor: "bg-zinc-900"
      },
      {
        title: "Our Vision",
        description: "A world where healthcare decisions are never made in the dark, and every patient receives the best care possible through total clarity.",
        bgColor: "bg-teal-600"
      }
    ]
  },
  contact: {
    title: "Get in touch",
    description: "Book an Appointment to treat your teeth right now.",
    img: zudocApp,
    button: "Let’s Connect"
  }
};
