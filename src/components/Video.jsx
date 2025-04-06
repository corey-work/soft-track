import React from 'react'

const Video = ({ videoId, children }) => {
  return (
    <div className="w-full px-4 py-12 mb-10 bg-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Optional Description or CTA */}
        {children && <div className="text-center">{children}</div>}
        {/* Responsive Video Container */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Video Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        
      </div>
    </div>
  )
}

export default Video
