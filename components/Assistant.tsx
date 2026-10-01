"use client";
import { VoxideClient, VoxideWidget } from "@voxide/react";

const ai = new VoxideClient({
  publicKey: "vox_pub_aa5d185cfefda1bdf1087613ed8182e7d850594692910053",
});

ai.register({
  greetUser: {
    description: "Greet the user by name",
    params: { name: { type: "string", required: true } },
    handler: ({ name }) => alert(`Hello, ${name}!`),
  },
});

export function Assistant() {
  return <VoxideWidget client={ai} accentColor="#FF6600" theme="auto" />;
}