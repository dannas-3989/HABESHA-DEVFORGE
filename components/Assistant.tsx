"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { VoxideClient, VoxideWidget } from "@voxide/react";

const ai = new VoxideClient({
  publicKey: "vox_pub_aa5d185cfefda1bdf1087613ed8182e7d850594692910053",
});

export function Assistant() {
  const router = useRouter();

  useEffect(() => {
    ai.enableNavigation(router);
  }, [router]);

  return <VoxideWidget client={ai} accentColor="#FF6600" theme="auto" />;
}