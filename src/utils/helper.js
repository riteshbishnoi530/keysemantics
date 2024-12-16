import File from  '../lottie/file server .json'
import Search from '../lottie/search .json'
import Server from '../lottie/server search .json'
import { ACCORDION_ARROW } from './icon';
export const SEARCH_LIST = [
         'API-First / Headless => integrate seamlessly with your applications',    
         'Combine data from multiple sources',
         'Push / Crawl => Your choice: Push your data to our APIs or let our crawlers crawl your content'
];

export const DATA_SECURITY = [
    
         'SaaS => we provide the search infrastructure so you can focus on your applications',
    
    
        'Hosted in a Swiss datacenter by Microsoft'
    
];

export const KEY_SEMANTICS_WORK = [
    {
        lotty: File,
        description: 'Websites, documents and images are pushed into our Analysis API.'
    },
    {
        lotty: Search,
        description: 'Using highly optimized and trained AI models, we analyze, vectorize and extract semantic information and relations from your content.'
    },
    {
        lotty: Server,
        description: 'Our enterprise-grade semantic search engine allows you to query your content in many ways. You’ll be amazed by the speed, precision and relevance of the results!'
    }
    
];

export const FOOTER_INPUT = [
    {
        type: 'text',
        placeholder: 'Name',
    },
    {
        type: 'email',
        placeholder: 'Email'
    },
    {
        type: 'text',
        placeholder: 'Company'
    },
    {
        type: 'number',
        placeholder: 'phone (optional)'
    }
];

export const FAQ_LIST = [
    {
      title: "Accordion Heading #one",
      arrowImg: <ACCORDION_ARROW/>,
      descriptionOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionTwo:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgOne: "/assets/images/accordion-image-one.webp",
        imgTwo: "/assets/images/accordion-image-two.webp",
      descriptionThree:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Accordion Heading #two",
      arrowImg: <ACCORDION_ARROW/>,
      descriptionOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionTwo:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgOne: "/assets/images/accordion-image-one.webp",
        imgTwo: "/assets/images/accordion-image-two.webp",
      descriptionThree:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Accordion Heading #three",
      arrowImg: <ACCORDION_ARROW/>,
      descriptionOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionTwo:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgOne: "/assets/images/accordion-image-one.webp",
        imgTwo: "/assets/images/accordion-image-two.webp",
      descriptionThree:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Accordion Heading #four",
      arrowImg: <ACCORDION_ARROW/>,
      descriptionOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionTwo:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgOne: "/assets/images/accordion-image-one.webp",
      imgTwo: "/assets/images/accordion-image-two.webp",
      descriptionThree:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  export const FAQ_TEXT = [
    "Let customers discover your content using AI-generated questions and answers",
    "Seamlessly integrated into the Semantic Search experience",
    "LLM-powered Question Answering",
  ]