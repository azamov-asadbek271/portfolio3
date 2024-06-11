import Link from "next/link"
import { RiMenu2Line } from "react-icons/ri";

Link
function Navbar() {
  return (
    <div className="bg-base-200">
      <div className="max-w-6xl mx-auto navbar ">
        <div className="dropdown dropdown-bottom lg:hidden">
          <div tabIndex={0} role="button" className=" m-1">
            <RiMenu2Line />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-start hidden lg:flex">
          <Link className="font-bold " href="/">
            A'zamov.Dev
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal font-bold ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar