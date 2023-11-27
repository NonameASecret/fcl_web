import Image from 'next/image'

const NavBar = () => {
    return (
      <>
        <nav className="bg-[#1f1f1f] pt-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 pl-10">
              <Image src="/assets/logo.svg" className="h-10 mr-4" alt='FCL Software Logo' height={40} width={40} />
            </div>
    
            {/* Navigation Links */}
            <div className="flex flex-grow items-center justify-evenly">
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex-grow text-center">Admin</a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex-grow text-center">Invoices</a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex-grow text-center underline md:underline-offset-8 decoration-[#6e5534] decoration-2">Batch Form</a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex-grow text-center">View Batches</a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex-grow text-center">Logout</a>
            </div>
          </div>
        </nav>
      </>
    );
};

export default NavBar;