import React from 'react'

const Contact  = () => {
  return (
    <section id="contact" className="w-full max-w-xl mx-auto relative pt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-purple-200">Mail me</h2>
      <form className="mt-6 space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-purple-300">Nama</label>
          <input
            id="name"
            type="text"
            placeholder="Your name" 
            className="mt-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-600"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-purple-300">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="mt-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-600"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-purple-300">Pesan</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here"
            className="mt-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-600"
          />
        </div>

        <button
          type="button"
          className="w-full md:w-auto rounded-xl px-5 py-2.5 font-medium shadow hover:shadow-md transition border bg-black text-white dark:bg-gray-200 dark:text-black"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  )
}

export default Contact