import routerImg from '../assets/router1.png'
import gatewayImg from '../assets/gateway1.png'
import ethernetImg from '../assets/ethernet1.png'
import modemImg from '../assets/modem1.png'
import accessImg from '../assets/access1.png'
import accessoryImg from '../assets/accessory1.png'

import routerImg2 from '../assets/router2.png'
import gatewayImg2 from '../assets/gateway2.png'
import ethernetImg2 from '../assets/ethernet2.png'
import modemImg2 from '../assets/modem2.png'
import accessImg2 from '../assets/access3.png'
import accessoryImg2 from '../assets/accessory2.png'

import routerBanner from '../assets/router-banner.png';
import gatewayBanner from '../assets/gateway-banner.png';
import ethernetBanner from '../assets/ethernet-banner.png';
import modemBanner from '../assets/modem-banner.png';
import accessBanner from '../assets/access-point-banner.png';
import accessoryBanner from '../assets/accessory-banner.png';


export const products = [
    {
      id: 'routers',
      name: 'Routers',
      description: 'High-performance, industrial-grade routers designed to ensure reliable and secure connectivity for your tracking network.',
      image: routerImg,
      image2: routerImg2,
      banner: routerBanner,
    },
    {
      id: 'gateways',
      name: 'Gateways',
      description: 'Efficient and scalable gateways to bridge your tracking devices with cloud platforms and data analytics tools.',
      image: gatewayImg,
      image2: gatewayImg2,
      banner: gatewayBanner,
    },
    {
      id: 'ethernet-switches',
      name: 'Ethernet Switches',
      description: 'Durable Ethernet switches built for industrial environments, allowing stable and fast data exchange between your connected devices.',
      image: ethernetImg,
      image2: ethernetImg2,
      banner: ethernetBanner
    },
    {
      id: 'modems',
      name: 'Modems',
      description: 'Reliable modems designed for seamless and secure internet connectivity across your tracking infrastructure.',
      image: modemImg,
      image2: modemImg2,
      banner: modemBanner,
    },
    {
      id: 'access-points',
      name: 'Access Points',
      description: 'Boost your wireless coverage with enterprise-grade access points that provide high-speed, secure connectivity in any environment.',
      image: accessImg,
      image2: accessImg2,
      banner: accessBanner
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'A range of essential accessories including antennas, mounts, cables, and enclosures to complete your setup.',
      image: accessoryImg,
      image2: accessoryImg2,
      banner: accessoryBanner
    }
]