import { faDisplay , faGear , faScrewdriverWrench , faUser} from "@fortawesome/free-solid-svg-icons";

export const SKILLS = [
    {
        title : "Technologies",
        icon : faDisplay,
        skills : [
            { skill : "HTML 5" , percentage : "90%"},
            { skill : "CSS 3" , percentage : "90%"},
            { skill : "Javascript" , percentage : "85%"},
        ]
    },
    {
        title : "Frameworks",
        icon : faGear,
        skills : [
            { skill : "React JS" , percentage : "80%"},
            { skill : "Tailwind CSS" , percentage : "90%"},
            
        ]
    },
    {
        title : "Tools",
        icon : faScrewdriverWrench,
        skills : [
            { skill : "Git" , percentage : "80%"},
            { skill : "Github" , percentage : "90%"},
        ]
    },
    {
        title : "Soft Skills",
        icon : faUser,
        skills : [
            { skill : "Problem Solving" , percentage : "80%"},
            { skill : "Time Management" , percentage : "90%"},
            { skill : "Creativity" , percentage : "90%"},
            { skill : "Collaboration" , percentage : "85%"},
        ],
    },

];