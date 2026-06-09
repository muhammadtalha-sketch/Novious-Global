// Product data with real images from Website-Information folder
// This dynamically loads actual product images

const PRODUCTS = [
  {
    id: 1,
    name: 'Premium Leather Handbag',
    category: 'Bags & Cases',
    price: '$25-45',
    moq: '100 units',
    rating: 4.8,
    reviews: 142,
    image: '/products/Bags-Cases-1.jpg',
    imagePath: '../Website-Information/All Products/Bags & Cases/Bags (1).jpg',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Stainless Steel Watch',
    category: 'Shoes & Watches',
    price: '$18-35',
    moq: '50 units',
    rating: 4.9,
    reviews: 98,
    image: '/products/Shoes-Watches-1.jpg',
    imagePath: '../Website-Information/All Products/Shoes & Watches/Shoes (1).jpg',
    badge: 'Best Seller'
  },
  {
    id: 3,
    name: 'Modern Kitchen Utensil Set',
    category: 'Kitchen',
    price: '$12-25',
    moq: '200 units',
    rating: 4.7,
    reviews: 156,
    image: '/products/Kitchen-1.jpg',
    imagePath: '../Website-Information/All Products/Kitchen/Kitchen (1).jpg',
    badge: 'Trending'
  },
  {
    id: 4,
    name: 'Electronic Phone Charger',
    category: 'Electronics',
    price: '$5-12',
    moq: '500 units',
    rating: 4.6,
    reviews: 203,
    image: '/products/Electronics-1.jpg',
    imagePath: '../Website-Information/All Products/Electronics/Electronics (1).jpg',
    badge: null
  },
  {
    id: 5,
    name: 'Elegant Pearl Necklace',
    category: 'Jewellery',
    price: '$15-30',
    moq: '100 units',
    rating: 4.9,
    reviews: 87,
    image: '/products/Jewellery-1.jpg',
    imagePath: '../Website-Information/All Products/Jewellery/Jewellery (1).jpg',
    badge: null
  },
  {
    id: 6,
    name: 'LED Pendant Light Fixture',
    category: 'Lights & Lighting',
    price: '$20-40',
    moq: '50 units',
    rating: 4.8,
    reviews: 124,
    image: '/products/Home-Living-1.jpg',
    imagePath: '../Website-Information/All Products/Home & Living/Home (1).jpg',
    badge: null
  },
  {
    id: 7,
    name: 'Professional Tool Set',
    category: 'Hardware Tools',
    price: '$35-60',
    moq: '30 units',
    rating: 4.7,
    reviews: 96,
    image: '/products/Sports-1.jpg',
    imagePath: '../Website-Information/All Products/Sports & Entertainment/Sports (1).jpg',
    badge: null
  },
  {
    id: 8,
    name: 'Home Décor Wall Art Set',
    category: 'Home Décor',
    price: '$15-35',
    moq: '100 units',
    rating: 4.6,
    reviews: 112,
    image: '/products/Home-Decor-1.jpg',
    imagePath: '../Website-Information/All Products/Home & Living/Home (5).jpg',
    badge: null
  },
  {
    id: 9,
    name: 'Cotton T-Shirt',
    category: 'Clothing & Textiles',
    price: '$3-8',
    moq: '500 units',
    rating: 4.5,
    reviews: 267,
    image: '/products/Clothing-1.jpg',
    imagePath: '../Website-Information/All Products/Clothing & Textiles/Clothing (1).jpg',
    badge: null
  },
  {
    id: 10,
    name: 'Sport Running Shoes',
    category: 'Shoes & Watches',
    price: '$20-45',
    moq: '100 units',
    rating: 4.8,
    reviews: 198,
    image: '/products/Shoes-Watches-2.jpg',
    imagePath: '../Website-Information/All Products/Shoes & Watches/Shoes (5).jpg',
    badge: null
  },
  {
    id: 11,
    name: 'Diamond Ring',
    category: 'Jewellery',
    price: '$50-150',
    moq: '20 units',
    rating: 4.9,
    reviews: 56,
    image: '/products/Jewellery-2.jpg',
    imagePath: '../Website-Information/All Products/Jewellery/Jewellery (2).jpg',
    badge: null
  },
  {
    id: 12,
    name: 'Backpack with USB Port',
    category: 'Bags & Cases',
    price: '$15-30',
    moq: '150 units',
    rating: 4.7,
    reviews: 176,
    image: '/products/Bags-Cases-2.jpg',
    imagePath: '../Website-Information/All Products/Bags & Cases/Bags (10).jpg',
    badge: null
  }
];

export default PRODUCTS;
