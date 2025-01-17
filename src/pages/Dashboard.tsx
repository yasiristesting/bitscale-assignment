import { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Table } from "../components/Table/Table";
import { Header } from "../components/Header";

export default function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />

      <motion.div
        className="flex-1 flex flex-col"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        initial={{ marginLeft: 240 }}
        animate={{ marginLeft: isSidebarCollapsed ? 80 : 240 }}
      >
        <div className="sticky top-0 z-10 bg-white">
          <Navbar />
          <Header />
        </div>
        <main className="flex-1 overflow-x-hidden bg-gray-100 relative">
          <Table />
        </main>
      </motion.div>
    </div>
  );
}
