/**
 * TruckSpot — seeded truck data.
 * Coordinates centered on Marion, IL.
 */
export const TRUCKS = [
  {
    id: 'fuego', name: 'El Fuego Tacos',
    cuisine: 'tacos', cuisineLabel: 'Tacos',
    vendorType: 'truck', vendorLabel: 'Truck',
    rating: 4.8, reviewCount: 212, distanceKm: 0.4,
    status: 'open', statusLabel: 'Open Now',
    todayHours: '11:00 – 22:00',
    lat: 37.7300, lng: -88.6305,
    emoji: '🌮',
    menu: [
      { name: 'Al Pastor Taco', price: '$3.50' },
      { name: 'Carne Asada Taco', price: '$3.75' },
      { name: 'Birria Quesataco', price: '$5.00' },
    ],
  },
  {
    id: 'smash', name: 'Smash & Roll Burgers',
    cuisine: 'burgers', cuisineLabel: 'Burgers',
    vendorType: 'truck', vendorLabel: 'Truck',
    rating: 4.7, reviewCount: 178, distanceKm: 0.8,
    status: 'open', statusLabel: 'Open Now',
    todayHours: '11:30 – 21:00',
    lat: 37.7258, lng: -88.6240,
    emoji: '🍔',
    menu: [
      { name: 'Classic Smash', price: '$7.50' },
      { name: 'Bacon Double', price: '$9.50' },
      { name: 'Truffle Fries', price: '$5.00' },
    ],
  },
  {
    id: 'woodfire', name: 'Woodfire Street Pizza',
    cuisine: 'pizza', cuisineLabel: 'Pizza',
    vendorType: 'truck', vendorLabel: 'Truck',
    rating: 4.9, reviewCount: 341, distanceKm: 1.2,
    status: 'closing', statusLabel: 'Closing Soon',
    todayHours: '12:00 – 20:00',
    lat: 37.7240, lng: -88.6320,
    emoji: '🍕',
    menu: [
      { name: 'Margherita', price: '$11.00' },
      { name: 'Pepperoni Hot Honey', price: '$13.00' },
      { name: 'Truffle Mushroom', price: '$14.00' },
    ],
  },
  {
    id: 'bao', name: 'Bao & Bowl Truck',
    cuisine: 'asian', cuisineLabel: 'Asian',
    vendorType: 'truck', vendorLabel: 'Truck',
    rating: 4.6, reviewCount: 96, distanceKm: 0.6,
    status: 'open', statusLabel: 'Open Now',
    todayHours: '11:00 – 21:00',
    lat: 37.7290, lng: -88.6260,
    emoji: '🥟',
    menu: [
      { name: 'Pork Belly Bao', price: '$6.50' },
      { name: 'Chicken Katsu Bowl', price: '$12.00' },
      { name: 'Miso Ramen', price: '$11.00' },
    ],
  },
  {
    id: 'churro', name: 'Sweet Churro Stand',
    cuisine: 'dessert', cuisineLabel: 'Dessert',
    vendorType: 'stand', vendorLabel: 'Stand',
    rating: 4.9, reviewCount: 288, distanceKm: 0.3,
    status: 'open', statusLabel: 'Open Now',
    todayHours: '12:00 – 23:00',
    lat: 37.7275, lng: -88.6288,
    emoji: '🍩',
    menu: [
      { name: 'Cinnamon Churros', price: '$4.50' },
      { name: 'Churro Sundae', price: '$6.50' },
      { name: 'Dulce de Leche Dip', price: '$1.50' },
    ],
  },
  {
    id: 'brisket', name: 'Smoky Brisket Rig',
    cuisine: 'bbq', cuisineLabel: 'BBQ',
    vendorType: 'truck', vendorLabel: 'Truck',
    rating: 4.8, reviewCount: 154, distanceKm: 1.5,
    status: 'closed', statusLabel: 'Closed',
    todayHours: '16:00 – 22:00',
    lat: 37.7215, lng: -88.6210,
    emoji: '🍖',
    menu: [
      { name: 'Brisket Plate', price: '$16.00' },
      { name: 'Pulled Pork Sandwich', price: '$12.00' },
      { name: 'Smoked Wings', price: '$10.00' },
    ],
  },
];

export const CUISINE_FILTERS = ['all', 'open', 'tacos', 'burgers', 'pizza'];
