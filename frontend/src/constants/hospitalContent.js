import generalWardImg from '../assets/hospitalPage/generalWard.png';
import hospitalImg from '../assets/hospitalPage/hospital.png';
import icuUnitAImg from '../assets/hospitalPage/icuUnitA.png';
import privateRoomImg from '../assets/hospitalPage/privateRoom.png';
import profileImg from '../assets/hospitalPage/profile.png';
import robertChanImg from '../assets/hospitalPage/robertChan.jpg';

export const hospitalContent = {
  hero: {
    titleTop: "Better Care",
    titleMiddle: "Starts with",
    titleBottom: "Better Operations",
    description: "Zudoc helps hospitals improve efficiency, reduce delays, and enhance patient experience.",
    buttonText: "Get Started",
    image: hospitalImg,
  },
  trackPatient: {
    title: "Track Every Patient, Effortlessly",
    description: "Stay updated at every stage — no delays, no confusion, just smooth hospital operations.",
    steps: [
      { id: "checkIn", label: "Quick Check-In", completed: true, color: "bg-[#0b9480]", shadow: "shadow-[#0b9480]" },
      { id: "treatment", label: "Treatment", completed: true, color: "bg-[#1c5fdf]", shadow: "shadow-[#1c5fdf]" },
      { id: "recovery", label: "Recovery", completed: true, color: "bg-[#9124e5]", shadow: "shadow-[#9124e5]" },
      { id: "reports", label: "Digital Reports", completed: true, color: "bg-[#09aa47]", shadow: "shadow-[#09aa47]" },
      { id: "discharge", label: "Discharge", completed: false, color: "bg-[#0a8b66]", shadow: "shadow-[#0a8b66]" }
    ]
  },
  resourceAvailability: {
    badge: "Live",
    title: "Resource Availability",
    description: "Real-time hospital capacity overview and ward status.",
    tabs: ["Beds", "OT Slots", "ICU"],
    subtitle: "Live Bed Availability Status",
    subDescription1: "Real-Time monitoring",
    subDescription2: "view current bed occupancy across all wards",
    wards: [
      {
        id: 1,
        title: "General Ward",
        subtitle: "Central Wing • Floor 4",
        available: 4,
        status: "High Capacity",
        icon: generalWardImg,
        beds: [
          { status: 'available', number: 1 },
          { status: 'available', number: 2 },
          { status: 'cleaning', number: 3 },
          { status: 'available', number: 4 },
          { status: 'available', number: 5 },
          { status: 'occupied', number: 6 },
          { status: 'occupied', number: 7 },
          { status: 'cleaning', number: 8 },
          { status: 'occupied', number: 9 },
          { status: 'occupied', number: 10 },
        ]
      },
      {
        id: 2,
        title: "ICU Unit A",
        subtitle: "South Wing • Floor 6",
        available: 1,
        status: "High Capacity",
        icon: icuUnitAImg,
        beds: [
          { status: 'occupied', number: 1 },
          { status: 'occupied', number: 2 },
          { status: 'cleaning', number: 3 },
          { status: 'available', number: 4 },
          { status: 'occupied', number: 5 },
          { status: 'occupied', number: 6 },
          { status: 'occupied', number: 7 },
          { status: 'cleaning', number: 8 },
          { status: 'occupied', number: 9 },
          { status: 'maintenance', number: 10 },
        ]
      },
      {
        id: 3,
        title: "Private Room",
        subtitle: "Private Wing • Floor 5",
        available: 4,
        status: "High Capacity",
        icon: privateRoomImg,
        beds: [
          { status: 'available', number: 1 },
          { status: 'available', number: 2 },
          { status: 'cleaning', number: 3 },
          { status: 'available', number: 4 },
          { status: 'available', number: 5 },
          { status: 'occupied', number: 6 },
          { status: 'occupied', number: 7 },
          { status: 'cleaning', number: 8 },
          { status: 'occupied', number: 9 },
          { status: 'occupied', number: 10 },
        ]
      }
    ],
    icuBeds: [
      { id: 'ICU-A-101', status: 'Available', floor: '2nd Floor', info: 'Ventilator Ready' },
      { id: 'ICU-A-102', status: 'Available', floor: '2nd Floor', info: 'Ventilator Ready' },
      { id: 'ICU-B-201', status: 'Occupied', floor: '2nd Floor', info: 'Ventilator In Use' },
      { id: 'ICU-B-202', status: 'Available', floor: '2nd Floor', info: 'Ventilator Ready' },
    ],
    otSlots: [
      { id: 'OT-1', number: '1', department: 'Cardio', status: 'Available', doctor: 'Dr. Anjali Verma', date: 'Tomorrow', time: '09:00 - 12:00' },
      { id: 'OT-2', number: '2', department: 'general', status: 'Available', doctor: 'Dr. Anjali Verma', date: 'Tomorrow', time: '09:00 - 12:00' },
      { id: 'OT-3', number: '3', department: 'ortho', status: 'Available', doctor: 'Dr. Anjali Verma', date: 'Tomorrow', time: '09:00 - 12:00' },
      { id: 'OT-4', number: '4', department: 'Neuro', status: 'Booked', doctor: 'Dr. Anjali Verma', date: 'Tomorrow', time: '09:00 - 12:00' },
    ]
  },
  controlTower: {
    title: "Hospital Control Tower",
    description: "Monitor real-time bed occupancy, treatment accuracy, and patient journey across wards.",
    headerTitle: "Hospital Control Tower",
    headerSubtitle: "Live Tracking Active",
    tabs: ["Daily", "Weekly", "Monthly"],
    columns: ["Patient", "Ward & Admission", "Treatment Plan", "Timeline Status", "Revenue", "Surgeries"],
    data: {
      Daily: [
        { 
          id: "P-101", name: "Anish Kumar", initials: "AK", initialsBg: "bg-teal-50", initialsColor: "text-teal-700",
          ward: "General Ward-12", department: "Cardiology", admissionDate: "Today, 08:30 AM",
          treatmentPlan: "Angioplasty Post-Op Care", treatmentDuration: "2 Days Left",
          timelineStatus: "On Time", revenue: "₹45,000", revenueTotal: "₹1,20,000", surgeries: 1
        },
        { 
          id: "P-102", name: "Sneha Reddy", initials: "SR", initialsBg: "bg-rose-50", initialsColor: "text-rose-700",
          ward: "ICU Bed-4", department: "Neurology", admissionDate: "Today, 10:45 AM",
          treatmentPlan: "Neurological Observation", treatmentDuration: "5 Days Left",
          timelineStatus: "Delayed", revenue: "₹85,000", revenueTotal: "₹3,50,000", surgeries: 0
        },
        { 
          id: "P-103", name: "Rahul Verma", initials: "RV", initialsBg: "bg-cyan-50", initialsColor: "text-cyan-700",
          ward: "Private-102", department: "Orthopedics", admissionDate: "Today, 11:15 AM",
          treatmentPlan: "Knee Replacement Prep", treatmentDuration: "7 Days Left",
          timelineStatus: "On Time", revenue: "₹12,000", revenueTotal: "₹2,80,000", surgeries: 0
        }
      ],
      Weekly: [
        { 
          id: "P-101", name: "Anish Kumar", initials: "AK", initialsBg: "bg-teal-50", initialsColor: "text-teal-700",
          ward: "General Ward-12", department: "Cardiology", admissionDate: "18th Oct, 2023",
          treatmentPlan: "Angioplasty Post-Op Care", treatmentDuration: "2 Days Left",
          timelineStatus: "On Time", revenue: "₹45,000", revenueTotal: "₹1,20,000", surgeries: 1
        },
        { 
          id: "P-105", name: "Priya Sharma", initials: "PS", initialsBg: "bg-amber-50", initialsColor: "text-amber-700",
          ward: "ICU Bed-2", department: "Orthopedics", admissionDate: "15th Oct, 2023",
          treatmentPlan: "Joint Replacement Recovery", treatmentDuration: "4 Days Left",
          timelineStatus: "Delayed", revenue: "₹1,25,000", revenueTotal: "₹4,50,000", surgeries: 1
        },
        { 
          id: "P-108", name: "Vikram Malhotra", initials: "VM", initialsBg: "bg-purple-50", initialsColor: "text-purple-700",
          ward: "Semi-Private 04", department: "Urology", admissionDate: "17th Oct, 2023",
          treatmentPlan: "Post-Surgical Monitoring", treatmentDuration: "Complete",
          timelineStatus: "On Time", revenue: "₹95,000", revenueTotal: "₹1,80,000", surgeries: 1
        },
        { 
          id: "P-112", name: "Aditi Iyer", initials: "AI", initialsBg: "bg-emerald-50", initialsColor: "text-emerald-700",
          ward: "General-21", department: "Pediatrics", admissionDate: "19th Oct, 2023",
          treatmentPlan: "Acute Infection Treatment", treatmentDuration: "1 Day Left",
          timelineStatus: "On Time", revenue: "₹15,000", revenueTotal: "₹45,000", surgeries: 0
        }
      ],
      Monthly: [
        { 
          id: "P-201", name: "John Doe", initials: "JD", initialsBg: "bg-blue-50", initialsColor: "text-blue-700",
          ward: "Cardio ICU-1", department: "Cardiology", admissionDate: "05th Oct, 2023",
          treatmentPlan: "Bypass Surgery & Rehab", treatmentDuration: "Discharged",
          timelineStatus: "On Time", revenue: "₹8,50,000", revenueTotal: "₹8,50,000", surgeries: 2
        },
        { 
          id: "P-205", name: "Sara Khan", initials: "SK", initialsBg: "bg-pink-50", initialsColor: "text-pink-700",
          ward: "Neuro Ward-09", department: "Neurology", admissionDate: "12th Oct, 2023",
          treatmentPlan: "Tumor Resection Follow-up", treatmentDuration: "15 Days Left",
          timelineStatus: "On Time", revenue: "₹4,20,000", revenueTotal: "₹12,00,000", surgeries: 1
        },
        { 
          id: "P-210", name: "Michael Chang", initials: "MC", initialsBg: "bg-orange-50", initialsColor: "text-orange-700",
          ward: "Private-105", department: "Orthopedics", admissionDate: "20th Oct, 2023",
          treatmentPlan: "Physiotherapy PlanB", treatmentDuration: "1 Month",
          timelineStatus: "Delayed", revenue: "₹2,10,000", revenueTotal: "₹5,00,000", surgeries: 1
        },
        { 
          id: "P-215", name: "Riya Sen", initials: "RS", initialsBg: "bg-indigo-50", initialsColor: "text-indigo-700",
          ward: "General-01", department: "Obstetrics", admissionDate: "10th Oct, 2023",
          treatmentPlan: "Post-Natal Care", treatmentDuration: "Complete",
          timelineStatus: "On Time", revenue: "₹1,80,000", revenueTotal: "₹2,50,000", surgeries: 0
        },
        { 
          id: "P-220", name: "Karan Gupta", initials: "KG", initialsBg: "bg-slate-50", initialsColor: "text-slate-700",
          ward: "ICU-05", department: "Oncology", admissionDate: "01st Oct, 2023",
          treatmentPlan: "Chemotherapy Cycle-1", treatmentDuration: "Continuous",
          timelineStatus: "On Time", revenue: "₹6,40,000", revenueTotal: "₹15,00,000", surgeries: 1
        }
      ]
    }
  },
  insights: {
    title: "Patient Conversion & Satisfaction Insights",
    description: "Track the patient journey from check-in to recovery with Real time Analysis Active",
    statusBadge: "Real-time Analysis Active",
    stats: [
      {
        id: "scanned",
        title: "Zudoc ID Scanned",
        value: "1200",
        subtext: "Total Patients Checked-in",
        color: "bg-cyan-700",
        iconPath: "M12 4v1m6 1l-1 1m-11 0l-1-1m2 10l1 1m11 0l1-1m-6-1v1m-4-6h1m10 0h1"
      },
      {
        id: "converted",
        title: "Visits Converted",
        value: "850",
        subtext: "Completed Treatments",
        color: "bg-green-800",
        iconPath: "M5 13l4 4L19 7"
      },
      {
        id: "satBefore",
        title: "Avg Satisfaction Before",
        value: "6.2",
        subtext: "Pre-Treatment Score",
        color: "bg-amber-800",
        iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        id: "satAfter",
        title: "Avg Satisfaction After",
        value: "8.4",
        subtext: "Post-Treatment Score",
        color: "bg-green-800",
        iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    ],
    improvement: {
      title: "Improvement Rate",
      value: "+35%",
      subtext: "Significant increase in patient satisfaction scores",
      color: "bg-gradient-to-br from-teal-800 to-cyan-700"
    },
    flow: {
      title: "Patient Journey Flow",
      steps: [
        { name: "Patients Checked In", count: "1,010", color: "bg-teal-800", icon: "user" },
        { name: "Scanned via Zudoc", count: "825", color: "bg-cyan-700", iconPath: "M12 4v1m6 1l-1 1" },
        { name: "In Treatment", count: "755", color: "bg-amber-600", iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
        { name: "Completed", count: "661", color: "bg-green-800", icon: "check" },
      ]
    },
    benchmarking: {
      title: "Satisfaction Benchmarking",
      subtitle: "Before vs. after treatment comparison",
      improvement: "+2.2 Improvement",
      metrics: [
        { label: "Pre-Treatment", value: "6.2", max: "10", colorFrom: "from-amber-500", colorTo: "to-orange-300" },
        { label: "Post-Treatment", value: "8.4", max: "10", colorFrom: "from-green-800", colorTo: "to-green-300" }
      ]
    },
    caseInsight: {
      title: "Featured Case Insight",
      patientId: "H4HU-H8J9-G",
      status: "Improved",
      preScore: "5.0",
      postScore: "9.0",
      image: profileImg
    }
  },
  cta: {
    title: "Start Managing Your Hospital Smarter Today",
    description: "Join the future of healthcare management. Secure, fast, and designed for clinical serenity.",
    buttonText: "Get Started Free"
  }
};
