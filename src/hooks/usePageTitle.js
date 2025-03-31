import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const usePageTitle = () => {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname

    const getTitle = (path) => {
      switch (path) {
        case '/': return 'Soft-Track Automation | Smart Tracking Solutions'
        case '/trackers': return 'Trackers | SoftTrack'
        case '/support': return 'Support | SoftTrack'
        case '/news': return 'News | SoftTrack'
        case '/contact': return 'Contact | SoftTrack'
        case '/about-us': return 'About Us | SoftTrack'
        default:
          if (path.startsWith('/products/')) return 'Tracker Details | SoftTrack'
          return 'SoftTrack'
      }
    }

    document.title = getTitle(path)
  }, [location])
}

export default usePageTitle
