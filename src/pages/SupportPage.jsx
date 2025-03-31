import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import supportBanner from '../assets/support-banner.png'

const supportCategories = [
  {
    title: 'Device Setup',
    description: 'Learn how to install and activate your SoftTrack devices.',
    icon: '📦',
    link: '#',
  },
  {
    title: 'Subscription & Billing',
    description: 'Manage your subscription plan and billing information.',
    icon: '💳',
    link: '#',
  },
  {
    title: 'Account Help',
    description: 'Update your details, reset passwords, and more.',
    icon: '👤',
    link: '#',
  },
  {
    title: 'Technical Support',
    description: 'Get help with connectivity, syncing, and errors.',
    icon: '🛠️',
    link: '#',
  },
  {
    title: 'Troubleshooting',
    description: 'Fix common issues with our quick-start tips.',
    icon: '🧩',
    link: '#',
  },
  {
    title: 'Contact Us',
    description: 'Can’t find what you’re looking for? Reach out to us.',
    icon: '📬',
    link: '/contact',
  },
]

const faqs = [
    {
      question: 'How do I activate my SoftTrack device?',
      answer:
        'Once you subscribe, log into your dashboard and follow the setup steps provided in your account.',
    },
    {
      question: 'Can I manage multiple devices under one subscription?',
      answer:
        'Yes, our Pro plan supports multiple devices. You can assign and track each one separately.',
    },
    {
      question: 'How can I contact technical support?',
      answer:
        'You can reach us through the contact form or email us directly at support@softtrack.io.',
    },
    {
      question: 'Do I need internet access for SoftTrack devices to work?',
      answer:
        'Yes, our devices rely on cellular or Wi-Fi connectivity to send real-time location data to the platform.',
    },
    {
      question: 'Is my data secure when using SoftTrack?',
      answer:
        'Absolutely. We use industry-standard encryption and security protocols to protect your information at all times.',
    },
  ]
  

const SupportPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
        <img
          src={supportBanner}
          alt="Support Banner"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Need Help? We’re Here for You.
            </h1>
            <p className="text-white mt-2 text-lg drop-shadow-md">
              Explore FAQs or reach out to our support team.
            </p>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10">Support Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {supportCategories.map((cat, index) => (
            <Link
              key={index}
              to={cat.link}
              className="bg-white shadow hover:shadow-lg transition rounded-xl p-6 text-center border border-gray-100"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left px-4 py-3 font-medium flex justify-between items-center hover:bg-gray-50"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 transition-opacity duration-300 ease-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-100 py-12 px-4 text-center">
        <h3 className="text-2xl font-semibold mb-2">Still need assistance?</h3>
        <p className="mb-6 text-gray-700">Contact our support team for more personalized help.</p>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default SupportPage
