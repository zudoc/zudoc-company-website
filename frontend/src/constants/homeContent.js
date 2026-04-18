import patientIcon from '../assets/heroPage/patient.png'
import doctorIcon from '../assets/heroPage/doctor.png'
import hospitalIcon from '../assets/heroPage/hospital.png'
import labIcon from '../assets/heroPage/lab.png'

export const homeContent = {
  hero: {
    titleTop: "One platform for",
    titleBottom: "modern healthcare",
    description: "Zudoc brings patients, doctors, hospitals, and labs together on one powerful platform to streamline the healthcare journey."
  },
  services: [
    { 
      id: "patient",
      title: "Patient", 
      sub: "Book & manage", 
      icon: patientIcon, 
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      id: "doctor",
      title: "Doctor", 
      sub: "Manage patients", 
      icon: doctorIcon, 
      color: "from-cyan-500 to-teal-500" 
    },
    { 
      id: "hospital",
      title: "Hospital", 
      sub: "Run operations", 
      icon: hospitalIcon, 
      color: "from-sky-500 to-indigo-500" 
    },
    { 
      id: "laboratory",
      title: "Laboratory", 
      sub: "Fast testing", 
      icon: labIcon, 
      color: "from-teal-500 to-emerald-500" 
    }
  ]
};
