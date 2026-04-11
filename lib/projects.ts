export type Project = {
  name: string;
  status: "LIVE" | "DEMO" | "CASE STUDY";
  description: string;
  link?: string;
  image?: string;
  imagePosition?: string;
  download?: {
    href: string;
    label: string;
    note?: string;
  };
  secondaryLink?: {
    href: string;
    label: string;
  };
};

export const projects: Project[] = [
  {
    name: "CST Logistics — Full ERP Platform",
    status: "LIVE",
    description:
      "Built a complete dispatch and operations platform from the ground up for a 50-person trucking company. Drivers receive loads, run pre-check inspections, log trips. Admin portal handles dispatch, driver management, applications, customer tracking, location-based rate management, and driver pay dashboards. Currently in use. Now scoping it as a standalone SaaS product.",
    link: "cstlogistics.net",
    image: "/cst-logistics.png",
  },
  {
    name: "Private Credit Deal Flow Platform",
    status: "DEMO",
    description:
      "After a single networking call with a private credit analyst, I built a working demo of a deal management platform — borrower tracking, capital provider management, vendor directory, sales pipeline, and deal creation workflow.",
    link: "avrio-clear-fund.vercel.app",
    image: "/private-credit.png",
  },
  {
    name: "MGMT 305 — AI-Powered Classroom Tool",
    status: "CASE STUDY",
    description:
      "Built software for my professor that lets him upload mock exam questions, then uses AI to analyze student responses and surface insights. Cut his weekly class prep by 4 hours.",
    link: "mgmt305.com",
    image: "/mgmt-305-v2.png",
    download: {
      href: "/mock-questions.zip",
      label: "Download sample questions",
      note: "Drag and drop the zip into mgmt305.com to test the software yourself.",
    },
    secondaryLink: {
      href: "https://www.linkedin.com/in/thomasdrennen/",
      label: "Meet the professor",
    },
  },
  {
    name: "Valor Tax Relief — Website Redesign + AI Integration",
    status: "CASE STUDY",
    description:
      "Redesigned their website and set them up on GoHighLevel as their ERP. Built an AI chatbot integration that automatically engages new Facebook leads and books appointments.",
    link: "valortaxrelief.com",
    image: "/valor-tax.png",
  },
  {
    name: "Licom AI — My Consulting Firm",
    status: "LIVE",
    description:
      "Founded and run an AI consulting and implementation agency serving growth-stage companies. We've worked with logistics, tax, financial services, and professional services businesses.",
    link: "licom.ai",
    image: "/licom-ai.png",
    imagePosition: "object-center",
  },
];
