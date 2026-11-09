"use client";

import { useState, type FormEvent } from "react";
import type { Enquiry } from "@/lib/types";
import { MaskedLines, Reveal } from "./motion";

const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DB_URL?.replace(/\/$/, "");
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const inputClass =
  "mt-3 w-full border-b border-ivory/30 bg-transparent pb-3 text-ivory outline-none transition-colors focus:border-champagne";

function Field({
  label,
  name,
  type = "text",
  className,
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="label-caps text-ivory/60" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} required className={inputClass} />
    </div>
  );
}

async function saveEnquiry(enquiry: Enquiry) {
  if (!DB_URL) throw new Error("NEXT_PUBLIC_FIREBASE_DB_URL is not configured");
  const res = await fetch(`${DB_URL}/halo/enquiries.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enquiry),
  });
  if (!res.ok) throw new Error(`Enquiry save failed (${res.status})`);
}

async function notifyByEmail(enquiry: Enquiry) {
  if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) return;
  const emailjs = (await import("@emailjs/browser")).default;
  await emailjs.send(
    EMAILJS.serviceId,
    EMAILJS.templateId,
    { ...enquiry, brand: "Halo & Halo Events" },
    { publicKey: EMAILJS.publicKey },
  );
}

export function PlanForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const enquiry: Enquiry = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      date: String(data.get("date") ?? "").trim(),
      package: String(data.get("package") ?? ""),
      message: String(data.get("message") ?? "").trim(),
      createdAt: new Date().toISOString(),
      read: false,
    };

    setStatus("sending");
    try {
      await saveEnquiry(enquiry);
      // Email is a courtesy notification; the enquiry is already stored.
      await notifyByEmail(enquiry).catch((err) => console.warn("EmailJS notification failed", err));
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="plan" className="bg-espresso py-24 text-ivory lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div>
          <Reveal>
            <p className="label-caps text-champagne">Plan Your Wedding</p>
          </Reveal>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1] sm:text-5xl lg:text-7xl">
            <MaskedLines lines={["Let's begin", "your story."]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-ivory/70">
              Tell us a little about your celebration and we&apos;ll be in touch to talk through ideas, dates and the
              right package for you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-2 label-caps text-ivory/60">
              <p>hello@haloandhalo.events</p>
              <p>+91 00000 00000</p>
              <p>Chennai · Destination worldwide</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={40}>
          {status === "sent" ? (
            <div className="flex h-full min-h-56 flex-col items-start justify-center border border-ivory/20 p-10">
              <p className="font-serif text-3xl text-ivory">Thank you.</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/70">
                We&apos;ve received your enquiry and will be in touch soon to start planning something beautiful.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Your name" name="name" className="sm:col-span-2" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Wedding date (approx.)" name="date" />
              <div className="sm:col-span-1">
                <label className="label-caps text-ivory/60" htmlFor="package">
                  Package
                </label>
                <select id="package" name="package" defaultValue="Signature" className={inputClass}>
                  <option className="text-espresso">Essential</option>
                  <option className="text-espresso">Signature</option>
                  <option className="text-espresso">Bespoke</option>
                  <option className="text-espresso">Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="label-caps text-ivory/60" htmlFor="message">
                  Tell us about your celebration
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className={`${inputClass} resize-none placeholder:text-ivory/30`}
                  placeholder="Guest count, city, what matters most…"
                />
              </div>
              {status === "error" && (
                <p role="alert" className="sm:col-span-2 text-sm text-rose">
                  Something went wrong sending your enquiry. Please try again, or email us at
                  hello@haloandhalo.events.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-2 mt-2 inline-flex justify-center rounded-full bg-ivory px-8 py-4 label-caps text-espresso transition-colors hover:bg-champagne disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Enquiry"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
