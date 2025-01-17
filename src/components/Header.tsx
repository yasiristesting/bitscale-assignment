import {
  Search,
  Columns,
  Filter,
  ArrowUpDown,
  Sparkles,
  Share2,
  Download,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${props.className} flex items-center justify-between p-4 bg-white border-b`}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button className="flex items-center gap-1 px-3 py-1 hover:bg-gray-100 rounded">
            <Columns className="h-4 w-4" />
            1/1 Row
          </button>
          <button className="flex items-center gap-1 px-3 py-1 hover:bg-gray-100 rounded">
            <Columns className="h-4 w-4" />
            3/3 Column
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 px-3 py-1 hover:bg-gray-100 rounded">
          <Filter className="h-4 w-4" />0 Filter
        </button>
        <button className="flex items-center gap-1 px-3 py-1 hover:bg-gray-100 rounded">
          <ArrowUpDown className="h-4 w-4" />
          Sort
        </button>
        <button className="flex items-center gap-1 px-3 py-1 bg-gray-900 text-white rounded-lg">
          <Sparkles className="h-4 w-4" />
          Enrich
        </button>
        <div className="flex items-center gap-2 ml-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <Share2 className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Download className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
