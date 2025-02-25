import Logo from "@/../../public/images/SSR-Logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
<div className="mb-8 shadow-md">
<div className="nav-content px-4 max-w-6xl my-0 mx-auto flex justify-between">
<div className="nav-left flex items-center gap-8 font-semibold text-xl text-[#6b7280]">

<div className="navbar">
  <div className="navbar-start-content">
    <div className="nav-left lg:gap-8 gap-8 items-center flex">

    <Image src={Logo} alt="Logo" width={125} height={125} />
    <p className="flex items-center py-1 font-bold text-xl text-[#6b7280] lg:whitespace-nowrap">
                Sand Savy Rentals
    </p>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal px-1 text-base gap-5">
        <li>
          <div className="relative group">
            <Link href={"/"}>
                      Home
            </Link>
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F0615F] transition-all duration-300 group-hover:w-full"></div>
          </div>          
        </li>
        <li>
          <div className="relative group">
        <Link href={"/about" } >
                    About
          </Link>
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F0615F] transition-all duration-300 group-hover:w-full"></div>
          </div>          
        </li>
        <li>
          <div className="relative group">
          <Link href={"/contact" } >
                      Contact
          </Link>
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F0615F] transition-all duration-300 group-hover:w-full"></div>
          </div>          
        </li>
        <li>
          <div className="relative group">
          <Link href={"/blog" } >
                      Blog
          </Link>
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F0615F] transition-all duration-300 group-hover:w-full"></div>
          </div>          
        </li>
      </ul>
    </div>
    </div>
  </div>
  <div className="navbar-end w-3/12">

  <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-8 w-8"  
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4 6 h16 M4 12 h16 M4 18 h16" />
</svg>

      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link href={"/"}>
                    Home
          </Link>
        </li>
        <li>
          <Link href={"/about" } >
                    About
          </Link>
        </li>
        <li>
          <Link href={"/blog" } >
                    Blog
          </Link>
        </li>
        <li>
          <Link href={"/contact" } >
                    Contact
          </Link>
        </li>
      </ul>
  </div>


  </div>
  </div>
        </div>
        </div>
      </div>



    </div>
  );
};

export default Header;
