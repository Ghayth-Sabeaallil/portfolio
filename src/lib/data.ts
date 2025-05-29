import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WebIcon from '@mui/icons-material/Web';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import LanguageIcon from '@mui/icons-material/Language';

export const data = [{ title: "EMAIL", data: "ghaessesa58@gmail.com", icon: EmailIcon },
{ title: "PHONE", data: "+46 720 464 311", icon: CallIcon },
{ title: "LANGUAGES", data: "English, Swedish, Arabic", icon: LanguageIcon },
{ title: "ADDRESS", data: "Linnégatan 3D, 533 30 Götene", icon: MapIcon }]

export const tabs = [{ label: "about", icon: InfoIcon },
{ label: "education", icon: SchoolIcon },
{ label: "experiences", icon: WorkIcon },
{ label: "skills", icon: SquareFootIcon },
{ label: "projects", icon: AccountTreeIcon },
]

export const cards = [{ title: "Web Design", description: "Cutting-edge, high-quality design.", icon: ArchitectureIcon },
{ title: "Web Development", description: "High-quality web development.", icon: WebIcon }, { title: "Mobile Apps", description: "Professional, high-quality app development.", icon: PhoneAndroidIcon },
]

export const education = [
    { name: "Borås Yrkehögskola", description: "FrontEnd Developer - React", date: "2023 - 2025", img: "yhs" },
    { name: "Linneuniversitetet Växjö", description: "Network Security (Java1 and Java2).", date: "2019 - 2020", img: "linn" },
    { name: "Axevalla Fölkhögskola", description: "Linux, Servering, C++ and Networking.", date: "2018 - 2019", img: "axv" },
    { name: "Campus Lidköping", description: "Swedish 3, English 6 and Math 3C.", date: "2017 - 2018", img: "campus" },
    {
        name: "High School", description: "Completed high school education in Mersin, Turkey, with a focus on academic development and personal growth.", date: "2013 - 2015"
    },
    { name: "Elementary School", description: "Completed elementary education in Latakia, Syria, developing a strong foundation in reading, writing, and mathematics.", date: "2004 - 2012" },
]

export const experiences = [
    { name: "Ekelund Styr AB (Internship) - Borås", description: "FrontEnd Developer React, Borås (.env, TS, Mui, React, Azure, DevOps)", date: "Jan 2025 - Maj 2025", img: "eke" },
    { name: "Luday AB (Internship)- Online", description: "Fullstack Developer Online (.env, TS, Tailwind, React, Docker).", date: "Aug 2024 - Des 2024", img: "luday" },
    { name: "Arla Foods - Götene", description: "Maskinoperatör - Ostförpackning.", date: "2020 - Now", img: "arla" },
]

export const languages = ["html5", "javascript", "typescript", "java"]
export const db = ["mysql", "mongodb"]
export const style = ["css3", "sass", "tailwindcss"]
export const tools = ["github", "figma", "git", "intellij", "vscode", "trello", "docker", "vim", "vitejs"]
export const frameworks = ["nextjs", "react"]
export const os = ["ubuntu", "windows11"]
