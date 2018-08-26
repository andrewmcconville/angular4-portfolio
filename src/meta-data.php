<?php
    $url = basename($_SERVER['REQUEST_URI']);

    $meta = [
        "contact" => [
            "title" => "Andrew McConville - Contact Information",
            "description" => "Email, Phone and Social Media accounts for Andrew McConville.",
            "image" => "/assets/about/contact-social-media.png",
            "canonical" => "/contact",
            "date" => "2018-03-02T18:00:00-05:00"
        ],
        "home" => [
            "title" => "Andrew McConville - Portfolio",
            "description" => "Hi, I’m Andrew McConville; I work with product & design on creating user workflows, wireframes and adhering to user interface consistency.",
            "image" => "/assets/about/home-social-media.png",
            "canonical" => "/home",
            "date" => "2018-03-02T18:00:00-05:00"
        ],
        "reading-list" => [
            "title" => "Andrew McConville - Reading List",
            "description" => "Some of my favorite books in no particular order.",
            "image" => "/assets/about/reading-list-social-media.png",
            "canonical" => "/reading-list",
            "date" => "2018-03-02T18:00:00-05:00"
        ],
        "resume" => [
            "title" => "Andrew McConville - Resume",
            "description" => "View",
            "image" => "/assets/about/contact-avatar.jpg",
            "canonical" => "/resume",
            "date" => "2018-03-02T18:00:00-05:00"
        ],
        "stack-overflow-ux-design" => [
            "title" => "Stack Overflow UX Design",
            "description" => "Ideate, Prototype, Test: Generating ideas and iterating quickly. This is a continuation of the UX work I have been conducting with Stack Overflow for my Graduate Certificate in User Experience at the University of Wisconsin-Madison.",
            "image" => "/wp-content/uploads/2018/05/stack-overflow-ux-design-social-media.png",
            "canonical" => "/stack-overflow-ux-design",
            "date" => "2018-05-09T13:35:00-05:00"
        ],
        "stack-overflow-user-research" => [
            "title" => "Stack Overflow User Research",
            "description" => "Understanding the goals and motivations of Stack Overflow users. I started conducting user research with Stack Overflow in 2017 for my Graduate Certificate in User Experience at the University of Wisconsin-Madison.",
            "image" => "/wp-content/uploads/2017/12/stack-overflow-user-research-social-media.png",
            "canonical" => "/stack-overflow-user-research",
            "date" => "2017-12-19T20:00:00-05:00"
        ],
        "stack-overflow-angular-animate" => [
            "title" => "Animating Micro-Interactions",
            "description" => "Transitioning interface components between simple and detailed or collapsed and expanded states is an opportunity to add meaningful animation to an interface.",
            "image" => "/wp-content/uploads/2015/03/stack-overflow-angular-animate-social-media.png",
            "canonical" => "/stack-overflow-angular-animate",
            "date" => "2015-03-31T18:00:00-05:00"
        ],
        "1000-books-kindergarten" => [
            "title" => "1000 Books Information Architecture",
            "description" => "The 1000 Books Before Kindergarten program is organized by the Waukesha County Federated Library System. The program encourages parents to read to their children and upon successful milestone completion children are awarded prizes at their local library branch.",
            "image" => "/wp-content/uploads/2013/11/1000-books-kindergarten-social-media.png",
            "canonical" => "/1000-books-kindergarten",
            "date" => "2013-10-11T18:00:00-05:00"
        ],
        "uwm-mobile" => [
            "title" => "UWM Mobile Prototype",
            "description" => "Live shuttle bus tracking, real-time status for laundry and computer availability, photo sharing of in-progress student work and campus weather provided by UWM's Innovative Weather Center.",
            "image" => "/wp-content/uploads/2013/10/uwm-mobile-social-media.png",
            "canonical" => "/uwm-mobile",
            "date" => "2013-09-23T20:07:54-05:00"
        ],
        "dk-handbook" => [
            "title" => "DK Handbook Prototype",
            "description" => "Reimagining an English 102 textbook in digital form for tablets. Producing a digital version for tablets allowed for the use of animations, audio, video, and mini-games at a high level of interactivity.",
            "image" => "/wp-content/uploads/2013/05/dk-handbook-social-media.png",
            "canonical" => "/dk-handbook",
            "date" => "2013-05-28T19:00:00-05:00"
        ],
        "mesmer-interactive-degree-builder" => [
            "title" => "Mesmer",
            "description" => "Mesmer aims to help students visualize their degree progress by organizing courses within semesters and allowing students the ability to quickly rearrange courses, add hypothetical grades and graph credit count.",
            "image" => "/wp-content/uploads/2012/09/mesmer-social-media.png",
            "canonical" => "/mesmer-interactive-degree-builder",
            "date" => "2012-09-27T18:21:30-05:00"
        ],
        "mesmer-infographic" => [
            "title" => "Mesmer User Research",
            "description" => "The data gathered in this infographic was used to determine the need for a degree planning web app and if students have access to the technology required to use the app.",
            "image" => "/wp-content/uploads/2013/10/mesmer-infographic-social-media.png",
            "canonical" => "/mesmer-infographic",
            "date" => "2012-09-24T19:31:37-05:00"
        ],
        "energy-life-cycle-of-coal-infographic" => [
            "title" => "Life Cycle of Coal",
            "description" => "The Great Lakes infographic highlights the lifecycle of coal, from extraction to use, and the dependency of the Great Lakes states on Wyoming coal.",
            "image" => "/wp-content/uploads/2011/12/great-lakes-infographic-social-media.png",
            "canonical" => "/energy-life-cycle-of-coal-infographic",
            "date" => "2011-12-21T11:34:06-05:00"
        ],
        "demographics-supersized-infographic" => [
            "title" => "Demographics Supersized",
            "description" => "Comparing the income, education, unemployment and crime rates of the cities in Milwaukee county along side the geographical locations of McDonald’s restaurants.",
            "image" => "/wp-content/uploads/2011/12/demographics-supersized-infographic-social-media.png",
            "canonical" => "/demographics-supersized-infographic",
            "date" => "2011-06-25T12:58:36-05:00"
        ],
        "water-cooled-wood-computer" => [
            "title" => "Water Cooled Wood Computer",
            "description" => "The quest for processing speed and complete silence. The oak case was built over a six week period to house the components necessary for water cooling the video card, chipset and processor.",
            "image" => "/wp-content/uploads/2011/12/water-cooled-wood-computer-social-media.png",
            "canonical" => "/water-cooled-wood-computer",
            "date" => "2009-05-06T18:00:00-05:00"
        ],
        "" => [
            "title" => "Andrew McConville - Portfolio",
            "description" => "Hi, I’m Andrew McConville; I work with product & design on creating user workflows, wireframes and adhering to user interface consistency.",
            "image" => "/assets/about/home-social-media.png",
            "canonical" => "/",
            "date" => "2018-03-02T18:00:00-05:00"
        ]
    ];

    $title = $meta[$url]['title'];
    $description = $meta[$url]['description'];
    $image = $meta[$url]['image'];
    $canonical = $meta[$url]['canonical'];
    $date = $meta[$url]['date'];
?>