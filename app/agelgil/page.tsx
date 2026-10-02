"use client";

import { useState } from "react";
import Link from "next/link";

type Dataset = "locations" | "phones" | "transactions" | "webhooks";

const datasets: {
  id: Dataset;
  name: string;
  description: string;
  endpoint: string;
}[] = [
  {
    id: "locations",
    name: "Locations",
    description: "Ethiopian sub-cities and woreda data.",
    endpoint: "/api/mock?type=locations",
  },
  {
    id: "phones",
    name: "Phone Numbers",
    description: "Sample Ethiopian phone-number data.",
    endpoint: "/api/mock?type=phones",
  },
  {
    id: "transactions",
    name: "Bank Transactions",
    description: "Illustrative local transaction records.",
    endpoint: "/api/mock?type=transactions",
  },
  {
    id: "webhooks",
    name: "Payment Webhooks",
    description: "Sample Chapa / Telebirr-style webhook payloads.",
    endpoint: "/api/mock?type=webhooks",
  },
];

export default function AgelgilPage() {
  const [selected, setSelected] = useState<Dataset>("locations");
  const [response, setResponse] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const currentDataset = datasets.find((dataset) => dataset.id === selected)!;

  async function sendRequest() {
    setLoading(true);
    setError("");
    setCopied(false);

    try {
      const res = await fetch(currentDataset.endpoint);

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while fetching the dataset."
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyResponse() {
    if (!response) return;

    await navigator.clipboard.writeText(
      JSON.stringify(response, null, 2)
    );

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-28 text-white">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-500 hover:text-white"
        >
          ← Back to home
        </Link>

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
            Agelgil API Hub
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Local data.
            <br />
            <span className="text-gray-500">Ready to build with.</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Explore Ethiopian-focused mock datasets through a simple developer
            API. Select a dataset, send a request, and inspect the response.
          </p>
        </div>

        {/* API PLAYGROUND */}
        <section className="mt-14 grid gap-6 lg:grid-cols-[320px_1fr]">

          {/* DATASET LIST */}
          <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="px-3 pb-3 text-xs font-bold uppercase tracking-widest text-gray-600">
              Datasets
            </p>

            <div className="space-y-2">
              {datasets.map((dataset) => (
                <button
                  key={dataset.id}
                  onClick={() => {
                    setSelected(dataset.id);
                    setResponse(null);
                    setError("");
                  }}
                  className={`w-full rounded-xl p-4 text-left transition ${
                    selected === dataset.id
                      ? "bg-emerald-400 text-black"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <p className="font-bold">{dataset.name}</p>

                  <p
                    className={`mt-1 text-xs leading-5 ${
                      selected === dataset.id
                        ? "text-black/70"
                        : "text-gray-600"
                    }`}
                  >
                    {dataset.description}
                  </p>
                </button>
              ))}
            </div>
          </aside>

          {/* REQUEST / RESPONSE */}
          <div className="space-y-5">

            {/* REQUEST */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    Endpoint
                  </p>

                  <code className="mt-1 block text-sm text-emerald-400">
                    GET {currentDataset.endpoint}
                  </code>
                </div>

                <button
                  onClick={sendRequest}
                  disabled={loading}
                  className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-50"
                >
                  {loading ? "Requesting..." : "Send request"}
                </button>
              </div>
            </div>

            {/* RESPONSE */}
            <div className="min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-gray-600">
                    RESPONSE
                  </span>

                  {response && (
                    <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-bold text-emerald-400">
                      200 OK
                    </span>
                  )}
                </div>

                {response && (
                  <button
                    onClick={copyResponse}
                    className="text-xs text-gray-500 hover:text-white"
                  >
                    {copied ? "Copied ✓" : "Copy JSON"}
                  </button>
                )}
              </div>

              <div className="p-5">
                {loading && (
                  <p className="font-mono text-sm text-gray-600">
                    Fetching {currentDataset.endpoint}...
                  </p>
                )}

                {error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                    <p className="font-mono text-sm text-red-400">
                      {error}
                    </p>
                  </div>
                )}

                {!loading && !error && !response && (
                  <div className="flex min-h-[330px] items-center justify-center text-center">
                    <div>
                      <p className="font-mono text-sm text-gray-600">
                        No response yet.
                      </p>

                      <p className="mt-2 text-xs text-gray-700">
                        Select a dataset and send a request.
                      </p>
                    </div>
                  </div>
                )}

                {response && (
                  <pre className="max-h-[500px] overflow-auto whitespace-pre-wrap break-words font-mono text-xs leading-6 text-gray-400">
                    {JSON.stringify(response, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PROTOTYPE NOTE */}
        <div className="mt-8 rounded-xl border border-white/10 p-4">
          <p className="text-xs leading-6 text-gray-600">
            Agelgil uses illustrative mock data for development and prototyping.
            It does not connect to real financial accounts, payment systems, or
            personal data.
          </p>
        </div>
      </div>
    </main>
  );
}