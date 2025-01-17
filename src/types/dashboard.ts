export interface RowData {
  id: number;
  timestamp: string;
  status: "loading" | "error" | "success" | "link";
  error?: string;
  link?: string
  actionColumn: string;
  company: {
    name: string;
    logo: string;
    subText: string;
  };
}

export interface Column {
  id: string;
  label: string;
  icon?: string;
}
