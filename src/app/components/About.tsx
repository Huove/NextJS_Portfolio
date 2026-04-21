import Image from "next/image";
import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { techStack } from "./data/Index";

const About = () => {
  return (
    <section className="min-h-screen text-white px-6 py-16 flex items-center justify-center relative" id="about">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <Image
              src="/port1.jpeg"
              alt="Profile"
              width={256}
              height={256}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hai semua aku <span className="text-purple-500 font-semibold">MuhammadNovel</span>, kalian bisa paggil aku <span className="text-purple-500 font-semibold">Novel</span>. Aku adalah siswa kelas 11 dari SMKN 8 Malang jurusan RPL. Aku memiliki cita cita sebagai <span className="text-red-700 font-semibold">Game Developer</span> dan <span className="text-red-700 font-semibold">App Developer</span>, aku memiliki motivasi sendiri yaitu agar suatu saat nanti aku akan menjadi Game Developer yang bisa membuat orang sennang dengan Game yang ku buat.
          </p>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mt-10">I have experience at</h2>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <AnimatedTooltip items={techStack} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About