"use client";

import { useState, useRef } from "react";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("./ui/globeretro").then((mod) => mod.World),
  { ssr: false }
);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const globeData = useMemo(() => [
    {
      order: 1,
      startLat: -6.2,
      startLng: 106.8,
      endLat: 51.5,
      endLng: -0.1,
      arcAlt: 0.3,
      color: "#3b82f6",
    },
  ], []);

  const globeConfig = useMemo(() => ({
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    showAtmosphere: true,
    atmosphereColor: "#3b82f6",
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
  }), []);

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_8p72ge6",
        "template_5wtwxda",
        formRef.current,
        "mJL-_VNi5Eh4jtIxk"
      )
      .then(
        () => {
          alert("Pesan berhasil dikirim!");
          setForm({
            user_name: "",
            user_email: "",
            company: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Gagal mengirim pesan!");
        }
      );
  };

  return (
    <section id="contact" className="w-full text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-800">
            <Mail className="text-blue-500" />
          </div>

          <h1 className="text-4xl font-bold">Contact us</h1>

          <p className="text-neutral-400 max-w-md">
            ika ada saran atau kritikan bisa langsung aja DM ke email yang telah di sediakan di pinggir kanan, aku bakal baca dan nerima semua kritikan dari kalian.
          </p>

          <div className="mt-10 w-full h-[500px]">
            <World globeConfig={globeConfig} data={globeData} />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-neutral-900 border border-white/10 rounded-2xl p-8 space-y-6 shadow-xl"
        >
          <div>
            <label className="text-sm text-neutral-400">Full name</label>
            <input
              type="text"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              placeholder="your name"
              required
              className="w-full mt-2 p-3 rounded-lg bg-neutral-800 border border-white/10"
            />
          </div>

          <div>
            <label className="text-sm text-neutral-400">Email Address</label>
            <input
              type="email"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="w-full mt-2 p-3 rounded-lg bg-neutral-800 border border-white/10"
            />
          </div>

          <div>
            <label className="text-sm text-neutral-400">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              placeholder="company name"
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-neutral-800 border border-white/10"
            />
          </div>

          <div>
            <label className="text-sm text-neutral-400">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="your message here"
              required
              rows={4}
              className="w-full mt-2 p-3 rounded-lg bg-neutral-800 border border-white/10"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}