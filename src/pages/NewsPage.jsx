import React from 'react'
import newsBanner from '../assets/news-banner.png'

import newsImg1 from '../assets/news4.png'
import newsImg2 from '../assets/news5.png'
import newsImg3 from '../assets/news6.png'
import newsImg4 from '../assets/news7.png'
import newsImg5 from '../assets/news8.png'
import newsImg6 from '../assets/news9.png'

const articles = [
  {
    id: 1,
    title: 'SoftTrack Launches New Smart Router Series',
    date: 'March 20, 2025',
    summary:
      'Our latest smart routers bring faster performance and expanded range to meet evolving connectivity demands.',
    image: newsImg1
  },
  {
    id: 2,
    title: 'How SoftTrack Is Powering IoT Growth in Logistics',
    date: 'March 10, 2025',
    summary:
      'From fleet tracking to remote inventory control — learn how SoftTrack’s tools are shaping logistics.',
    image: newsImg2
  },
  {
    id: 3,
    title: 'Security First: Our Commitment to Device & Data Protection',
    date: 'February 27, 2025',
    summary:
      'We’re investing more in end-to-end security to ensure your devices and data stay protected.',
    image: newsImg3
  },
  {
    id: 4,
    title: 'SoftTrack Unveils Cloud-Based Device Dashboard',
    date: 'February 10, 2025',
    summary:
      'The new dashboard gives users real-time control over their tracking devices with improved UI and analytics features.',
    image: newsImg4,
  },
  {
    id: 5,
    title: 'SoftTrack Partners with Major Logistics Firm for IoT Expansion',
    date: 'January 28, 2025',
    summary:
      'Our collaboration aims to expand smart tracking capabilities across thousands of delivery vehicles nationwide.',
    image: newsImg5,
  },
  {
    id: 6,
    title: 'Behind the Scenes: How SoftTrack Ensures 24/7 Device Uptime',
    date: 'January 12, 2025',
    summary:
      'From network redundancy to automated failover systems, discover what keeps our tracking platform always online.',
    image: newsImg6,
  }
]

const NewsPage = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
        <img
          src={newsBanner}
          alt="News Banner"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Latest News & Updates
          </h1>
          <p className="text-white mt-2 text-lg drop-shadow-md max-w-2xl">
            Stay informed about new product releases, industry trends, and company announcements.
          </p>
        </div>
      </div>

      {/* News List */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{article.date}</p>
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-600 text-sm">{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
