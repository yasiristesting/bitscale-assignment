import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  HelpCircle,
  ChevronLeft,
  BarChart2,
  Mail,
  Calendar,
} from "lucide-react";
import React, { useState } from "react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", href: "#" },
  { icon: BarChart2, label: "Analytics", href: "#", disabled: true },
  { icon: Users, label: "Team", href: "#", disabled: true },
  { icon: Mail, label: "Messages", href: "#", disabled: true },
  { icon: Calendar, label: "Calendar", href: "#", disabled: true },
  { icon: HelpCircle, label: "Help", href: "#", disabled: true },
];

interface SidebarProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (isCollapsed: boolean) => void;
}

export function Sidebar({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState(navItems[0].label);

  return (
    <motion.div
      initial={{ width: 20 }}
      animate={{ width: isSidebarCollapsed ? 80 : 240 }}
      className="h-screen text-black fixed left-0 top-0 z-50 overflow-hidden"
    >
      <div className="flex flex-col h-full border-r">
        {/* Header */}
        <div className="p-3.5 flex items-center justify-between border-b">
          {/* <AnimatePresence> */}
            {!isSidebarCollapsed && (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-bold text-xl"
              >
                {activeTab}
              </motion.h1>
            )}
          {/* </AnimatePresence> */}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={
              isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            <motion.div animate={{ rotate: isSidebarCollapsed ? 180 : 0 }}>
              <ChevronLeft className="h-5 w-5" />
            </motion.div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.disabled ? undefined : item.href}
                  className={`flex items-center gap-4 p-2 rounded-lg transition-colors ${
                    item.disabled
                      ? "bg-gray-50 cursor-not-allowed"
                      : activeTab === item.label
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => !item.disabled && setActiveTab(item.label)}
                >
                  <item.icon
                    className={`h-5 w-5 min-w-[20px] ${
                      item.disabled ? "text-gray-500" : ""
                    }`}
                  />
                  <AnimatePresence>
                    {!isSidebarCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className={`whitespace-nowrap ${
                          item.disabled ? "text-gray-500" : ""
                        }`}
                      >
                        {item.label}
                        {/* {item.disabled && (
                          <span className="text-sm text-gray-500 ml-2">
                            (Coming Soon)
                          </span>
                        )} */}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
