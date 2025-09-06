// src/data/skillData.js
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import TerminalIcon from "@mui/icons-material/Terminal";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import ConstructionIcon from "@mui/icons-material/Construction";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SecurityIcon from "@mui/icons-material/Security";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export const skillData = [
    // FRONTEND
    {
        name: "HTML",
        level: 98,
        color: "#e44d26",
        icon: <HtmlIcon sx={{ fontSize: 100, color: "#e44d26", opacity: 0.4 }} />,
        category: "Frontend",
        description: "Markup language for creating web pages.",
    },
    {
        name: "CSS",
        level: 98,
        color: "#1572B6",
        icon: <CssIcon sx={{ fontSize: 100, color: "#1572B6", opacity: 0.4 }} />,
        category: "Frontend",
        description: "Stylesheet language used for designing UI.",
    },
    {
        name: "JavaScript",
        level: 95,
        color: "#f7df1e",
        icon: <JavascriptIcon sx={{ fontSize: 100, color: "#f7df1e", opacity: 0.4 }} />,
        category: "Frontend",
        description: "Programming language for interactive websites.",
    },
    {
        name: "React.js",
        level: 95,
        color: "#61dafb",
        icon: <IntegrationInstructionsIcon sx={{ fontSize: 100, color: "#61dafb", opacity: 0.4 }} />,
        category: "Frontend",
        description: "JavaScript library for building user interfaces.",
    },

    // BACKEND
    {
        name: "Node.js",
        level: 90,
        color: "#68A063",
        icon: <TerminalIcon sx={{ fontSize: 100, color: "#68A063", opacity: 0.4 }} />,
        category: "Backend",
        description: "JavaScript runtime for server-side programming.",
    },
    {
        name: "Python",
        level: 90,
        color: "#3776AB",
        icon: <CodeIcon sx={{ fontSize: 100, color: "#3776AB", opacity: 0.4 }} />,
        category: "Backend",
        description: "High-level language for versatile applications.",
    },
    {
        name: "Docker",
        level: 85,
        color: "#0db7ed",
        icon: <CloudIcon sx={{ fontSize: 100, color: "#0db7ed", opacity: 0.4 }} />,
        category: "Backend",
        description: "Containerization platform for deploying applications.",
    },
    {
        name: "Kubernetes",
        level: 80,
        color: "#326ce5",
        icon: <SettingsIcon sx={{ fontSize: 100, color: "#326ce5", opacity: 0.4 }} />,
        category: "Backend",
        description: "System for automating deployment and scaling.",
    },
    {
        name: "Ansible",
        level: 75,
        color: "#EE0000",
        icon: <ConstructionIcon sx={{ fontSize: 100, color: "#EE0000", opacity: 0.4 }} />,
        category: "Backend",
        description: "IT automation and configuration management tool.",
    },
    {
        name: "Terraform",
        level: 80,
        color: "#623CE4",
        icon: <SyncAltIcon sx={{ fontSize: 100, color: "#623CE4", opacity: 0.4 }} />,
        category: "Backend",
        description: "Infrastructure as Code (IaC) tool.",
    },
    {
        name: "AWS",
        level: 85,
        color: "#FF9900",
        icon: <CloudIcon sx={{ fontSize: 100, color: "#FF9900", opacity: 0.4 }} />,
        category: "Backend",
        description: "Cloud computing platform from Amazon.",
    },
    {
        name: "Azure",
        level: 80,
        color: "#0089D6",
        icon: <CloudIcon sx={{ fontSize: 100, color: "#0089D6", opacity: 0.4 }} />,
        category: "Backend",
        description: "Microsoft cloud computing service.",
    },
    {
        name: "CI/CD",
        level: 85,
        color: "#00BFA6",
        icon: <SyncAltIcon sx={{ fontSize: 100, color: "#00BFA6", opacity: 0.4 }} />,
        category: "Backend",
        description: "Automated software delivery pipelines.",
    },

    // ANDERE
    {
        name: "Agile Softwareentwicklung",
        level: 95,
        color: "#42A5F5",
        icon: <DeveloperModeIcon sx={{ fontSize: 100, color: "#42A5F5", opacity: 0.4 }} />,
        category: "Andere",
        description: "Iterative method for software development.",
    },
    {
        name: "Systemadministration",
        level: 90,
        color: "#7E57C2",
        icon: <SecurityIcon sx={{ fontSize: 100, color: "#7E57C2", opacity: 0.4 }} />,
        category: "Andere",
        description: "Managing and maintaining systems and servers.",
    },
];
