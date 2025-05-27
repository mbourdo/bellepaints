import Gallery from './components/Gallery';
import heroImage from './assets/images/hero.jpg';
import sororityImg from './assets/images/sorority.jpg';
import canvasImg from './assets/images/canvas.jpg';
import printsImg from './assets/images/prints.jpg';
import customImg from './assets/images/custom.jpg';

function App() {
  return (
    <div className="bg-neutral-50 text-gray-800">
      <div className="relative group">

        {/* Navigation */}
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
          <div className="text-xl font-bold tracking-wide text-[#8aa9ba]">belle paints</div>
          <div className="space-x-6 text-sm font-medium text-gray-600 hidden sm:flex items-center">
            <a href="#shop" className="hover:text-[#8aa9ba] transition-colors">Shop</a>
            <a href="#about" className="hover:text-[#8aa9ba] transition-colors">About</a>
            <a href="#search" className="hover:text-[#8aa9ba] transition-colors">Search</a>
            <a href="#cart" className="hover:text-[#8aa9ba] transition-colors">Cart</a>
          </div>
        </nav>

      {/* Larger Full-width Dropdown */}
      <div className="relative group">
          {/* Slide-down Dropdown */}
          <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-b-xl px-8 opacity-0 max-h-0 overflow-hidden pointer-events-none group-hover:opacity-100 group-hover:max-h-[500px] group-hover:py-10 group-hover:pointer-events-auto transition-all duration-500 ease-in-out z-40 hidden sm:block" >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-4 gap-10 mb-6">
                <a href="/sorority" className="flex flex-col items-center text-center group hover:text-[#8aa9ba] transition-colors">
                  <img src={sororityImg} alt="Sorority" className="w-28 h-38 object-cover rounded-lg mb-3" />
                  <p className="font-semibold text-gray-800 text-base">Sorority</p>
                </a>
                <a href="/canvas" className="flex flex-col items-center text-center group hover:text-[#8aa9ba] transition-colors">
                  <img src={canvasImg} alt="Canvas" className="w-28 h-38 object-cover rounded-lg mb-3" />
                  <p className="font-semibold text-gray-800 text-base">Canvas</p>
                </a>
                <a href="/prints" className="flex flex-col items-center text-center group hover:text-[#8aa9ba] transition-colors">
                  <img src={printsImg} alt="Prints" className="w-28 h-38 object-cover rounded-lg mb-3" />
                  <p className="font-semibold text-gray-800 text-base">Prints</p>
                </a>
                <a href="/custom" className="flex flex-col items-center text-center group hover:text-[#8aa9ba] transition-colors">
                  <img src={customImg} alt="Custom" className="w-28 h-38 object-cover rounded-lg mb-3" />
                  <p className="font-semibold text-gray-800 text-base">Custom</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <img src={heroImage} alt="Hero" className="w-full h-[70vh] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-5xl sm:text-6xl font-extrabold mb-4">Painted with Love</h1>
            <p className="text-white text-lg sm:text-xl max-w-xl mx-auto">
              Custom sorority paddles, canvas, and print by Belle.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400 bg-white">
        © 2025 Belle Paints
      </footer>
    </div>
  );
}

export default App;
