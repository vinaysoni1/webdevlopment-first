const toggle = document.getElementById('menu-toggle');
if (toggle) {
    toggle.addEventListener('changed', () => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    })
}

const word = ["WebDevLoper", "JavaDevLoper", "ProblemSolver", "an Aspiring Software Engineer"];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isTypingDelay = 100;
let erasigndelay = 100;
let nextWorddelay = 1000;


const type = () => {
    const currentWord = word[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;


        if (charIndex == currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWorddelay);
        } else {
            setTimeout(type, isTypingDelay);
        }
    }
    else {
        typingText.textContent = currentWord.substring(0, charIndex - 1)
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % word.length;
            setTimeout(type, 500);

        }
        else {
            setTimeout(type, erasigndelay);
        }
    }
};
document.addEventListener("DOMContentLoaded", () => {
    if (word.length) type();
});



const navlink = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        link.classList.add("active");


        navlink.forEach((l) => {
            if (l == link) {
                l.classList.add("active");

            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;
        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active")
            } else {
                tab.classList.remove("active")
            }
        })
        if (tabName === "services") {
            const serviceList = [{
                id: 1,
                icon: "ph-code",
                text: "Website Development",
                para: "I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and...",

            },
            {
                id: 2,
                icon: "ph-paint-brush",
                text: "UX/UI Design",
                para: "Custom mobile apps for Android and iOS using React Native and Expo, designed to provide excellent UI/UX...",
            },
            {
                id: 3,
                icon: "ph-trend-up",
                text: "SEO Optimization",
                para: "I improve website visibility on search engines with optimized structure, keywords, and performance best...",
            },
            {
                id: 4,
                icon: "ph-palette",
                text: "Graphic Design",
                para: "Offering expert advice and solutions for tech projects, helping individuals and startups with project planning and...",
            },
            {
                id: 5,
                icon: "ph-video",
                text: "Mentorship & Training",
                para: "Personal mentorship for beginners to advanced learners in web development, including live coding sessions and...",
            },
            {
                id: 6,
                icon: "",
                text: "Photography",
                para: "nd-to-end delivery of freelance projects — from planning to deployment — with quality assurance and post-...",
            },
            ];

            const services = document.getElementsByClassName("service-list")

            // const innercontent = serviceList.map(() => {
            //     return `
            //    <div>Inner box</div>
            //     `;
            // });
            // Array.from(services).forEach((ele) => {
            //     ele.innerHTML = innercontent;
            // })
        }

    })

});