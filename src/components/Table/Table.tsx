import { Plus } from "lucide-react";
import { TableRow } from "./TableRow";
import { mockData } from "../../mockup/dashboardData";

export function Table() {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F6F6F6] border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-900 text-white px-2 py-1 rounded">
                    A
                  </span>
                  Input Column
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                Action column
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                Enrich Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                + Add Column
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockData.map((row, index) => (
              <TableRow key={row.id} data={row} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-[#F6F6F6]">
        <button className="w-full p-2 text-gray-500 flex items-center justify-center gap-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-200 border rounded">
          <Plus className="h-4 w-4" />
          Add Row
        </button>
      </div>
    </div>
  );
}
