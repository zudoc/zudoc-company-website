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
    description: "Real time patient monitoring , revenue tracking & treatment timelinemanagement",
    headerTitle: "Hospital Control Tower",
    headerSubtitle: "Real-time patient status monitoring",
    patients: [
      {
        id: "49204",
        name: "Jonathan Smith",
        initials: "JS",
        initialsColor: "text-teal-700",
        initialsBg: "bg-cyan-300",
        ward: "General Ward",
        bed: "Bed G-102",
        progress: 75,
        progressColor: "bg-teal-800",
        physician: "Dr. Aris Thorne",
        status: "Stable",
        statusColor: "text-teal-800",
        statusBg: "bg-teal-800/10"
      },
      {
        id: "49311",
        name: "Maria Lopez",
        initials: "ML",
        initialsColor: "text-yellow-800",
        initialsBg: "bg-red-300",
        ward: "ICU - South",
        bed: "Bed ICU-04",
        progress: 25,
        progressColor: "bg-red-700",
        physician: "Dr. Sarah Jenkins",
        status: "Critical",
        statusColor: "text-red-700",
        statusBg: "bg-rose-200"
      },
      {
        id: "49285",
        name: "Robert Chen",
        image: robertChanImg,
        ward: "Private Suite",
        bed: "Suite S-02",
        progress: 100,
        progressColor: "bg-teal-700",
        physician: "Dr. Aris Thorne",
        status: "Ready",
        statusColor: "text-teal-700",
        statusBg: "bg-cyan-300/50"
      }
    ]
  },
  insights: {
    title: "Patient Conversion & Satisfaction Insights",
    description: "Track the patient journey from check-in to recovery with real-time data.",
    stats: [
      {
        title: "Zudoc ID Scanned",
        value: "1200",
        subtext: "Total Patients Checked-in",
        color: "bg-cyan-700"
      },
      {
        title: "Visits Converted",
        value: "850",
        subtext: "Completed Treatments",
        color: "bg-green-800"
      },
      {
        title: "Avg Satisfaction Before",
        value: "6.2",
        subtext: "Pre-Treatment Score",
        color: "bg-amber-800"
      },
      {
        title: "Avg Satisfaction After",
        value: "8.4",
        subtext: "Post-Treatment Score",
        color: "bg-green-800"
      }
    ],
    improvement: {
      title: "Improvement Rate",
      value: "+35%",
      subtext: "Significant increase in patient satisfaction scores"
    },
    flow: {
      title: "Patient Journey Flow",
      steps: [
        { name: "Leads", count: "1,000", color: "text-teal-800" },
        { name: "Zudoc Scan", count: "800", color: "text-teal-800" },
        { name: "In Treatment", count: "700", color: "text-green-800" },
        { name: "Completed", count: "600", color: "text-green-800" },
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
