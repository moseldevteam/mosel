export type ProjectCategory = 'Web' | 'Landing' | 'App' | 'UI/UX' | 'Software Systems' | 'Chatbot/Automation';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory | ProjectCategory[];
  thumbnail: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  year: number;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  videoUrl?: string;
  mobileVideoUrl?: string;
  images?: string[];
  imageGroups?: { label: string; images: string[] }[];
}

import unimasPublic1 from "../assets/images/unimasecommerce_public-1.jpg";
import unimasPublic2 from "../assets/images/unimasecommerce_public-2.jpg";
import unimasPublic3 from "../assets/images/unimasecommerce_public-3.jpg";
import unimasPublic4 from "../assets/images/unimasecommerce_public-4.jpg";
import unimasPublic5 from "../assets/images/unimasecommerce_public-5.jpg";
import unimasPublic6 from "../assets/images/unimasecommerce_public-6.jpg";
import unimasPublic7 from "../assets/images/unimasecommerce_public-7.jpg";
import unimasSeller1 from "../assets/images/unimasecommerce_seller-1.jpg";
import unimasSeller2 from "../assets/images/unimasecommerce_seller-2.jpg";
import unimasSeller3 from "../assets/images/unimasecommerce_seller-3.jpg";
import unimasSeller4 from "../assets/images/unimasecommerce_seller-4.jpg";
import unimasSeller5 from "../assets/images/unimasecommerce_seller-5.jpg";
import unimasSeller6 from "../assets/images/unimasecommerce_seller-6.jpg";
import unimasAdmin1 from "../assets/images/unimasecommerce_admin-1.jpg";
import unimasAdmin2 from "../assets/images/unimasecommerce_admin-2.jpg";
import unimasAdmin3 from "../assets/images/unimasecommerce_admin-3.jpg";
import unimasAdmin4 from "../assets/images/unimasecommerce_admin-4.jpg";
import unimasAdmin5 from "../assets/images/unimasecommerce_admin-5.jpg";
import jomTravelThumbnail from "../assets/images/jom-travel-thumbnail.jpg";
import aromaLabThumbnail from "../assets/images/aroma-lab-thumbnail.jpg";
import lettuboostThumbnail from "../assets/images/lettuboost-thumbnail.png";
import lettuboostImage1 from "../assets/images/lettuboost-image1.png";
import lettuboostImage2 from "../assets/images/lettuboost-image2.png";
import lettuboostImage3 from "../assets/images/lettuboost-image3.png";
import lettuboostImage4 from "../assets/images/lettuboost-image4.png";
import textgenesImage from "../assets/images/textGenes-image.png";
import textgenesThumbnail from "../assets/images/textGenes-thumbnail.png";



export const projects: Project[] = [
  {
    id: 'unimas-ecommerce',
    title: 'UNIMAS E-Commerce Platform',
    tagline: 'Campus-exclusive multi-seller marketplace for the UNIMAS community — currently in beta',
    category: 'Web',
    thumbnail: unimasPublic1,
    description: 'UNIMAS E-commerce Platform is a purpose-built, campus-exclusive multi-seller marketplace developed in collaboration with UNIMAS Entrepreneurship Centre (UEC). Accessible only through official UNIMAS email domains (@siswa.unimas.my / @unimas.my), the platform empowers verified campus members to buy and sell within a trusted, closed ecosystem. Student sellers and studentpreneurs can set up storefronts, manage product listings with flexible variant types (size, colour, and more), configure delivery fees per campus zone, and track earnings through a dedicated analytics dashboard. Buyers benefit from a seamless multi-seller checkout, flexible payment options, and campus-specific delivery or self-pickup covering UNIMAS Main Campus, East Campus, and Kolej Rafflesia. A robust Admin Panel gives platform moderators full oversight — from seller verification and user management to revenue reporting and product control. Architected and developed end-to-end by Mosel, the platform is currently live and undergoing active beta testing.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'React Hook Form', 'Zod', 'TanStack React Query', 'Recharts', 'React Router v6', 'PHP 8.2', 'MySQL / MariaDB', 'Apache'],
    year: 2026,
    liveUrl: 'https://unimas-ecommerce.goprints.net',
    imageGroups: [
      {
        label: 'Public Storefront',
        images: [unimasPublic1, unimasPublic2, unimasPublic3, unimasPublic4, unimasPublic5, unimasPublic6, unimasPublic7],
      },
      {
        label: 'Seller Dashboard',
        images: [unimasSeller1, unimasSeller2, unimasSeller3, unimasSeller4, unimasSeller5, unimasSeller6],
      },
      {
        label: 'Admin Panel',
        images: [unimasAdmin1, unimasAdmin2, unimasAdmin3, unimasAdmin4, unimasAdmin5],
      },
    ],
  },
  {
    id: 'jom-travel',
    title: 'Jom Travel & Tour',
    tagline: 'Full-featured travel agency website for a MOTAC-licensed Borneo ground specialist',
    category: 'Web',
    thumbnail: jomTravelThumbnail,
    description: 'Jom Travel & Tour is a full-featured travel agency website for a MOTAC-licensed, Bumiputera-owned tour company based in Sarawak, and a trusted Borneo ground specialist for inbound travel. The site showcases outbound tour packages across Southeast Asia, East Asia, Turkey, and Europe, alongside signature Borneo experiences, transportation, and corporate M.I.C.E services. Built for strong first impressions, the site opens with a cinematic video hero featuring 5 rotating background clips (desktop + mobile variants) that immediately immerses visitors in the travel mood. An interactive 3D globe lets users explore destinations hands-on, boosting engagement and time-on-site. Destination browsing, category filtering, and direct WhatsApp CTAs are designed to shorten the path to conversion, turning curious visitors into inquiries with minimal friction.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Three.js', 'react-globe.gl', 'Lucide React', 'Vite'],
    year: 2026,
    liveUrl: 'https://jomtravelandtour.com',
    videoUrl: 'https://youtu.be/gwLX9yWby88?si=IFdyzlhi41ylueGm',
    mobileVideoUrl: 'https://youtube.com/shorts/usLT6dbb-_M?si=Hx2BTj206omCOotF',
  },
  {
    id: 'aroma-lab',
    title: 'Aroma Lab',
    tagline: 'Interactive perfume studio platform with AI chatbot and fragrance blend builder',
    category: ['Web', 'Chatbot/Automation'],
    thumbnail: aromaLabThumbnail,
    description: 'Aroma Lab is a custom perfume studio based in Kuching, Sarawak. The web platform starts with a cinematic video hero produced by Mosel in both desktop and mobile versions, setting the brand tone from the very first impression. The site is centred around a signature interactive fragrance wheel — a touch-enabled rotary scent explorer that guides users through a multi-step blend builder to craft their own signature perfume. The platform includes an AI-powered bilingual chatbot (EN/MY) for 24/7 customer support, automated email delivery of personalised blend summaries, and a live product catalogue with marketplace integrations across Shopee, TikTok Shop, and eBay. Behind the scenes, Aroma Lab manages their entire inventory, orders, and fragrance notes database through a purpose-built admin dashboard, giving the client full operational independence.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'DeepSeek AI', 'Resend Email', 'jsPDF'],
    year: 2026,
    liveUrl: 'https://aromalab.my',
    videoUrl: 'https://youtu.be/t_B0BJa-rfo?si=vUCjG7eHWO9qzadl',
    mobileVideoUrl: 'https://youtube.com/shorts/aMaah959sEM?si=CgYUST8aWJ32BDxr',
  },
  {
    id: 'eventkamek',
    title: 'EventKamek',
    tagline: 'Event discovery & vendor management platform',
    category: 'Web',
    thumbnail: '',
    description: 'Developed a full web-based platform enabling event discovery and vendor booth management. Features include event creation, vendor slot reservation, organizer dashboards, Google Maps–powered interactive map discovery, calendar integration, and public browsing. Built as a scalable system to support community and campus events. This is the Final Year Project by Shahril Aimar, one of Mosel core team members',
    problem: '',
    solution: '',
    result: '',
    technologies: ['React.js', 'Node.js', 'Google Maps API', 'Tailwind CSS'],
    year: 2025,
    videoUrl: 'https://youtu.be/mx_O5OJqgH8',
    githubUrl: 'https://github.com/shahril2206/EventKamek',
  },
  {
    id: 'saravol',
    title: 'SaraVol',
    tagline: 'Platform Connecting Volunteers and NGOs',
    category: 'Web',
    thumbnail: '',
    description: 'Built a community-focused website for the Digital Kampung program organized by Saperdu. Designed and developed a platform promoting events and connecting volunteers and NGOs in a centralised platform. Delivered a pitch and won 1st place for clarity, innovation, real-world applicability, and community-driven solution. Developed by Shahril Aimar, one of Mosel core team members.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    year: 2025,
    liveUrl: 'https://saravol.vercel.app',
    githubUrl: 'https://github.com/shahril0622/saravol',
    videoUrl: 'https://youtu.be/etJlSv8rPpA',
  },
  {
    id: 'carlo-rino-uiux',
    title: 'Innovate Carlo Rino UPM UI/UX 2024',
    tagline: 'Innovate Carlo Rino UPM UI/UX 2024 design challenge',
    category: 'UI/UX',
    thumbnail: '',
    description: 'Designing an innovative UI/UX solution for Carlo Rino. Created a complete Figma prototype focusing on user flow clarity, aesthetics, and brand consistency. Innovation: AI Chatbot, FYP Discovery page, Store Stock Finder. The team Design Mavericks, which 2 of the team members are Shahril and Zulhilmi Won 3rd place for creativity, usability, and design execution.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    year: 2024,
    videoUrl: 'https://youtu.be/xMMR9Ys5Jps?si=XQl5uGnIu-uoYVOf',
  },
  {
    id: 'finpocket',
    title: 'Finpocket',
    tagline: 'Financial literacy for children',
    category: 'Web',
    thumbnail: '',
    description: 'Created Finpocket, a financial literacy tool designed specifically for children, helping them learn basic money management through simple, interactive features. The Built during the National Fintech Codeathon 2022, the project focused on making financial education fun, accessible, and age-appropriate. Our team, Mr. Biceps, which 2 of the team members are Shahril and Zulhilmi, won the Best Teamwork Award for strong collaboration, clear communication, and effective problem-solving under time pressure.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['React', 'Node.js', 'Firebase'],
    year: 2022,
    videoUrl: 'https://youtu.be/CvZNXFlvzko',
    githubUrl: 'https://github.com/shahril2206/finpocket',
  },
  {
    id: 'lettuboost',
    title: 'Lettuboost',
    tagline: 'Sustainability innovation website',
    category: 'Landing',
    thumbnail: lettuboostThumbnail,
    description: 'Designed and built the Lettuboost website to clearly communicate a sustainable agri‑tech solution that turns invasive water lettuce into selenium‑enriched fish feed. The page distills the problem, highlights benefits like lower feed costs and improved fish growth, and reinforces the circular‑economy story with clean visual hierarchy and focused copy. The result is a credible, competition‑ready digital presence that supports outreach to judges, partners, and the public.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['Canva Pro'],
    year: 2025,
    videoUrl: '',
    liveUrl: 'https://lettuboost.com',
    images: [lettuboostImage1,lettuboostImage2,lettuboostImage3, lettuboostImage4]
  },
  {
    id: 'textgenes',
    title: 'TextGenes',
    tagline: 'AI-powered Summarizer',
    category: 'Software Systems',
    thumbnail: textgenesThumbnail,
    description: 'TextGenes is an AI-powered study assistant designed to help students efficiently navigate and understand large volumes of textbook content. The system allows users to upload PDF textbooks and ask questions directly about the content. Using AI-based text processing, TextGenes summarizes lengthy materials into concise, relevant insights and provides direct answers to students’ questions. The project addresses a common problem among students: inefficient study sessions and difficulty identifying key concepts in traditional textbooks. By offering personalized, on-demand explanations, TextGenes improves learning efficiency, reduces cognitive overload, and supports a more focused study experience.',
    problem: '',
    solution: '',
    result: '',
    technologies: ['Python', 'OpenAI API', 'LangChain', 'NumPy', 'PyMuPDF', 'Streamlit'],
    year: 2025,
    images: [textgenesImage]
  },
];

export const featuredProjects = projects.slice(0, 3);
