// Comprehensive product data with real images
// Images are located in public/products/

const PRODUCTS = [
  // BAGS & CASES
  {
    id: 1,
    name: 'Premium Leather Handbag',
    category: 'Bags & Cases',
    price: '$25-45',
    moq: '100 units',
    rating: 4.8,
    reviews: 142,
    image: '/products/Bags-Cases-1.jpg',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Professional Laptop Backpack',
    category: 'Bags & Cases',
    price: '$35-55',
    moq: '80 units',
    rating: 4.7,
    reviews: 128,
    image: '/products/Bags-Cases-2.jpg',
    badge: null
  },
  {
    id: 3,
    name: 'Travel Suitcase Set',
    category: 'Bags & Cases',
    price: '$45-75',
    moq: '50 units',
    rating: 4.9,
    reviews: 95,
    image: '/products/Bags-Cases-3.jpg',
    badge: null
  },
  {
    id: 4,
    name: 'Crossbody Shoulder Bag',
    category: 'Bags & Cases',
    price: '$20-35',
    moq: '120 units',
    rating: 4.6,
    reviews: 156,
    image: '/products/Bags-Cases-4.jpg',
    badge: null
  },
  {
    id: 5,
    name: 'Weekend Duffel Bag',
    category: 'Bags & Cases',
    price: '$30-50',
    moq: '100 units',
    rating: 4.7,
    reviews: 112,
    image: '/products/Bags-Cases-5.jpg',
    badge: null
  },
  {
    id: 6,
    name: 'Stylish Clutch Purse',
    category: 'Bags & Cases',
    price: '$15-25',
    moq: '150 units',
    rating: 4.5,
    reviews: 189,
    image: '/products/Bags-Cases-1.jpg',
    badge: null
  },
  {
    id: 7,
    name: 'Premium Messenger Bag',
    category: 'Bags & Cases',
    price: '$40-60',
    moq: '70 units',
    rating: 4.8,
    reviews: 134,
    image: '/products/Bags-Cases-2.jpg',
    badge: 'Best Seller'
  },

  // SHOES & WATCHES
  {
    id: 8,
    name: 'Stainless Steel Watch',
    category: 'Shoes & Watches',
    price: '$18-35',
    moq: '50 units',
    rating: 4.9,
    reviews: 98,
    image: '/products/Shoes-Watches-1.jpg',
    badge: 'Best Seller'
  },
  {
    id: 9,
    name: 'Sport Running Shoes',
    category: 'Shoes & Watches',
    price: '$20-45',
    moq: '100 units',
    rating: 4.8,
    reviews: 198,
    image: '/products/Shoes-Watches-2.jpg',
    badge: null
  },
  {
    id: 10,
    name: 'Leather Casual Shoes',
    category: 'Shoes & Watches',
    price: '$25-40',
    moq: '80 units',
    rating: 4.7,
    reviews: 145,
    image: '/products/Shoes-Watches-1.jpg',
    badge: null
  },
  {
    id: 11,
    name: 'Digital Smart Watch',
    category: 'Shoes & Watches',
    price: '$40-80',
    moq: '40 units',
    rating: 4.8,
    reviews: 167,
    image: '/products/Shoes-Watches-2.jpg',
    badge: null
  },
  {
    id: 12,
    name: 'Waterproof Sports Watch',
    category: 'Shoes & Watches',
    price: '$30-60',
    moq: '60 units',
    rating: 4.6,
    reviews: 121,
    image: '/products/Shoes-Watches-1.jpg',
    badge: null
  },
  {
    id: 13,
    name: 'Hiking Boots',
    category: 'Shoes & Watches',
    price: '$50-85',
    moq: '70 units',
    rating: 4.9,
    reviews: 104,
    image: '/products/Shoes-Watches-2.jpg',
    badge: null
  },
  {
    id: 14,
    name: 'Formal Dress Shoes',
    category: 'Shoes & Watches',
    price: '$35-55',
    moq: '90 units',
    rating: 4.7,
    reviews: 138,
    image: '/products/Shoes-Watches-1.jpg',
    badge: null
  },

  // KITCHEN
  {
    id: 15,
    name: 'Modern Kitchen Utensil Set',
    category: 'Kitchen',
    price: '$12-25',
    moq: '200 units',
    rating: 4.7,
    reviews: 156,
    image: '/products/Kitchen-1.jpg',
    badge: 'Trending'
  },
  {
    id: 16,
    name: 'Premium Knife Set',
    category: 'Kitchen',
    price: '$35-65',
    moq: '80 units',
    rating: 4.8,
    reviews: 123,
    image: '/products/Kitchen-2.jpg',
    badge: null
  },
  {
    id: 17,
    name: 'Non-Stick Cookware Set',
    category: 'Kitchen',
    price: '$45-75',
    moq: '60 units',
    rating: 4.6,
    reviews: 167,
    image: '/products/Kitchen-1.jpg',
    badge: null
  },
  {
    id: 18,
    name: 'Stainless Steel Pots',
    category: 'Kitchen',
    price: '$25-50',
    moq: '100 units',
    rating: 4.7,
    reviews: 145,
    image: '/products/Kitchen-2.jpg',
    badge: null
  },
  {
    id: 19,
    name: 'Silicone Kitchen Tools',
    category: 'Kitchen',
    price: '$8-15',
    moq: '300 units',
    rating: 4.5,
    reviews: 234,
    image: '/products/Kitchen-1.jpg',
    badge: null
  },
  {
    id: 20,
    name: 'Glass Food Storage Set',
    category: 'Kitchen',
    price: '$18-35',
    moq: '120 units',
    rating: 4.8,
    reviews: 189,
    image: '/products/Kitchen-2.jpg',
    badge: null
  },
  {
    id: 21,
    name: 'Electric Blender',
    category: 'Kitchen',
    price: '$30-55',
    moq: '70 units',
    rating: 4.7,
    reviews: 156,
    image: '/products/Kitchen-1.jpg',
    badge: null
  },

  // ELECTRONICS
  {
    id: 22,
    name: 'Electronic Phone Charger',
    category: 'Electronics',
    price: '$5-12',
    moq: '500 units',
    rating: 4.6,
    reviews: 203,
    image: '/products/Electronics-1.jpg',
    badge: null
  },
  {
    id: 23,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '$25-50',
    moq: '100 units',
    rating: 4.9,
    reviews: 245,
    image: '/products/Electronics-2.jpg',
    badge: 'Best Seller'
  },
  {
    id: 24,
    name: 'Power Bank 10000mAh',
    category: 'Electronics',
    price: '$12-22',
    moq: '200 units',
    rating: 4.8,
    reviews: 178,
    image: '/products/Electronics-1.jpg',
    badge: null
  },
  {
    id: 25,
    name: 'USB-C Cable Set',
    category: 'Electronics',
    price: '$3-8',
    moq: '600 units',
    rating: 4.7,
    reviews: 267,
    image: '/products/Electronics-2.jpg',
    badge: null
  },
  {
    id: 26,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: '$20-40',
    moq: '120 units',
    rating: 4.8,
    reviews: 201,
    image: '/products/Electronics-1.jpg',
    badge: null
  },
  {
    id: 27,
    name: 'LED Screen Monitor',
    category: 'Electronics',
    price: '$80-150',
    moq: '40 units',
    rating: 4.9,
    reviews: 89,
    image: '/products/Electronics-2.jpg',
    badge: null
  },
  {
    id: 28,
    name: 'Webcam HD',
    category: 'Electronics',
    price: '$25-45',
    moq: '150 units',
    rating: 4.6,
    reviews: 145,
    image: '/products/Electronics-1.jpg',
    badge: null
  },

  // JEWELLERY
  {
    id: 29,
    name: 'Elegant Pearl Necklace',
    category: 'Jewellery',
    price: '$15-30',
    moq: '100 units',
    rating: 4.9,
    reviews: 87,
    image: '/products/Jewellery-1.jpg',
    badge: null
  },
  {
    id: 30,
    name: 'Diamond Ring',
    category: 'Jewellery',
    price: '$50-150',
    moq: '20 units',
    rating: 4.9,
    reviews: 56,
    image: '/products/Jewellery-1.jpg',
    badge: null
  },
  {
    id: 31,
    name: 'Gold Bracelet',
    category: 'Jewellery',
    price: '$25-60',
    moq: '80 units',
    rating: 4.8,
    reviews: 102,
    image: '/products/Jewellery-1.jpg',
    badge: null
  },
  {
    id: 32,
    name: 'Silver Earrings',
    category: 'Jewellery',
    price: '$10-20',
    moq: '150 units',
    rating: 4.7,
    reviews: 134,
    image: '/products/Jewellery-1.jpg',
    badge: null
  },
  {
    id: 33,
    name: 'Crystal Pendant',
    category: 'Jewellery',
    price: '$12-28',
    moq: '120 units',
    rating: 4.6,
    reviews: 156,
    image: '/products/Jewellery-1.jpg',
    badge: null
  },
  {
    id: 34,
    name: 'Gemstone Brooch',
    category: 'Jewellery',
    price: '$18-40',
    moq: '100 units',
    rating: 4.8,
    reviews: 78,
    image: '/products/Jewellery-1.jpg',
    badge: null
  },

  // HOME & LIVING
  {
    id: 35,
    name: 'LED Pendant Light',
    category: 'Home & Living',
    price: '$20-40',
    moq: '50 units',
    rating: 4.8,
    reviews: 124,
    image: '/products/Home-Decor-1.jpg',
    badge: null
  },
  {
    id: 36,
    name: 'Decorative Wall Art',
    category: 'Home & Living',
    price: '$15-35',
    moq: '100 units',
    rating: 4.6,
    reviews: 112,
    image: '/products/Home-Living-1.jpg',
    badge: null
  },
  {
    id: 37,
    name: 'Throw Pillow Set',
    category: 'Home & Living',
    price: '$10-25',
    moq: '200 units',
    rating: 4.7,
    reviews: 178,
    image: '/products/Home-Decor-1.jpg',
    badge: null
  },
  {
    id: 38,
    name: 'Area Rug',
    category: 'Home & Living',
    price: '$30-75',
    moq: '60 units',
    rating: 4.8,
    reviews: 145,
    image: '/products/Home-Living-1.jpg',
    badge: null
  },
  {
    id: 39,
    name: 'Desk Lamp',
    category: 'Home & Living',
    price: '$18-35',
    moq: '120 units',
    rating: 4.7,
    reviews: 189,
    image: '/products/Home-Decor-1.jpg',
    badge: null
  },
  {
    id: 40,
    name: 'Mirror Wall Decor',
    category: 'Home & Living',
    price: '$20-40',
    moq: '80 units',
    rating: 4.6,
    reviews: 134,
    image: '/products/Home-Living-1.jpg',
    badge: null
  },
  {
    id: 41,
    name: 'Plant Pot Set',
    category: 'Home & Living',
    price: '$12-25',
    moq: '150 units',
    rating: 4.8,
    reviews: 167,
    image: '/products/Home-Decor-1.jpg',
    badge: 'Trending'
  },

  // CLOTHING & TEXTILES
  {
    id: 42,
    name: 'Cotton T-Shirt',
    category: 'Clothing & Textiles',
    price: '$3-8',
    moq: '500 units',
    rating: 4.5,
    reviews: 267,
    image: '/products/Clothing-1.jpg',
    badge: null
  },
  {
    id: 43,
    name: 'Denim Jeans',
    category: 'Clothing & Textiles',
    price: '$15-35',
    moq: '200 units',
    rating: 4.7,
    reviews: 198,
    image: '/products/Clothing-1.jpg',
    badge: null
  },
  {
    id: 44,
    name: 'Winter Jacket',
    category: 'Clothing & Textiles',
    price: '$35-65',
    moq: '100 units',
    rating: 4.8,
    reviews: 145,
    image: '/products/Clothing-1.jpg',
    badge: null
  },
  {
    id: 45,
    name: 'Silk Scarf',
    category: 'Clothing & Textiles',
    price: '$8-20',
    moq: '300 units',
    rating: 4.6,
    reviews: 234,
    image: '/products/Clothing-1.jpg',
    badge: null
  },
  {
    id: 46,
    name: 'Wool Sweater',
    category: 'Clothing & Textiles',
    price: '$25-50',
    moq: '150 units',
    rating: 4.9,
    reviews: 156,
    image: '/products/Clothing-1.jpg',
    badge: null
  },
  {
    id: 47,
    name: 'Summer Dress',
    category: 'Clothing & Textiles',
    price: '$12-28',
    moq: '200 units',
    rating: 4.7,
    reviews: 189,
    image: '/products/Clothing-1.jpg',
    badge: null
  },
  {
    id: 48,
    name: 'Casual Pants',
    category: 'Clothing & Textiles',
    price: '$18-40',
    moq: '180 units',
    rating: 4.6,
    reviews: 167,
    image: '/products/Clothing-1.jpg',
    badge: null
  },

  // SPORTS & ENTERTAINMENT
  {
    id: 49,
    name: 'Yoga Mat',
    category: 'Sports & Entertainment',
    price: '$8-20',
    moq: '250 units',
    rating: 4.7,
    reviews: 198,
    image: '/products/Sports-1.jpg',
    badge: null
  },
  {
    id: 50,
    name: 'Dumbbells Set',
    category: 'Sports & Entertainment',
    price: '$25-60',
    moq: '80 units',
    rating: 4.8,
    reviews: 145,
    image: '/products/Sports-1.jpg',
    badge: null
  },
  {
    id: 51,
    name: 'Badminton Racket',
    category: 'Sports & Entertainment',
    price: '$15-35',
    moq: '120 units',
    rating: 4.6,
    reviews: 112,
    image: '/products/Sports-1.jpg',
    badge: null
  },
  {
    id: 52,
    name: 'Basketball',
    category: 'Sports & Entertainment',
    price: '$10-22',
    moq: '200 units',
    rating: 4.7,
    reviews: 167,
    image: '/products/Sports-1.jpg',
    badge: null
  },
  {
    id: 53,
    name: 'Gym Resistance Bands',
    category: 'Sports & Entertainment',
    price: '$5-15',
    moq: '400 units',
    rating: 4.8,
    reviews: 234,
    image: '/products/Sports-1.jpg',
    badge: null
  },
  {
    id: 54,
    name: 'Camping Tent',
    category: 'Sports & Entertainment',
    price: '$40-85',
    moq: '60 units',
    rating: 4.9,
    reviews: 98,
    image: '/products/Sports-1.jpg',
    badge: null
  },
  {
    id: 55,
    name: 'Board Games Set',
    category: 'Sports & Entertainment',
    price: '$12-30',
    moq: '150 units',
    rating: 4.6,
    reviews: 156,
    image: '/products/Sports-1.jpg',
    badge: null
  }
];

export default PRODUCTS;
