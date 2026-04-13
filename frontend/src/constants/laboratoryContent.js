export const laboratoryContent = {
  hero: {
    badge: "Trusted by 500+ labs & clinics",
    title: {
      line1: "Run Your Lab",
      line2: "Smarter, Faster",
      line3: "& Error-Free"
    },
    description: "Manage lab reports, streamline bookings, and track patients — all in one intelligent platform designed for clinical excellence.",
    buttonText: "Get Started",
    systemStatus: {
      label: "System Live",
      percentage: "99.9%",
      subtitle: "Real-time Precision"
    }
  },
  howItWorks: {
    title: "How Zudoc Works for Your Lab",
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
        titlePrefix: "Upload & Share",
        titleHighlight: " Reports Fast",
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
    description: "Eliminate overcrowding. Set dynamic time slots based on your lab's capacity and test complexity. Allow patients to book directly through your portal.",
    bulletPoints: [
      "Real-time calendar synchronization",
      "Automated SMS & Email reminders"
    ],
    widget: {
      title: "Select Appointment Slot",
      date: "May 24, 2024",
      tabs: ["🌞 Morning", "🌤️ Afternoon", "🌙 Evening"],
      slots: [
        { time: "09:00 AM", status: "available" },
        { time: "09:30 AM", status: "selected" },
        { time: "10:00 AM", status: "Booked" },
        { time: "10:30 AM", status: "available" },
        { time: "11:00 AM", status: "selected" },
        { time: "11:30 AM", status: "selected" }
      ]
    }
  },
  controlTower: {
    title: "Control Tower",
    subtitle: "Real- Time patient & Test tracking",
    tableData: {
      filters: [
        { label: "All Patients", count: 9, active: true },
        { label: "Not Started", count: 2, active: false },
        { label: "In Process", count: 4, active: false },
        { label: "Completed", count: 4, active: false }
      ],
      header: {
        title: "Control Tower - Patient Test Management",
        subtitle: "Real-time test tracking and patient monitoring"
      },
      columns: ["PATIENT", "AGE", "TESTS", "CONTACT", "PRIORITY"],
      patients: [
        {
          id: "PT001",
          initials: "RK",
          color: "bg-indigo-500",
          name: "Rajesh Kumar",
          age: "45 yrs",
          testCount: "2 Tests",
          testNames: "Complete Blood Count (CBC), Li...",
          email: "rajesh.kumar@email.com",
          phone: "+91 98765 43210",
          priority: "Normal",
          isUrgent: false
        },
        {
          id: "PT002",
          initials: "PS",
          color: "bg-purple-500",
          name: "Priya Sharma",
          age: "32 yrs",
          testCount: "1 Test",
          testNames: "Lipid Profile",
          email: "priya.sharma@email.com",
          phone: "+91 98765 43211",
          priority: "Normal",
          isUrgent: false
        },
        {
          id: "PT003",
          initials: "AP",
          color: "bg-indigo-500",
          name: "Amit Patel",
          age: "58 yrs",
          testCount: "1 Test",
          testNames: "Thyroid Function Test",
          email: "amit.patel@email.com",
          phone: "+91 98765 43212",
          priority: "Urgent",
          isUrgent: true
        },
        {
          id: "PT004",
          initials: "SR",
          color: "bg-indigo-500",
          name: "Sneha Reddy",
          age: "28 yrs",
          testCount: "2 Tests",
          testNames: "Diabetes Panel, HbA1c Test",
          email: "sneha.reddy@email.com",
          phone: "+91 98765 43213",
          priority: "Normal",
          isUrgent: false
        }
      ],
      pagination: {
        showingText: "Showing 1-4 of 9 patients",
        pages: [
          { number: 1, active: true },
          { number: 2, active: false },
          { number: 3, active: false }
        ]
      }
    }
  },
  campaignManager: {
    badge: "Campaign Manager",
    titleTop: "Create Offers &",
    titleBottom: "Increase Walk-ins",
    description: "Launch seasonal health packages and student discounts with a single click. Our built-in marketing suite helps you fill empty slots during off-peak hours.",
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
    titleTop: "Start Managing Your Lab",
    titleBottom: "Smarter Today",
    description: "Join the future of healthcare management. Secure, fast, and designed for clinical serenity.",
    buttonText: "Get Started Free"
  }
};
