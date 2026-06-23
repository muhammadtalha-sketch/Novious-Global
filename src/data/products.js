const p = (path) => encodeURI(path);

const PRODUCTS = [
  // CLOTHING & TEXTILE
  { id: 1,  name: 'Cotton T-Shirt (Men & Women)',   category: 'Clothing & Textile', moq: '500 units', rating: 4.5, reviews: 267, image: p('/images/products/Clothing & Textiles/Clothing/Clothing (1).png'), badge: null },
  { id: 2,  name: 'Denim Jeans',                    category: 'Clothing & Textile', moq: '200 units', rating: 4.7, reviews: 198, image: p('/images/products/Clothing & Textiles/Clothing/Clothing (3).png'), badge: null },
  { id: 3,  name: 'Winter Jacket',                  category: 'Clothing & Textile', moq: '100 units', rating: 4.8, reviews: 145, image: p('/images/products/Clothing & Textiles/Clothing/Clothing (5).png'), badge: null },
  { id: 4,  name: 'Silk Scarf & Textile',           category: 'Clothing & Textile', moq: '300 units', rating: 4.6, reviews: 234, image: p('/images/products/Clothing & Textiles/Textile/Textile (1).jpg'), badge: null },
  { id: 5,  name: 'Home Textile Set',               category: 'Clothing & Textile', moq: '150 units', rating: 4.9, reviews: 156, image: p('/images/products/Clothing & Textiles/Textile/Textile (3).jpg'), badge: null },
  { id: 6,  name: 'Summer Dress (Seasonal)',        category: 'Clothing & Textile', moq: '200 units', rating: 4.7, reviews: 189, image: p('/images/products/Clothing & Textiles/Clothing/Clothing (7).png'), badge: null },

  // SHOES & WATCHES
  { id: 7,  name: 'Stainless Steel Watch',          category: 'Shoes & Watches', moq: '50 units',  rating: 4.9, reviews: 98,  image: p('/images/products/Shoes & Watches/Watch (1).jpg'), badge: 'Best Seller' },
  { id: 8,  name: 'Sport Running Shoes',            category: 'Shoes & Watches', moq: '100 units', rating: 4.8, reviews: 198, image: p('/images/products/Shoes & Watches/Shoes (1).jpg'), badge: null },
  { id: 9,  name: 'Leather Casual Shoes',           category: 'Shoes & Watches', moq: '80 units',  rating: 4.7, reviews: 145, image: p('/images/products/Shoes & Watches/Shoes (3).jpg'), badge: null },
  { id: 10, name: 'Digital Smart Watch',            category: 'Shoes & Watches', moq: '40 units',  rating: 4.8, reviews: 167, image: p('/images/products/Shoes & Watches/Watch (2).jpg'), badge: null },
  { id: 11, name: 'Waterproof Sports Watch',        category: 'Shoes & Watches', moq: '60 units',  rating: 4.6, reviews: 121, image: p('/images/products/Shoes & Watches/Watch (3).jpg'), badge: null },
  { id: 12, name: 'Hiking Boots',                   category: 'Shoes & Watches', moq: '70 units',  rating: 4.9, reviews: 104, image: p('/images/products/Shoes & Watches/Shoes (5).jpg'), badge: null },

  // BAGS & CASES
  { id: 13, name: 'Premium Leather Handbag',        category: 'Bags & Cases', moq: '100 units', rating: 4.8, reviews: 142, image: p('/images/products/Bags & Cases/Bags (1).jpg'),  badge: 'Popular' },
  { id: 14, name: 'Professional Laptop Backpack',   category: 'Bags & Cases', moq: '80 units',  rating: 4.7, reviews: 128, image: p('/images/products/Bags & Cases/Bags (6).jpg'),  badge: null },
  { id: 15, name: 'Travel Suitcase Set',            category: 'Bags & Cases', moq: '50 units',  rating: 4.9, reviews: 95,  image: p('/images/products/Bags & Cases/Bags (11).jpg'), badge: null },
  { id: 16, name: 'Crossbody Shoulder Bag',         category: 'Bags & Cases', moq: '120 units', rating: 4.6, reviews: 156, image: p('/images/products/Bags & Cases/Bags (16).jpg'), badge: null },
  { id: 17, name: 'Weekend Duffel Bag',             category: 'Bags & Cases', moq: '100 units', rating: 4.7, reviews: 112, image: p('/images/products/Bags & Cases/Bags (21).jpg'), badge: null },
  { id: 18, name: 'Lady Clutch Purse',              category: 'Bags & Cases', moq: '150 units', rating: 4.5, reviews: 189, image: p('/images/products/Bags & Cases/Bags (26).jpg'), badge: null },

  // SPORTS
  { id: 19, name: 'Yoga Mat',                       category: 'Sports', moq: '250 units', rating: 4.7, reviews: 198, image: p('/images/products/Sports & Entertainment/Sports/Sports (1).jpg'),  badge: null },
  { id: 20, name: 'Dumbbells Set',                  category: 'Sports', moq: '80 units',  rating: 4.8, reviews: 145, image: p('/images/products/Sports & Entertainment/Sports/Sports (4).jpg'),  badge: null },
  { id: 21, name: 'Badminton Racket',               category: 'Sports', moq: '120 units', rating: 4.6, reviews: 112, image: p('/images/products/Sports & Entertainment/Sports/Sports (7).jpg'),  badge: null },
  { id: 22, name: 'Basketball',                     category: 'Sports', moq: '200 units', rating: 4.7, reviews: 167, image: p('/images/products/Sports & Entertainment/Sports/Sports (10).jpg'), badge: null },
  { id: 23, name: 'Gym Resistance Bands',           category: 'Sports', moq: '400 units', rating: 4.8, reviews: 234, image: p('/images/products/Sports & Entertainment/Sports/Sports (13).jpg'), badge: null },
  { id: 24, name: 'Sportswear Training Set',        category: 'Sports', moq: '150 units', rating: 4.7, reviews: 178, image: p('/images/products/Sports & Entertainment/Sports/Sports (16).jpg'), badge: null },

  // JEWELLERY
  { id: 25, name: 'Elegant Pearl Necklace',         category: 'Jewellery', moq: '100 units', rating: 4.9, reviews: 87,  image: p('/images/products/Jewellery/jew1.jpg'), badge: null },
  { id: 26, name: 'Diamond Ring',                   category: 'Jewellery', moq: '20 units',  rating: 4.9, reviews: 56,  image: p('/images/products/Jewellery/jew2.jpg'), badge: null },
  { id: 27, name: 'Gold Bracelet',                  category: 'Jewellery', moq: '80 units',  rating: 4.8, reviews: 102, image: p('/images/products/Jewellery/jew3.jpg'), badge: null },
  { id: 28, name: 'Silver Earrings & Accessories',  category: 'Jewellery', moq: '150 units', rating: 4.7, reviews: 134, image: p('/images/products/Jewellery/wac2.jpg'), badge: null },

  // PACKAGING
  { id: 29, name: 'Pizza Box Packaging',            category: 'Packaging', moq: '1000 units', rating: 4.6, reviews: 134, image: p('/images/products/Kitchen/Kitchen (6).jpg'),  badge: null },
  { id: 30, name: 'Disposable Plates & Containers', category: 'Packaging', moq: '2000 units', rating: 4.5, reviews: 167, image: p('/images/products/Kitchen/Kitchen (8).jpg'),  badge: null },
  { id: 31, name: 'Custom Gift Boxes',              category: 'Packaging', moq: '500 units',  rating: 4.7, reviews: 112, image: p('/images/products/Kitchen/Kitchen (10).jpg'), badge: null },
  { id: 32, name: 'Eco-Friendly Bags',              category: 'Packaging', moq: '1000 units', rating: 4.8, reviews: 98,  image: p('/images/products/Bags & Cases/Bags (31).jpg'), badge: null },
  { id: 33, name: 'Corrugated Shipping Boxes',      category: 'Packaging', moq: '500 units',  rating: 4.6, reviews: 145, image: p('/images/products/Bags & Cases/Bags (36).jpg'), badge: null },
  { id: 34, name: 'Bubble Wrap & Protective Wrap',  category: 'Packaging', moq: '1000 units', rating: 4.5, reviews: 89,  image: p('/images/products/Bags & Cases/Bags (41).jpg'), badge: null },

  // KITCHEN
  { id: 35, name: 'Modern Kitchen Utensil Set',     category: 'Kitchen', moq: '200 units', rating: 4.7, reviews: 156, image: p('/images/products/Kitchen/Kitchen (1).jpg'),  badge: 'Trending' },
  { id: 36, name: 'Premium Knife Set',              category: 'Kitchen', moq: '80 units',  rating: 4.8, reviews: 123, image: p('/images/products/Kitchen/Kitchen (4).jpg'),  badge: null },
  { id: 37, name: 'Non-Stick Cookware Set',         category: 'Kitchen', moq: '60 units',  rating: 4.6, reviews: 167, image: p('/images/products/Kitchen/Kitchen (7).jpg'),  badge: null },
  { id: 38, name: 'Stainless Steel Pots',           category: 'Kitchen', moq: '100 units', rating: 4.7, reviews: 145, image: p('/images/products/Kitchen/Kitchen (12).jpg'), badge: null },
  { id: 39, name: 'Decorative Table Lamp',          category: 'Kitchen', moq: '120 units', rating: 4.7, reviews: 189, image: p('/images/products/Kitchen/Kitchen (15).jpg'), badge: null },
  { id: 40, name: 'Glass Food Storage Set',         category: 'Kitchen', moq: '120 units', rating: 4.8, reviews: 189, image: p('/images/products/Kitchen/Kitchen (18).jpg'), badge: null },

  // ELECTRONICS
  { id: 41, name: 'HD Webcam',                      category: 'Electronics', moq: '500 units', rating: 4.6, reviews: 203, image: p('/images/products/Electronics/web1.jpg'),   badge: null },
  { id: 42, name: 'Wireless Headphones',            category: 'Electronics', moq: '100 units', rating: 4.9, reviews: 245, image: p('/images/products/Electronics/hea1.jpg'),   badge: 'Best Seller' },
  { id: 43, name: 'Laptop / Computer',              category: 'Electronics', moq: '200 units', rating: 4.8, reviews: 178, image: p('/images/products/Electronics/lep1.jpg'),   badge: null },
  { id: 44, name: 'Mechanical Keyboard',            category: 'Electronics', moq: '600 units', rating: 4.7, reviews: 267, image: p('/images/products/Electronics/kb1.jpg'),    badge: null },
  { id: 45, name: 'Security Camera',               category: 'Electronics', moq: '120 units', rating: 4.8, reviews: 201, image: p('/images/products/Electronics/cam1.jpg'),   badge: null },
  { id: 46, name: 'Computer Monitor',              category: 'Electronics', moq: '150 units', rating: 4.6, reviews: 145, image: p('/images/products/Electronics/Monitor1.jpg'), badge: null },

  // LIGHTS & LIGHTING
  { id: 47, name: 'LED Pendant Light',              category: 'Lights & Lighting', moq: '50 units',  rating: 4.8, reviews: 124, image: p('/images/products/Lightning Accessories/Lightning (1).jpg'),  badge: null },
  { id: 48, name: 'LED Strip Lights',               category: 'Lights & Lighting', moq: '200 units', rating: 4.7, reviews: 198, image: p('/images/products/Lightning Accessories/Lightning (4).jpg'),  badge: 'Trending' },
  { id: 49, name: 'Solar Garden Lights',            category: 'Lights & Lighting', moq: '100 units', rating: 4.6, reviews: 156, image: p('/images/products/Lightning Accessories/Lightning (7).jpg'),  badge: null },
  { id: 50, name: 'Smart LED Bulbs',                category: 'Lights & Lighting', moq: '300 units', rating: 4.8, reviews: 234, image: p('/images/products/Lightning Accessories/Lightning (10).jpg'), badge: null },
  { id: 51, name: 'Outdoor Floodlight',             category: 'Lights & Lighting', moq: '80 units',  rating: 4.7, reviews: 112, image: p('/images/products/Lightning Accessories/Lightning (13).jpg'), badge: null },
  { id: 52, name: 'Industrial Warehouse Light',     category: 'Lights & Lighting', moq: '40 units',  rating: 4.9, reviews: 67,  image: p('/images/products/Lightning Accessories/Lightning (16).jpg'), badge: null },

  // HARDWARE TOOLS
  { id: 53, name: 'Professional Power Drill Set',   category: 'Hardware Tools', moq: '50 units',   rating: 4.8, reviews: 134, image: p('/images/products/Home & Living/Hardware Tools/Tools (1).jpg'),  badge: null },
  { id: 54, name: 'Hand Tool Kit',                  category: 'Hardware Tools', moq: '100 units',  rating: 4.7, reviews: 198, image: p('/images/products/Home & Living/Hardware Tools/Tools (5).jpg'),  badge: null },
  { id: 55, name: 'Stainless Steel Screws & Bolts', category: 'Hardware Tools', moq: '5000 units', rating: 4.6, reviews: 145, image: p('/images/products/Home & Living/Hardware Tools/Tools (9).jpg'),  badge: null },
  { id: 56, name: 'Electric Angle Grinder',         category: 'Hardware Tools', moq: '60 units',   rating: 4.8, reviews: 89,  image: p('/images/products/Home & Living/Hardware Tools/Tools (13).jpg'), badge: null },
  { id: 57, name: 'Safety Helmets & PPE',           category: 'Hardware Tools', moq: '200 units',  rating: 4.7, reviews: 123, image: p('/images/products/Home & Living/Hardware Tools/Tools (17).jpg'), badge: null },
  { id: 58, name: 'Measuring Tape & Level Set',     category: 'Hardware Tools', moq: '300 units',  rating: 4.6, reviews: 167, image: p('/images/products/Home & Living/Hardware Tools/Tools (21).jpg'), badge: null },

  // TOYS
  { id: 59, name: 'STEM Educational Toy Set',       category: 'Toys', moq: '100 units', rating: 4.8, reviews: 145, image: p('/images/products/Sports & Entertainment/Toys/Toys (1).jpg'),  badge: 'Popular' },
  { id: 60, name: 'Remote Control Car',             category: 'Toys', moq: '80 units',  rating: 4.7, reviews: 198, image: p('/images/products/Sports & Entertainment/Toys/Toys (5).jpg'),  badge: null },
  { id: 61, name: 'Wooden Building Blocks',         category: 'Toys', moq: '200 units', rating: 4.9, reviews: 134, image: p('/images/products/Sports & Entertainment/Toys/Toys (9).jpg'),  badge: null },
  { id: 62, name: 'Kids Art & Craft Kit',           category: 'Toys', moq: '150 units', rating: 4.7, reviews: 167, image: p('/images/products/Sports & Entertainment/Toys/Toys (13).jpg'), badge: null },
  { id: 63, name: 'Plush Stuffed Animals',          category: 'Toys', moq: '300 units', rating: 4.8, reviews: 212, image: p('/images/products/Sports & Entertainment/Toys/Toys (17).jpg'), badge: null },
  { id: 64, name: 'Outdoor Play Set',               category: 'Toys', moq: '50 units',  rating: 4.6, reviews: 89,  image: p('/images/products/Sports & Entertainment/Toys/Toys (21).jpg'), badge: null },

  // LITHIUM BATTERIES
  { id: 65, name: 'Lithium-Ion 18650 Battery',      category: 'Lithium Batteries', moq: '1000 units', rating: 4.8, reviews: 234, image: p('/images/products/Electronics/hdd1.jpg'), badge: null },
  { id: 66, name: 'LiFePO4 Battery Pack',           category: 'Lithium Batteries', moq: '50 units',   rating: 4.9, reviews: 78,  image: p('/images/products/Electronics/hdd2.jpg'), badge: null },
  { id: 67, name: 'E-Bike Lithium Battery',         category: 'Lithium Batteries', moq: '30 units',   rating: 4.8, reviews: 112, image: p('/images/products/Electronics/wd1.jpg'),  badge: null },
  { id: 68, name: 'Power Tool Battery Pack',        category: 'Lithium Batteries', moq: '100 units',  rating: 4.7, reviews: 145, image: p('/images/products/Electronics/mb1.jpg'),  badge: null },
  { id: 69, name: 'Solar Storage Battery',          category: 'Lithium Batteries', moq: '20 units',   rating: 4.9, reviews: 56,  image: p('/images/products/Electronics/gc1.jpg'),  badge: null },
  { id: 70, name: 'Portable Battery Station',       category: 'Lithium Batteries', moq: '40 units',   rating: 4.8, reviews: 89,  image: p('/images/products/Electronics/gc2.jpg'),  badge: 'Best Seller' }
];

export default PRODUCTS;
