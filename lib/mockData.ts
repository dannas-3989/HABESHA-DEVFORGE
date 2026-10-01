// lib/mockData.ts
// Real data compiled by Elbethel, converted into typed arrays for the
// Agelgil API Hub. Served via Next.js API routes (see app/api/mock/*).

import type {
    SubCityWoreda,
    MockEthiopianPhoneNumber,
    MockBankTransaction,
  } from "@/types";
  
  export const subCitiesWoredas: SubCityWoreda[] = [
    { city: "Addis Ababa", subCity: "Bole", woredas: ["Woreda 01", "Woreda 02", "Woreda 03"] },
    { city: "Addis Ababa", subCity: "Yeka", woredas: ["Woreda 01", "Woreda 02", "Woreda 03"] },
    { city: "Addis Ababa", subCity: "Kirkos", woredas: ["Woreda 01", "Woreda 02", "Woreda 03"] },
    { city: "Addis Ababa", subCity: "Arada", woredas: ["Woreda 01", "Woreda 02", "Woreda 03"] },
    { city: "Addis Ababa", subCity: "Gulele", woredas: ["Woreda 01", "Woreda 02", "Woreda 03"] },
    { city: "Addis Ababa", subCity: "Lideta", woredas: ["Woreda 01", "Woreda 02", "Woreda 03"] },
    { city: "Addis Ababa", subCity: "Kolfe Keranio", woredas: ["Woreda 01", "Woreda 02", "Woreda 03"] },
    { city: "Addis Ababa", subCity: "Nifas Silk-Lafto", woredas: ["Woreda 01", "Woreda 02"] },
    { city: "Addis Ababa", subCity: "Akaky Kaliti", woredas: ["Woreda 01"] },
    { city: "Addis Ababa", subCity: "Addis Ketema", woredas: ["Woreda 01"] },
  ];
  
  export const mockPhoneNumbers: MockEthiopianPhoneNumber[] = [
    { number: "+251911234567", carrier: "ethio-telecom", isValid: true },
    { number: "+251922345678", carrier: "ethio-telecom", isValid: true },
    { number: "+251933456789", carrier: "ethio-telecom", isValid: true },
    { number: "+251944567890", carrier: "ethio-telecom", isValid: true },
    { number: "+251955678901", carrier: "ethio-telecom", isValid: true },
    { number: "+251966789012", carrier: "ethio-telecom", isValid: true },
    { number: "+251977890123", carrier: "ethio-telecom", isValid: true },
    { number: "+251788901234", carrier: "safaricom-et", isValid: true },
    { number: "+251799012345", carrier: "safaricom-et", isValid: true },
    { number: "+251700123456", carrier: "safaricom-et", isValid: true },
    { number: "+251711234567", carrier: "safaricom-et", isValid: true },
    { number: "+251722345678", carrier: "safaricom-et", isValid: true },
    { number: "+251733456789", carrier: "safaricom-et", isValid: true },
    { number: "+251744567890", carrier: "safaricom-et", isValid: true },
    { number: "+251755678901", carrier: "safaricom-et", isValid: true },
    { number: "+25191234567", carrier: "ethio-telecom", isValid: false },
    { number: "+251812345678", carrier: "ethio-telecom", isValid: false },
    { number: "+25178890", carrier: "safaricom-et", isValid: false },
    { number: "+2517990123456", carrier: "safaricom-et", isValid: false },
    { number: "+251123456789", carrier: "ethio-telecom", isValid: false },
  ];
  
  export const mockBankTransactions: MockBankTransaction[] = [
    { transactionId: "TXN-2026-001", bank: "CBE", amountEtb: 2500, senderName: "Hana Tesfaye", receiverName: "Abel Bekele", status: "completed", timestamp: "2026-09-21T09:00:00Z" },
    { transactionId: "TXN-2026-002", bank: "Dashen", amountEtb: 850, senderName: "Sami Ali", receiverName: "Meron Dawit", status: "pending", timestamp: "2026-09-21T09:05:00Z" },
    { transactionId: "TXN-2026-003", bank: "Awash", amountEtb: 1200, senderName: "Eden Worku", receiverName: "Noah Tadesse", status: "failed", timestamp: "2026-09-21T09:10:00Z" },
    { transactionId: "TXN-2026-004", bank: "Abyssinia", amountEtb: 3500, senderName: "Selam Gebre", receiverName: "Daniel Alemu", status: "completed", timestamp: "2026-09-21T09:15:00Z" },
    { transactionId: "TXN-2026-005", bank: "Wegagen", amountEtb: 675, senderName: "Rahel Mengistu", receiverName: "Yonatan Bekele", status: "completed", timestamp: "2026-09-21T09:20:00Z" },
    { transactionId: "TXN-2026-006", bank: "CBE", amountEtb: 1800, senderName: "Mahi Girma", receiverName: "Natnael Abebe", status: "pending", timestamp: "2026-09-21T09:25:00Z" },
    { transactionId: "TXN-2026-007", bank: "Dashen", amountEtb: 4200, senderName: "Lulit Desta", receiverName: "Samuel Tadesse", status: "completed", timestamp: "2026-09-21T09:30:00Z" },
    { transactionId: "TXN-2026-008", bank: "Awash", amountEtb: 950, senderName: "Abel Solomon", receiverName: "Meron Kebede", status: "failed", timestamp: "2026-09-21T09:35:00Z" },
    { transactionId: "TXN-2026-009", bank: "Abyssinia", amountEtb: 2750, senderName: "Saron Mekonnen", receiverName: "Dawit Haile", status: "completed", timestamp: "2026-09-21T09:40:00Z" },
    { transactionId: "TXN-2026-010", bank: "Wegagen", amountEtb: 1500, senderName: "Eden Yohannes", receiverName: "Kaleb Tesfaye", status: "pending", timestamp: "2026-09-21T09:45:00Z" },
    { transactionId: "TXN-2026-011", bank: "CBE", amountEtb: 5200, senderName: "Hana Alemu", receiverName: "Robel Girma", status: "completed", timestamp: "2026-09-21T09:50:00Z" },
    { transactionId: "TXN-2026-012", bank: "Dashen", amountEtb: 725, senderName: "Selamawit Bekele", receiverName: "Henok Worku", status: "failed", timestamp: "2026-09-21T09:55:00Z" },
    { transactionId: "TXN-2026-013", bank: "Awash", amountEtb: 3100, senderName: "Meron Tadesse", receiverName: "Yared Abebe", status: "completed", timestamp: "2026-09-21T10:00:00Z" },
    { transactionId: "TXN-2026-014", bank: "Abyssinia", amountEtb: 1100, senderName: "Rahel Dawit", receiverName: "Abel Mengistu", status: "pending", timestamp: "2026-09-21T10:05:00Z" },
    { transactionId: "TXN-2026-015", bank: "Wegagen", amountEtb: 4600, senderName: "Siham Ahmed", receiverName: "Nabil Hassan", status: "completed", timestamp: "2026-09-21T10:10:00Z" },
  ];
  
  // Webhook-style mock payloads (illustrative "chapa-style" / "telebirr-style"
  // shapes for the Agelgil API Hub demo — not real payment processing; any
  // real payments in this project route through Links.et per the hackathon rules).
  export interface MockWebhookRow {
    type: "chapa-style" | "telebirr-style";
    reference: string;
    amountEtb: number;
    status: "success" | "pending" | "failed";
    phoneNumber: string;
  }
  
  export const mockWebhookPayloads: MockWebhookRow[] = [
    { type: "chapa-style", reference: "CHAPA-REF-001", amountEtb: 250, status: "success", phoneNumber: "+251911234567" },
    { type: "telebirr-style", reference: "TELEBIRR-REF-002", amountEtb: 1200, status: "pending", phoneNumber: "+251922345678" },
    { type: "chapa-style", reference: "CHAPA-REF-003", amountEtb: 750, status: "success", phoneNumber: "+251933456789" },
    { type: "telebirr-style", reference: "TELEBIRR-REF-004", amountEtb: 3500, status: "failed", phoneNumber: "+251944567890" },
    { type: "chapa-style", reference: "CHAPA-REF-005", amountEtb: 500, status: "success", phoneNumber: "+251955678901" },
    { type: "telebirr-style", reference: "TELEBIRR-REF-006", amountEtb: 1800, status: "pending", phoneNumber: "+251966789012" },
    { type: "chapa-style", reference: "CHAPA-REF-007", amountEtb: 2750, status: "success", phoneNumber: "+251977890123" },
    { type: "telebirr-style", reference: "TELEBIRR-REF-008", amountEtb: 950, status: "failed", phoneNumber: "+251788901234" },
    { type: "chapa-style", reference: "CHAPA-REF-009", amountEtb: 4200, status: "success", phoneNumber: "+251799012345" },
    // Normalized "completed" -> "success" to match the Status type consistently
    { type: "telebirr-style", reference: "TELEBIRR-REF-010", amountEtb: 1500, status: "success", phoneNumber: "+251700123456" },
  ];