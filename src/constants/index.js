import feature1 from '../assets/features/features1.png'
import feature2 from '../assets/features/features2.png'
import feature3 from '../assets/features/features3.png'

export const navLinks = [
    {
        name: 'Home',
        to: '/',
    },
    {
        name: 'About Us',
        to: '/about-us',
    },
    {
      name: 'Products',
      to: '/products',
    },
    {
      name: 'Services',
      to: '/services',
      subRoutes: [
        { name: 'Software', to: '/services/software' },
        { name: 'Hardware', to: '/services/hardware' },
      ]
    },
    {
      name: 'Support',
      to: '/support',
    },
    {
        name: 'Contact',
        to: '/contact',
    },
    // {
    //     name: 'News',
    //     to: '/news',
    // },
]


export const pricingCards = [
    {
      id: 1,
      title: 'Standard',
      price: '£34.99',
      features: [
        'Access to 1 tracking device',
        'Basic location tracking',
        'Email support',
        'Monthly usage reports',
      ],
    },
    {
      id: 2,
      title: 'Intermediate',
      price: '£49.99',
      features: [
        'Access to 3 tracking devices',
        'Real-time GPS updates',
        'Priority email support',
        'Weekly usage analytics',
      ],
    },
    {
      id: 3,
      title: 'Pro',
      price: '£69.99',
      features: [
        'Access to 5+ tracking devices',
        'Advanced geofencing alerts',
        '24/7 priority support',
        'Detailed usage & performance dashboard',
      ],
      gradient: 'bg-gradient-to-br from-blue-400 via-black to-gray-900',
      textColor: 'text-white',
      headingColor: 'text-white'
    },
  ];

  export const features = [
    {
      name: 'Trackers for the insurance telematics industry',
      image: feature1,
      text: 'Compact, robust, easy-to-install Teltonika FMx880 series GPS trackers for insurance companies and corporate fleets.',
    },
    {
      name: 'E-toll certified vehicle gps trackers',
      image: feature2,
      text: 'Teltonika vehicle GPS devices certified for the e-TOLL system for tracking and automated payment processing in Poland.',
    },
    {
      name: 'Luxury car tracking solution with FMC003',
      image: feature3,
      text: 'Accurate tracking, monitoring, and safeguarding of luxury car fleets with new Teltonika GPS.',
    },
  ]
  