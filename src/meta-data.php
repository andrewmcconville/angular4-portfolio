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
        "stack-overflow-user-research" => [
            "title" => "Stack Overflow User Research",
            "description" => "Understanding the goals and motivations of Stack Overflow users. I started conducting user research with Stack Overflow in 2017 for my Graduate Certificate in User Experience at the University of Wisconsin-Madison.",
            "image" => "/wp-content/uploads/2017/12/stack-overflow-user-research-social-media.png",
            "canonical" => "/stack-overflow-user-research",
            "date" => "2017-12-19T20:00:00-05:00"
        ],
        "stack-overflow-angular-animate" => [
            "title" => "Animating Interactions and UI State",
            "description" => "Transitioning interface components between simple and detailed or collapsed and expanded states is an opportunity to add meaningful animation to an interface.",
            "image" => "/wp-content/uploads/2015/03/stack-overflow-angular-animate-social-media.png",
            "canonical" => "/stack-overflow-angular-animate",
            "date" => "2015-03-31T18:00:00-05:00"
        ],
        "" => [
            "title" => "Andrew McConville - Portfolio",
            "description" => "Hi, I’m Andrew McConville; I work with product & design on creating user workflows, wireframes and adhering to user interface consistency.",
            "image" => "/assets/about/home-social-media.png",
            "canonical" => "/",
            "date" => "2018-03-02T18:00:00-05:00"
        ],
    ];

    $title = $meta[$url]['title'];
    $description = $meta[$url]['description'];
    $image = $meta[$url]['image'];
    $canonical = $meta[$url]['canonical'];
    $date = $meta[$url]['date'];
?>