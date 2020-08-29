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
    // {
    //     name: "Stack Overflow UX Design",
    //     description: "Ideate, Prototype, Test: Generating ideas and iterating quickly.",
    //     introduction: "This is a continuation of the UX work I have been conducting with Stack Overflow for my Graduate Certificate in User Experience at the University of Wisconsin-Madison. This report picks up where my user research stopped and walks through ideation, prototyping, and early usability testing. The final artifact of my UX design is a twenty three page summary outlining my design process.",
    //     date: '2018-05-09T13:35:00-05:00',
    //     url: "stack-overflow-ux-design",
    //     backgroundBlur: "2018/05/stack-overflow-ux-design",
    //     sections: [
    //         {
    //             name: "Defining the Scenario",
    //             content: [
    //                 ""
    //             ],
    //             media: {
    //                 src: "2018/05/stack-overflow-ux-design-scenario.jpg",
    //                 caption: "",
    //                 height: 580,
    //                 shadow: true
    //             }
    //         },
    //         {
    //             name: "Diverging & Converging Ideation",
    //             content: [
    //                 ""
    //             ],
    //             media: {
    //                 src: "2018/05/stack-overflow-ux-design-ideation.jpg",
    //                 caption: "",
    //                 height: 386,
    //                 shadow: true
    //             }
    //         },
    //         {
    //             name: "Lo-fi Prototyping",
    //             content: [
    //                 ""
    //             ],
    //             media: {
    //                 src: "2018/05/stack-overflow-ux-design-lo-fi-prototyping.jpg",
    //                 caption: "",
    //                 height: 290,
    //                 shadow: true
    //             }
    //         },
    //         {
    //             name: "Wireframing",
    //             content: [
    //                 ""
    //             ],
    //             media: {
    //                 src: "2018/05/stack-overflow-ux-design-wireframing.jpg",
    //                 caption: "",
    //                 height: 500,
    //                 shadow: true
    //             }
    //         },
    //         {
    //             name: "Vertical Slice",
    //             content: [
    //                 ""
    //             ],
    //             media: {
    //                 src: "2018/05/stack-overflow-ux-design-vertical-slice.jpg",
    //                 caption: "",
    //                 height: 580,
    //                 shadow: true
    //             }
    //         },
    //         {
    //             name: "Usability Testing",
    //             content: [
    //                 ""
    //             ],
    //             media: {
    //                 src: "2018/05/stack-overflow-ux-design-usability-testing.jpg",
    //                 caption: "",
    //                 height: 580,
    //                 shadow: true
    //             }
    //         },
    //         {
    //             name: "Quantitative & Qualitative Metrics",
    //             content: [
    //                 ""
    //             ],
    //             media: {
    //                 src: "2018/05/stack-overflow-ux-design-metrics.jpg",
    //                 caption: "",
    //                 height: 580,
    //                 shadow: true
    //             }
    //         }
    //     ]
    // },
    {
        name: "Stack Overflow",
        name2: "User Research",
        description: "Reducing points of tension within Stack Overflow's question and answer community.",
        date: '2018-05-09T13:35:00-05:00',
        role: "Product Designer",
        url: "stack-overflow-user-research",
        hero: "wp-content/uploads/2017/12/stack-overflow-ux-design-hero-2.png",
        gradient: "linear-gradient(165deg, #edf6fc 15%, #dad2f7 100%)",
        color: "#9a8fcc"
    },
    {
        name: "Q-Tip Grip",
        name2: "Universal Design",
        description: "Enhancing the safety and usability of the common cotton swab.",
        date: '2020-03-09T18:00:00-05:00',
        role: "Product Designer",
        url: "universal-design-q-tip-grip",
        hero: "wp-content/uploads/2020/03/universal-design-q-tip-grip-hero-2.jpg",
        gradient: "linear-gradient(15deg, #e9f2f3 10%, #f0d9ce 100%)",
        color: "#a3cacc"
    },
    {
        name: "AccuLynx",
        name2: "UX Engineering",
        description: "Building prototypes, managing interface components, and designing interactions.",
        date: '2019-04-13T18:00:00-05:00',
        role: "UX Engineer",
        url: "ux-engineering",
        hero: "wp-content/uploads/2019/04/ux-engineering-hero-2.png",
        gradient: "linear-gradient(165deg, #ffefdb 0%, #c2d6f2 100%)",
        color: "#8fabcc"
    },
    // {
    //     name: "Animating Micro-Interactions",
    //     description: "Interaction prototype using Angular Animate with CSS transitions.",
    //     introduction: "Transitioning interface components between simple and detailed, or collapsed and expanded, states is an opportunity to add meaningful animation to an interface. This prototype was built using the AngularJS framework and the ngAnimate module paired with CSS transition to create smooth 60fps animations on desktop and mobile devices.",
    //     date: '2015-03-31T18:00:00-05:00',
    //     url: "stack-overflow-angular-animate",
    //     link: "https://andrewmcconville.com/acculynx/stackoverflow",
    //     backgroundBlur: "2015/03/stack-overflow-angular-animate",
    //     sections: [
    //         {
    //             name: "Transitioning Between Simple and Detailed Views",
    //             content: [
    //                 "The Stack Overflow question and answer API was used for its multiple data points. When browsing questions users are initially presented with just a few pieces of data: the question's title, how many answers it has, and who posted the question. The goal is to present a user with much more information on screen when the question is selected while not taking them to an entirely new UI, which would distract from being able to quickly browse the list of questions.",
    //                 "This was done by expanding the selected card using an animation so that a user could follow where existing components were being moved to and where new information was being added. Animating between two states prevents users from having to relearn the new layout, there by saving time and reducing cognitive load."
    //             ],
    //             media: {
    //                 src: "2015/03/stack-overflow-angular-animate-expand.mp4",
    //                 type: "video",
    //                 caption: "Stack Overflow question card transitioning from simple to detailed state.",
    //                 height: 900
    //             }
    //         },
    //         {
    //             name: "Graceful Popup",
    //             content: [
    //                 "Another interaction design pattern is the classic popup; here it's used to show additional user data. Instead of a traditional fullscreen UI blocking modal window, a small fly-out drops down from the top of the screen with enough animation to draw attention to its presence. By not blocking the underlying interface, users can continue to browse the list and even open additional user detail modals without having to close existing modals."
    //             ],
    //             media: {
    //                 src: "2015/03/stack-overflow-angular-animate-drop.mp4",
    //                 type: "video",
    //                 caption: "Stack Overflow user card sliding into view.",
    //                 height: 900
    //             }
    //         }
    //     ]
    // },
    // {
    //     name: "1000 Books Before Kindergarten",
    //     description: "Information architecture for the 1000 Books Before Kindergarten program.",
    //     introduction: "The 1000 Books Before Kindergarten program is organized by the Waukesha County Federated Library System. The program encourages parents to read to their children and upon successful milestone completion children are awarded prizes at their local library branch. The app is designed to help parents and local libraries track and maintain milestone progress while keeping parents up to date on local library news and events.",
    //     date: '2013-10-11T18:00:00-05:00',
    //     url: "1000-books-kindergarten",
    //     link: "https://play.google.com/store/apps/details?id=org.wcfls.thousandbooks&hl=en",
    //     backgroundBlur: "2013/11/1000-books-kindergarten",
    //     sections: [
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2013/11/1000-books-before-kindergarten-app.jpg",
    //                 caption: "1000 Books Before Kindergarten phone app.",
    //                 height: 500
    //             }
    //         },
    //         {
    //             name: "Analog to Digital Translation",
    //             content: [
    //                 "The phone app is a translation from the library's existing paper based system to digital form. During stakeholder meetings, the shift from paper to digital was a learning experience for all involved; a paper system only allows for a loosely defined process for tracking books and user progress. Moving to a digital system required a well defined process of triggers, causes and effects, and milestones along with access to user data that a paper system can often work around."
    //             ],
    //             media: {
    //                 src: "2013/11/1000-books-before-kindergarten-state-map.jpg",
    //                 caption: "Information architecture, user workflow and interaction points.",
    //                 height: 380
    //             }
    //         },
    //         {
    //             name: "Keeping it simple",
    //             content: [
    //                 "The main goal was simplicity: the app could not feel like doing work. Keeping in mind that parents are busy and their children come first, the main focus was to encourage parents to read more. The app needed users to be able to quickly get in, log their progress, and get back out. This was achieved using a very flat navigation hierarchy where users wouldn't get lost drilling in and out of menus."
    //             ],
    //             media: {
    //                 src: "2013/11/1000-books-before-kindergarten-readers.jpg",
    //                 caption: "Readers selection and milestone overview. As milestones are met the app is brought to the readers local library for prizes.",
    //                 height: 500
    //             }
    //         },
    //         {
    //             name: "Ease of Use",
    //             content: [
    //                 "The Experience of quickly and easily adding new books was made possible with barcode scanning. Each piece of data for a book--author, title, and ISBN--are obtained by scanning the barcode on the back of the book. This reduced the work a user must perform when adding a book while also reducing errors from typos. Barcode scanning was also used to get users into the app quicker, allowing users to scan the barcode on a library card. This lowered the barrier of entry during the signup process."
    //             ],
    //             media: {
    //                 src: "2013/11/1000-books-before-kindergarten-home-and-account.jpg",
    //                 caption: "Home page featuring library news feed. Account screen utilizes direct barcode scanning interaction.",
    //                 height: 500
    //             }
    //         }
    //     ]
    // },
    // {
    //     name: "UWM Mobile App",
    //     description: "Prototyping interactions, information architecture and user experience.",
    //     introduction: "UW-Milwaukee was launching a completely new mobile app starting from a brand new code base and we wanted to include several new features such as live shuttle bus tracking, real-time status for laundry and computer availability, photo sharing of in-progress student work, and campus weather provided by UWM's Innovative Weather Center.",
    //     date: '2013-09-23T20:07:54-05:00',
    //     url: "uwm-mobile",
    //     link: "https://play.google.com/store/apps/details?id=edu.uwm.mobile&hl=en",
    //     backgroundBlur: "2013/10/uwm-mobile",
    //     sections: [
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2013/10/uwm-mobile-app.jpg",
    //                 caption: "UWM Mobile app.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "Chronological Data",
    //             content: [
    //                 "During user interviews many students reported using the mobile app immediately when they woke up and several more times through out the day. Knowing this, information on the home page is presented in the order a student would view it when starting their day."
    //             ],
    //             media: {
    //                 src: "2013/10/home-screen-menu.gif",
    //                 caption: "Pseudo parallax home screen user interface. The static photo changes based on the users location, featuring various UWM landmarks.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "Appcelerator's Titanium Cross-Platform Native API",
    //             content: [
    //                 "The new app is built using the Titanium SDK from Appcelerator which is essentially HTML, CSS and JavaScript. Due to the of the many firsts with the new app I wanted to make sure my interactions could actually be implemented, so I coded many of the layouts in Titanium as prototypes that would later make their way into the codebase."
    //             ],
    //             media: {
    //                 src: "2013/10/slide-menu.gif",
    //                 caption: "Side by Side of actual interaction and testing prototype. I designed a horizontal menu system, then programmed a demo of it for iOS and Android.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "Are we there yet?",
    //             content: [
    //                 "One of the more exciting and useful integrations the app has is with campus facilities. The University's shuttle bus fleet is equipped with GPS sensors; combining this data with campus maps, students can view in real time how far away the next shuttle is. With Wisconsin's cold winters this feature is a huge success."
    //             ],
    //             media: {
    //                 src: "2013/10/shuttle-bus-status.jpg",
    //                 caption: "UWM shuttle status",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "Real time everything",
    //             content: [
    //                 "The app is also able to show the availability of computers across campus, but a somewhat more popular feature is the status of individual laundry machines. Students can use the app to view the status of individual washers and dryers along with how much time is remaining for a unit's cycle."
    //             ],
    //             media: {
    //                 src: "2013/10/laundry-status.jpg",
    //                 caption: "Prototyping possible display output of laundry services across campus.",
    //                 height: 1000
    //             }
    //         }
    //     ],
    // },
    // {
    //     name: "DK Handbook Prototype",
    //     description: "Reimagining an English 102 textbook in digital form for tablets.",
    //     introduction: "The print edition of the DK Handbook is a college level English 102 textbook by Anne Frances Wysocki and‎ Dennis Lynch that combines text alongside visuals in easy-to-read two page spreads. Producing a digital version for tablets allowed for the use of animations, audio, video, and mini-games at a high level of interactivity.",
    //     date: '2013-05-28T19:00:00-05:00',
    //     url: "dk-handbook",
    //     link: "http://dkmodules.andrewmcconville.com/",
    //     backgroundBlur: "2013/05/dk-handbook",
    //     sections: [
    //         {
    //             name: "Metaphors, Make the Unfamiliar Familiar",
    //             content: [
    //                 "Editing and revising an english paper is a process that is much easier to show than to describe. Presenting users with a draft paper chunked onto pages depicted as visual sheets of paper gives users a contextual interface they are similar with."
    //             ],
    //             media: {
    //                 src: "2013/05/dk-handbook-revision.jpg",
    //                 caption: "DK Handbook Revision module. Students see two sets of thumbnails which illustrate the changes from draft to revised draft. Clicking a page thumbnail displays the paper full size (shown).",
    //                 height: 1174
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2013/05/dk-handbook-kinds-of-sources.jpg",
    //                 caption: "DK Handbook Kinds of Sources module. Students click on various sources (web, book, magazine) to reveal information distinguishing the differences between various kinds of sources.",
    //                 height: 1174
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2013/05/dk-handbook-evaluating-sources.jpg",
    //                 caption: "DK Handbook Evaluating Sources module. Students drag sources which then become MLA formatted citations. After citation building is complete a teacher assess your choices via HTML Audio.",
    //                 height: 1174
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2013/05/dk-handbook-sample-papers.jpg",
    //                 caption: "DK Handbook Sample Papers module. Students are presented with a research paper and sidebar with buttons that toggle writing features (introduction, transitions, conclusion). Each feature can then be clicked to read notes describing the highlighted area.",
    //                 height: 1174
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2013/05/dk-handbook.jpg",
    //                 caption: "The handbook modules are part of a larger, interactive version of the book currently under development.",
    //                 height: 1174
    //             }
    //         }
    //     ]
    // },
    // {
    //     name: "Mesmer Degree Planner",
    //     description: "Interactive, drag and drop, web-app providing students real-time data manipulation.",
    //     introduction: "Mesmer aims to help students visualize their degree progress by organizing courses within semesters and allowing students the ability to quickly rearrange courses, add hypothetical grades and graph credit count.",
    //     date: '2012-09-27T18:21:30-05:00',
    //     url: "mesmer-interactive-degree-builder",
    //     link: "http://mesmer.ly",
    //     backgroundBlur: "2012/09/mesmer",
    //     sections: [
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2012/09/mesmer-ipad.png",
    //                 caption: "Mesmer Interactive Degree Builder iPad interface",
    //                 height: 846
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2012/09/mesmer-sidebar.png",
    //                 caption: "Slide out sidebar containing the university course catalog. Departments and courses are quickly searchable via filtering search field.",
    //                 height: 846
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2012/09/mesmer-progress.png",
    //                 caption: "Slide down menu revels detail progress view.",
    //                 height: 846
    //             }
    //         }
    //     ]
    // },
    // {
    //     name: "Mesmer User Research",
    //     description: "Information gathering on the viability and need for interactive degree tracking software.",
    //     introduction: "Degree planning has yet to be modernized and is still largely done with pen and paper. Many students even choose to rely solely on what their advisers recommend, which can vary widely given that more than 75% of students will have multiple advisers over the course of their education. The data gathered in this infographic was used to determine the need for a degree planning web app and if students have access to the technology required to use the app.",
    //     date: '2012-09-24T19:31:37-05:00',
    //     url: "mesmer-infographic",
    //     backgroundBlur: "2013/10/mesmer-infographic",
    //     sections: [
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2013/10/mesmer-infographic.jpg",
    //                 caption: "The information in this infographic was compiled from a student survey I conducted with over 250 participants. The information was used to gauge the need of an interactive degree planning web app",
    //                 height: 3200
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2012/09/brand-book-cover.jpg",
    //                 caption: "Mesmer user research report cover. Contains logo design, color inspiration, personas and user interface screenshots.",
    //                 height: 1020
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2012/09/mesmer-is-an-aerial-view.jpg",
    //                 caption: "Mesmer is an aerial view. Every project needs a road map. Visualizing complex systems requires an elegant and intuitive user interface.",
    //                 height: 510
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2012/09/mesmer-is-finely-tuned-precision.jpg",
    //                 caption: "Mesmer is finely tuned precision. Intuitively organizing and beautifully presented information systems with user friendly, interactive interfaces.",
    //                 height: 510
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2012/09/mesmer-focus-group.jpg",
    //                 caption: "Personas, beta testers and general review by students and faculty helped refine ease of use and feature set.",
    //                 height: 510
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2012/09/mesmer-is-your-personal-guide.jpg",
    //                 caption: "Mesmer is your personal guide. Transforming project management into a visual, interactive experience by connecting people and data across time.",
    //                 height: 510
    //             }
    //         }
    //     ]
    // },
    // {
    //     name: "Life Cycle of Coal",
    //     description: "Visualizing the movement and consumption of coal reserves.",
    //     introduction: "The Great Lakes infographic highlights the lifecycle of coal, from extraction to use, and the dependency of the Great Lakes states on Wyoming coal. The map of Wyoming and the Great Lakes connected by railways creates a narrative of process and shows dependency from one region to another. Color is used heavily to unite spatially diffused data objects; connecting, for example, red colored power plant locations on the map to red data relating to power production.",
    //     date: '2011-12-21T11:34:06-05:00',
    //     url: "energy-life-cycle-of-coal-infographic",
    //     backgroundBlur: "2011/12/great-lakes-infographic",
    //     sections: [
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/great-lakes-infographic.png",
    //                 caption: "Infographic on Great Lakes coal energy use.",
    //                 height: 844
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/great-lakes-infographic-powder-river-basin.png",
    //                 caption: "Coal life-cycle shown as 4 step narrative.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/great-lakes-infographic-coal-sources.png",
    //                 caption: "Wyoming's Powder River Basin leads coal extraction in U.S.",
    //                 height: 800
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/great-lakes-infographic-electricity-from-coal.png",
    //                 caption: "Circular bar graph showing Indiana as top Great Lake coal user.",
    //                 height: 800
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/great-lakes-infographic-food-carbon.png",
    //                 caption: "Food groups with highest carbon footprint.",
    //                 height: 800
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/great-lakes-infographic-city-data.png",
    //                 caption: "Data featuring energy use by metropolitan area.",
    //                 height: 1000
    //             }
    //         }
    //     ]
    // },
    // {
    //     name: "Demographics Supersized",
    //     description: "City demographics in Milwaukee vs McDonald’s spatial density.",
    //     introduction: "Demographics supersized is an infographic comparing the income, education, unemployment and crime rates of the cities in Milwaukee county alongside the geographical locations of McDonald’s restaurants.",
    //     date: '2011-06-25T12:58:36-05:00',
    //     url: "demographics-supersized-infographic",
    //     backgroundBlur: "2011/12/demographics-supersized-infographic",
    //     sections: [
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/demographics-supersized-infographic.png",
    //                 caption: "Demographics supersized infographic overview.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/demographics-supersized-infographic-graphs.png",
    //                 caption: "City demographics as bar graph placed side by side for fast comparison.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/demographics-supersized-infographic-city-data.png",
    //                 caption: "McDonald's locations compared to Milwaukee county city demographics.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/demographics-supersized-infographic-national-state.png",
    //                 caption: "U.S. and Wisconsin demographic comparison.",
    //                 height: 1000
    //             }
    //         }
    //     ]
    // },
    // {
    //     name: "Water Cooled Wood Computer",
    //     description: "Crafting a silent computing experience.",
    //     introduction: "The quest for processing speed and complete silence led to the building of a wood computer case with water cooled internal components. The oak case was built over a six week period to house the components necessary for water cooling the video card, chipset and processor. Two radiators, equipped with dual 120mm fans, cool the water along with four passively cooled, aluminum reservoirs. Wood was chosen for the computer case because it is much easier to work with when compared to metal and has the benefit of deadening the noise by the fans inside.",
    //     date: '2009-05-06T18:00:00-05:00',
    //     url: "water-cooled-wood-computer",
    //     backgroundBlur: "2011/12/water-cooled-wood-computer",
    //     sections: [
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/wood-computer-front-sides-on.jpg",
    //                 caption: "Water cooled wood computer front and left sides with doors on.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/wood-computer-front-sides-off.jpg",
    //                 caption: "Wood computer front left with sides off showing water cooled interior.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/wood-computer-rear-sides-off.jpg",
    //                 caption: "Wood computer rear right with sides off showing radiator and reservoir.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/wood-computer-inside.jpg",
    //                 caption: "Motherboard and other primary water cooled components.",
    //                 height: 400
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/wood-computer-cpu-gpu.jpg",
    //                 caption: "Water cooled video card, chipset and processor close-up.",
    //                 height: 400
    //             }
    //         },
    //         {
    //             name: "",
    //             content: [],
    //             media: {
    //                 src: "2011/12/wood-computer-lights.jpg",
    //                 caption: "Water cooled video card, chipset and processor with lighting active.",
    //                 height: 490
    //             }
    //         }
    //     ]
    // }
    // {
    //     name: "Information Design &",
    //     name2: "Geospatial Cartography",
    //     description: "If a picture is worth a thousand words, an infographic's worth is in the data points.",
    //     date: '2011-06-25T12:58:36-05:00',
    //     url: "infographics",
    //     backgroundBlur: "url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABIAAD/4QWSaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJDOTg4OTlGMjY4NEZGOURGRDA1RDU1QzAyRDc5Njg4QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RTA3MUQyNEM1NUUxMUVBOURFRkZFQTk3NDc1Qzg5MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NkE3MERCNkM1NUUxMUVBOURFRkZFQTk3NDc1Qzg5MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjAyMCBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTAzQjAwQUM0N0MxMUVBQjQyQUFDMDFEMEEwNEUwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMDZGOUM5NEM0N0MxMUVBQjQyQUFDMDFEMEEwNEUwMyIvPiA8ZGM6Y3JlYXRvcj4gPHJkZjpTZXE+IDxyZGY6bGk+QW5kcmV3IE1jQ29udmlsbGU8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L2RjOmNyZWF0b3I+IDxJcHRjNHhtcENvcmU6Q3JlYXRvckNvbnRhY3RJbmZvIElwdGM0eG1wQ29yZTpDaUFkckV4dGFkcj0iNDEwIE5vcnRoIEJyb2FkIFN0cmVldCIgSXB0YzR4bXBDb3JlOkNpQWRyQ2l0eT0iRWxraG9ybiIgSXB0YzR4bXBDb3JlOkNpQWRyQ3RyeT0iVVNBIiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9ImFuZHJld0BhbmRyZXdtY2NvbnZpbGxlLmNvbSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iMjYyLTg5My03MTU3IiBJcHRjNHhtcENvcmU6Q2lBZHJQY29kZT0iNTMxMjEiIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iV2lzY29uc2luIiBJcHRjNHhtcENvcmU6Q2lVcmxXb3JrPSJodG1sOi8vYW5kcmV3bWNjb252aWxsZS5jb20iLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7QBIUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAA8cAVoAAxslRxwCAAACAAIAOEJJTQQlAAAAAAAQ/OEfici3yXgvNGI0B1h36//iDFhJQ0NfUFJPRklMRQABAQAADEhMaW5vAhAAAG1udHJSR0IgWFlaIAfOAAIACQAGADEAAGFjc3BNU0ZUAAAAAElFQyBzUkdCAAAAAAAAAAAAAAAAAAD21gABAAAAANMtSFAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNwcnQAAAFQAAAAM2Rlc2MAAAGEAAAAbHd0cHQAAAHwAAAAFGJrcHQAAAIEAAAAFHJYWVoAAAIYAAAAFGdYWVoAAAIsAAAAFGJYWVoAAAJAAAAAFGRtbmQAAAJUAAAAcGRtZGQA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)",
    //     sections: [
    //         {
    //             name: "The Projects",
    //             content: [
    //                 "Maps, data, and information design.",
    //                 "In my free time, I tinker with open source data sets from the USGS and other sources. I typically take these data sets into QGIS where I overlay them on a map. I then render the mapped layers in various programs such as Illustrator or Blender."
    //             ]
    //         },
    //         {
    //             name: "Wisconsin Rail Map, Year 1900",
    //             content: [
    //                 "This map combines elevation data from the U.S. Geological Survey and a railroad map from the Library of Congress archives. The two were rendered with Blender."
    //             ],
    //             media: {
    //                 src: "2020/06/wisconsin-1900-railroad-map.jpg",
    //                 hires: "2020/06/wisconsin-1900-railroad-map-hi-res.jpg",
    //                 caption: "Wisconsin rail map from year 1900 overlaid on USGS elevation data.",
    //                 height: 1080
    //             }
    //         },
    //         {
    //             name: "Demographics Supersized",
    //             content: [
    //                 "Demographics Supersized is an infographic comparing the income, education, unemployment, and crime rates of the cities in Milwaukee county alongside the geographical locations of McDonald’s restaurants."
    //             ],
    //             media: {
    //                 src: "2011/12/demographics-supersized-infographic.png",
    //                 caption: "City demographics in Milwaukee vs McDonald’s spatial density.",
    //                 height: 1000
    //             }
    //         },
    //         {
    //             name: "Mesmer User Research",
    //             content: [
    //                 "The data gathered in this infographic was used to determine the need for a degree planning web app and if students have access to the technology required to use the app. Degree planning has yet to be modernized and is still largely done with pen and paper. Many students even choose to rely solely on what their advisers recommend, which can vary widely given that more than 75% of students will have multiple advisers over the course of their education."
    //             ],
    //             media: {
    //                 src: "2013/10/mesmer-infographic.jpg",
    //                 caption: "This infographic was compiled from a student survey I conducted with over 250 participants. The information was used to gauge the need of an interactive degree planning web app",
    //                 height: 3200
    //             }
    //         },
    //         {
    //             name: "Life Cycle of Coal",
    //             content: [
    //                 "The Great Lakes infographic highlights the lifecycle of coal, from extraction to use, and the dependency of the Great Lakes states on Wyoming coal. The map of Wyoming and the Great Lakes connected by railways creates a narrative of process and shows dependency from one region to another. Color is used heavily to unite spatially diffused data objects; connecting, for example, red colored power plant locations on the map to red data relating to power production."
    //             ],
    //             media: {
    //                 src: "2011/12/great-lakes-infographic.png",
    //                 caption: "Visualizing the movement and consumption of coal reserves.",
    //                 height: 844
    //             }
    //         }
    //     ]
    // }
];
