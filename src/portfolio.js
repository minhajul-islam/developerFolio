/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Minhajul Islam",
    title: "Hi all, I'm minhaj",
    subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Mobile applications with React Native / Flutter / Native android and some other cool libraries and frameworks."),
    resumeLink: "https://drive.google.com/file/d/1iE7V9DLl3y3gSF6CK1hJghyTSWFQndWL/view?usp=sharing"
};

// Your Social Media Link by minhajul

const socialMediaLinks = {

    github: "https://github.com/minhajul-islam",
    linkedin: "https://www.linkedin.com/in/md-minhajul-islam-479890131/",
    gmail: "minhajul.sust@gmail.com",
    gitlab: "https://github.com/minhajul-islam",
    facebook: "https://www.facebook.com/minhaj.ul.37"
    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "What i do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [

        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "swift",
            fontAwesomeClassname: "fab fa-swift"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "Android",
            fontAwesomeClassname: "fab fa-android"
        },
        {
            skillName: "Flutter",
            fontAwesomeClassname: "fab fa-dart"
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "React Native",  //Insert stack or technology you have experience in
            progressPercentage: "90%"  //Insert relative proficiency in percentage
        },
        {
            Stack: "Flutter",
            progressPercentage: "70%"
        },
        {
            Stack: "Android",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Software Engineer",
            company: "TechHive",
            companylogo: require("./assets/images/eduhive.png"),
            date: "March 2020 – Present",
            desc: "EduHive is Bangladesh's leading E-learning platform where students can choose from multiple options and take full courses of renowned coaching centers & teachers. Courses include interactive video lectures and online mock tests.",
            // descBullets: [
            //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            // ]
        },
        {
            role: "Software Engineer",
            company: "TopUp",
            companylogo: require("./assets/images/topup.jpg"),
            date: "February 2019 – February 2020",
            desc: "TopUp App more than recharge.A smooth Processing with some best feature, fast performance and instant recharge with cashback, safe and protected every card Transaction.A secure SSL end to end encryption system to protect your balance, So be tension free and enjoy recharge with a tap."
        },
        {
            role: "Software Engineer",
            company: "DakterBari",
            companylogo: require("./assets/images/dakterbari.png"),
            date: "October 2017 – January 2019",
            desc: "DakterBari is health consultant app where patients can consult with doctor over the video call.Doctor can easily communicate with patients from ruler area ",

        },
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
//TODO
const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "minhajul-islam", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [

        {
            image: "https://scontent.fdac25-1.fna.fbcdn.net/v/t1.15752-9/102832574_951804175278998_5151259304822665302_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_eui2=AeHqUrb0OSshVqJimmOL_wvxP49jF7-whOM_j2MXv7CE42Xn_OT57hbqCpDrtUxff1qq4i9edpUdY8Mo2J_8MFUq&_nc_ohc=YglbEZVzLcEAX9cfRUK&_nc_ht=scontent.fdac25-1.fna&oh=10c5b4da57be212135842998cd84cb8f&oe=5F090C66",
            link: "https://play.google.com/store/apps/details?id=com.mlipa.kwikpay&hl=ky"
        },
        {
            image: "https://1.bp.blogspot.com/-otVqybk47-E/XhSZP711VcI/AAAAAAAACVE/Xuc0jHYLny8xnV0F_pOo03wSxGYRE-HegCLcBGAsYHQ/s640/eduhive%2Bscholarship.png",
            link: "https://eduhive.com.bd/"
        },
        {
            image: "https://topup.co/wp-content/uploads/2019/03/TopUp-Logo.jpg",
            link: "https://topup.co/"
        },

        {
            image: "https://scontent.fdac25-1.fna.fbcdn.net/v/t1.15752-9/102740333_298230294691876_3427222830724499774_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_eui2=AeH9EjT1LOALrRiAG8faqG5qGnoMKrenFAQaegwqt6cUBMICWB7IeYkvQSfyVaSUewGKb_jjO1XeY5DV5w9ObDdo&_nc_ohc=5YXQM3D-wIQAX888x4p&_nc_ht=scontent.fdac25-1.fna&oh=92e2bdf2613bd9a6784a125f45739350&oe=5F0A51F2",
            link: "https://play.google.com/store/apps/details?id=com.equityapp"
        },

    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achivementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image:
                "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
            footerLink: [{
                name: "View Google Assistant Action",
                url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
            }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: "https://scontent.fdac25-1.fna.fbcdn.net/v/t1.15752-9/104298374_3072205949535801_3127220028333452807_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_eui2=AeGNqYiUg-msz487eeq7Txz0WlTE6QEM-WlaVMTpAQz5aVzY2Ytk6_gAlFPaMpVaUyvto3M4dzf5wRPY7sX3089u&_nc_ohc=AJ",
            footerLink: [
                {name: "Certification", url: ""},
                {name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/"}
            ]
        }
    ]
};

// Blogs Section

const blogSection = {

    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ]
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/",
            image:
                "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
        }
    ]
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

//Completed by minhajul
const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+8801515272948",
    email_address: "minhajul.sust@gmail.com"
};

//Twitter Section

const twitterDetails = {

    userName: "twitter"//Replace "twitter" with your twitter username without @

};
export {
    greeting,
    socialMediaLinks,
    skillsSection,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};
