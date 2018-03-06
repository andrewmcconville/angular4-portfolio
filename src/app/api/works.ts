import { IWork } from '../work/work.model';

export const works: Array<IWork> = [
    // {
    //     name: "Scaling a Consistent User Experience",
    //     description: "CSS at Scale.",
    //     introduction: "CSS at Scale.",
    //     date: '2017-10-12T18:00:00-05:00',
    //     url: "css-at-scale",
    //     backgroundBlur: "2017/10/css-at-scale",
    //     sections: [
    //     ]
    // },
    // {
    //     name: "Standing Desk",
    //     description: "Standing Desk.",
    //     introduction: "Standing Desk.",
    //     date: '2017-06-12T18:00:00-05:00',
    //     url: "standing-desk",
    //     backgroundBlur: "2017/06/standing-desk",
    //     sections: [
    //     ]
    // },
    {
        name: "Stack Overflow User Research",
        description: "Understanding the goals and motivations of Stack Overflow users.",
        introduction: "I started conducting user research with Stack Overflow in 2017 for my Graduate Certificate in User Experience at the University of Wisconsin-Madison. The project involved feedback and mentorship from Stack Overflow’s product and user research team. The research included defining business goals, interviewing users, building personas and identifying areas of product improvement. The final artifact of my research is a twenty four page report summarizing my research.",
        date: '2017-12-19T20:00:00-05:00',
        url: "stack-overflow-user-research",
        link: "https://andrewmcconville.com/stack-overflow-user-research-final-report-andrew-mcconville.pdf",
        backgroundBlur: "2017/12/stack-overflow-user-research",
        sections: [
            {
                name: "Defining Business Goals",
                content: [
                    "Stack Overflow’s greatest strength is offering free access to questions and answers from the world’s greatest technical talent. This has lead Stack to opportunities in developer marketing, technical recruiting, market research, and enterprise knowledge sharing.",
                    "Several months were spent understanding Stack Overflow as a business and how thier business model aligns with customers, competitors, stakeholders, and partners. This involved preforming a competitive analysis, comparing Stack Overflow against platforms such as Quora, and conducting SWOT, PEST and Five Forces analysis to gain an understanding of how Stack Overflow's goals align with the company's direction."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-goals.jpg",
                    caption: "Summary of business goals, product value and industry conditions based on SWOT, PEST, Five Forces and competitive analysis.",
                    height: 580,
                    shadow: true
                }
            },
            {
                name: "User Interviews and Data",
                content: [
                    "After researching the business side of Stack Overflow it was time to take a deep dive into Stack's users. To my surprise the interviewing itself was the easy part, but coming up with great questions proved to be difficult and I found myself reworking my questions after each interview.",
                    "Gaining access to user data was quite easy as Stack Overflow open sources all of it's users data to the public. Stack Overflow also conducts user surveys which thousands of developers participate in."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-interviews.jpg",
                    caption: "Brief overview of data collected from user interviews along side statistics from Stack Overflow's Developer Survey.",
                    height: 386,
                    shadow: true
                }
            },
            {
                name: "Task Analysis",
                content: [
                    "When interacting with users I found the task analysis to offer the most revealing insights into both the product and the user. Watching a person's interactions with a product, device or object, especially without distracting them, allows for a very honest collection of data. What a person tells you in an interview or survey and how they actually use a product can be very different."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-task-analysis.jpg",
                    caption: "Minimalist infographic format for task analysis listing each step a users takes in their interaction with a Stack Overflow feature.",
                    height: 580,
                    shadow: true
                }
            },
            {
                name: "Personas",
                content: [
                    "After just a few interviews three distinct personas began to form. First is the user that lurks on Stack Overflow using it to look up answers to questions past users have posted, this is a majority of users to the site. Then there is the user who dabbles in posting both questions and answers, usually in their down time at work or school, but doesn't often make a habit of it. And lastly, the rockstar who rarely asks questions but spends a large amount of time answering as many questions as they can to collect as many reputation points as they can."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-personas.jpg",
                    caption: "Three personas featuring personal backgrounds along with Stack Overflow product and experience goals. Sidebar contains persona photo, quote and Stack Overflow users stats.",
                    height: 386,
                    shadow: true
                }
            },
            {
                name: "Identifying Areas of Improvement",
                content: [
                    "As much as programmers love Stack Overflow, most users never actively participate with the Stack Overflow community, for them, Stack Overflow is a bank of answers to their programming questions. Of the 8 million users who have registered, only 23.1% have asked more than one question and only 1.6% have asked more than five questions.",
                    "But why?",
                    "Many users feel there are no more questions left to ask and that anything you would ever want to know is already on Stack Overflow.",
                    "And more concerning...",
                    "Stack Overflow’s reputation and permission system fosters a site environment that can sometimes feel unwelcoming to new and/or low-reputation users."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-improvement.jpg",
                    caption: "A deeper look at Stack Overflow user participation and why participation is important.",
                    height: 580,
                    shadow: true
                }
            },
            {
                name: "The Happy Path",
                content: [
                    "Assuming technology can solve all of our problems and where it fails we can use magic, the happy path takes our users from problem to solution without the messy implementation details.",
                    "It's important to keep in mind users engage with Stack Overflow in different ways, to different degrees and with different product offerings. The goal of this project going forward would be to make the process of asking a question on Stack Overflow easier, more transparent and less intimidating."
                ]
            },
            {
                name: "Journey Map",
                content: [
                    "I constructed a journey map for my lurker persona, Amy, which represents every interaction she has leading up to, during, and after posting a question on Stack Overflow. Mapping her experiences and pain points along with areas for improvement at such high detail allows for visibility into the moments where she might abandon her task. This opens the possibility of addressing each issue independently of the others while keeping context within her overall goal."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-journey-map.jpg",
                    caption: "Journey map of user activities inside and outside of Stack Overflow. Includes users's activities upon arriving at work, completing work-related tasks and interactions with Stack Overflow.",
                    height: 1500,
                    shadow: true
                }
            },
            {
                name: "Scenarios",
                content: [
                    "In preparing for ideation, sketching, wireframing and prototyping a few happy path user scenarios were brainstormed around the pain points discovered during user research. These are, prompting existing Stack Overflow users to post a question upon successive page loads of similar posts and creating a different question posting process for those asking a question for the first time."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-scenarios.jpg",
                    caption: "User scenarios describing happy path interactions with Stack Overflow and how they relate back to business goals.",
                    height: 386,
                    shadow: true
                }
            },
            {
                name: "Next Steps",
                content: [
                    "Stack Overflow's questions and answers are a major driver of traffic to the site and user interviews have shown that Q&A is by far the leading feature users interact with on Stack Overflow. Without new questions, traffic doesn’t grow. As new programming languages and techniques come about developers are going to continue to need help learning them. Getting that content on Stack Overflow starts with users posting new questions. Every user experience on Stack must align itself with knowledge gained as the end result.",
                    "Up next for the project will be ideation, sketching, wireframing and prototyping around a solution that encourages new users to post questions on Stack Overflow.",
                    "The full report summarizing my research can be downloaded in pdf."
                ]
            }
        ]
    },
    {
        name: "Animating Interactions and UI State",
        description: "Interaction prototype using Angular Animate with CSS transitions.",
        introduction: "Transitioning interface components between simple and detailed or collapsed and expanded states is an opportunity to add meaningful animation to an interface. This prototype is built using the AngularJS framework and the ngAnimate module paired with CSS transition to create smooth 60fps animations on desktop and mobile devices.",
        date: '2015-03-31T18:00:00-05:00',
        url: "stack-overflow-angular-animate",
        link: "https://andrewmcconville.com/acculynx/stackoverflow",
        backgroundBlur: "2015/03/stack-overflow-angular-animate",
        sections: [
            {
                name: "Transitioning Between Simple and Detailed Views",
                content: [
                    "The Stack Overflow question and answer API was used for its multiple data points. When browsing questions users are initially presented with just a few pieces of data, the question's title, how many answers it has and who posted the question. The goal is to present a user with much more information on screen when the question is selected while not taking them to an entirely new UI which would distract from being able to quickly browse the list of questions.",
                    "This was done by expanding the selected card using an animation so a user could follow where existing components were being moved to and where new information was being added. Animating between two states prevents users from having to relearn the new layout, saving time and reducing cognitive load."
                ],
                media: {
                    src: "2015/03/stack-overflow-angular-animate-expand.mp4",
                    type: "video",
                    caption: "Stack Overflow question card transitioning from simple to detailed state.",
                    height: 900
                }
            },
            {
                name: "Graceful Popup",
                content: [
                    "Another interaction design pattern is the classic popup, here it's used to show additional user data. Instead of a traditional, fullscreen UI blocking, modal window a small fly-out drops down from the top of the screen with enough animation to draw attention to its presence. By not blocking the underlying interface users can continue to browse the list and even open additional user detail modals without having to close existing modals."
                ],
                media: {
                    src: "2015/03/stack-overflow-angular-animate-drop.mp4",
                    type: "video",
                    caption: "Stack Overflow user card sliding into view.",
                    height: 900
                }
            }
        ]
    },
    {
        name: "1000 Books Information Architecture",
        description: "Information architecture, color, and interface design.",
        introduction: "The 1000 Books Before Kindergarten program is organized by the Waukesha County Federated Library System. The program encourages parents to read to their children and upon successful milestone completion children are awarded prizes. The app will help parents and local libraries track and maintain milestone progress and while keeping parents up to date on local library news and events.",
        date: '2013-10-11T18:00:00-05:00',
        url: "1000-books-kindergarten",
        backgroundBlur: "2013/11/1000-books-kindergarten",
        sections: [
            {
                name: "",
                content: [],
                media: {
                    src: "2013/11/1000-books-before-kindergarten-app.jpg",
                    caption: "1000 Books Before Kindergarten startup screen.",
                    height: 500
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/11/1000-books-before-kindergarten-state-map.jpg",
                    caption: "Information architecture, overview of app beta progress.",
                    height: 380
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/11/1000-books-before-kindergarten-readers.jpg",
                    caption: "Readers selection and milestone overview. As milestones are met the app is brought to the readers local library for prizes.",
                    height: 500
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/11/1000-books-before-kindergarten-home-and-account.jpg",
                    caption: "Home page featuring library news feed. Account screen utilizes direct barcode scanning interaction.",
                    height: 500
                }
            }
        ]
    },
    {
        name: "UWM Mobile Prototype",
        description: "Designed UI, UX and interactions along with in app prototyping.",
        introduction: "I was given the task of completely redesigning the UWM Mobile app and decided to create a highly interactive experience. The home screen presents users with fresh data relevant to campus life. Where the previous version relied on text, the new version adds graphics and icons allowing users to quickly glean information while hastily rushing to class.",
        date: '2013-09-23T20:07:54-05:00',
        url: "uwm-mobile",
        backgroundBlur: "2013/10/uwm-mobile",
        sections: [
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/uwm-mobile-app.jpg",
                    caption: "UI, UX and interactions designed from the ground up. Programmed several interaction prototypes in app for testing across multiple mobile platforms.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/home-screen-menu.gif",
                    caption: "Pseudo parallax home screen user interface. The static photo changes based on the users location, featuring various UWM landmarks.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/slide-menu.gif",
                    caption: "Side by Side of actual interaction and testing prototype. I designed a horizontal menu system, then programmed a demo of it for iOS and Android.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/shuttle-bus-status.jpg",
                    caption: "UWM shuttle status",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/laundry-status.jpg",
                    caption: "Prototyping possible display output of laundry services across campus.",
                    height: 1000
                }
            }
        ],
    },
    {
        name: "DK Handbook",
        description: "College level English-102 e-handbook for tablet.",
        introduction: "College level English-102 handbook in tablet format. Featuring highly interactive content and games.",
        date: '2013-05-28T19:00:00-05:00',
        url: "dk-handbook",
        link: "http://dkmodules.andrewmcconville.com/",
        backgroundBlur: "2013/05/dk-handbook",
        sections: [
            {
                name: "",
                content: [],
                media: {
                    src: "2013/05/dk-handbook-revision.jpg",
                    caption: "DK Handbook Revision module. Students see two sets of thumbnails which illustrate the changes from draft to revised draft. Clicking a page thumbnail displays the paper full size (shown).",
                    height: 1174
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/05/dk-handbook-kinds-of-sources.jpg",
                    caption: "DK Handbook Kinds of Sources module. Students click on various sources (web, book, magazine) to reveal information distinguishing the differences between various kinds of sources.",
                    height: 1174
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/05/dk-handbook-evaluating-sources.jpg",
                    caption: "DK Handbook Evaluating Sources module. Students drag sources which then become MLA formatted citations. After citation building is complete a teacher assess your choices via HTML Audio.",
                    height: 1174
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/05/dk-handbook-sample-papers.jpg",
                    caption: "DK Handbook Sample Papers module. Students are presented with a research paper and sidebar with buttons that toggle writing features (introduction, transitions, conclusion). Each feature can then be clicked to read notes describing the highlighted area.",
                    height: 1174
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/05/dk-handbook.jpg",
                    caption: "The handbook modules are part of a larger, interactive version of the book currently under development.",
                    height: 1174
                }
            }
        ]
    },
    {
        name: "Mesmer",
        description: "Interactive, drag and drop, web-app providing students real-time data manipulation.",
        introduction: "Interactive, drag and drop, web-app that assists students and academic advisers with course planning and meeting degree requirements.",
        date: '2012-09-27T18:21:30-05:00',
        url: "mesmer-interactive-degree-builder",
        link: "http://mesmer.ly",
        backgroundBlur: "2012/09/mesmer",
        sections: [
            {
                name: "",
                content: [],
                media: {
                    src: "2012/09/mesmer-ipad.png",
                    caption: "Mesmer Interactive Degree Builder iPad interface",
                    height: 846
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2012/09/mesmer-sidebar.png",
                    caption: "Slide out sidebar containing the university course catalog. Departments and courses are quickly searchable via filtering search field.",
                    height: 846
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2012/09/mesmer-progress.png",
                    caption: "Slide down menu revels detail progress view.",
                    height: 846
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2012/09/brand-book-cover.jpg",
                    caption: "Mesmer brand book cover. Featuring logo design, color inspiration, branding and user interface screenshots.",
                    height: 1020
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2012/09/mesmer-is-an-aerial-view.jpg",
                    caption: "Mesmer is an aerial view. Every project needs a road map. Visualizing complex systems requires an elegant and intuitive user interface.",
                    height: 510
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2012/09/mesmer-is-finely-tuned-precision.jpg",
                    caption: "Mesmer is finely tuned precision. Intuitively organizing and beautifully presented information systems with user friendly, interactive interfaces.",
                    height: 510
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2012/09/mesmer-focus-group.jpg",
                    caption: "Focus groups, personas, beta testers and general review by students and faculty helped refine ease of use and feature set.",
                    height: 510
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2012/09/mesmer-is-your-personal-guide.jpg",
                    caption: "Mesmer is your personal guide. Transforming project management into a visual, interactive experience by connecting people and data across time.",
                    height: 510
                }
            }
        ]
    },
    {
        name: "Mesmer User Research",
        description: "Information gathering on the viability and need for interactive degree tracking software.",
        introduction: "Degree planning has yet to be modernized and is still largely done with pen and paper. Many students even choose to rely solely on what their advisers recommend, which can vary widely given that more than 75% of students will have multiple advisers over the course of their education. The data gathered in this infographic was used to determine the need for a degree planning web app and if students has access to the technology required to use the app.",
        date: '2012-09-24T19:31:37-05:00',
        url: "mesmer-infographic",
        backgroundBlur: "2013/10/mesmer-infographic",
        sections: [
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/mesmer-infographic.jpg",
                    caption: "The information in this infographic was compiled from a student survey I conducted with over 250 participants. The information was used to gauge the need of an interactive degree planning web app",
                    height: 3200
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/mesmer-degree-planning-software.jpg",
                    caption: "About one third of students use UWM’s PAWS software to plan their degree, but the software is not kept up to date and the interface often confuses students. This results in students taking courses that don’t count toward their degree, delaying graduation.",
                    height: 751
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/mesmer-advisor.jpg",
                    caption: "Only about two thirds of students meet with their advisers on a regular basis.",
                    height: 750
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2013/10/mesmer-technology.jpg",
                    caption: "Not surprisingly, students own, a wide variety of technology. Most own a laptop and a smart phone or tablet.",
                    height: 750
                }
            }
        ]
    },
    {
        name: "Energy Life Cycle of Coal Research",
        description: "Visualizing the movement and consumption of coal reserves.",
        introduction: "The Great Lakes infographic highlights the lifecycle of coal, from extraction to use, and the dependency of the Great Lakes states on Wyoming coal. The map of Wyoming and the Great Lakes connected by railways creates a narrative of process and shows dependency from one region to another. Color is used heavily to unite spatially diffused data objects; connecting, for example, red colored power plant locations on the map to red data relating to power production.",
        date: '2011-12-21T11:34:06-05:00',
        url: "energy-life-cycle-of-coal-infographic",
        backgroundBlur: "2011/12/great-lakes-infographic",
        sections: [
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/great-lakes-infographic.png",
                    caption: "Infographic on Great Lakes coal energy use.",
                    height: 844
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/great-lakes-infographic-powder-river-basin.png",
                    caption: "Coal life-cycle shown as 4 step narrative.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/great-lakes-infographic-coal-sources.png",
                    caption: "Wyoming's Powder River Basin leads coal extraction in U.S.",
                    height: 800
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/great-lakes-infographic-electricity-from-coal.png",
                    caption: "Circular bar graph showing Indiana as top Great Lake coal user.",
                    height: 800
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/great-lakes-infographic-food-carbon.png",
                    caption: "Food groups with highest carbon footprint.",
                    height: 800
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/great-lakes-infographic-city-data.png",
                    caption: "Data featuring energy use by metropolitan area.",
                    height: 1000
                }
            }
        ]
    },
    {
        name: "Demographics Supersized Research",
        description: "City demographics in Milwaukee vs McDonald’s spatial density.",
        introduction: "Demographics supersized is an infographic comparing the income, education, unemployment and crime rates of the cities in Milwaukee county along side the geographical locations of McDonald’s restaurants.",
        date: '2011-06-25T12:58:36-05:00',
        url: "demographics-supersized-infographic",
        backgroundBlur: "2011/12/demographics-supersized-infographic",
        sections: [
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/demographics-supersized-infographic.png",
                    caption: "Demographics supersized infographic overview.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/demographics-supersized-infographic-graphs.png",
                    caption: "City demographics as bar graph placed side by side for fast comparison.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/demographics-supersized-infographic-city-data.png",
                    caption: "McDonald's locations compared to Milwaukee county city demographics.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/demographics-supersized-infographic-national-state.png",
                    caption: "U.S. and Wisconsin demographic comparison.",
                    height: 1000
                }
            }
        ]
    },
    {
        name: "Water Cooled Wood Computer",
        description: "Crafting a silent computing experience.",
        introduction: "The quest for processing speed and complete silence lead to the building of a wood computer case with water cooled internal components. The oak case was built over a six week period to house the components necessary for water cooling the video card, chipset and processor. Two radiators, equipped with dual 120mm fans, cool the water along with four passively cooled, aluminum reservoirs. Wood was chosen for the computer case because it is much easier to work with when compared to metal and has the benefit of deadening the noise by the fans inside.",
        date: '2009-05-06T18:00:00-05:00',
        url: "water-cooled-wood-computer",
        backgroundBlur: "2011/12/water-cooled-wood-computer",
        sections: [
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/wood-computer-front-sides-on.jpg",
                    caption: "Water cooled wood computer front and left sides with doors on.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/wood-computer-front-sides-off.jpg",
                    caption: "Wood computer front left with sides off showing water cooled interior.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/wood-computer-rear-sides-off.jpg",
                    caption: "Wood computer rear right with sides off showing radiator and reservoir.",
                    height: 1000
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/wood-computer-inside.jpg",
                    caption: "Motherboard and other primary water cooled components.",
                    height: 400
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/wood-computer-cpu-gpu.jpg",
                    caption: "Water cooled video card, chipset and processor close-up.",
                    height: 400
                }
            },
            {
                name: "",
                content: [],
                media: {
                    src: "2011/12/wood-computer-lights.jpg",
                    caption: "Water cooled video card, chipset and processor with lighting active.",
                    height: 490
                }
            }
        ]
    },
    // {
    //     name: "Personal Timeline",
    //     description: "Income and expense vs hours worked and credits enrolled.",
    //     introduction: "The Personal Timeline infographic displays income and employment along side expenses and enrolled college credits. Narrative and metaphor created with plant imagery were used to convey a sense of time and growth.",
    //     date: '2011-06-18T12:17:41-05:00',
    //     url: "personal-timeline-infographic",
    //     backgroundBlur: "2011/12/personal-timeline",
    //     sections: [
    //         {
    //             src: "2011/12/personal-timeline.png",
    //             caption: "13 year snapshot of work and school with imagery on left building metaphoric narrative.",
    //             height: 2318
    //         },
    //         {
    //             src: "2011/12/personal-timeline-scale.png",
    //             caption: "Scale, top showing estimated yearly expenses and semester credit hours enrolled at a given month.",
    //             height: 1000
    //         },
    //         {
    //             src: "2011/12/personal-timeline-key.png",
    //             caption: "Graph key resembling a planted pot.",
    //             height: 1000
    //         }
    //     ]
    // },
];
