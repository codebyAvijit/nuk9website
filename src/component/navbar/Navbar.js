import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Discover", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  const [change, setChange] = useState(false);
  return (
    <Disclosure as="nav" className="bg-white text-gray-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-1">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="font-bold text-xl flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="assets/Img/logo1.webp"
                    alt="Your Company"
                  />
                  <ul className="hidden md:flex space-x-4 text-gray ml-9">
                    <li className="cursor-pointer hover:text-red-400 pl-10 pr-10">
                      Home
                    </li>
                    <li className="relative group pl-10 pr-10">
                      <span className="cursor-pointer hover:text-red-400 ">
                        Discover
                      </span>
                      <ul className="absolute top-full left-5 hidden group-hover:block p-2">
                        <li className="cursor-pointer hover:bg-gray-200">
                          Services
                        </li>
                        <li className="cursor-pointer hover:bg-gray-200">
                          Our Clients
                        </li>
                        <li className="cursor-pointer hover:bg-gray-200">
                          Our Team
                        </li>
                      </ul>
                    </li>
                    <li className="cursor-pointer hover:text-red-400 pl-10 pr-10 ">
                      About Us
                    </li>
                    <li
                      onClick={() => {
                        navigate("/contact");
                      }}
                      className="cursor-pointer hover:text-red-400 pl-10 pr-10"
                    >
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
