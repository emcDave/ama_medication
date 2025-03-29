// columns.ts
import { Medication } from "./medication";
import { ReactNode } from "react";

export interface Column<T> {
  header: string;
  render: (row: T) => ReactNode;
  className?: string;
}

export const columns: Column<Medication>[] = [
  {
    header: "ID",
    render: (row) => row.id,
  },
  {
    header: "Name",
    render: (row) => row.name,
  },
  {
    header: "Description",
    render: (row) => row.description,
  },
  {
    header: "Morning Dosage",
    render: (row) => row.dosage.morning,
    className: "center-dosage",
  },
  {
    header: "Afternoon Dosage",
    render: (row) => row.dosage.afternoon,
    className: "center-dosage",
  },
  {
    header: "Evening Dosage",
    render: (row) => row.dosage.evening,
    className: "center-dosage",
  },
  {
    header: "Side Effects",
    render: (row) => row.sideEffects,
  },
];
