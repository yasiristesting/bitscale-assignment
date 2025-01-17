import { motion } from "framer-motion";
import { RowData } from "../../types/dashboard";
import {
  AlertCircle,
  CirclePlay,
  Loader2,
  SquareArrowOutUpRight,
} from "lucide-react";

interface TableRowProps {
  data: RowData;
  index: number;
}

export function TableRow({ data, index }: TableRowProps) {
  const getStatusIcon = () => {
    switch (data.status) {
      case "loading":
        return <Loader2 className="h-4 w-4 animate-spin text-gray-400" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "link":
        return <SquareArrowOutUpRight className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b hover:bg-gray-50"
    >
      <td className="p-4 w-12 text-gray-500 border-r">{data.id}</td>
      <td className="p-4 w-12 text-gray-500 border-r">
        <CirclePlay className="text-[#525CE9]" />
      </td>
      <td className="p-4 border-r">{data.timestamp}</td>
      <td className="p-4 border-r">
        {data.status === "error" ? (
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <span className="text-red-500">{data.error}</span>
          </div>
        ) : data.status === "loading" ? (
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <span className="text-gray-500">Loading Data, Please wait</span>
          </div>
        ) : (
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 underline underline-offset-4 text-blue-500 hover:text-blue-600"
          >
            {getStatusIcon()}
            <span>{data.actionColumn}</span>
          </a>
        )}
      </td>
      <td className="p-4 border-r">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">{data.company.name}</span> {"-"}
            <span className="text-sm text-gray-500">
              {data.company.subText}
            </span>
          </div>
        </div>
      </td>
    </motion.tr>
  );
}
