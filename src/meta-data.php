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
            "description" => "UX professional with a background in B2B SaaS applications.",
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
        "stack-overflow-user-research" => [
            "title" => "Stack Overflow User Research",
            "description" => "Reducing points of tension within Stack Overflow's Q&A community.",
            "image" => "/wp-content/uploads/2017/12/stack-overflow-user-research-social-media.png",
            "canonical" => "/stack-overflow-user-research",
            "date" => "2017-12-19T20:00:00-05:00"
        ],
        "universal-design-q-tip-grip" => [
            "title" => "Universal Design Q-Tip Grip",
            "description" => "Enhancing the safety and usability of the common cotton swab.",
            "image" => "/wp-content/uploads/2020/03/universal-design-q-tip-grip-social-media.png",
            "canonical" => "/universal-design-q-tip-grip",
            "date" => "2020-03-09T18:00:00-05:00"
        ],
        "ux-engineering" => [
            "title" => "UX Engineering",
            "description" => "Building prototypes, managing interface components, and designing interactions.",
            "image" => "/wp-content/uploads/2019/04/ux-engineering-social-media.png",
            "canonical" => "/ux-engineering",
            "date" => "2019-04-13T18:00:00-05:00"
        ],
        "infographics" => [
            "title" => "Information Design",
            "description" => "If a picture is worth a thousand words, an infographic's worth is in the data points.",
            "image" => "/wp-content/uploads/2011/12/demographics-supersized-infographic-social-media.png",
            "canonical" => "/infographics",
            "date" => "2012-09-24T19:31:37-05:00"
        ],
        "" => [
            "title" => "Andrew McConville - Portfolio",
            "description" => "UX professional with a background in B2B SaaS applications.",
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