import { RowData } from "../types/dashboard";

export const mockData: RowData[] = [
  {
    id: 1,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "link",
    actionColumn: "Github Profile Yasir Mansoori",
    link: "https://github.com/yasirmansoori",
    company: {
      name: "Github",
      logo: "Github",
      subText: "github.com",
    },
  },
  {
    id: 2,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "error",
    error: "Cell data size exceeds limit",
    actionColumn: "N/A",
    company: {
      name: "Instagram",
      logo: "Instagram",
      subText: "instagram.com",
    },
  },
  {
    id: 3,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "link",
    actionColumn: "Yasir mansoori",
    link: "https://www.linkedin.com/in/yasir-mansoori/",
    company: {
      name: "LinkedIn",
      logo: "Linkedin",
      subText: "linkedin.com",
    },
  },
  {
    id: 4,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "loading",
    actionColumn: "N/A",
    company: {
      name: "Portfolio",
      logo: "Portfolio",
      subText: "yasirmansoori.in",
    },
  },
];
