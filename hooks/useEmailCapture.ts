"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done";

export function useEmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status !== "idle") return;
    setStatus("sending");
    setTimeout(() => {
      const stored: { email: string; date: string }[] = JSON.parse(
        localStorage.getItem("flowos_emails") || "[]"
      );
      stored.push({ email, date: new Date().toISOString() });
      localStorage.setItem("flowos_emails", JSON.stringify(stored));
      setStatus("done");
      setEmail("");
    }, 800);
  };

  return { email, setEmail, status, submit };
}
