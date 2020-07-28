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
        date: '2017-12-19T20:00:00-05:00',
        url: "stack-overflow-user-research",
        backgroundBlur: "2017/12/stack-overflow-user-research",
        sections: [
            {
                name: "Project Overview",
                content: [
                    "Stack Overflow is an online community for programmers based around question and answer interactions. As with any online community, there can be bad actors that make the site unwelcoming; this can be especially true for those new to the community and its established culture.",
                    "This project rethinks the process of posting a question on Stack Overflow for first time users and attempts to reduce the frequency duplicate questions."
                ]
            },
            {
                name: "Problem Statement",
                content: [
                    "Stack Overflow’s reputation and permission system fosters a site environment that is unwelcoming to new and or low-reputation users."
                ]
            },
            {
                name: "My Role",
                content: [
                    "This project was for my Graduate Capstone Certificate in UX from the University of Wisconsin-Madison. The focus was on UX research and design thinking methodologies; I preformed background research, competitive analysis, SWOT and PEST analysis, user interviews, task analysis, journey mapping, created persons, made prototypes, and gathered participants for usability testing and surveys.",
                    "Stack Overflow was great to work with and provided a diverse team of UX professionals that gave feedback throughout the program; these included: a UX researcher, UX designer, and a Product Designer."
                ]
            },            {
                name: "Solution",
                content: [
                    "Through user interviews I discovered that duplicate questions were a reoccurring point of tension between new and veteran users. To reduce the likelihood of duplicate questions being posted, I rethought the process for composing a question.",
                    "Users are taken through a wizard like experience where they are initially presented with minimal UI. As they add content to their post, a list of existing questions is presented offering users the potential to identify an existing post that may be similar to theirs."
                ],
                media: {
                    src: "2017/12/stack-overflow-ux-design-solution.png",
                    hires: "2017/12/stack-overflow-ux-design-solution-hi-res.png",
                    caption: "Start and end states of final prototype used in usability testing.",
                    height: 700,
                    shadow: true
                }
            },
            {
                name: "User Interviews",
                content: [
                    "I started my research by interviewing Stack Overflow users. A question I asked participants early in the interview process was if they had ever posted a question on Stack Overflow and if not, why? Initially I used this question to give me a general level of involvement the participant had with Stack, but I would come to find that it was one of the most reveling and insightful questions I would ask.",
                    "The responses were quite varied and portrayed the personalities of Stack users in many different ways. One user got a kick out of the question and responded with a boastful \"I don't ask the questions on Stack, I answer the questions.\" Another user, however, answered quite the opposite, highlighting their reluctance to interact with the Stack Overflow community. This quote was the insight that set the direction for my work."
                ],
                quote: "Whenever I think about asking a question on Stack Overflow, I think about how my question might not come out right, or that it might have already been asked by someone else, and asking it again might get everyone all ‘internet angry’ at me."
            },
            {
                name: "Task Analysis",
                content: [
                    "What a person says during an interview and how they actually use a product can be substantially different. Because of this, the behavioral insights that come from a task analysis reveal actions that users often overlook or can not articulate.",
                    "An interesting trend among participants: none used Stack Overflow's search feature when looking for answers. All participants started searching at Google, but then specifically only clicked on Stack Overflow results. When asked why, none of the participants had a definite answer, citing they just liked Google more."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-task-analysis.jpg",
                    hires: "2017/12/stack-overflow-user-research-task-analysis-hi-res.jpg",
                    caption: "Minimalist infographic format for task analysis listing each step a users takes in their interaction with a Stack Overflow feature.",
                    height: 742,
                    shadow: true
                }
            },
            {
                name: "Journey Map",
                content: [
                    "Journey maps are great for sharing findings with team members that were not part of the research process, like engineers and QA. I find them to be a helpful visual aid and very approachable for coworkers. Journey maps highlight triggers for using the product, such as when users encounter roadblocks in their routine."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-journey-map.jpg",
                    hires: "2017/12/stack-overflow-user-research-journey-map-hi-res.jpg",
                    caption: "Journey map of user activities inside and outside of Stack Overflow. Includes users' activities upon arriving at work, completing work-related tasks and interactions with Stack Overflow.",
                    height: 1920,
                    shadow: true
                }
            },
            {
                name: "Personas: Lurker, Dabbler, Rockstar",
                content: [
                    "After just a few interviews three distinct personas began to form. The Lurker persona is the user who searches for answers but has never made a post on Stack; this is a majority of users to the site, many of which do not even have accounts. Next is the dabbler who uses Stack Overflow to get work done. They use Stack to get answers and if the answer they need doesn't exist they will post a question; they sometimes answer questions if they happen to notice one they can easily answer. Finally, the rockstar persona rarely asks questions but spends a large amount of time answering as many questions as they can in order to collect as many reputation points as possible."
                ],
                media: {
                    src: "2017/12/stack-overflow-user-research-personas.jpg",
                    hires: "2017/12/stack-overflow-user-research-personas-hi-res.jpg",
                    caption: "Three personas featuring personal backgrounds along with Stack Overflow product and experience goals. Sidebar contains persona photo, quote and Stack Overflow users stats.",
                    height: 495,
                    shadow: true
                }
            },
            {
                name: "Defining the Problem",
                content: [
                    "Part of Stack's \"unwelcoming environment\" problem is when a user posts a duplicate question. Instead of the duplicate question being closed, the questions are sometimes met with toxic replies in the comment section. Because these questions are replied to instead of closed, this behavior is public for anyone visiting the site."
                ]
            },
            {
                name: "Research Hypothesis",
                content: [
                    "If we prevent duplicate questions from being posted, then first time users will feel more confident engaging with the Stack Overflow community. We’ll know this to be true when duplicate posts are reduced and posts by first time users are increased."
                ]
            },
            {
                name: "Ideate",
                content: [
                    "I started with divergent brain storming on sticky notes which I then affinity mapped into five similar themes. I chose three of these which could be the most feasible and have the most impact. I then did some quick sketching on possible workflows and interactions for each of the three. Finally, I converged on a single idea to explore further through prototyping and testing."
                ],
                media: {
                    src: "2017/12/stack-overflow-ux-design-ideation.jpg",
                    hires: "2017/12/stack-overflow-ux-design-ideation-hi-res.jpg",
                    caption: "User scenarios describing happy path interactions with Stack Overflow and how they relate back to business goals.",
                    height: 490,
                    shadow: true
                }
            },
            {
                name: "Lo-fi Prototype",
                content: [
                    "I did an experiment here and made components out of foam core so I could quickly rearrange them, and though I think post-it notes are better, I'm always looking for a faster way to prototype. These UI pieces allowed me to quickly try various layouts and application states."
                ],
                media: {
                    src: "2017/12/stack-overflow-ux-design-lo-fi-prototyping.jpg",
                    hires: "2017/12/stack-overflow-ux-design-lo-fi-prototyping-hi-res.jpg",
                    caption: "Interface components made from foam core used in rapid, low fidelity prototyping.",
                    height: 492,
                    shadow: true
                }
            },
            {
                name: "Hi-fi Prototype",
                content: [
                    "I then created a wireframe in Adobe XD so I would have something I could put in front of participants for testing."
                ],
                media: {
                    src: "2017/12/stack-overflow-ux-design-wireframing.jpg",
                    hires: "2017/12/stack-overflow-ux-design-wireframing-hi-res.jpg",
                    caption: "Adobe XD wireframe with happy path across top row and various application states in lower columns.",
                    height: 636,
                    shadow: true
                }
            },
            {
                name: "Testing",
                content: [
                    "Guerrilla testing has a special kind of exhilaration to it. Up until now I've been researching, ideating, and building—what I think is a great—prototype. But within minutes of putting a prototype in front of a participant all the flaws come to the surface, it's a very \"real\" learning experience."
                ]
            },
            {
                name: "Testing Metrics",
                content: [
                    "I had three \"happy path\" scenarios for participants to complete, followed by a SUS survey, and then a desirability study. I later swapped out the SUS survey for a PSSUQ survey as the PSSUQ collects more detailed feedback. Though the PSSUQ requires more effort from participants, I felt this was okay because the effort and time involved going through the test scenarios was so short."
                ],
                media: {
                    src: "2017/12/stack-overflow-ux-design-metrics.jpg",
                    hires: "2017/12/stack-overflow-ux-design-metrics-hi-res.jpg",
                    caption: "Quantitative results from various usability tests and surveys including: completion rate, SUS, PSSUQ, time on task, and desirability study.",
                    height: 735,
                    shadow: true
                }
            },
            {
                name: "Outcomes",
                content: [
                    "At the end of the day my metrics were for a wireframe and not a true browser experience. I would have liked to have tested with a working prototype in the browser to collect more accurate data and to compare against the existing process for posting a question. Implementing and A/B testing would have also been able to confirm if the number of duplicate posts were reduced and if the amount of participation from new users was increased.",
                    "However, I would like to think that I was on the right track; as my time with Stack Overflow was coming to an end they showed me a very similar solution they had in the works."
                ]
            }
        ]
    },
    {
        name: "Universal Design",
        name2: "Q-Tip Grip",
        description: "Enhancing the safety and usability of the common cotton swab.",
        date: '2020-03-09T18:00:00-05:00',
        url: "universal-design-q-tip-grip",
        backgroundBlur: "2020/03/universal-design-q-tip-grip",
        sections: [
            {
                name: "Project Overview",
                content: [
                    "In Spring 2020 I enrolled in UW-Milwaukee's Universal Design and Digital Fabrication course as a graduate special student. My work applied user research and design thinking methodologies to physical objects and included prototypes modeled in Rhino 3D which were then 3D printed.",
                    "This project attempts to make q-tips easier to hold and safer to use, while making them fun and inviting for children."
                ]
            },
            {
                name: "Problem Statement",
                content: [
                    "Toddlers and young children demand independence, however, q-tips can be hard to control and dangerous if inserted too far into the ear.",
                ]
            },
            {
                name: "Solution",
                content: [
                    "A q-tip adapter in the shape of a caterpillar allows children to grasp and manipulate a q-tip while preventing the swab from entering the ear canal.",
                ],
                media: {
                    src: "2020/03/universal-design-q-tip-grip-bathroom.jpg",
                    hires: "2020/03/universal-design-q-tip-grip-bathroom-hi-res.jpg",
                    caption: "Two piece, 3D printed caterpillar that secures a q-tip. Magnetic top and bottom pieces are interchangeable providing several color options.",
                    height: 1080,
                    shadow: true
                }
            },
            {
                name: "Task Analysis",
                content: [
                    "The idea came form a task analysis focusing on morning routines in the bathroom. Being focused on Universal Design, the goal was to identify interactions or objects that could be difficult to use for disadvantaged user groups.",
                ],
                media: {
                    src: "2020/03/universal-design-q-tip-grip-task-analysis.jpg",
                    hires: "2020/03/universal-design-q-tip-grip-task-analysis-hi-res.jpg",
                    caption: "Minimalist infographic format for task analysis listing each event in a morning bathroom routine.",
                    height: 1220,
                    shadow: true
                }
            },
            {
                name: "Ideate",
                content: [
                    "I started ideating by writing out attributes I thought my solution should have, along with existing devices that I thought could work well. I then moved on to a cardboard prototype to get a feel for size and how the object would need to interact with the q-tip. From there I move on to a simple 3D printed prototype.",
                ],
                media: {
                    src: "2020/03/universal-design-q-tip-grip-ideate.jpg",
                    hires: "2020/03/universal-design-q-tip-grip-ideate-hi-res.jpg",
                    caption: "Ideation process showing brain storming, cardboard prototyping, and a 3D printed prototype.",
                    height: 610,
                    shadow: true
                }
            },
            {
                name: "Prototype Testing: Round One",
                content: [
                    "Up until this point I made the mistake of only testing my prototype with adults! As many moments of realization, I was in bed one day and realized I need to get my prototype into the hands of kids. I 3D printed twelve prototypes and sent them home with coworkers who had children ranging from one to fifteen years old.",
                    "This turned out to be incredibly insightful because young children held the prototype in so many different ways. Looking at the pictures they tried everything from eating it, to gripping it like the handle bars of a bike, to using two hands to hold it. It isn't until about the age of five that children begin to hold the prototype like an adult; with a pencil like grip."
                ],
                media: {
                    src: "2020/03/universal-design-q-tip-grip-testing-one.jpg",
                    hires: "2020/03/universal-design-q-tip-grip-testing-one-hi-res.jpg",
                    caption: "Twelve participants ranging from one to fifteen years old each with a unique grip.",
                    height: 610,
                    shadow: true
                }
            },
            {
                name: "Metrics",
                content: [
                    "Plotting the three major grip styles by age delineates how a child holds the prototype versus an adult. This could be attributed to several factors such as hand size, dexterity, familiarity with q-tips, or other factors.",
                    "This data was collected in an unmoderated test where the prototype was given to parents to try at home with their kids. Because of this, there could have been coaching or other unknown factors not accounted for."
                ],
                media: {
                    src: "2020/03/universal-design-q-tip-grip-metrics.jpg",
                    hires: "2020/03/universal-design-q-tip-grip-metrics-hi-res.jpg",
                    caption: "Age plotted and delineated by grip type.",
                    height: 610,
                    shadow: true
                }
            },
            {
                name: "Refocus",
                content: [
                    "Once I was refocused on my users, I began prototyping various shapes and sizes to fit their hands.",
                ],
                media: {
                    src: "2020/03/universal-design-q-tip-grip-modeling.jpg",
                    hires: "2020/03/universal-design-q-tip-grip-modeling-hi-res.jpg",
                    caption: "Caterpillar modeling in Rhino 3D and 3D printed result.",
                    height: 386,
                    shadow: true
                }
            },
            {
                name: "Magnets",
                content: [
                    "Early designs featured a hinge to keep the prototype closed, but this was prone to breaking and a difficult for children and adults to use. The hinge was replaced with magnets. The added benefit to this was the tops and bottoms were interchangeable between prototypes of various colors.",
                ],
                media: {
                    src: "2020/03/universal-design-q-tip-grip-prototype.jpg",
                    hires: "2020/03/universal-design-q-tip-grip-prototype-hi-res.jpg",
                    caption: "Two piece, magnetic caterpillar with q-tip loaded.",
                    height: 678,
                    shadow: true
                }
            },
            {
                name: "Outcomes & Metrics",
                content: [
                    "Unfortunately, loading was still difficult for children as the magnets used were far too strong. Only two out of nine participants successfully loaded on the first try and another three were successful on their second attempt; the rest took multiple attempts or needed the help of an adult. The attraction of the two halves was so strong the two halves would aggressively pull together within an inch, causing the q-tip to fall out.",
                    "Seven of the nine participants identifies the prototype as a caterpillar, and none were afraid or standoffish."
                ]
            },
            {
                name: "Next Steps",
                content: [
                    "Using a less powerful magnet, or maybe not a magnet at all could be an option. There is a danger that magnets could be swallowed and the prototypes has them secured with friction. Exploring shapes beyond a caterpillar would also be fun.",
                    "Gathering more participants was also intended, but did not happen do to COVID-19. I experimented with several colors and filament types, hoping to test with far more than nine children, but that was not to be."
                ],
                // media: {
                //     src: "2020/03/universal-design-q-tip-grip-caterpillars.jpg",
                //     hires: "2020/03/universal-design-q-tip-grip-caterpillars-hi-res.jpg",
                //     caption: "3D printed prototypes using various colors and materials featuring: wood pulp, copper, glitter, thermal color changing, and glow in the dark filaments.",
                //     height: 800,
                //     shadow: true
                // }
            }
        ]
    },
    {
        name: "UX Engineering",
        name2: "at AccuLynx",
        description: "Building prototypes, managing interface components, and designing interactions.",
        date: '2019-04-13T18:00:00-05:00',
        url: "ux-engineering",
        backgroundBlur: "2019/04/ux-engineering",
        sections: [
            {
                name: "Overview",
                content: [
                    "AccuLynx is a B2B SaaS startup in the roofing industry. I have been a UX engineer with AccuLynx since January 2014 and in that time I have worked on dashboards, reporting tools, e-sign documents, calendaring, material ordering, insurance modules, and more; AccuLynx enables customers to run every aspect of a roofing company.",
                ],
                media: {
                    src: "2019/04/ux-engineering-slide.jpg",
                    hires: "2019/04/ux-engineering-slide-hi-res.jpg",
                    caption: "When I tell people we have a slide from the 2nd floor to the first they think I'm joking, so I took a picture.",
                    height: 864,
                    shadow: true
                }
            },
            {
                name: "My Hats",
                content: [
                    "When I started at AccuLynx there was only one team, and zero UX roles. Over the years I have worn many hats; I have interviewed users, participated in remote usability studies, and on bigger projects contributed to design sprints. As we grew into multiple teams, I began documenting our design language to ensure a consistent user experience. Recently, much of my time has been spent building prototypes and components for our web app."
                ],
                media: {
                    src: "2019/04/ux-engineering-ideate.jpg",
                    hires: "2019/04/ux-engineering-ideate-hi-res.jpg",
                    caption: "Design sprint ideation, sketching, affinity mapping, and journey mapping.",
                    height: 696,
                    shadow: true
                }
            },
            {
                name: "Prototyping",
                content: [
                    "I have used several design apps over the years including: Illustrator, XD, Sketch, and InVision, each having various strengths. However, when a clickable prototype won't cut it, I use HTML, CSS, and JavaScript to produce native prototypes that run in the browser. This can be a huge advantage during usability testing as participants can interact with live data. The less participants have to suspend disbelief, the more realistic and valuable the observations will be.",
                ],
                media: {
                    src: "2019/04/ux-engineering-prototyping.jpg",
                    hires: "2019/04/ux-engineering-prototyping-hi-res.jpg",
                    caption: "Left: wireframe mockup for clickable prototype. Right: Native components in HTML for working prototype and production.",
                    height: 1027,
                    shadow: true
                }
            },
            {
                name: "UX Explorations",
                content: [
                    "Have you ever thought to yourself \"what would we do if we delete what we have and start from scratch?\" After working on AccuLynx for a few years and gaining a deep understanding of our users, I spent a weekend coming up with a freemium experience for our SaaS app. I focused on self on boarding and simplicity, while offering high value features. We ultimately did not move forward with the project; but when exploring new ideas, some eventually make their way into production.",
                ],
                media: {
                    src: "2019/04/ux-engineering-material.jpg",
                    hires: "2019/04/ux-engineering-material-hi-res.jpg",
                    caption: "Freemium experience.",
                    height: 615,
                    shadow: true
                }
            },
            {
                name: "UX Engineering",
                content: [
                    "At the end of the day, UX engineering is an end to end catch all; it spans research, design, testing, and development. One of the biggest takeaways from contributing to a product across several UX disciplines has been the old cliche: You are not your user. By having a deep understanding of users and the problem space, we minimize the risk and assumptions we bring into the solution space.",
                ]
            }
        ]
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
    {
        name: "Information Design &",
        name2: "Geospatial Cartography",
        description: "If a picture is worth a thousand words, an infographic's worth is in the data points.",
        date: '2011-06-25T12:58:36-05:00',
        url: "infographics",
        backgroundBlur: "2011/12/demographics-supersized-infographic",
        sections: [
            {
                name: "The Projects",
                content: [
                    "Maps, data, and information design.",
                    "In my free time, I tinker with open source data sets from the USGS and other sources. I typically take these data sets into QGIS where I overlay them on a map. I then render the mapped layers in various programs such as Illustrator or Blender."
                ]
            },
            {
                name: "Wisconsin Rail Map, Year 1900",
                content: [
                    "This map combines elevation data from the U.S. Geological Survey and a railroad map from the Library of Congress archives. The two were rendered with Blender."
                ],
                media: {
                    src: "2020/06/wisconsin-1900-railroad-map.jpg",
                    hires: "2020/06/wisconsin-1900-railroad-map-hi-res.jpg",
                    caption: "Wisconsin rail map from year 1900 overlaid on USGS elevation data.",
                    height: 1080
                }
            },
            {
                name: "Demographics Supersized",
                content: [
                    "Demographics Supersized is an infographic comparing the income, education, unemployment, and crime rates of the cities in Milwaukee county alongside the geographical locations of McDonald’s restaurants."
                ],
                media: {
                    src: "2011/12/demographics-supersized-infographic.png",
                    caption: "City demographics in Milwaukee vs McDonald’s spatial density.",
                    height: 1000
                }
            },
            {
                name: "Mesmer User Research",
                content: [
                    "Degree planning has yet to be modernized and is still largely done with pen and paper. Many students even choose to rely solely on what their advisers recommend, which can vary widely given that more than 75% of students will have multiple advisers over the course of their education. The data gathered in this infographic was used to determine the need for a degree planning web app and if students have access to the technology required to use the app."
                ],
                media: {
                    src: "2013/10/mesmer-infographic.jpg",
                    caption: "This infographic was compiled from a student survey I conducted with over 250 participants. The information was used to gauge the need of an interactive degree planning web app",
                    height: 3200
                }
            },
            {
                name: "Life Cycle of Coal",
                content: [
                    "The Great Lakes infographic highlights the lifecycle of coal, from extraction to use, and the dependency of the Great Lakes states on Wyoming coal. The map of Wyoming and the Great Lakes connected by railways creates a narrative of process and shows dependency from one region to another. Color is used heavily to unite spatially diffused data objects; connecting, for example, red colored power plant locations on the map to red data relating to power production."
                ],
                media: {
                    src: "2011/12/great-lakes-infographic.png",
                    caption: "Visualizing the movement and consumption of coal reserves.",
                    height: 844
                }
            }
        ]
    }
];
