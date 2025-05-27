import { useState } from 'react';
import temp1 from '../assets/images/temp.jpg';
import temp2 from '../assets/images/temp2.jpg';
import kkgAins from '../assets/images/kkg-ainsley.png';
import aphiCam from '../assets/images/aphi-cam.jpg';
import duMav from '../assets/images/du-mav.jpg';
import sdtMaya from '../assets/images/sdt-maya.jpg';
import thetaMaya from '../assets/images/theta-maya.jpg';
import duAndrei from '../assets/images/du-andrei.jpg';
import aphimichelle from '../assets/images/aphi-michelle.jpeg';
import aphimylittles from '../assets/images/aphi-mylittles.jpg';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const paintings = [
    {
      title: "Custom KKG Paddle",
      subtitle: "blue, beachy, east coast summer inspired",
      price: "SOLD",
      badge: "Sold",
      category: "sorority",
      image: kkgAins,
      hoverImage: temp2,
    },
    {
      title: "Custom Aphi Paddle",
      subtitle: "red, leapord print, and signs of good luck ",
      price: "SOLD",
      badge: "Sold",
      category: "sorority",
      image: aphiCam,
      hoverImage: temp2,
    },
      {
      title: "Custom Aphi Paddle",
      subtitle: "blue, beachy, east coast summer inspired",
      price: "SOLD",
      badge: "Sold",
      category: "sorority",
      image: aphimichelle,
      hoverImage: temp2,
    },
    {
      title: "Custom DU Paddle",
      subtitle: "sky blue mountains and a cowboy",
      price: "SOLD",
      badge: "Sold",
      category: "sorority",
      image: duMav,
      hoverImage: temp2,
    },
    {
      title: "Custom SDT Paddle",
      subtitle: "pastel earthy tones, florals, and animals",
      price: "SOLD",
      badge: "Sold",
      category: "sorority",
      image: sdtMaya,
      hoverImage: temp2,
    },
    {
      title: "Custom Theta Paddle",
      subtitle: "light pink, white, and signs of good luck",
      price: "SOLD",
      badge: "Sold",
      category: "sorority",
      image: thetaMaya,
      hoverImage: temp2,
    },
    {
      title: "Custom DU Paddle",
      subtitle: "astroworld album cover",
      price: "SOLD",
      badge: "Sold",
      category: "sorority",
      image: duAndrei,
      hoverImage: temp2,
    },
    {
      title: "Custom Aphi Paddles",
      subtitle: "big little paddles for my beautiful twins",
      price: "SOLD",
      badge: "Sold",
      category: "sorority",
      image: aphimylittles,
      hoverImage: temp2,
    },
    {
      title: "Golden Detail",
      subtitle: "Luxe finish",
      price: "$75.00",
      badge: "Sold",
      category: "sorority",
      image: temp1,
      hoverImage: temp2,
    },
    {
      title: "Personalized Gift",
      subtitle: "Name + color",
      price: "$90.00",
      badge: "",
      category: "sorority",
      image: temp1,
      hoverImage: temp2,
    },
    {
      title: "Cottagecore Style",
      subtitle: "Countryside inspired",
      price: "$60.00",
      badge: "",
      category: "sorority",
      image: temp1,
      hoverImage: temp2,
    },
    {
      title: "Pastel Stack",
      subtitle: "Soft tones",
      price: "$72.00",
      badge: "",
      category: "sorority",
      image: temp1,
      hoverImage: temp2,
    },
    {
      title: "Color Splash",
      subtitle: "Bold tones",
      price: "$68.00",
      badge: "New",
      category: "sorority",
      image: temp1,
      hoverImage: temp2,
    },
  ];

  const filteredPaintings = filter === 'all'
    ? paintings
    : paintings.filter(p => p.category === filter);

  return (
    <div className="bg-white px-6 py-16">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {['all', 'sorority', 'canvas', 'prints'].map(cat => (
          <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`capitalize px-4 py-2 rounded-full border text-sm font-medium transition 
            ${filter === cat 
              ? 'bg-[#8aa9ba] text-white border-[#8aa9ba]' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300'}`}
        >
          {cat}
        </button>

        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {filteredPaintings.map((item, index) => (
          <HoverCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const HoverCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-[#f2f2f2] rounded-[28px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative mb-4 w-full aspect-[3/4] overflow-hidden rounded-[20px]">
        <img
          src={hovered ? item.hoverImage : item.image}
          alt={item.title}
          className="w-full h-full object-cover transition duration-300"
        />
        <div className="absolute inset-0 bg-[#e6f0f4] bg-opacity-10 pointer-events-none" />
        {item.badge && (
          <span className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1.5 rounded-full uppercase tracking-wide z-10 shadow-md">
            {item.badge}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
      {!hovered && (
        <>
          <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
          <p className="font-semibold text-gray-700">{item.price}</p>
        </>
      )}

      {hovered && (
        <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-300 opacity-100">
          <button className="w-full bg-white rounded-full py-3 font-semibold text-gray-800 shadow hover:shadow-md text-sm">
            ADD TO CART - {item.price}
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
