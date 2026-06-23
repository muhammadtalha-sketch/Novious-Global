const PRODUCTS = [
  // CLOTHING & TEXTILE
  { id: 1, name: 'Cotton T-Shirt', category: 'Clothing & Textile', moq: '500 units', rating: 4.5, reviews: 267, image: '/products/Clothing-1.jpg', badge: null },
  { id: 2, name: 'Denim Jeans', category: 'Clothing & Textile', moq: '200 units', rating: 4.7, reviews: 198, image: '/products/Clothing-1.jpg', badge: null },
  { id: 3, name: 'Winter Jacket', category: 'Clothing & Textile', moq: '100 units', rating: 4.8, reviews: 145, image: '/products/Clothing-1.jpg', badge: null },
  { id: 4, name: 'Silk Scarf', category: 'Clothing & Textile', moq: '300 units', rating: 4.6, reviews: 234, image: '/products/Clothing-1.jpg', badge: null },
  { id: 5, name: 'Wool Sweater', category: 'Clothing & Textile', moq: '150 units', rating: 4.9, reviews: 156, image: '/products/Clothing-1.jpg', badge: null },
  { id: 6, name: 'Summer Dress', category: 'Clothing & Textile', moq: '200 units', rating: 4.7, reviews: 189, image: '/products/Clothing-1.jpg', badge: null },

  // SHOES & WATCHES
  { id: 7, name: 'Stainless Steel Watch', category: 'Shoes & Watches', moq: '50 units', rating: 4.9, reviews: 98, image: '/products/Shoes-Watches-1.jpg', badge: 'Best Seller' },
  { id: 8, name: 'Sport Running Shoes', category: 'Shoes & Watches', moq: '100 units', rating: 4.8, reviews: 198, image: '/products/Shoes-Watches-2.jpg', badge: null },
  { id: 9, name: 'Leather Casual Shoes', category: 'Shoes & Watches', moq: '80 units', rating: 4.7, reviews: 145, image: '/products/Shoes-Watches-1.jpg', badge: null },
  { id: 10, name: 'Digital Smart Watch', category: 'Shoes & Watches', moq: '40 units', rating: 4.8, reviews: 167, image: '/products/Shoes-Watches-2.jpg', badge: null },
  { id: 11, name: 'Waterproof Sports Watch', category: 'Shoes & Watches', moq: '60 units', rating: 4.6, reviews: 121, image: '/products/Shoes-Watches-1.jpg', badge: null },
  { id: 12, name: 'Hiking Boots', category: 'Shoes & Watches', moq: '70 units', rating: 4.9, reviews: 104, image: '/products/Shoes-Watches-2.jpg', badge: null },

  // BAGS & CASES
  { id: 13, name: 'Premium Leather Handbag', category: 'Bags & Cases', moq: '100 units', rating: 4.8, reviews: 142, image: '/products/Bags-Cases-1.jpg', badge: 'Popular' },
  { id: 14, name: 'Professional Laptop Backpack', category: 'Bags & Cases', moq: '80 units', rating: 4.7, reviews: 128, image: '/products/Bags-Cases-2.jpg', badge: null },
  { id: 15, name: 'Travel Suitcase Set', category: 'Bags & Cases', moq: '50 units', rating: 4.9, reviews: 95, image: '/products/Bags-Cases-3.jpg', badge: null },
  { id: 16, name: 'Crossbody Shoulder Bag', category: 'Bags & Cases', moq: '120 units', rating: 4.6, reviews: 156, image: '/products/Bags-Cases-4.jpg', badge: null },
  { id: 17, name: 'Weekend Duffel Bag', category: 'Bags & Cases', moq: '100 units', rating: 4.7, reviews: 112, image: '/products/Bags-Cases-5.jpg', badge: null },
  { id: 18, name: 'Stylish Clutch Purse', category: 'Bags & Cases', moq: '150 units', rating: 4.5, reviews: 189, image: '/products/Bags-Cases-1.jpg', badge: null },

  // SPORTS
  { id: 19, name: 'Yoga Mat', category: 'Sports', moq: '250 units', rating: 4.7, reviews: 198, image: '/products/Sports-1.jpg', badge: null },
  { id: 20, name: 'Dumbbells Set', category: 'Sports', moq: '80 units', rating: 4.8, reviews: 145, image: '/products/Sports-1.jpg', badge: null },
  { id: 21, name: 'Badminton Racket', category: 'Sports', moq: '120 units', rating: 4.6, reviews: 112, image: '/products/Sports-1.jpg', badge: null },
  { id: 22, name: 'Basketball', category: 'Sports', moq: '200 units', rating: 4.7, reviews: 167, image: '/products/Sports-1.jpg', badge: null },
  { id: 23, name: 'Gym Resistance Bands', category: 'Sports', moq: '400 units', rating: 4.8, reviews: 234, image: '/products/Sports-1.jpg', badge: null },
  { id: 24, name: 'Sportswear Set', category: 'Sports', moq: '150 units', rating: 4.7, reviews: 178, image: '/products/Sports-1.jpg', badge: null },

  // JEWELLERY
  { id: 25, name: 'Elegant Pearl Necklace', category: 'Jewellery', moq: '100 units', rating: 4.9, reviews: 87, image: '/products/Jewellery-1.jpg', badge: null },
  { id: 26, name: 'Diamond Ring', category: 'Jewellery', moq: '20 units', rating: 4.9, reviews: 56, image: '/products/Jewellery-1.jpg', badge: null },
  { id: 27, name: 'Gold Bracelet', category: 'Jewellery', moq: '80 units', rating: 4.8, reviews: 102, image: '/products/Jewellery-1.jpg', badge: null },
  { id: 28, name: 'Silver Earrings', category: 'Jewellery', moq: '150 units', rating: 4.7, reviews: 134, image: '/products/Jewellery-1.jpg', badge: null },
  { id: 29, name: 'Crystal Pendant', category: 'Jewellery', moq: '120 units', rating: 4.6, reviews: 156, image: '/products/Jewellery-1.jpg', badge: null },
  { id: 30, name: 'Gemstone Brooch', category: 'Jewellery', moq: '100 units', rating: 4.8, reviews: 78, image: '/products/Jewellery-1.jpg', badge: null },

  // PACKAGING
  { id: 31, name: 'Pizza Box Packaging', category: 'Packaging', moq: '1000 units', rating: 4.6, reviews: 134, image: '/products/Bags-Cases-1.jpg', badge: null },
  { id: 32, name: 'Disposable Plates & Containers', category: 'Packaging', moq: '2000 units', rating: 4.5, reviews: 167, image: '/products/Bags-Cases-2.jpg', badge: null },
  { id: 33, name: 'Custom Gift Boxes', category: 'Packaging', moq: '500 units', rating: 4.7, reviews: 112, image: '/products/Bags-Cases-3.jpg', badge: null },
  { id: 34, name: 'Eco-Friendly Bags', category: 'Packaging', moq: '1000 units', rating: 4.8, reviews: 98, image: '/products/Bags-Cases-4.jpg', badge: null },
  { id: 35, name: 'Corrugated Shipping Boxes', category: 'Packaging', moq: '500 units', rating: 4.6, reviews: 145, image: '/products/Bags-Cases-5.jpg', badge: null },
  { id: 36, name: 'Bubble Wrap & Protective Packaging', category: 'Packaging', moq: '1000 units', rating: 4.5, reviews: 89, image: '/products/Bags-Cases-1.jpg', badge: null },

  // KITCHEN
  { id: 37, name: 'Modern Kitchen Utensil Set', category: 'Kitchen', moq: '200 units', rating: 4.7, reviews: 156, image: '/products/Kitchen-1.jpg', badge: 'Trending' },
  { id: 38, name: 'Premium Knife Set', category: 'Kitchen', moq: '80 units', rating: 4.8, reviews: 123, image: '/products/Kitchen-2.jpg', badge: null },
  { id: 39, name: 'Non-Stick Cookware Set', category: 'Kitchen', moq: '60 units', rating: 4.6, reviews: 167, image: '/products/Kitchen-1.jpg', badge: null },
  { id: 40, name: 'Stainless Steel Pots', category: 'Kitchen', moq: '100 units', rating: 4.7, reviews: 145, image: '/products/Kitchen-2.jpg', badge: null },
  { id: 41, name: 'Decorative Table Lamp', category: 'Kitchen', moq: '120 units', rating: 4.7, reviews: 189, image: '/products/Home-Decor-1.jpg', badge: null },
  { id: 42, name: 'Glass Food Storage Set', category: 'Kitchen', moq: '120 units', rating: 4.8, reviews: 189, image: '/products/Kitchen-2.jpg', badge: null },

  // ELECTRONICS
  { id: 43, name: 'Electronic Phone Charger', category: 'Electronics', moq: '500 units', rating: 4.6, reviews: 203, image: '/products/Electronics-1.jpg', badge: null },
  { id: 44, name: 'Wireless Headphones', category: 'Electronics', moq: '100 units', rating: 4.9, reviews: 245, image: '/products/Electronics-2.jpg', badge: 'Best Seller' },
  { id: 45, name: 'Power Bank 10000mAh', category: 'Electronics', moq: '200 units', rating: 4.8, reviews: 178, image: '/products/Electronics-1.jpg', badge: null },
  { id: 46, name: 'USB-C Cable Set', category: 'Electronics', moq: '600 units', rating: 4.7, reviews: 267, image: '/products/Electronics-2.jpg', badge: null },
  { id: 47, name: 'Bluetooth Speaker', category: 'Electronics', moq: '120 units', rating: 4.8, reviews: 201, image: '/products/Electronics-1.jpg', badge: null },
  { id: 48, name: 'Webcam HD', category: 'Electronics', moq: '150 units', rating: 4.6, reviews: 145, image: '/products/Electronics-2.jpg', badge: null },

  // LIGHTS & LIGHTING
  { id: 49, name: 'LED Pendant Light', category: 'Lights & Lighting', moq: '50 units', rating: 4.8, reviews: 124, image: '/products/Home-Decor-1.jpg', badge: null },
  { id: 50, name: 'LED Strip Lights', category: 'Lights & Lighting', moq: '200 units', rating: 4.7, reviews: 198, image: '/products/Home-Living-1.jpg', badge: 'Trending' },
  { id: 51, name: 'Solar Garden Lights', category: 'Lights & Lighting', moq: '100 units', rating: 4.6, reviews: 156, image: '/products/Home-Decor-1.jpg', badge: null },
  { id: 52, name: 'Smart LED Bulbs', category: 'Lights & Lighting', moq: '300 units', rating: 4.8, reviews: 234, image: '/products/Home-Living-1.jpg', badge: null },
  { id: 53, name: 'Outdoor Floodlight', category: 'Lights & Lighting', moq: '80 units', rating: 4.7, reviews: 112, image: '/products/Home-Decor-1.jpg', badge: null },
  { id: 54, name: 'Industrial Warehouse Light', category: 'Lights & Lighting', moq: '40 units', rating: 4.9, reviews: 67, image: '/products/Home-Living-1.jpg', badge: null },

  // HARDWARE TOOLS
  { id: 55, name: 'Professional Power Drill Set', category: 'Hardware Tools', moq: '50 units', rating: 4.8, reviews: 134, image: '/products/Electronics-1.jpg', badge: null },
  { id: 56, name: 'Hand Tool Kit', category: 'Hardware Tools', moq: '100 units', rating: 4.7, reviews: 198, image: '/products/Electronics-2.jpg', badge: null },
  { id: 57, name: 'Stainless Steel Screws & Bolts', category: 'Hardware Tools', moq: '5000 units', rating: 4.6, reviews: 145, image: '/products/Electronics-1.jpg', badge: null },
  { id: 58, name: 'Electric Angle Grinder', category: 'Hardware Tools', moq: '60 units', rating: 4.8, reviews: 89, image: '/products/Electronics-2.jpg', badge: null },
  { id: 59, name: 'Safety Helmets & PPE', category: 'Hardware Tools', moq: '200 units', rating: 4.7, reviews: 123, image: '/products/Electronics-1.jpg', badge: null },
  { id: 60, name: 'Measuring Tape & Level Set', category: 'Hardware Tools', moq: '300 units', rating: 4.6, reviews: 167, image: '/products/Electronics-2.jpg', badge: null },

  // TOYS
  { id: 61, name: 'STEM Educational Toy Set', category: 'Toys', moq: '100 units', rating: 4.8, reviews: 145, image: '/products/Sports-1.jpg', badge: 'Popular' },
  { id: 62, name: 'Remote Control Car', category: 'Toys', moq: '80 units', rating: 4.7, reviews: 198, image: '/products/Sports-1.jpg', badge: null },
  { id: 63, name: 'Wooden Building Blocks', category: 'Toys', moq: '200 units', rating: 4.9, reviews: 134, image: '/products/Sports-1.jpg', badge: null },
  { id: 64, name: 'Kids Art & Craft Kit', category: 'Toys', moq: '150 units', rating: 4.7, reviews: 167, image: '/products/Sports-1.jpg', badge: null },
  { id: 65, name: 'Plush Stuffed Animals', category: 'Toys', moq: '300 units', rating: 4.8, reviews: 212, image: '/products/Sports-1.jpg', badge: null },
  { id: 66, name: 'Outdoor Play Set', category: 'Toys', moq: '50 units', rating: 4.6, reviews: 89, image: '/products/Sports-1.jpg', badge: null },

  // LITHIUM BATTERIES
  { id: 67, name: 'Lithium-Ion 18650 Battery', category: 'Lithium Batteries', moq: '1000 units', rating: 4.8, reviews: 234, image: '/products/Electronics-1.jpg', badge: null },
  { id: 68, name: 'LiFePO4 Battery Pack', category: 'Lithium Batteries', moq: '50 units', rating: 4.9, reviews: 78, image: '/products/Electronics-2.jpg', badge: null },
  { id: 69, name: 'E-Bike Lithium Battery', category: 'Lithium Batteries', moq: '30 units', rating: 4.8, reviews: 112, image: '/products/Electronics-1.jpg', badge: null },
  { id: 70, name: 'Power Tool Battery Pack', category: 'Lithium Batteries', moq: '100 units', rating: 4.7, reviews: 145, image: '/products/Electronics-2.jpg', badge: null },
  { id: 71, name: 'Solar Storage Battery', category: 'Lithium Batteries', moq: '20 units', rating: 4.9, reviews: 56, image: '/products/Electronics-1.jpg', badge: null },
  { id: 72, name: 'Portable Battery Station', category: 'Lithium Batteries', moq: '40 units', rating: 4.8, reviews: 89, image: '/products/Electronics-2.jpg', badge: 'Best Seller' }
];

export default PRODUCTS;
