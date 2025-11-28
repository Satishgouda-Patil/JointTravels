import tourImg01 from "../image1.png";
import tourImg02 from "../image2.png";
import tourImg03 from "../image3.png";
import tourImg04 from "../image4.png";
import tourImg05 from "../image5.png";


const tours = [
  {
    id: "01",
    title: "Ultimate Coastal Escape – Honnavaara & Scuba Diving",
    city: "Honnavaara",
    distance: 350,
    price: 6999,
    maxGroupSize: 20,
    desc: "JOINT TRAVELS PRESENTS: Dive into the ultimate 2D & 3N coastal escape featuring Honnavaara, scuba diving, serene beaches, adventure spots, and premium coastal experiences.",
    availableDates: ["16-05-2025"],
    reviews: [
      {
        name: "Guest Traveler",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg01, // replace with your own image
    featured: true,
  },
  {
    id: "09",
    title: "Kaadumane Trek – Wild Western Ghats Escape",
    city: "Kaadumane, Western Ghats",
    distance: 450,
    price: 2499, // change if needed
    maxGroupSize: 20,
    desc: "Kaadumane is not just a trek—it’s a raw, wild escape into mist, rain, and pure Western Ghats magic. If Kudremukh, Nethravathi, Kurinjal, and Bandaje are legendary, Kaadumane is a world apart. A story you live, not a trail you finish.",
    availableDates: ["13-06-2025"],
    reviews: [
      {
        name: "Adventure Enthusiast",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg02, // replace with your image import
    featured: true,
  },
  {
    id: "10",
    title: "Bandaje – The Waterfall Trek",
    city: "Bandaje, Western Ghats",
    distance: 420,
    price: 2499, // update if your price is different
    maxGroupSize: 20,
    desc: "Bandaje is a cloud-filled journey through misty trails, lush greenery, steep climbs, and the breathtaking Bandaje Waterfalls. A perfect blend of adventure, peace, and wild beauty.",
    availableDates: ["28-06-2025"],
    reviews: [
      {
        name: "Trekker",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg03, // replace with your own image import
    featured: true,
  },
  {
    id: "11",
    title: "Coorg Calling – 2-Day Weekend Escape",
    city: "Coorg, Karnataka",
    distance: 300,   // approximate / placeholder — adjust if you calculate distance differently
    price: 5999,     // change if your package price differs
    maxGroupSize: 20,
    desc: "Join us for 2 days of fun, nature and memories: waterfalls, misty hills, coffee plantations, and scenic escapes in the heart of Coorg.",
    availableDates: ["24-10-2025"],
    reviews: [
      {
        name: "Coorg Traveller",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg04,  // replace with your own image import for Coorg
    featured: false,
  },
  {
  id: "12",
  title: "Gaddemane – Village Life & Cultural Experience",
  city: "Gaddemane, Karnataka",
  distance: 320,
  price: 2499, // update if needed
  maxGroupSize: 20,
  desc: "Experience authentic Karnataka village life at Gaddemane — from b₍a₎tta (ಬಟ್ಟ) tradition, nati maduviudu (ನಾಟಿ ಮದುವು) cooking experience, to the calm and earthy Matti Halli lifestyle. A peaceful escape into culture, nature and simplicity.",
  availableDates: ["--"], // add your date
  reviews: [
    {
      name: "Village Explorer",
      rating: 4.8,
    },
  ],
  avgRating: 4.8,
  photo: tourImg05, // replace with your image
  featured: true,
  },

];

export default tours;
