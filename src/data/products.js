import banner from '../assets/router-banner.png'
import fmc003 from '../assets/teltonika/teltonika-main.png'
import fmc800 from '../assets/teltonika/fmc800.png'
import ftc881 from '../assets/teltonika/ftc881.png'
import fmc880 from '../assets/teltonika/fmc880.png'


import feature1 from '../assets/features/features2.png'
import feature2 from '../assets/features/features2.png'
import feature3 from '../assets/features/features3.png'
import feature4 from '../assets/features/features14.png'
import feature5 from '../assets/features/features8.png'
import feature6 from '../assets/features/features9.png'
import feature7 from '../assets/features/features10.png'
import feature8 from '../assets/features/features12.png'
import feature9 from '../assets/features/features16.png'
import feature10 from '../assets/features/features17.png'
import feature11 from '../assets/features/features18.png'


export const products = [
  {
    id: 'fmc003',
    name: 'Teltonika FMC003',
    tagline: 'OBD 4G GPS Tracker - CAN BUS Reading - Read engine RPM, Fuel level, Fault Codes etc',
    price: '£65.00 - £95.00',
    banner,
    description: `
    TELTONIKA FMC003 4G GPS Tracker, the most advanced OBD GPS Tracker device from the leading manufacturer Teltonika.
    `,
    features: [
      'No minimum order',
      'Mix models per shipping',
      'Extra discount - 5% in all African countries',
      'Free tracking for one year',
      'Two-year warranty',
      'Free support to configure the devices',
    ],
    image: fmc003,
    useCases: [
      {
        name: 'FUEL AND SERVICE OPTIMISATION WITH OBD DATA READING TRACKERS',
        image: feature9,
        text: 'Optimise your fleet by utilising Teltonika OBD trackers for unparalleled efficiency and reliability in logistics',
      },
      {
        name: 'ADVANCED EV BATTERY MONITORING WITH OBD DATA READING DEVICES',
        image: feature10,
        text: 'Empower EV battery care: Teltonika OBD-ll trackers for comprehensive battery health monitoring and efficiency',
      },
      {
        name: 'EFFICIENT HEAVY VEHICLE TRACKING WITH OBD DATA READING DEVICES',
        image: feature11,
        text: 'Efficient tracking of heavy duty vehicles with Teltonika OBD-ll data reading devices with J1939 integration and FMS support',
      },
    ],
  },
  {
    id: 'fmc800',
    name: 'Teltonika FMC800',
    tagline: 'OBD 4G GPS Tracker - CAN BUS Reading – Read engine RPM, Fuel level, Fault Codes etc',
    price: '£65.00 - £95.00',
    banner,
    description: `
    Plug & Play tracker with 4G LTE Cat 1 connectivity.
    `,
    features: [
      'No minimum order',
      'Mix models per shipping',
      'Extra discount - 5% in all African countries',
      'Free tracking for one year',
      'Two-year warranty',
      'Free support to configure the devices',
    ],
    image: fmc800,
    useCases: [
      {
        name: 'MAXIMISING EFFICIENCY AND COST SAVINGS FOR SEASONAL BUSINESS',
        image: feature5,
        text: 'Discover how Teltonika GPS trackers can help seasonal businesses by optimising operations and increasing efficiency ',
      },
      {
        name: 'LUXURY CAR TRACKING SOLUTION WITH FMX800 SERIES',
        image: feature3,
        text: 'Accurate tracking, monitoring and safeguarding of luxury car fleets with new Teltonika GPS trackers FMC800 & FMC880',
      },
      {
        name: 'MQTT MESSAGING PROTOCOL AND TELTONIKA GPS TRACKERS',
        image: feature6,
        text: 'MQTT has been designed as an exceptionally lightweight messaging transport that is perfect for connecting vehicle GPS devices',
      },
    ],
  },
  {
    id: 'ftc881',
    name: 'Teltonika FTC881',
    tagline: 'OBD 4G GPS Tracker - CAN BUS Reading – Read engine RPM, Fuel level, Fault Codes etc',
    price: '£65.00 - £95.00',
    banner,
    description: `
    Next-generation high voltage 4G LTE Cat 1 battery-mounted vehicle GPS tracker with enhanced GNSS accuracy and IP69K resistance.
    `,
    features: [
      'No minimum order',
      'Mix models per shipping',
      'Extra discount - 5% in all African countries',
      'Free tracking for one year',
      'Two-year warranty',
      'Free support to configure the devices',
    ],
    image: ftc881,
    useCases: [
      {
        name: 'TRACKERS FOR THE INSURANCE TELEMATICS INDUSTRY',
        image: feature2,
        text: 'Compact, robust, easy-to-install Telonika FMx880 series GPS trackers for insurance companies and corporate fleets',
      },
      {
        name: 'FISHING BOATS TRACKING WITH IP67 RATING GPS DEVICES',
        image: feature7,
        text: 'Fishing boats tracking using the FMC230 waterproof vehicle GPS tracker from Teltonika with U-cable and IP67-rated casing',
      },
      {
        name: 'Heavy-Duty Industrial Tracking',
        image: feature8,
        text: 'Designed for challenging environments — IP69K protection and high voltage battery-mount compatibility.',
      },
    ],
  },
  {
    id: 'fmc880',
    name: 'Teltonika FMC880',
    tagline: 'OBD 4G GPS Tracker - CAN BUS Reading – Read engine RPM, Fuel level, Fault Codes etc',
    price: '£65.00 - £95.00',
    banner,
    description: `
    Water-resistant high GNSS precision battery-mounted 4G LTE Cat 1 tracker.
    `,
    features: [
      'No minimum order',
      'Mix models per shipping',
      'Extra discount - 5% in all African countries',
      'Free tracking for one year',
      'Two-year warranty',
      'Free support to configure the devices',
    ],
    image: fmc880,
    useCases: [
      {
        name: 'TRACKERS FOR THE INSURANCE TELEMATICS INDUSTRY',
        image: feature1,
        text: 'Compact, robust, easy-to-install Telonika FMx880 series GPS trackers for insurance companies and corporate fleets',
      },
      {
        name: 'E-TOLL CERTIFIED VEHICLE GPS TRACKERS',
        image: feature4,
        text: 'Teltonika vehicle GPS devices certified for the e-Toll system for tracking and automated payment processing in poland',
      },
      {
        name: 'LUXURY CAR TRACKING SOLUTION WITH FMX800 SERIES',
        image: feature3,
        text: 'Accurate tracking, monitoring and safeguarding of luxury car fleets with new Teltonika GPS trackers FMC800 & FMC880',
      },
    ],
  },
]
