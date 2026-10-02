import { NextRequest, NextResponse } from "next/server";
import {
  subCitiesWoredas,
  mockPhoneNumbers,
  mockBankTransactions,
  mockWebhookPayloads,
} from "@/lib/mockData";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");

  switch (type) {
    case "subcities":
      return NextResponse.json(subCitiesWoredas);
    case "phones":
      return NextResponse.json(mockPhoneNumbers);
    case "transactions":
      return NextResponse.json(mockBankTransactions);
    case "webhooks":
      return NextResponse.json(mockWebhookPayloads);
    default:
      return NextResponse.json({
        subCitiesWoredas,
        mockPhoneNumbers,
        mockBankTransactions,
        mockWebhookPayloads,
      });
  }
}