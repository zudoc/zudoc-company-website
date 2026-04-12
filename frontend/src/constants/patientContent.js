import patentHeroImage from '../assets/patientPage/patentHeroImage.png';
import mobileBG from '../assets/patientPage/mobileBG.png';
import HeadImage from '../assets/patientPage/Head.jpg';
import SpouseImage from '../assets/patientPage/Spouse.jpg';
import ChildImage from '../assets/patientPage/Child.jpg';
import PetImage from '../assets/patientPage/Pet.jpg';
import DrAnjali from '../assets/patientPage/DrAnjali.jpg';
import DrSharma from '../assets/patientPage/DrSharma.jpg';

export const patientContent = {
  hero: {
    titleLines: [
      { text: "Your Health.", color: "text-cyan-700" },
      { text: "Your Time.", color: "text-neutral-800" },
      { text: "Your Control.", color: "text-cyan-700" }
    ],
    description: "Manage your family’s healthcare journey with clarity, control, and confidence. A premium editorial approach to medical records and consultations.",
    buttonText: "Get Started",
    placeholderImage: patentHeroImage
  },
  familyEcosystem: {
    title: "All Your Family’s Health, In One Place",
    subtitle: "Easily manage health records for your loved ones—even your pets.",
    setupAccountTitle: "Set Up Your Account",
    setupAccountSub: "It only takes a few seconds to get started",
    ecosystemTitle: "Your Family Ecosystem",
    ecosystemSub: "Include your parents, partner, kids—and even your pets 🐾",
    members: [
      { id: "head", role: "Head", name: "Ramesh", color: "bg-cyan-700/20", image: HeadImage },
      { id: "spouse", role: "Spouse", name: "Sita", color: "bg-blue-500/20", image: SpouseImage },
      { id: "child", role: "Child", name: "Arav", color: "bg-green-500/20", image: ChildImage },
      { id: "pet", role: "Pet", name: "Bruno", color: "bg-yellow-500/20", image: PetImage }
    ]
  },
  careJourney: {
    title: "Your Care Journey",
    subtitle: "Track every step of your hospital stay.",
    tabs: [
      { id: "opd", label: "OPD Journey", active: false },
      { id: "ipd", label: "IPD Journey", active: true }
    ],
    currentStatus: {
      title: "Treatment",
      status: "In Progress",
      duration: "Day 3 - Day 5",
      description: "Your treatment plan is being executed with planned procedures, medications, and regular doctor visits.",
      progress: 60,
      tasks: [
        "Procedures ongoing",
        "Medicines administered",
        "Doctor visits scheduled"
      ]
    }
  },
  healthRecords: {
    title: "Track All Records in One Place",
    subtitle: "See your family’s health clearly, anytime.",
    overview: {
      title: "Family Overview",
      subtitle: "Quick summary of your family’s health activity",
      stats: [
        { icon: "⚡", text: "4 Members Added" },
        { icon: "🧠", text: "12 Records Stored" },
        { icon: "📊", text: "2 Upcoming Appoinmnets" }
      ]
    },
    vitalsTitle: "Health Vitals",
    medicalRecords: {
      title: "Medical Records",
      items: [
        "Blood Test Report · 2 days ago",
        "Prescription Added",
        "X-ray Uploaded"
      ]
    },
    appointments: {
      title: "Appointments",
      doctorName: "Dr.Anjali Deshmukh",
      date: "Today",
      time: "10:30 Am",
      status: "Confirmed",
      doctorImage: DrAnjali
    }
  },
  documentUpload: {
    title: "Upload Your Medical Documents",
    subtitle: "Snap, upload, and access everything in one place.",
    categories: [
      { id: "prescriptions", label: "Prescriptions", active: false },
      { id: "notes", label: "Doctor's Notes", active: true },
      { id: "labReports", label: "Lab Reports", active: false },
      { id: "fitness", label: "Fitness Cert.", active: false }
    ],
    uploadArea: {
      title: "Click to upload or drag & drop",
      subtitle: "PDF, JPG, PNG (Max 10MB)",
      progressText: "Uploading... 70%"
    },
    whyUpload: {
      title: "Why upload documents?",
      subtitle: "Smart, ring, say and seo tools.",
      reasons: [
        { title: "Auto Organized", desc: "Sort by type & date automatically", color: "bg-teal-50" },
        { title: "Easy Sharing", desc: "Share instantly with doctors", color: "bg-blue-50" },
        { title: "Secure Storage", desc: "Encrypted and safe access", color: "bg-indigo-50" }
      ]
    }
  },
  allAppointments: {
    title: "All Appointments",
    subtitle: "One Calendar. Every Clinic",
    cardTitle: "All Appointments",
    cardSubtitle: "One calendar. Every clinic.",
    filters: [
      { label: "Today", count: 2, active: true },
      { label: "Upcoming", count: 5, active: false },
      { label: "Completed", count: 12, active: false }
    ],
    visits: [
      { doctor: "Dr. Anjali", date: "Feb 13 • 10:30 AM", type: "Clinic Visit", color: "text-teal-600", border: "outline-teal-600", image: DrAnjali },
      { doctor: "Dr. Sharma", date: "Feb 15 • 6:00 PM", type: "Online Consultation", color: "text-blue-500", border: "outline-blue-500", image: DrSharma }
    ],
    nextAppointment: {
      title: "Next Appointment",
      doctor: "Dr. Anjali Deshmukh",
      date: "Feb 13 • 10:30 AM"
    }
  },
  reminders: {
    title: "Family Health Reminders",
    items: [
      { name: "Aspirin 75mg", instruction: "Take with water • 08:00 AM", status: "ACTIVE", statusColor: "text-cyan-700", lineColor: "bg-cyan-700" },
      { name: "Multivitamins", instruction: "Daily Supplement • 01:00 PM", status: "UPCOMING", statusColor: "text-indigo-500", lineColor: "bg-indigo-500" },
      { name: "Metformin", instruction: "Post Lunch • 02:30 PM", status: "PAUSED", statusColor: "text-gray-500", lineColor: "bg-gray-500", opacity: "opacity-50" }
    ],
    mobileImage: mobileBG
  },
  cta: {
    title: "Take Control of Your Health, Effortlessly",
    subtitle: "Join the future of healthcare management. Secure, fast, and designed for clinical\nserenity.",
    buttonText: "Get Started Free"
  }
};
