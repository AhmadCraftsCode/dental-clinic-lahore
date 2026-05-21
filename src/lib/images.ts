import { clinic, images as imagePaths } from "@/config/clinic";

export const images = {
  doctor: {
    src: imagePaths.doctor,
    alt: `${clinic.doctorName}, ${clinic.pmdc} dentist at ${clinic.clinicName}`,
  },
  clinic: {
    src: imagePaths.clinic,
    alt: `${clinic.clinicName} — modern dental clinic in ${clinic.area}, ${clinic.city}`,
  },
  patient: {
    src: imagePaths.patient,
    alt: `Happy patient at ${clinic.clinicName}`,
  },
} as const;
