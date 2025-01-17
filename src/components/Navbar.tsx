import { motion } from "framer-motion";
import { Dropdown, DropdownItem } from "./UI/Dropdown";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white z-10 border-b"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-6"
              src="https://res.cloudinary.com/dnjcut34n/image/upload/v1737045172/misc/logo.svg"
              alt="Logo"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div className="flex ml-auto gap-2">
                  {/* avatar  */}
                  <div className="flex items-center gap-2">
                    <img
                      // src={user?.photoURL || "https://avatar.iran.liara.run/public"}
                      src="https://avatar.iran.liara.run/public"
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>

                  {/* dropdown */}
                  <Dropdown
                    button={
                      <button className="inline-flex justify-center gap-2 w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                        <span>My Space</span>
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    }
                  >
                    <DropdownItem onClick={() => {}}>
                      <div>
                        <p className="text-sm leading-5">Signed in as</p>
                        <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                          yasir
                        </p>
                      </div>
                    </DropdownItem>
                    <DropdownItem onClick={() => {}}>
                      Account settings
                    </DropdownItem>
                    <DropdownItem onClick={() => {}}>Sign out</DropdownItem>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
