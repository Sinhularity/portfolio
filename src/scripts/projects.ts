export interface Project {
  title: string;
  subtitle: string;
  description: string;
  images: [string, string, string];
  githubUrl: string;
  tags: string[];
  imagesDimensions: {width: number, height: number}[];
}
const projectImageBasePath = "../projects/";

export const projects: Project[] = [
  {
    title: "Barbershop",
    subtitle: "Final project for Web Development Course",
    description: "Develop the backend for an online booking system for a barbershop. Please review our wiki for detailed documentation on the project structure, API endpoints, and usage instructions.",
    images: [`${projectImageBasePath}barbershop/user.png`, `${projectImageBasePath}barbershop/notification.png`, `${projectImageBasePath}barbershop/test.png`],
    imagesDimensions:[{width:2750, height:1591}, {width:1482, height:719}, {width:652, height:151}],
    githubUrl: "https://github.com/Sinhularity/barbershop",
    tags: ["Express", "JavaScript", "Docker","MySQL"],
  },
  {
    title: "AcopiaTech",
    subtitle: "Mobile app for e-waste donation.",
    description: 
    `AcopiaTech allows users to easily find nearby e-waste collection points, schedule pickups, and learn about the importance of proper e-waste disposal. \n
    You can find more details about the project:
    `,
    images: [`${projectImageBasePath}acopiatech/main.jpg`, `${projectImageBasePath}acopiatech/pickup.jpg`, `${projectImageBasePath}acopiatech/profile.jpg`],
    imagesDimensions:[{width:1116, height:2394}, {width:1116, height:2394}, {width:1116, height:2394}],
    githubUrl: "https://github.com/Sinhularity/acopiatech-app",
    tags: ["Google Maps API","Flutter","Dart", "Firebase"],
  },
  {
    title: "Odoo Custom Module",
    subtitle: "Odoo document management module.",
    description: "Giving mantainance to and adding new features to a custom Odoo module for document management in a local company.",
    images: [`${projectImageBasePath}odoo/access.png`, `${projectImageBasePath}odoo/info.png`, `${projectImageBasePath}odoo/trash.png`],
    imagesDimensions:[{width:1847, height:998}, {width:1238, height:678}, {width:1848, height:383}],
    githubUrl: "",
    tags: ["Odoo","Python","PostgreSQL"],
  },
];