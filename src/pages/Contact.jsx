import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch('https://formspree.io/f/xvgkbyow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('SUCCESS')
        e.target.reset()
      } else {
        setStatus('ERROR')
      }
    } catch (err) {
      setStatus('ERROR', err)
    }
  }

  return (
    <div className="w-full">
      {/* Page Heading */}
      <div className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We'd love to hear from you. Reach out with questions, partnerships, or support.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Let’s Connect</h2>
          <p className="text-gray-600">
            Whether you're interested in our tracking solutions or need assistance with your
            SoftTrack system, our team is here to help. Use the form to reach out or email us directly.
          </p>
          <div className="text-gray-700 space-y-2">
            <p><strong>Address:</strong> 229 Shoreditch High Street, London E1 6PJ</p>
            <p><strong>Email:</strong> support@softtrack.io</p>
            <p><strong>Phone:</strong> +44 (0) 20 7946 0123</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              required
              className="mt-1 w-full border border-gray-300 focus:outline-none focus:border-blue-400 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full border border-gray-300 focus:outline-none focus:border-blue-400 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-1 w-full border focus:border-2 border-gray-300 focus:outline-none focus:border-blue-400 rounded px-4 py-2"
            >
            </textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Send Message
          </button>

          {status === 'SUCCESS' && (
            <p className="text-green-600 font-medium mt-4">Thank you! Your message has been sent.</p>
          )}
          {status === 'ERROR' && (
            <p className="text-red-600 font-medium mt-4">Oops! Something went wrong. Please try again.</p>
          )}
        </form>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="SoftTrack HQ Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.421218589257!2d-0.0759516!3d51.5265407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb0c38fd685%3A0xb6a07f2da76d44cd!2s229%20Shoreditch%20High%20St%2C%20London%20E1%206PJ%2C%20UK!5e0!3m2!1sen!2suk!4v1711991508590!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
