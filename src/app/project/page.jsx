import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { FaSass } from "react-icons/fa";


function Project() {
  return (
    <div className="flex w-full flex-col mx-auto max-w-6xl mt-20">
      <h2 className="font-bold text-2xl"> Loyhalarim</h2>
      <div className="max-w-6xl w-full mx-auto mt-10  items-center flex-col grid-cols-3 grid ">
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/developer.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Developer</h2>
          <div className="flex items-center gap-1">
            <p>Next.Js</p> <RiNextjsFill className="text-lg" />
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://nextlogin-pearl.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/nextlogin"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/magazin.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Magazin</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <p>Next.Js</p> <RiNextjsFill className="text-lg" />
            </div>
            <div className="flex items-center gap-1">
              <p>TypeScript</p>
              <BiLogoTypescript lassName="text-lg" />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://amalyot-theta.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/amalyot"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/config.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Config</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>React.js</p> <FaReact className="text-lg " />
            </div>
            <div className="flex items-center gap-2">
              <p>Tailwind</p>
              <RiTailwindCssFill lassName="text-lg" />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://confiy-store.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/confiy-store"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/shop.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Shop</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>React.js</p> <FaReact className="text-lg " />
            </div>
            <div className="flex items-center gap-2">
              <p>Tailwind</p>
              <RiTailwindCssFill lassName="text-lg" />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://redux-tolkit.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/redux-tolkit"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>

        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img
            className="w-full rounded"
            src="./assets/my-kitchen.png"
            alt=""
          />
          <h2 className="text-xl font-bold mt-5">My-Kitchen</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>React.js</p> <FaReact className="text-lg " />
            </div>
            <div className="flex items-center gap-2">
              <p>Tailwind</p>
              <RiTailwindCssFill lassName="text-lg" />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://login-my-shop-ivvn.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/login-my-shop"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img
            className="w-full rounded"
            src="./assets/todo-list-redux.png"
            alt=""
          />
          <h2 className="text-xl font-bold mt-5">Todo-List</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://redux-ruby.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/redux"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img
            className="w-full rounded"
            src="./assets/creator-user.png"
            alt=""
          />
          <h2 className="text-xl font-bold mt-5">Creator User</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://user-creator-app.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/user-creator-app"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/brithday.png" alt="" />
          <h2 className="text-xl font-bold mt-5">BrithDay</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://java-script-task1.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/javaScript-Task1"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img
            className="w-full rounded"
            src="./assets/user-random.png"
            alt=""
          />
          <h2 className="text-xl font-bold mt-5">Random User</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://random-user-api-ruddy.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/random-user"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img
            className="w-full rounded"
            src="./assets/render-pokemon.png"
            alt=""
          />
          <h2 className="text-xl font-bold mt-5">Random Pokemon</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
            <div className="flex items-center gap-2">
              <p>Tailwind</p>
              <RiTailwindCssFill lassName="text-lg" />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://tawiand-pokemon.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/tawiand---Pokemon"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/figma.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Figma</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
            <div className="flex items-center gap-2">
              <p>Tailwind</p>
              <RiTailwindCssFill lassName="text-lg" />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://tawiand-css-figma.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/tawiand-css-figma"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/weater.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Weather</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://vercel.com/asadbekazamovs-projects"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/Api-Weater-ob-havo"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/api-dev.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Api Job</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://data-va-template.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/Data-va-Template"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/clock.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Soat</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>JavaScript </p> <RiJavascriptFill className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://clock-sable-beta.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/clock"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/my-team.png" alt="" />
          <h2 className="text-xl font-bold mt-5">My-Team</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>Css </p> <DiCss3 className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://4-oy-imtihon-figma.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/4--oy-imtihon-figma"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/designo.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Designo</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>Css </p> <DiCss3 className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://imtihon-7-sahifali-sayt-amalyot.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/imtihon-7-sahifali-sayt"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/coffe.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Coffe</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>Css </p> <DiCss3 className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://5-dars-coffe-my-card.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/5-dars-coffe---my-card"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img className="w-full rounded" src="./assets/masjid.png" alt="" />
          <h2 className="text-xl font-bold mt-5">Masjid</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>Css </p> <DiCss3 className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://vercel.com/asadbekazamovs-projects/masjidlar-haqida-bek"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/Masjidlar-haqida_bek"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
        <div className="card w-80 pb-4 bg-base-100 shadow-xl mb-10 mt-10 items-center gap-5 ">
          <img
            className="w-full rounded"
            src="./assets/web-design.png"
            alt=""
          />
          <h2 className="text-xl font-bold mt-5">Masjid</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p>Sass </p> <FaSass className="text-lg " />
            </div>
          </div>

          <div className="flex gap-5 mt-8">
            <Link
              className="font-bold flex items-center gap-2"
              href="https://sass-designo.vercel.app/"
            >
              Vercel <IoLogoVercel />
            </Link>
            <Link
              className="font-bold flex items-center gap-2"
              href="https://github.com/azamov-asadbek271/sass-Designo"
            >
              GitHub <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
