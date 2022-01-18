var json = {
  pages: [
    {
      name: "page_info",
      elements: [
        {
          type: "matrix",
          name: "Quality",
          title:
            "Please indicate if you agree or disagree with the following statements",
          columns: [
            {
              value: 1,
              text: "Strongly Disagree",
            },
            {
              value: 2,
              text: "Disagree",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Agree",
            },
            {
              value: 5,
              text: "Strongly Agree",
            },
          ],
          rows: [
            {
              value: "affordable",
              text: "Product is affordable",
            },
            {
              value: "does what it claims",
              text: "Product does what it claims",
            },
            {
              value: "better then others",
              text: "Product is better than other products on the market",
            },
            {
              value: "easy to use",
              text: "Product is easy to use",
            },
          ],
        },
        {
          type: "custom-question",
          name: "custom",
          title: "This is a custom question with two values - min and max",
        },
        {
          type: "boolean",
          name: "bool",
          title: "Please answer the question",
          label: "Are you 21 or older?",
          //"valueTrue": "true",
          //"valueFalse": "false",
          labelTrue: "Label True",
          labelFalse: "Label False",
        },
        {
          type: "radiogroup",
          name: "organization_type",
          title:
            "Which of the following best describes you or your organization?",
          hasOther: true,
          choices: [
            {
              value: "ISV",
              text: "ISV (building commercial/shrink wrapped software)",
            },
            {
              value: "Consulting",
              text:
                "Software consulting firm (provide development services to other organizations)",
            },
            {
              value: "Custom",
              text: "Custom software development (as a freelancer/contractor)",
            },
            { value: "In-house", text: "In-house software development" },
            {
              value: "Hobbyist",
              text: "Hobbyist (develop apps for personal use)",
            },
          ],
          colCount: 2,
        },
        {
          type: "radiogroup",
          name: "developer_count",
          visibleIf: "{organization_type} != 'Hobbyist'",
          title: "How many software developers are in your organization?",
          choices: ["1", "2", "3-5", "6-10", "> 10"],
        },
        {
          type: "radiogroup",
          name: "VerticalMarket",
          visibleIf: "{organization_type} != 'Hobbyist'",
          title: "What vertical market does your product serve?",
          hasOther: true,
          choices: [
            "Automotive",
            "Banking",
            "Consumer",
            "Education",
            "Engineering",
            "Energy",
            "Fast-moving consumer goods",
            "Financial",
            "FinTech",
            "Food and beverage",
            "Government (federal, state, local)",
            "Healthcare",
            "Insurance",
            "Legal",
            "Manufacturing",
            "Media",
            "Online",
            "Raw materials",
            "Real estate",
            "Religion",
            "Retail",
            "Jewelry",
            "Technology",
            "Telecommunications",
            "Transportation (Travel)",
            "Electronics",
            "Not-for-profit",
          ],
          colCount: 4,
        },
        {
          type: "radiogroup",
          name: "product_discovering",
          title: "How did you first discover the product? ",
          hasOther: true,
          choices: [
            "Search engine",
            "GitHub",
            "Friend or colleague",
            "Redit",
            "Medium",
            "Twitter",
            "Facebook",
          ],
          otherText: "Other",
          colCount: 3,
        },
      ],
    },
    {
      name: "page_libraries_usage",
      elements: [
        {
          type: "checkbox",
          name: "javascript_frameworks",
          title: "What JavaScript framework do you use?",
          hasOther: true,
          choices: [
            "React",
            "Angular",
            "jQuery",
            "Vue",
            "Meteor",
            "Ember",
            "Backbone",
            "Knockout",
            "Aurelia",
            "Polymer",
            "Mithril",
          ],
          choicesOrder: "asc",
          otherText: "Other (Please name it)",
          colCount: 3,
        },
        {
          type: "checkbox",
          name: "backend_language",
          title: "What Web Backend programming language do you use?",
          hasOther: true,
          choices: [
            "Java",
            "Python",
            "Node.js",
            "Go",
            "Django",
            "Asp.net",
            "Ruby",
          ],
          choicesOrder: "asc",
          otherText: "Other (Please name it)",
          colCount: 3,
        },
      ],
    },
    {
      name: "page_product_usage",
      elements: [
        {
          type: "radiogroup",
          name: "useproduct",
          title: "Do you currently use our libraries? ",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "checkbox",
          name: "uselibraries",
          visibleIf: '{useproduct} = "Yes"',
          title: "What libraries do you use?",
          isRequired: true,
          choices: ["Survey Library (Runner)", "Survey Creator (Designer)"],
        },
        {
          type: "checkbox",
          name: "product_new",
          title:
            "We are going to release new libraries shortly. Please check a product(s), if you are interesting to use them",
          choices: [
            "Export to PDF (survey and its result)",
            "Analytics (Create Analytics based on JSON results)",
          ],
        },
        {
          type: "checkbox",
          name: "supported_devices",
          title: "What device types do you need to support?",
          isRequired: true,
          choices: ["Desktop", { value: "Tablete", text: "Tablet" }, "Mobile"],
        },
        {
          type: "radiogroup",
          name: "native_mobile_support",
          visibleIf: '{supported_devices} contains "Mobile"',
          title: "How is important for you a native mobile support?",
          isRequired: true,
          choices: [
            { value: "1", text: "I am happy with adaptive html rendering" },
            {
              value: "2",
              text: "Something important, but adaptive html rendering is fine",
            },
            { value: "3", text: "Very important" },
            { value: "4", text: "Can not use the library without it" },
          ],
        },
        {
          type: "radiogroup",
          name: "native_framework",
          visibleIf: "{native_mobile_support} >= 3",
          title:
            "Please name the framework that you are using or going to use in your native mobile developlment",
          hasOther: true,
          choices: [
            "react native",
            "nativescript",
            "ionic",
            "xamarin",
            "native iOS and Android apps",
          ],
          otherText: "Other (Please name it)",
          colCount: 2,
        },
      ],
    },
    {
      name: "page_alternative",
      elements: [
        {
          type: "radiogroup",
          name: "product_alternative",
          title:
            "What would you use as an alternative if SurveyJS does not exist?",
          isRequired: true,
          hasOther: true,
          choices: ["Use popular Survey cloud platforms", "Develop ourselves"],
          otherText: "Other (please name)",
        },
        {
          type: "text",
          name: "survey_cloud_platform",
          visibleIf:
            '{product_alternative} = "Use popular Survey cloud platforms"',
          title: "What Survey cloud platform would be your choice?",
        },
        {
          type: "radiogroup",
          name: "product_recommend",
          title: "Have you recommended the product to anyone?",
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page_recommend",
      elements: [
        {
          type: "rating",
          name: "nps_score",
          title:
            "How likely are you to recommend SurveyJS to a friend or colleague?",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Most unlikely",
          maxRateDescription: "Most likely",
        },
        {
          type: "comment",
          name: "favorite_functionality",
          title: "What's your favorite functionality / add-on?",
        },
        {
          type: "comment",
          name: "product_improvement",
          title:
            "How could our products be improved to better meet your needs?",
        },
        {
          type: "signaturepad",
          name: "signature",
          title:
            "Signature",
        },
      ],
    },
  ],
  surveyPostId: "c989aefb-9d47-4477-b9af-54a770dc4803",
  cookieName: "87b306f1-e41c-47c3-99de-1d2cd46c8253",
};

var data = [
  {
    Quality: {
      affordable: "2",
    },
    custom: { min: 4, max: 10 },
    bool: true,
    organization_type: "In-house",
    developer_count: "6-10",
    VerticalMarket: "Consumer",
    product_discovering: "GitHub",
    javascript_frameworks: ["Angular", "jQuery", "React", "other"],
    backend_language: ["Asp.net", "other"],
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)", "Survey Creator (Designer)"],
    product_new: [
      "Export to PDF (survey and its result)",
      "Analytics (Create Analytics based on JSON results)",
    ],
    supported_devices: ["Mobile"],
    native_mobile_support: "3",
    native_framework: "react native",
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 9,
    favorite_functionality:
      "The ease of creating survey in the survey builder and rendering the html in the web browser",
    product_improvement:
      "Native support for the the mobile platform will be great.",
    "javascript_frameworks-Comment": "React Native",
    "backend_language-Comment": "PHP",
    HappendAt: "2019-06-27T14:08:48.0500949",
    survey_cloud_platform: "",
    "signature": "data:image/png;base64,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"
  },
  {
    custom: { min: 3, max: 9 },
    bool: true,
    organization_type: "other",
    developer_count: "3-5",
    VerticalMarket: "Online",
    product_discovering: "GitHub",
    javascript_frameworks: ["Vue"],
    backend_language: ["Ruby", "Node.js"],
    useproduct: "No",
    product_new: [
      "Analytics (Create Analytics based on JSON results)",
      "Export to PDF (survey and its result)",
    ],
    supported_devices: ["Desktop", "Tablete", "Mobile"],
    native_mobile_support: "2",
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 8,
    favorite_functionality: "I like the flexibility of surveyJS",
    product_improvement:
      "The product is super functional, but the UX is challenging. If one of your goals is to attract an audience to use your Survey Builder on your site, then I would revisit the usability of your UI. I was able to use it successfully, so don't take this input as negative. There was some trial and error for me in learning your UI and the survey logic the way it is presented today. I think you could make it way better and take on SurveyMonkey.",
    "organization_type-Comment": "Start up",
    HappendAt: "2019-07-02T19:17:31.0318927",
    uselibraries: "",
    native_framework: "",
    survey_cloud_platform: "",
  },
  {
    Quality: {
      affordable: "1",
      "does what it claims": "1",
      "better then others": "1",
      "easy to use": "1",
    },
    bool: false,
    organization_type: "Custom",
    developer_count: "3-5",
    VerticalMarket: "Education",
    product_discovering: "Search engine",
    javascript_frameworks: ["jQuery", "Vue"],
    backend_language: ["other"],
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)"],
    product_new: ["Analytics (Create Analytics based on JSON results)"],
    supported_devices: ["Desktop", "Mobile"],
    native_mobile_support: "2",
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 6,
    "backend_language-Comment": "php",
    HappendAt: "2019-07-02T02:56:21.2724686",
    native_framework: "",
    survey_cloud_platform: "",
    favorite_functionality: "",
    product_improvement: "",
  },
  {
    Quality: {
      affordable: "3",
      "does what it claims": "4",
      "better then others": "2",
      "easy to use": "3",
    },
    organization_type: "ISV",
    developer_count: "3-5",
    VerticalMarket: "Food and beverage",
    product_discovering: "GitHub",
    javascript_frameworks: ["jQuery"],
    backend_language: ["Django"],
    useproduct: "No",
    supported_devices: ["Tablete"],
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 10,
    favorite_functionality: "dgefd",
    product_improvement: "dfgdfg",
    HappendAt: "2019-06-26T11:21:53.8059531",
    uselibraries: "",
    product_new: "",
    native_mobile_support: "",
    native_framework: "",
    survey_cloud_platform: "",
  },
  {
    Quality: {
      affordable: "3",
      "does what it claims": "4",
      "easy to use": "3",
    },
    organization_type: "ISV",
    developer_count: "1",
    VerticalMarket: "Automotive",
    product_discovering: "Search engine",
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)"],
    product_new: ["Analytics (Create Analytics based on JSON results)"],
    supported_devices: ["Desktop", "Tablete"],
    product_alternative: "Develop ourselves",
    product_recommend: "No",
    nps_score: 3,
    HappendAt: "2019-06-28T12:12:53.1392624",
    javascript_frameworks: "",
    backend_language: "",
    native_mobile_support: "",
    native_framework: "",
    survey_cloud_platform: "",
    favorite_functionality: "",
    product_improvement: "",
  },
  {
    organization_type: "Consulting",
    developer_count: "> 10",
    VerticalMarket: "Telecommunications",
    product_discovering: "GitHub",
    javascript_frameworks: ["Angular"],
    backend_language: ["Java", "other"],
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)"],
    product_new: ["Analytics (Create Analytics based on JSON results)"],
    supported_devices: ["Desktop"],
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 8,
    "backend_language-Comment": "PHP",
    HappendAt: "2019-07-01T06:05:57.1320385",
    native_mobile_support: "",
    native_framework: "",
    survey_cloud_platform: "",
    favorite_functionality: "",
    product_improvement: "",
  },
  {
    organization_type: "In-house",
    developer_count: "2",
    VerticalMarket: "Healthcare",
    product_discovering: "Search engine",
    javascript_frameworks: ["jQuery"],
    backend_language: ["other"],
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)", "Survey Creator (Designer)"],
    product_new: [
      "Export to PDF (survey and its result)",
      "Analytics (Create Analytics based on JSON results)",
    ],
    supported_devices: ["Desktop", "Tablete", "Mobile"],
    native_mobile_support: "2",
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 8,
    product_improvement:
      'Fix RTL bugs.\nSave "not answered questions" in a matrix survey\'s json.',
    "backend_language-Comment": "PHP",
    HappendAt: "2019-06-28T05:25:45.8020618",
    native_framework: "",
    survey_cloud_platform: "",
    favorite_functionality: "",
  },
  {
    organization_type: "Consulting",
    developer_count: "> 10",
    VerticalMarket: "Banking",
    product_discovering: "Search engine",
    javascript_frameworks: ["Angular"],
    backend_language: ["Java"],
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)"],
    product_new: ["Export to PDF (survey and its result)"],
    supported_devices: ["Mobile", "Tablete", "Desktop"],
    native_mobile_support: "1",
    product_alternative: "Develop ourselves",
    product_recommend: "No",
    nps_score: 8,
    HappendAt: "2019-06-26T12:14:18.5777108",
    native_framework: "",
    survey_cloud_platform: "",
    favorite_functionality: "",
    product_improvement: "",
  },
  {
    organization_type: "Custom",
    developer_count: "3-5",
    VerticalMarket: "Financial",
    product_discovering: "Search engine",
    javascript_frameworks: ["jQuery"],
    backend_language: ["other"],
    useproduct: "No",
    product_new: [
      "Export to PDF (survey and its result)",
      "Analytics (Create Analytics based on JSON results)",
    ],
    supported_devices: ["Desktop", "Tablete", "Mobile"],
    native_mobile_support: "2",
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 10,
    "backend_language-Comment": "PHP",
    HappendAt: "2019-07-01T17:17:09.4407724",
    uselibraries: "",
    native_framework: "",
    survey_cloud_platform: "",
    favorite_functionality: "",
    product_improvement: "",
  },
  {
    organization_type: "In-house",
    developer_count: "1",
    VerticalMarket: "Education",
    product_discovering: "GitHub",
    javascript_frameworks: ["jQuery"],
    backend_language: ["Ruby"],
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)"],
    product_new: ["Export to PDF (survey and its result)"],
    supported_devices: ["Desktop", "Tablete", "Mobile"],
    native_mobile_support: "2",
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 6,
    product_improvement:
      "The lack of accessibility is a huge disadvantage. That's one reason why I cannot use it in all my projects.",
    HappendAt: "2019-07-03T09:14:39.8798894",
    native_framework: "",
    survey_cloud_platform: "",
    favorite_functionality: "",
  },
  {
    organization_type: "Consulting",
    developer_count: "3-5",
    VerticalMarket: "Government (federal, state, local)",
    product_discovering: "Search engine",
    javascript_frameworks: ["Vue", "jQuery", "other"],
    backend_language: ["Python", "Node.js"],
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)"],
    product_new: [
      "Analytics (Create Analytics based on JSON results)",
      "Export to PDF (survey and its result)",
    ],
    supported_devices: ["Desktop"],
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 8,
    "javascript_frameworks-Comment": "AngularJS",
    HappendAt: "2019-07-01T19:00:39.5885133",
    native_mobile_support: "",
    native_framework: "",
    survey_cloud_platform: "",
    favorite_functionality: "",
    product_improvement: "",
  },
  {
    organization_type: "In-house",
    developer_count: "3-5",
    VerticalMarket: "Retail",
    product_discovering: "GitHub",
    javascript_frameworks: ["jQuery", "Angular"],
    backend_language: ["Asp.net"],
    useproduct: "Yes",
    uselibraries: ["Survey Library (Runner)", "Survey Creator (Designer)"],
    product_new: [
      "Export to PDF (survey and its result)",
      "Analytics (Create Analytics based on JSON results)",
    ],
    supported_devices: ["Mobile"],
    native_mobile_support: "3",
    native_framework: "react native",
    product_alternative: "Develop ourselves",
    product_recommend: "Yes",
    nps_score: 8,
    favorite_functionality: "Audio Recording,nicely handle logical checks",
    HappendAt: "2019-06-27T13:28:37.9863595",
    survey_cloud_platform: "",
    product_improvement: "",
  },
  {

  }
];
