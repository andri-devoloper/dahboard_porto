import Image from "next/image";
import Link from "next/link";



export default function Home() {


  return (
    <>
      {/* https://gist.github.com/geep007/b41f912cd693b34c1938b0a8efef439f */}
      <div className="font-mono">
        {/* header */}
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          {/*   left side */}
          <div className="flex items-center">
            <img
              src="https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-06-512.png"
              width={50}
              alt="LOGO"
              className="mr-2"
            />
            <a
              href="#"
              className="inline-block p-2 text-blue-200 mr-2 hover:text-blue-100"
            >
              Home
            </a>
            <a
              href="#"
              className="inline-block p-2 text-blue-200 hover:text-blue-100"
            >
              About
            </a>
          </div>
          {/*   right side */}
          <div className="hidden md:block">
            <a
              href="./auth/login"
              className="inline-block p-2 text-blue-200 hover:text-blue-100 mr-2"
            >
              Login
            </a>
            <a
              href="./auth/register"
              className="inline-block py-2
                   px-4 text-yellow-700 bg-yellow-500 hover:bg-yellow-300 hover:text-yellow-900 rounded transition ease-in duration-150"
            >
              Sign up
            </a>
          </div>
        </div>
        {/* hero */}
        <div className="md:flex justify-between p-10 bg-blue-100 text-blue-800">
          {/*   right */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-3xl line-through mb-2">Sadness?</h3>
            <h3 className="text-3xl line-through mb-2">Boredom?</h3>
            <h3 className="text-3xl line-through mb-4">No motivation?</h3>
            <h2 className="text-5xl font-bold mb-8">Travelling.</h2>
            <p className="mb-10">There is never a sad day travelling.</p>
            <a
              href="#"
              className="inline-block py-3 px-6 md:text-lg bg-pink-200 hover:text-red-100 hover:bg-pink-800 rounded mr-2"
            >
              Read more
            </a>
            <a
              href="#"
              className="inline-block py-3 px-6 md:text-lg bg-pink-200 hover:text-red-100 hover:bg-pink-800 rounded mr-2"
            >
              Subsribe
            </a>
          </div>
          {/*   left */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="Travel"
              className="w-full rounded shadow-2xl h-auto max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full"
            />
          </div>
        </div>
        {/* features */}
        <div className="flex py-16 px-10 bg-blue-500 text-blue-200 text-center">
          <div className="mr-3 mb-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80"
              alt="Travelling image"
              className="w-full rounded border-solid border-2 border-blue-200"
            />
            <p>Places!!</p>
          </div>
          <div className="mr-3 mb-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80"
              alt="Travelling image"
              className="w-full rounded border-solid border-2 border-blue-200"
            />
            <p>Places!!</p>
          </div>
          <div className="mr-3 mb-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80"
              alt="Travelling image"
              className="w-full rounded border-solid border-2 border-blue-200"
            />
            <p>Places!!</p>
          </div>
          <div className="mr-3 mb-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80"
              alt="Travelling image"
              className="w-full rounded border-solid border-2 border-blue-200"
            />
            <p>Places!!</p>
          </div>
        </div>
        {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
        {/* footer+newsletter */}
        <div className="p-10 bg-blue-900  text-blue-400 flex justify-between">
          <div className="md:w-1/2">
            <h3 className="text-lg mb-2">Join the newsletter!</h3>
            <form action="" className="flex">
              <input
                type="email"
                className="rounded w-full mr-2 py-3 px-4 outline-none focus:bg-blue-100"
              />
              <button className="bg-red-400 rounded px-4 hover:bg-red-600">
                Join
              </button>
            </form>
          </div>
          <div className="flex items-center">Copyright © Geet 2020</div>
        </div>
      </div>
    </>
  );
}
