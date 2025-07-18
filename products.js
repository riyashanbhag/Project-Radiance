const products = {
  lakme: {
    name: "Lakme Unreal Mini Blurfect Face Primer",
    description: "Mattifies and blurs pores for a smooth, perfect finish. Suitable for all skin types. Compact and travel-friendly packaging.",
    price: 276,
    mrp: 325,
    discount: "15% off",
    image: "lakme primer.jpg"
  },
  ikonic: {
    name: "Ikonic Hair Straightener",
    description: "Smooth and Shine Technology",
    price: 1836,
    mrp: 2550,
    discount: "28% off",
    image: "https://m.media-amazon.com/images/I/51icRjKREfL._SY450_.jpg"
  },
  pilgrim: {
    name: "Pilgrim Redensyl & Anagain Advanced Hair Growth Serum",
    description: "(50ml)",
    price: 698,
    mrp: 895,
    discount: "22% off",
    image: "https://images-static.nykaa.com/media/catalog/product/2/a/2aa7661PILGR00000020_1.jpg"
  },
  floral: {
    name: "Nykaa Love Struck Floral Perfume",
    description: "(16ml)",
    price: 224,
    mrp: 249,
    discount: "10% off",
    image: "https://images-static.nykaa.com/media/catalog/product/8/b/8b975d7NYKAC00001654_2k.jpg?tr=w-500"
  },
  cetaphil: {
    name: "Cetaphil Moisturising Lotion",
    description: "For Dry To Normal Sensitive Skin (100ml)",
    price: 535,
    mrp: 575,
    discount: "7% off",
    image: "https://m.media-amazon.com/images/I/51+85ZcXkjL._UF1000,1000_QL80_.jpg"
  },
  moxie: {
    name: "Gentle Cleansing Shampoo",
    description: "Gentle daily cleanser (200ml)",
    price: 589,
    mrp: 625,
    discount: "6% off",
    image: "https://moxiebeauty.in/cdn/shop/files/MOXIEDAY01_304_N_30_IMGCentury.jpg?v=1734509365&width=700"
  },
  wella: {
    name: "Wella INVIGO Nourishing Shampoo",
    description: "Nutri Enrich Deep Nourishing (250ml)",
    price: 675,
    mrp: 750,
    discount: "28% off",
    image: "https://m.media-amazon.com/images/I/61eyp6bvFcL._UF350,350_QL80_.jpg"
  },
  huda: {
    name: "Huda Beauty Easy Bake Loose Powder",
    description: "Banana Bread",
    price: 3250,
    mrp: 3500,
    discount: "7% off",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2024/AUGUST/7/kvO3BBMB_12d97484ec774cd9be31a5af1c48dd19.jpg"
  },
  moisturizer: {
    name: "Pond's Super Light Gel Moisturizer",
    description: "Oil-Free with Hyaluronic Acid & Vitamin E (147g)",
    price: 299,
    mrp: 349,
    discount: "14% off",
    image: "https://m.media-amazon.com/images/I/510hKTXuPpL._UF1000,1000_QL80_.jpg"
  },
  sunscreen: {
    name: "Aqualogica Glow+ Dewy Sunscreen",
    description: "SPF 50 & Vitamin C (50g)",
    price: 379,
    mrp: 499,
    discount: "24% off",
    image: "https://images.meesho.com/images/products/363364188/3gjmn_512.webp"
  },
  facewash: {
    name: "Simple Kind To Skin Face Wash",
    description: "Refreshing Facial Wash - No Harsh Chemicals (150ml)",
    price: 310,
    mrp: 365,
    discount: "15% off",
    image: "https://m.media-amazon.com/images/I/51lV2Pem64L._UF1000,1000_QL80_.jpg"
  },
  toner: {
    name: "Minimalist PHA 3% Toner",
    description: "Alcohol-Free for Sensitive Skin (150ml)",
    price: 399,
    mrp: 499,
    discount: "20% off",
    image: "https://m.media-amazon.com/images/I/511npQ5KXaL.jpg"
  },
  sheetmask: {
    name: "Garnier Hydra Bomb Sheet Mask",
    description: "Pomegranate (32g)",
    price: 99,
    mrp: 120,
    discount: "18% off",
    image: "https://m.media-amazon.com/images/I/61oNtGy63gL._UF1000,1000_QL80_.jpg"
  },
  doveIntenseShampoo: {
    name: " Dove Intense Repair Shampoo with Keratin Actives (340ml)",
    price: 270,
    mrp: 225,
    discount: "17% off",
    description: "Dove Intense Repair Shampoo gives you healthy looking and strong hair against breakage and makes your hair more beautiful",
    image: "https://m.media-amazon.com/images/I/41+R2s1-FsL._UF1000,1000_QL80_.jpg"
  },
  doveHairfallRescueShampoo: {
    name: " Dove Hair Fall Rescue Shampoo",
    price: 250,
    mrp: 210,
    discount: "16% off",
    description: "Strengthening Dove shampoo formulated to help prevent hair fall",
    image: "https://m.media-amazon.com/images/I/51c3ExivW0L._UF1000,1000_QL80_.jpg"
  },
  neutrogena: {
    name: "Neutrogena Hydro Boost Water Gel",
    price: 600,
    mrp: 750,
    discount: "20% off",
    description: "Oil-free moisturizer with hyaluronic acid for intense hydration.",
    image: "https://images-static.nykaa.com/media/catalog/product/8/8/886658d4891080614470_1a.jpg"
  },
  maybelline: {
    name: "Maybelline Fit Me Matte + Poreless Foundation",
    price: 500,
    mrp: 599,
    discount: "16% off",
    description: "Ideal for normal to oily skin, refines pores for a natural-looking matte finish.",
    image: "https://rukminim2.flixcart.com/image/704/1056/xif0q/foundation/x/e/r/30-0-fit-me-matte-poreless-liquid-foundation-with-pump-spf-22-original-imahckqhevcbywaj.jpeg?q=90&crop=false"
  },
  mamaearth: {
    name: "Mamaearth Vitamin C Face Wash",
    price: 250,
    mrp: 299,
    discount: "16% off",
    description: "Brightens skin and promotes even skin tone with Vitamin C and turmeric.",
    image: "https://m.media-amazon.com/images/I/71Wbdf1ML-L.jpg"
  },
  loreal: {
     name: "L'Oreal Paris Extraordinary Oil Hair Serum",
  description: "Nourishes and smoothens dry hair (100ml)",
  price: 519,
  mrp: 649,
  discount: "20% off",
  image: "https://m.media-amazon.com/images/I/61GGg1vs3DL.jpg"
  },
  biotiqueLotion: {
    name: "Biotique Morning Nectar Moisturizer",
    price: 199,
    mrp: 249,
    discount: "20% off",
    description: "Nourishes and hydrates skin for all-day moisture.",
    image: "https://m.media-amazon.com/images/I/71wUhQVqYmL._UF1000,1000_QL80_.jpg"
  },
  plumToner: {
    name: "Plum Green Tea Alcohol-Free Toner",
    price: 390,
    mrp: 470,
    discount: "17% off",
    description: "Gently tones oily, acne-prone skin without drying.",
    image: "https://plumgoodness.com/cdn/shop/files/Green-Tea-Toner_150ml_Amazon_1001x1001_02.jpg?v=1737983369"
  },
  wowFacewash: {
    name: "WOW Skin Science Apple Cider Vinegar Face Wash",
    price: 349,
    mrp: 399,
    discount: "13% off",
    description: "Deeply cleanses pores and balances skin pH.",
    image: "https://m.media-amazon.com/images/I/51uwuBYMHlL._UF1000,1000_QL80_.jpg"
  },
  nivea: {
    name: "Nivea Soft Light Moisturizer",
    price: 300,
    mrp: 349,
    discount: "14% off",
    description: "Quick absorbing cream for face, hands, and body.",
    image: "https://m.media-amazon.com/images/I/51qu97DFTjL._UF1000,1000_QL80_.jpg"
  },
  colorbar: {
    name: "Colorbar Velvet Matte Lipstick",
    price: 340,
    mrp: 395,
    discount: "14% off",
    description: "Enriched with Vitamin E and softening agents for smooth lips.",
    image: "https://images-static.nykaa.com/media/catalog/product/6/2/62ede9bCB_8904052458487_1.jpg"
  },
  garnier: {
    name: "Garnier Micellar Cleansing Water",
    price: 225,
    mrp: 275,
    discount: "18% off",
    description: "Removes makeup and cleanses skin without rinsing.",
    image: "https://m.media-amazon.com/images/I/41yAKxKqv4L._UF1000,1000_QL80_.jpg"
  },
  momsco: {
    name: "The Moms Co. Natural Vita Rich Face Cream",
    price: 699,
    mrp: 799,
    discount: "12% off",
    description: "Reduces pigmentation and dark spots with natural ingredients.",
    image: "https://m.media-amazon.com/images/I/61zzIX0JXdL._UF1000,1000_QL80_.jpg"
  },
  revlon: {
    name: "Revlon Colorstay Liquid Eye Pen",
    price: 850,
    mrp: 999,
    discount: "15% off",
    description: "Precise, long-lasting eyeliner with intense color.",
    image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/4/7/47f56d2r_8902656400253_0.jpg"
  },
  faces: {
    name: "Faces Canada Ultime Pro HD Intense Matte Lips",
    price: 749,
    mrp: 899,
    discount: "17% off",
    description: "Highly pigmented lip crayon with a matte finish.",
    image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/2/825c61f8903380000689_1.jpg"
  },
  nykaaNail: {
    name: "Nykaa Nail Enamel",
    price: 179,
    mrp: 199,
    discount: "10% off",
    description: "Long-lasting, high-shine nail polish in vibrant shades.",
    image: "https://images-static.nykaa.com/media/catalog/product/6/f/6f680c58904245701970_4.jpg?tr=w-500"
  },
  bellavita: {
    name: "Bella Vita Organic Glowner Face Toner",
    price: 225,
    mrp: 275,
    discount: "18% off",
    description: "Hydrating toner with rose and cucumber extracts.",
    image: "https://m.media-amazon.com/images/I/61Z0HyOvTfL.jpg"
  },
  eyeconic: {
    name: "Lakme Eyeconic Kajal",
    price: 180,
    mrp: 210,
    discount: "14% off",
    description: "Smudge-proof, waterproof kajal that lasts up to 22 hours.",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/4384531/2024/7/25/ed2bd3c9-a1c9-4a0a-a791-3c33c206bb611721897897198LakmeEyeconicMatteKajalPencilthatLasts24Hrs-ClassicBrown035g2.jpg"
  },
  himalaya: {
    name: "Himalaya Purifying Neem Face Wash",
    price: 150,
    mrp: 175,
    discount: "14% off",
    description: "Prevents pimples and purifies skin with neem and turmeric.",
    image: "https://m.media-amazon.com/images/I/61szHmyNAPL.jpg"
  },
  vaseline: {
  name: "Vaseline Gluta-Hya Flawless Glow Lotion",
  price: 325,
  mrp: 650,
  discount: "50% off",
  description: "Glutathione-infused moisturizer that brightens and evens skin tone for a flawless glow. (200ml)",
  image: "vaselinMoisture.avif"
},
vaselineCocoa: {
  name: "Vaseline Cocoa Glow Body Lotion",
  price: 275,
  mrp: 325,
  discount: "15% off",
  description: "Enriched with cocoa butter and Vaseline jelly, this lotion deeply moisturizes and restores dry skin.",
  image: "https://m.media-amazon.com/images/I/51r7G9tLfLL.jpg"
}
,

  elle18: {
    name: "Elle 18 Color Pop Matte Lip Color",
    price: 100,
    mrp: 120,
    discount: "17% off",
    description: "Affordable, bold matte lipsticks for everyday wear.",
    image: "https://m.media-amazon.com/images/I/41pFD-KiShL._UF1000,1000_QL80_.jpg"
  },
  tresemme: {
    name: "TRESemmé Keratin Smooth Shampoo",
    price: 450,
    mrp: 599,
    discount: "25% off",
    description: "Infused with keratin and argan oil for smoother hair.",
    image: "https://m.media-amazon.com/images/I/51OraU3yvFL.jpg"
  },
  minimalist: {
    name: "Minimalist 10% Niacinamide Serum",
    price: 599,
    mrp: 699,
    discount: "14% off",
    description: "Reduces acne marks, improves skin texture, and controls oil.",
    image: "https://m.media-amazon.com/images/I/51fo5Cdx4YL._UF1000,1000_QL80_.jpg"
  },
  mac: {
  name: "M.A.C Strobe Cream - Peachlite",
  price: 3360,
  mrp: 4200,
  discount: "20% off",
  description: "Illuminating moisturizer and liquid highlighter for a radiant glow. Suitable for all skin types. (50ml)",
  image: "https://images-static.nykaa.com/media/catalog/product/5/9/594f13a773602422029_1.jpg"
},
sanfe: {
  name: "Sanfe Quick Slick Hair Finishing Stick",
  price: 249,
  mrp: 299,
  discount: "17% off",
  description: "Tames flyaways instantly for a sleek hairstyle. Compact and easy to carry. (9ml)",
  image: "sanfe.avif"
}
,

  dermaco: {
    name: "Derma Co. Sunscreen SPF 50",
    price: 499,
    mrp: 599,
    discount: "17% off",
    description: "Fights acne and exfoliates pores effectively.",
    image: "https://m.media-amazon.com/images/I/61r7v2ziqPL._UF1000,1000_QL80_.jpg"
  },
  olay: {
    name: "Olay Total Effects 7 in One Day Cream",
    price: 799,
    mrp: 899,
    discount: "11% off",
    description: "Fights 7 signs of aging for radiant, youthful skin.",
    image: "https://m.media-amazon.com/images/I/616itGWD8YL.jpg"
  },
  mcaffeine: {
    name: "MCaffeine Coffee Face Mask",
    price: 475,
    mrp: 599,
    discount: "21% off",
    description: "Exfoliates dead skin and unclogs pores.",
    image: "https://www.mcaffeine.com/cdn/shop/files/1_17_a1ea5b2b-a470-44a8-9269-4214d663404a.jpg?v=1693898118&width=1445"
  },
  loveplanet: {
  name: "Love Beauty & Planet Bye Bye Frizz Combo (Shampoo + Mask)",
  price: 1106,
  mrp: 1310,
  discount: "16% off",
  description: "Frizz-control shampoo and mask combo for smoother, softer hair. Pack of 2.",
  image: "loveandB.avif"
}
,
  wowHairOil: {
    name: "WOW Onion Black Seed Hair Oil",
    price: 599,
    mrp: 699,
    discount: "14% off",
    description: "Promotes hair growth and reduces hair fall.",
    image: "https://m.media-amazon.com/images/I/61PXKNTZciL.jpg"
  },
  pilgrimFacewash: {
    name: "Pilgrim Volcanic Lava Ash Face Wash",
    price: 350,
    mrp: 399,
    discount: "12% off",
    description: "Deep cleanses and detoxifies skin with volcanic lava ash.",
    image: "https://discoverpilgrim.com/cdn/shop/products/volcanic-lava-ash-face-wash-with-yugdugu-white-lotus-618329.jpg?v=1683285537"
  },
  goodvibes: {
    name: "Good Vibes Rose Hip Radiant Glow Face Serum",
    price: 215,
    mrp: 299,
    discount: "28% off",
    description: "Boosts skin radiance and reduces signs of aging.",
    image: "https://www.goodvibesonly.in/cdn/shop/products/good-vibes-toner-rose-glow-200-ml-2_8_display_1624426270_e9225b72_e3688624-52f5-437e-8381-f25eaa2abc28_1080x.jpg?v=1652200121"
  },
  nykaaClay: {
    name: "Nykaa Clay It Cool Face Mask",
    price: 599,
    mrp: 699,
    discount: "14% off",
    description: "Detoxifying clay mask for clean and refreshed skin.",
    image: "https://m.media-amazon.com/images/I/61xtSeXGUrL._UF1000,1000_QL80_.jpg"
  },
  khadi: {
    name: "Khadi Natural Herbal Hair Cleanser",
    price: 299,
    mrp: 349,
    discount: "14% off",
    description: "Gentle herbal shampoo for healthy scalp and hair.",
    image: "https://m.media-amazon.com/images/I/61T7dfArlkL._UF1000,1000_QL80_.jpg"
  },
  
  biotiquePack: {
    name: "Biotique Bio Fruit Whitening & Depigmentation Face Pack",
    price: 199,
    mrp: 249,
    discount: "20% off",
    description: "Brightens skin tone and reduces pigmentation.",
    image: "images/product31.jpg"
  },
  plumBodywash: {
    name: "Plum BodyLovin' Hawaiian Rumba Shower Gel",
    price: 380,
    mrp: 450,
    discount: "15% off",
    description: "Refreshing body wash with tropical fragrance.",
    image: "images/product32.jpg"
  },
  pondsGel: {
    name: "Pond's Super Light Gel",
    price: 299,
    mrp: 349,
    discount: "14% off",
    description: "Lightweight gel moisturizer for non-sticky hydration.",
    image: "https://ponds.in/cdn/shop/files/27234_S1-8901030702921_900x.jpg?v=1722920440"
  },
  lakmeMousse: {
    name: "Lakme Absolute Skin Natural Mousse",
    price: 750,
    mrp: 849,
    discount: "12% off",
    description: "Feather-light foundation mousse for flawless skin.",
    image: "https://www.lakmeindia.com/cdn/shop/files/23038_H-8901030987823_1000x.jpg?v=1709726928"
  },
   mamaearthConditioner2: {
    name: "Mamaearth Onion Conditioner",
    description: "Strengthens and smoothens hair (250ml)",
    price: 349,
    mrp: 399,
    discount: "13% off",
    image: "https://m.media-amazon.com/images/I/612GJgaUnoL.jpg"
  },
  biotiqueFruitPack2: {
    name: "Biotique Fruit Face Pack",
    description: "Brightening and tightening face pack (75g)",
    price: 210,
    mrp: 249,
    discount: "16% off",
    image: "https://www.biotique.com/cdn/shop/files/8904352001789_188434f8-ada2-460e-a5dc-6e5adb4f236f.jpg?v=1738750070"
  },
  plumBodyWash2: {
    name: "Plum BodyLovin' Body Wash",
    description: "Refreshing tropical body cleanser (240ml)",
    price: 275,
    mrp: 325,
    discount: "15% off",
    image: "https://www.havin.in/cdn/shop/files/51NaWYFilWL.jpg?v=1712909107"
  },
  plum: {
  name: "Plum BodyLovin Vanilla Caramello Body Lotion",
  price: 380,
  mrp: 475,
  discount: "20% off",
  description: "Infused with cocoa butter and Vitamin B5, this lotion deeply nourishes and leaves a warm, sweet fragrance. (400ml)",
  image: "plumLotion.avif"
}

};
