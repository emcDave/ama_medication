export interface Dosage {
  morning: string;
  afternoon: string;
  evening: string;
}

export interface Medication {
  id: number;
  name: string;
  description: string;
  dosage: Dosage;
  sideEffects: [];
}
