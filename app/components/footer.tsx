export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light mb-6 tracking-wider">LUXE</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Curating the world's finest luxury goods since 1985. Experience unparalleled quality and timeless
              elegance.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">COLLECTIONS</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Watches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Jewelry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fashion
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">SUPPORT</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
