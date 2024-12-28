const payload = [{
    eventtype: 1, // Event type: 1 for coding hackathon, 2 for quiz
    _id: '343sdfee445asr34', // MongoDB ID of the event host

    // Basic information about the event
    basic_info: {
        title: "Any event wanted to create name", // Title of the event
        description: "Description, about the Title of event", // Description of the event
        start_date: "event Start when to start", // Start date of the event
        end_date: "event_end_date", // End date of the event
        maximum_marks: "might be parameter of this one choose", // Maximum marks parameter
        duration: "time frame", // Duration of the event
        platform: "Will be coming as 1: Online, 2: Offline", // Platform of the event
    },

    // Settings 1: Specific settings related to the event
    settings1: {
        elimintory: "Yes: it means student will be eliminate by considering a parameter of maximum marks", // Elimination criteria
        no_of_question: "Total_number_of_question", // Total number of questions
        total_marks: "user must be visible to see the marks goes to each question", // Visibility of marks per question
        label_tags: "must be empty as not discuss with pardeep right now", // Label tags (currently not discussed)
        shuffling_question: "true or false: we used random function to shuffle the question from backend", // Shuffle questions option
        shuffling_option: "true or false: same to solve this problem random function", // Shuffle options within questions
        can_edit_answer: "true or false: use redux and its state management: and using doubly linklist: structure", // Ability to edit answers
        show_tags: "true or false: in which user see the tags on each question easy difficult or hard", // Display difficulty tags
        time_per_question: 60, // Time per question in seconds (if in minutes, clarify) 
        browse_question: "true or false: browse question doesn't have any idea", // Option to browse questions
        skip_question: "without answer skip the question", // Skip questions without answering
        custom_guidelines: "description of the content", // Custom guidelines for the event
    },

    // Settings 2: Additional settings related to the event
    settings2: {
        no_of_challenges: "Same as Which specify that number of question", // Number of challenges (questions)
        elimintory: "true or false", // Elimination mode (true/false)
        who_can_play: "team leader or All member", // Eligibility: team leader or all members
        full_mode: "true or false", // Full mode setting (true/false)
        show_tag: "Show the diffcult tag", // Display difficulty tag
        allow_language: "option might be we remove this one", // Option to allow specific languages (consider removal)
        enable_copy_paste: "coding editor the paste option", // Option to enable copy-paste in coding editor
        custom_guidelines: "Description of rules and regulation", // Custom guidelines and regulations
    },

    challenges2: { // Challenges specific to hackathon purpose
        question: {
            problem_statement: "title of the problem", // Problem statement title
            description: "Description about the problem", // Description of the problem
            inputformat: "", // Input format for the problem
            outputformat: "", // Output format for the problem
            testcases: [{
                input_parameter: "test1", // Input parameters for test case
                output_parameter: "solution", // Expected output solution
            }],
        },
    },

    challenges1: { // Challenges specific to quiz purpose
        question: {
            problem_statement: "title of the problem", // Problem statement title
            description: "Description about the problem", // Description of the problem
            option: ["A", "B", "C", "D"], // Options for multiple-choice questions
        },
    },
}];

console.log(payload);
