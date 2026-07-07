const p = (path) => encodeURI(path);

const PRODUCTS = [
  // CLOTHING & TEXTILE
  { id: 1,  name: 'Cotton T-Shirt (Men & Women)',   category: 'Clothing & Textile', moq: '500 units', rating: 4.5, reviews: 267, image: p('/images/products/Clothing & Textiles/Clothing/Clothing (9).png'), badge: null },
  { id: 2,  name: "Men's Linen Shirt & Shorts Set", category: 'Clothing & Textile', moq: '200 units', rating: 4.7, reviews: 198, image: p('/images/products/Clothing & Textiles/Clothing/Clothing (3).png'), badge: null },
  { id: 3,  name: 'Winter Jacket',                  category: 'Clothing & Textile', moq: '100 units', rating: 4.8, reviews: 145, image: p('/images/products/Clothing & Textiles/Clothing/Clothing (7).png'), badge: null },
  { id: 4,  name: 'Fleece Bed Blanket',             category: 'Clothing & Textile', moq: '300 units', rating: 4.6, reviews: 234, image: p('/images/products/Clothing & Textiles/Textile/Textile (1).jpg'), badge: null },
  { id: 5,  name: 'Home Textile Set',               category: 'Clothing & Textile', moq: '150 units', rating: 4.9, reviews: 156, image: p('/images/products/Clothing & Textiles/Textile/Textile (3).jpg'), badge: null },
  { id: 6,  name: "Women's Streetwear Co-ord Set",  category: 'Clothing & Textile', moq: '200 units', rating: 4.7, reviews: 189, image: p('/images/products/Clothing & Textiles/Clothing/Clothing (5).png'), badge: null },

  // SHOES & WATCHES
  { id: 7,  name: 'Stainless Steel Watch',          category: 'Shoes & Watches', moq: '50 units',  rating: 4.9, reviews: 98,  image: p('/images/products/Shoes & Watches/Watch (1).jpg'), badge: 'Best Seller' },
  { id: 8,  name: 'Sport Running Shoes',            category: 'Shoes & Watches', moq: '100 units', rating: 4.8, reviews: 198, image: p('/images/products/Shoes & Watches/Shoes (2).jpg'), badge: null },
  { id: 9,  name: 'Leather Casual Shoes',           category: 'Shoes & Watches', moq: '80 units',  rating: 4.7, reviews: 145, image: p('/images/products/Shoes & Watches/Shoes (1).jpg'), badge: null },
  { id: 10, name: 'Gold Floral Bracelet Watch',     category: 'Shoes & Watches', moq: '40 units',  rating: 4.8, reviews: 167, image: p('/images/products/Shoes & Watches/Watch (2).jpg'), badge: null },
  { id: 11, name: 'Waterproof Sports Watch',        category: 'Shoes & Watches', moq: '60 units',  rating: 4.6, reviews: 121, image: p('/images/products/Shoes & Watches/Watch (3).jpg'), badge: null },
  { id: 12, name: 'Chunky Platform Sneakers',       category: 'Shoes & Watches', moq: '70 units',  rating: 4.9, reviews: 104, image: p('/images/products/Shoes & Watches/Shoes (5).jpg'), badge: null },

  // BAGS & CASES
  { id: 13, name: 'Premium Leather Handbag',        category: 'Bags & Cases', moq: '100 units', rating: 4.8, reviews: 142, image: p('/images/products/Bags & Cases/Bags (4).jpg'),  badge: 'Popular' },
  { id: 14, name: 'Professional Laptop Backpack',   category: 'Bags & Cases', moq: '80 units',  rating: 4.7, reviews: 128, image: p('/images/products/Bags & Cases/Bags (27).jpg'), badge: null },
  { id: 15, name: 'Travel Suitcase Set',            category: 'Bags & Cases', moq: '50 units',  rating: 4.9, reviews: 95,  image: p('/images/products/Bags & Cases/Bags (31).jpg'), badge: null },
  { id: 16, name: 'Crossbody Shoulder Bag',         category: 'Bags & Cases', moq: '120 units', rating: 4.6, reviews: 156, image: p('/images/products/Bags & Cases/Bags (16).jpg'), badge: null },
  { id: 17, name: 'Weekend Duffel Bag',             category: 'Bags & Cases', moq: '100 units', rating: 4.7, reviews: 112, image: p('/images/products/Bags & Cases/Bags (40).jpg'), badge: null },
  { id: 18, name: 'Brown Leather Shoulder Handbag', category: 'Bags & Cases', moq: '150 units', rating: 4.5, reviews: 189, image: p('/images/products/Bags & Cases/Bags (26).jpg'), badge: null },

  // SPORTS
  { id: 19, name: 'Boxing Gloves & Training Mat Set', category: 'Sports', moq: '250 units', rating: 4.7, reviews: 198, image: p('/images/products/Sports & Entertainment/Sports/Sports (5).jpg'),  badge: null },
  { id: 20, name: 'Wooden Gymnastic Rings',         category: 'Sports', moq: '80 units',  rating: 4.8, reviews: 145, image: p('/images/products/Sports & Entertainment/Sports/Sports (3).jpg'),  badge: null },
  { id: 21, name: 'Tennis Racket & Ball Set',       category: 'Sports', moq: '120 units', rating: 4.6, reviews: 112, image: p('/images/products/Sports & Entertainment/Sports/Sports (17).jpg'), badge: null },
  { id: 22, name: 'Basketball',                     category: 'Sports', moq: '200 units', rating: 4.7, reviews: 167, image: p('/images/products/Sports & Entertainment/Sports/Sports (1).jpg'),  badge: null },
  { id: 23, name: 'Massage Therapy Ball Set',       category: 'Sports', moq: '400 units', rating: 4.8, reviews: 234, image: p('/images/products/Sports & Entertainment/Sports/Sports (11).jpg'), badge: null },
  { id: 24, name: "Women's One-Piece Swimsuit",     category: 'Sports', moq: '150 units', rating: 4.7, reviews: 178, image: p('/images/products/Sports & Entertainment/Sports/Sports (16).jpg'), badge: null },

  // JEWELLERY
  { id: 25, name: 'Elegant Pearl Necklace Set',     category: 'Jewellery', moq: '100 units', rating: 4.9, reviews: 87,  image: p('/images/products/Jewellery/jew1.jpg'), badge: null },
  { id: 26, name: 'Charm Pendant Necklace',         category: 'Jewellery', moq: '20 units',  rating: 4.9, reviews: 56,  image: p('/images/products/Jewellery/jew2.jpg'), badge: null },
  { id: 27, name: 'Layered Gold Necklace',          category: 'Jewellery', moq: '80 units',  rating: 4.8, reviews: 102, image: p('/images/products/Jewellery/jew3.jpg'), badge: null },
  { id: 28, name: 'Gemstone Watch & Bracelet Set',  category: 'Jewellery', moq: '150 units', rating: 4.7, reviews: 134, image: p('/images/products/Jewellery/wac2.jpg'), badge: null },

  // PACKAGING
  { id: 29, name: 'Bulk Roll & Carton Packaging',   category: 'Packaging', moq: '1000 units', rating: 4.6, reviews: 134, image: p('/images/products/Packaging/Packaging (1).jpg'),  badge: null },
  { id: 30, name: 'Industrial Crate Wrap Packaging', category: 'Packaging', moq: '2000 units', rating: 4.5, reviews: 167, image: p('/images/products/Packaging/Packaging (2).jpg'),  badge: null },
  { id: 31, name: 'Custom Wooden Crate Packaging',  category: 'Packaging', moq: '500 units',  rating: 4.7, reviews: 112, image: p('/images/products/Packaging/Packaging (3).jpg'), badge: null },
  { id: 32, name: 'Printed Paper Shopping Bags',    category: 'Packaging', moq: '1000 units', rating: 4.8, reviews: 98,  image: p('/images/products/Bags & Cases/Bags (44).jpg'), badge: null },
  { id: 33, name: 'Labeled Export Packaging Sacks', category: 'Packaging', moq: '500 units',  rating: 4.6, reviews: 145, image: p('/images/products/Packaging/Packaging (4).jpg'), badge: null },
  { id: 34, name: 'Labeled Shipping Carton Boxes',  category: 'Packaging', moq: '1000 units', rating: 4.5, reviews: 89,  image: p('/images/products/Packaging/Packaging (1).jpg'), badge: null },

  // KITCHEN
  { id: 35, name: 'Modern Kitchen Utensil Set',     category: 'Kitchen', moq: '200 units', rating: 4.7, reviews: 156, image: p('/images/products/Kitchen/Kitchen (1).jpg'),  badge: 'Trending' },
  { id: 36, name: 'Premium Knife Set',              category: 'Kitchen', moq: '80 units',  rating: 4.8, reviews: 123, image: p('/images/products/Kitchen/Kitchen (2).jpg'),  badge: null },
  { id: 37, name: 'Elegant Porcelain Dinnerware Set', category: 'Kitchen', moq: '60 units',  rating: 4.6, reviews: 167, image: p('/images/products/Kitchen/Kitchen (7).jpg'),  badge: null },
  { id: 38, name: 'Portable Induction Cooktop',     category: 'Kitchen', moq: '100 units', rating: 4.7, reviews: 145, image: p('/images/products/Kitchen/Kitchen (12).jpg'), badge: null },
  { id: 39, name: 'Portable Induction Cooker',      category: 'Kitchen', moq: '120 units', rating: 4.7, reviews: 189, image: p('/images/products/Kitchen/Kitchen (15).jpg'), badge: null },
  { id: 40, name: 'Glass Food Storage Set',         category: 'Kitchen', moq: '120 units', rating: 4.8, reviews: 189, image: p('/images/products/Kitchen/Kitchen (11).jpg'), badge: null },

  // ELECTRONICS
  { id: 41, name: 'HD Webcam',                      category: 'Electronics', moq: '500 units', rating: 4.6, reviews: 203, image: p('/images/products/Electronics/web1.jpg'),   badge: null },
  { id: 42, name: 'True Wireless Earbuds',           category: 'Electronics', moq: '100 units', rating: 4.9, reviews: 245, image: p('/images/products/Electronics/hh.jpg'),    badge: 'Best Seller' },
  { id: 43, name: 'Laptop / Computer',              category: 'Electronics', moq: '200 units', rating: 4.8, reviews: 178, image: p('/images/products/Electronics/lep1.jpg'),   badge: null },
  { id: 44, name: 'Mechanical Keyboard',            category: 'Electronics', moq: '600 units', rating: 4.7, reviews: 267, image: p('/images/products/Electronics/kb3.jpg'),    badge: null },
  { id: 45, name: 'Security Camera',               category: 'Electronics', moq: '120 units', rating: 4.8, reviews: 201, image: p('/images/products/Electronics/sc.jpg'),    badge: null },
  { id: 46, name: 'Computer Monitor',              category: 'Electronics', moq: '150 units', rating: 4.6, reviews: 145, image: p('/images/products/Electronics/Monitor1.jpg'), badge: null },

  // LIGHTS & LIGHTING
  { id: 47, name: 'LED Pendant Light',              category: 'Lights & Lighting', moq: '50 units',  rating: 4.8, reviews: 124, image: p('/images/products/Lightning Accessories/Lightning (7).jpg'),  badge: null },
  { id: 48, name: 'LED Strip Lights',               category: 'Lights & Lighting', moq: '200 units', rating: 4.7, reviews: 198, image: p('/images/products/Lightning Accessories/Lightning (17).jpg'),  badge: 'Trending' },
  { id: 49, name: 'Solar Garden Lights',            category: 'Lights & Lighting', moq: '100 units', rating: 4.6, reviews: 156, image: p('/images/products/Lightning Accessories/Lightning (14).jpg'),  badge: null },
  { id: 50, name: 'Modern Pendant Chandelier Light', category: 'Lights & Lighting', moq: '300 units', rating: 4.8, reviews: 234, image: p('/images/products/Lightning Accessories/Lightning (10).jpg'), badge: null },
  { id: 51, name: 'Outdoor Floodlight',             category: 'Lights & Lighting', moq: '80 units',  rating: 4.7, reviews: 112, image: p('/images/products/Lightning Accessories/Lightning (18).jpg'), badge: null },
  { id: 52, name: 'Professional Studio Barn Door Light', category: 'Lights & Lighting', moq: '40 units',  rating: 4.9, reviews: 67,  image: p('/images/products/Lightning Accessories/Lightning (16).jpg'), badge: null },

  // HARDWARE TOOLS
  { id: 53, name: 'Professional Power Drill Set',   category: 'Hardware Tools', moq: '50 units',   rating: 4.8, reviews: 134, image: p('/images/products/Home & Living/Hardware Tools/Tools (13).jpg'),  badge: null },
  { id: 54, name: 'Hand Tool Kit',                  category: 'Hardware Tools', moq: '100 units',  rating: 4.7, reviews: 198, image: p('/images/products/Home & Living/Hardware Tools/Tools (25).jpg'),  badge: null },
  { id: 55, name: 'Claw Hammer 3-Piece Set',        category: 'Hardware Tools', moq: '5000 units', rating: 4.6, reviews: 145, image: p('/images/products/Home & Living/Hardware Tools/Tools (9).jpg'),  badge: null },
  { id: 56, name: 'Electric Angle Grinder',         category: 'Hardware Tools', moq: '60 units',   rating: 4.8, reviews: 89,  image: p('/images/products/Home & Living/Hardware Tools/Tools (3).jpg'), badge: null },
  { id: 57, name: 'Cordless Mini Angle Grinder Kit', category: 'Hardware Tools', moq: '200 units',  rating: 4.7, reviews: 123, image: p('/images/products/Home & Living/Hardware Tools/Tools (17).jpg'), badge: null },
  { id: 58, name: 'Measuring Tape & Level Set',     category: 'Hardware Tools', moq: '300 units',  rating: 4.6, reviews: 167, image: p('/images/products/Home & Living/Hardware Tools/Tools (40).jpg'), badge: null },

  // TOYS
  { id: 59, name: 'STEM Educational Toy Set',       category: 'Toys', moq: '100 units', rating: 4.8, reviews: 145, image: p('/images/products/Sports & Entertainment/Toys/Toys (45).jpg'),  badge: 'Popular' },
  { id: 60, name: 'Kids Ride-On Go-Kart',           category: 'Toys', moq: '80 units',  rating: 4.7, reviews: 198, image: p('/images/products/Sports & Entertainment/Toys/Toys (20).jpg'),  badge: null },
  { id: 61, name: 'Wooden Building Blocks',         category: 'Toys', moq: '200 units', rating: 4.9, reviews: 134, image: p('/images/products/Sports & Entertainment/Toys/Toys (13).jpg'),  badge: null },
  { id: 62, name: 'Kids Art & Craft Kit',           category: 'Toys', moq: '150 units', rating: 4.7, reviews: 167, image: p('/images/products/Sports & Entertainment/Toys/Toys (2).jpg'), badge: null },
  { id: 63, name: 'Plush Stuffed Animals',          category: 'Toys', moq: '300 units', rating: 4.8, reviews: 212, image: p('/images/products/Sports & Entertainment/Toys/Toys (25).jpg'), badge: null },
  { id: 64, name: 'Outdoor Play Set',               category: 'Toys', moq: '50 units',  rating: 4.6, reviews: 89,  image: p('/images/products/Sports & Entertainment/Toys/Toys (50).jpg'), badge: null },

  // LITHIUM BATTERIES
  { id: 65, name: 'Lithium Pouch Battery Cells',    category: 'Lithium Batteries', moq: '1000 units', rating: 4.8, reviews: 234, image: p('/images/products/Lithium Batteries/Battery (1).jpg'), badge: null },
  { id: 66, name: 'LiFePO4 Battery Pack',           category: 'Lithium Batteries', moq: '50 units',   rating: 4.9, reviews: 78,  image: p('/images/products/Lithium Batteries/Battery (2).jpg'), badge: null },
  { id: 67, name: 'EV Battery Pack Assembly',       category: 'Lithium Batteries', moq: '30 units',   rating: 4.8, reviews: 112, image: p('/images/products/Lithium Batteries/Battery (3).jpg'),  badge: null },
  { id: 68, name: 'Battery Energy Storage System',  category: 'Lithium Batteries', moq: '100 units',  rating: 4.7, reviews: 145, image: p('/images/products/Lithium Batteries/Battery (4).jpg'),  badge: null },
  { id: 69, name: 'Solar Storage Battery',          category: 'Lithium Batteries', moq: '20 units',   rating: 4.9, reviews: 56,  image: p('/images/products/Lithium Batteries/Battery (5).jpg'), badge: null },
  { id: 70, name: 'Portable Battery Station',       category: 'Lithium Batteries', moq: '40 units',   rating: 4.8, reviews: 89,  image: p('/images/products/Lithium Batteries/Battery (6).jpg'),  badge: 'Best Seller' },

  // SPORTS (new additions)
  { id: 71, name: 'Seamless Gym Leggings Women Yoga Pants', category: 'Sports', moq: '150 units', rating: 4.6, reviews: 302, image: p('/images/products/Sports & Entertainment/Sports/ae-sports-1.jpg'), badge: null },
  { id: 72, name: 'Women Yoga Leggings Slim Yoga Pants',    category: 'Sports', moq: '150 units', rating: 4.7, reviews: 187, image: p('/images/products/Sports & Entertainment/Sports/ae-sports-2.jpg'), badge: null },
  { id: 73, name: 'Pocketed Yoga Set with Sports Bra (2PC)', category: 'Sports', moq: '100 units', rating: 4.6, reviews: 156, image: p('/images/products/Sports & Entertainment/Sports/ae-sports-3.jpg'), badge: null },
  { id: 74, name: 'High-Waist Cycling & Fitness Shorts',    category: 'Sports', moq: '200 units', rating: 4.5, reviews: 134, image: p('/images/products/Sports & Entertainment/Sports/ae-sports-4.jpg'), badge: null },
  { id: 75, name: "Women's Zip-Up Yoga Jacket",             category: 'Sports', moq: '120 units', rating: 4.7, reviews: 98,  image: p('/images/products/Sports & Entertainment/Sports/ae-sports-5.jpg'), badge: null },
  { id: 76, name: 'Post-Surgery Compression Arm Shaper',    category: 'Sports', moq: '100 units', rating: 4.6, reviews: 76,  image: p('/images/products/Sports & Entertainment/Sports/ae-sports-6.jpg'), badge: null },

  // PET SUPPLIES (new category)
  { id: 77, name: 'Plush Round Calming Pet Bed',            category: 'Pet Supplies', moq: '100 units', rating: 4.8, reviews: 245, image: p('/images/products/Pet Supplies/ae-pet-1.jpg'),  badge: 'Best Seller' },
  { id: 78, name: 'Luxury Square Plush Dog Bed',            category: 'Pet Supplies', moq: '100 units', rating: 4.7, reviews: 156, image: p('/images/products/Pet Supplies/ae-pet-2.jpg'),  badge: null },
  { id: 79, name: 'Waterproof Double-Layer Cat Litter Mat', category: 'Pet Supplies', moq: '300 units', rating: 4.6, reviews: 189, image: p('/images/products/Pet Supplies/ae-pet-3.jpg'),  badge: null },
  { id: 80, name: 'Pet Crossbody Travel Carrier Bag',       category: 'Pet Supplies', moq: '150 units', rating: 4.7, reviews: 123, image: p('/images/products/Pet Supplies/ae-pet-4.jpg'),  badge: null },
  { id: 81, name: 'Retractable Dog Leash (3m/5m)',          category: 'Pet Supplies', moq: '300 units', rating: 4.6, reviews: 167, image: p('/images/products/Pet Supplies/ae-pet-5.jpg'),  badge: null },
  { id: 82, name: 'Tactical Anti-Pull Dog Harness',         category: 'Pet Supplies', moq: '200 units', rating: 4.8, reviews: 145, image: p('/images/products/Pet Supplies/ae-pet-6.jpg'),  badge: null },
  { id: 83, name: 'Electric Steam Grooming Brush for Pets', category: 'Pet Supplies', moq: '150 units', rating: 4.5, reviews: 98,  image: p('/images/products/Pet Supplies/ae-pet-7.jpg'),  badge: null },
  { id: 84, name: 'Transparent Bubble Pet Carrier Backpack', category: 'Pet Supplies', moq: '100 units', rating: 4.7, reviews: 178, image: p('/images/products/Pet Supplies/ae-pet-8.jpg'),  badge: null },
  { id: 85, name: 'Reinforced Dog Leash with Soft Handle',  category: 'Pet Supplies', moq: '300 units', rating: 4.6, reviews: 112, image: p('/images/products/Pet Supplies/ae-pet-9.jpg'),  badge: null },
  { id: 86, name: 'Automatic Gravity Pet Water Dispenser',  category: 'Pet Supplies', moq: '200 units', rating: 4.7, reviews: 134, image: p('/images/products/Pet Supplies/ae-pet-10.jpg'), badge: null },

  // ELECTRONICS (new additions)
  { id: 87, name: 'iPhone Tempered Glass Screen Protector (3-Pack)', category: 'Electronics', moq: '1000 units', rating: 4.6, reviews: 289, image: p('/images/products/Electronics/ae-electronics-1.jpg'), badge: null },
  { id: 88, name: 'MagSafe Magnetic Car Phone Holder',      category: 'Electronics', moq: '300 units', rating: 4.7, reviews: 201, image: p('/images/products/Electronics/ae-electronics-2.jpg'), badge: null },
  { id: 89, name: '350W USB-C Fast Car Charger',            category: 'Electronics', moq: '500 units', rating: 4.6, reviews: 167, image: p('/images/products/Electronics/ae-electronics-3.jpg'), badge: null },
  { id: 90, name: '15W Wireless Car Charger & Phone Holder', category: 'Electronics', moq: '300 units', rating: 4.7, reviews: 145, image: p('/images/products/Electronics/ae-electronics-4.jpg'), badge: null },
  { id: 91, name: 'Mini Tripod with Phone Clip',            category: 'Electronics', moq: '500 units', rating: 4.5, reviews: 123, image: p('/images/products/Electronics/ae-electronics-5.jpg'), badge: null },
  { id: 92, name: 'Telescopic Bluetooth Selfie Stick',      category: 'Electronics', moq: '300 units', rating: 4.6, reviews: 156, image: p('/images/products/Electronics/ae-electronics-6.jpg'), badge: null },
  { id: 93, name: 'Magnetic Car Phone Mount (360° Rotating)', category: 'Electronics', moq: '400 units', rating: 4.7, reviews: 178, image: p('/images/products/Electronics/ae-electronics-7.jpg'), badge: null },

  // CLOTHING & TEXTILE (new additions)
  { id: 94, name: 'Anti-Slip Cotton Yoga Socks (3-Pair Pack)', category: 'Clothing & Textile', moq: '500 units', rating: 4.6, reviews: 134, image: p('/images/products/Clothing & Textiles/ae-clothing-1.jpg'), badge: null }
];

export default PRODUCTS;
