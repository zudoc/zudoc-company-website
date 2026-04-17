import labImage from '../assets/labPageHero.png';

export const laboratoryContent = {
  hero: {
    badge: "Trusted by Lab Management System",
    title: {
      line1: "Run Your Lab",
      line2: "Smarter, Faster",
      line3: "and Error-Free"
    },
    description: "Manage lab reports, streamline bookings, and track patients — all in one intelligent platform designed for clinical excellence.",
    buttonText: "Get Started",
    placeholderImage: labImage,
    systemStatus: {
      label: "System Live",
      percentage: "99.9%",
      subtitle: "Real-time Precision"
    }
  },
  howItWorks: {
    title: "How Zudoc Works for Your Lab Management System",
    subtitle: "Get started in minutes and manage everything from one simple dashboard.",
    steps: [
      {
        id: "1",
        titlePrefix: "Set Up Your Lab in",
        titleHighlight: " 2 Minutes",
        description: "Sign up, add your lab details, and get your dashboard ready no technical setup required.",
        callout: "👉 Start accepting patients the same day"
      },
      {
        id: "2",
        titlePrefix: "Upload & Share Reports",
        titleHighlight: "",
        titleSuffix: " Fast",
        description: "Upload and share reports using drag & drop and define your available time slots for patient bookings.",
        callout: "👉 No manual work, everything automated"
      },
      {
        id: "3",
        titlePrefix: "Track Everything in",
        titleHighlight: " One Dashboard",
        description: "Monitor patient records, track test progress, and manage appointments — all in real-time.",
        callout: "👉 Never miss a patient or report again"
      }
    ]
  },
  uploadFeature: {
    titleTop: "Upload, Manage & Share",
    titleBottom: "Reports Effortlessly",
    features: [
      {
        title: "Drag & Drop Upload",
        description: "Upload PDFs, images, or scanned reports easily"
      },
      {
        title: "Save Time Daily",
        description: "Reduce manual work and avoid human errors"
      }
    ],
    uploadCard: {
      title: "Drag and drop lab reports",
      subtitle: "PDF, JPG or DICOM files supported",
      filePreview: {
        name: "Blood_Report_v2.pdf",
        progressText: "75%",
        progressPercent: 75
      }
    }
  },
  smartBooking: {
    titleTop: "Smart Booking &",
    titleBottom: "Slot Management",
    description: "Enable instant booking with smart time slots and support for future scheduling.",
    bulletPoints: [
      "Real-time calendar synchronization",
      "Automated SMS & Email reminders"
    ],
    widget: {
      title: "Select Appointment Slot",
      date: "Tomorrow",
      tabs: [
        {
          label: "🌞 Morning",
          slots: [
            { time: "06:00 AM", status: "available" },
            { time: "07:00 AM", status: "selected" },
            { time: "08:00 AM", status: "Booked" },
            { time: "09:00 AM", status: "available" },
            { time: "10:00 AM", status: "selected" },
            { time: "11:00 AM", status: "selected" }
          ]
        },
        {
          label: "🌤️ Afternoon",
          slots: [
            { time: "12:00 PM", status: "available" },
            { time: "01:00 PM", status: "selected" },
            { time: "02:00 PM", status: "Booked" },
            { time: "03:00 PM", status: "available" },
            { time: "04:00 PM", status: "selected" },
            { time: "05:00 PM", status: "selected" }
          ]
        },
        {
          label: "🌙 Evening",
          slots: [
            { time: "06:00 PM", status: "available" },
            { time: "07:00 PM", status: "selected" },
            { time: "08:00 PM", status: "Booked" },
            { time: "09:00 PM", status: "available" },
            { time: "10:00 PM", status: "selected" }
          ]
        }
      ]
    }
  },
  controlTower: {
    title: "Hospital Control Tower",
    subtitle: "Real-time patient monitoring, revenue tracking, and treatment timeline management.",
    tableData: {
      filters: [
        { label: "All Patients", active: true },
        { label: "Not Started", active: false },
        { label: "In Process", active: false },
        { label: "Completed", active: false }
      ],
      header: {
        title: "Patient Test Management",
        subtitle: "Real-time tracking and patient management"
      },
      columns: ["Patient Name", "Age", "Tests", "Contact", "Priority"],
      patients: [
        {
          id: "#42524",
          initials: "SK",
          name: "Rajesh Kumar",
          age: "45",
          tests: "CBC, Lipid Profile, HbA1c",
          phone: "+91 98XXXXXXXX01",
          priority: "High",
          priorityColor: "red"
        },
        {
          id: "#77429",
          initials: "PS",
          name: "Priya Sharma",
          age: "32",
          tests: "Thyroid Panel, Vitamin D",
          phone: "+91 988XXXXX652",
          priority: "Medium",
          priorityColor: "amber"
        },
        {
          id: "#59465",
          initials: "AP",
          name: "Amit Patel",
          age: "56",
          tests: "Liver Function, KFT",
          phone: "+91 86XXXXXXXXX76",
          priority: "High",
          priorityColor: "red"
        },
        {
          id: "#20198",
          initials: "SR",
          name: "Sneha Reddy",
          age: "28",
          tests: "CBC, ESR",
          phone: "+91 746XXXXX83",
          priority: "Low",
          priorityColor: "green"
        }
      ],
      viewAllText: "View All Admissions"
    }
  },
  campaignManager: {
    badge: "Campaign Manager",
    titleTop: "Create Offers &",
    titleBottom: "Increase Walk-ins",
    description: "Launch seasonal health packages and student discounts with a single click.\nOur built-in marketing suite helps you fill empty slots during off-peak hours.",
    promoCard: {
      badge1: "Summer Deal",
      badge2: "25% OFF",
      title: "Annual Health Check",
      descLine1: "Includes 12 profile tests, heart risk analysis",
      descLine2: "and dietary consultation.",
      price: "₹599",
      originalPrice: "₹2000"
    }
  },
  cta: {
    title: "Run Your Lab Smarter, Starting Today",
    description: "Manage tests, reports, bookings, billing, and daily operations — secure, fast, and built for modern labs.",
    buttonText: "Start for Free"
  }
};
