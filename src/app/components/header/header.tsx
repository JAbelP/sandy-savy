import Logo from "@/../../public/images/SSR-Logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="mb-8 shadow-md">
        <div className="nav-content px-4 max-w-6xl my-0 mx-auto flex justify-between">
          <div className="nav-left flex items-center gap-8 font-semibold text-xl text-[#6b7280]">
            <Image src={Logo} alt="Logo" width={125} height={125} />
            <p className="flex items-center py-1 font-bold text-xl text-[#6b7280]">
              Sand Savy Rentals
            </p>
            <div className="flex gap-6 font-semibold text-base">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <div key={item.name} className="relative group">
                  <Link href={item.path} className="cursor-pointer">
                    {item.name}
                  </Link>
                  <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F0615F] transition-all duration-300 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="nav-brand flex items-center gap-8">BAG</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
