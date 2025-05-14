export default function Navbar() {
    return (
      <div className="relative z-50 lg:-mb-24 sm:p-0 p-5">
        <nav className="w-full bg-slate-100/50">
          <div className="mx-auto max-w-6xl py-2 sm:py-5 px-5 sm:px-0">
            <div className="flex justify-between items-center">
              <a href="/">
                <img
                  src="/img/Travellergram.png"
                  alt="Travellergram"
                  className="h-12 object-contain"
                />
              </a>
              <a href="#" className="text-sm font-medium text-black/80">
                Currency
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  