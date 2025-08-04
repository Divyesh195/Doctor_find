"use client";

import { usePathname } from "next/navigation";

const SNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow-sm border-b border-gray-400 sticky top-[60px] z-10 lg:hidden">
      <div className="flex items-center justify-center py-4 space-x-4">
        <div className="flex items-center space-x-2">
          <p className="bg-gray-700 text-white rounded-2xl font-bold text-sm py-[0.5px] px-1 text-primary-foreground">
            NEW
          </p>
          <span className="text-sm text-gray-700 font-semibold">
            For Corporates
          </span>
        </div>
        <span className="text-sm text-gray-700 font-semibold">
          For Providers
        </span>
        <span className="text-sm text-gray-700 font-semibold">
          Security & help
        </span>
      </div>
    </nav>
  );
};

export default SNavbar;
