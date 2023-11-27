// src/types/formData.ts

export interface FormData {
    model: string;
    date: string;       // Date in ISO format (e.g., "2023-11-21")
    quantity: number;
    licenseLevel: string;
    comment?: string;   // Optional comment field
  }
  