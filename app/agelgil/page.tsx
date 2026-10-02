"use client";
import { useEffect, useState } from "react";

export default function AgelgilPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/mock")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return <div className="min-h-screen bg-black text-white p-10">Loading mock data...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-2">Agelgil API Hub</h1>
      <p className="text-gray-400 mb-8">
        Ready-to-use mock Ethiopian datasets, instantly provisioned for your team.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-purple-400">Sub-Cities & Woredas</h2>
      <p className="text-sm text-gray-400 mb-4">{data.subCitiesWoredas.length} entries</p>

      <h2 className="text-xl font-semibold mb-2 text-blue-400">Phone Numbers</h2>
      <p className="text-sm text-gray-400 mb-4">{data.mockPhoneNumbers.length} entries</p>

      <h2 className="text-xl font-semibold mb-2 text-emerald-400">Bank Transactions</h2>
      <p className="text-sm text-gray-400 mb-4">{data.mockBankTransactions.length} entries</p>

      <h2 className="text-xl font-semibold mb-2 text-orange-400">Webhook Payloads</h2>
      <p className="text-sm text-gray-400 mb-4">{data.mockWebhookPayloads.length} entries</p>
    </div>
  );
}