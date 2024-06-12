import { FaGithub } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Link from "next/link";
function Home() {
  return (
    <div className="flex items-center w-full justify-center h-[90vh] flex-col">
      <div className=" lg:flex gap-10 ">
        <div className="w-[420px]">
          <h2 className="text-5xl font-bold mb-5 mt-5">
            Front-End React Developer
          </h2>
          <p>
            Salom, Azamov Asadbek. Ozbekistonning Fargona shahrida tugulgan,
            ishtiyoqli Front-End React Developer
          </p>
          <div className="mt-5 flex gap-5">
            <div>
              <Link
                href="https://github.com/azamov-asadbek271?tab=repositories"
                className=" w-7 h-7 flex items-center justify-center "
              >
                <FaGithub className="text-2xl" />
              </Link>
            </div>
            <Link
              href="https://vercel.com/asadbekazamovs-projects"
              className="bg-black w-[26px] h-[26px] flex items-center justify-center rounded-full"
            >
              <IoLogoVercel className="text-base text-white " />
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <img className="rounded-3xl w-96" src="./assets/photo.jpg" alt="" />
        </div>
      </div>
      <div className="flex gap-6 mt-14 lg:mr-[420px]">
        <h2 className="border-solid border-r px-3 border-slate-900">
          Texnalogiyalar
        </h2>
        <div className="flex gap-5 items-center">
          <TiHtml5 className="text-red-500 text-3xl" />
          <DiCss3 className="text-3xl text-cyan-500" />
          <SiSass className="text-pink-500 text-2xl" />
          <SiJavascript className="text-2xl text-yellow-300 rounded" />
          <FaReact className="text-2xl text-cyan-500" />
          <SiTailwindcss className="text-2xl text-cyan-500" />
        </div>
      </div>
    </div>
  );
}

export default Home;
