// Core i18next library.
import i18n from "i18next";                      
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from "react-i18next";

i18n
  // Add React bindings as a plugin.
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use English here, but feel free to use
    // whichever locale you want.                   
    lng: "en",

    // Fallback locale used when a translation is
    // missing in the active locale. Again, use your
    // preferred locale here. 
    fallbackLng: "en",

    // Enables useful output in the browser’s
    // dev console.
    debug: true,

    // Normally, we want `escapeValue: true` as it
    // ensures that i18next escapes any code in
    // translation messages, safeguarding against
    // XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn 
    // it off in i18next.
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: {
          resume: {
            name: "Rel Gray",
            job_title: "Senior Software Engineer",
            location: "Virginia, USA",
            summary: {
              header: "Summary",
              overview: "Senior front-end engineer with extensive experience evaluating, learning, and implementing different web technologies to solve unique technical challenges",
              experience: "Over ten years of remote development experience with strong self-motivation and communication skills to match",
              adaptive: "Adaptive developer capable of quickly learning new technologies and rapidly developing skills necessary to get the job done"
            },
            experience: {
              header: "Experience",
              leadr: {
                job_title: "Senior Software Engineer",
                information: "Leadr, Inc. | Nov 2021 - May 2024",
                summary: {
                  soc: "Was instrumental in laying the technical groundwork required for the company to achieve full SOC 2 compliance",
                  improvements: "Lead and contributed toward continual paradigm and process improvements which lead to increased development speed and reduced code complexity",
                  departments: "Worked extensively with Product Owners, Design, and various other departments to translate user needs into actionable improvements",
                  mentoring: "Regularly mentored four junior developers to foster improved code quality and greater team expertise",
                  customers: "Worked directly with dozens of customers to diagnose and resolve code and database issues in a live production environment"
                }
              },
              turning: {
                job_title: "Senior Software Engineer",
                information: "Turning Technologies, Inc. | June 2013 - Nov 2021",
                summary: {
                  overview: "Assisted in the planning, implementation, and ongoing maintenance of multiple web front-ends for an audience response system to facilitate remote learning and improve classroom engagement",
                  focus: "Heavy focus on accessibility, internationalization, and security to meet the legal and operational requirements of customers"
                }
              },
            },
            projects: {
              header: "Projects",
              build_improvements: {
                header: "Build Process Improvements",
                summary: {
                  cra_ejection: "Planned and executed moving the company’s primary web-application off CRA to a fully controlled and customised Webpack build process. Granting access to new tools, technologies, and improving the efficiency of the build process",
                  typescript_conversion: "Initialized and helped oversee a transition of the company’s primary web application from vanilla JS to Typescript"
                }
              },
              real_time_meetings: {
                header: "Real Time Meeting Updates",
                summary: {
                  description: "Leveraged a best in class library to add real-time updates for user actions into the applications central most features",
                  planning: "Worked directly with backend developers to plan and design the various messages and data structures necessary for implementation"
                }
              },
              real_time_scoring: {
                header: "Real Time Scoring",
                summary: {
                  description: "Designed and implemented a system to score over a thousand simultaneous participant responses in real time",
                  features: "Leveraged web technologies such as Web Workers and IndexedDB to store and process data without noticeable performance impact",
                }
              },
              hot_spot: {
                header: "Hot Spot Polling Question",
                summary: {
                  description: "Created proof of concept and handled final implementation of an image based question type that allows instructors to define correct answer regions",
                  features: "Built from scratch using Canvas to handle scaling, zooming, panning, drawing, and hit detection"
                }
              }
            },
            skills: {
              header: "Skills",
              code: {
                label: "Languages & Libraries",
                list: "<banana>{{label}}</banana> - Javascript, React, Angular, Typescript, React Query, Redux, Redux-Saga, Ably, Immer, Zustand, Mocha, Karma, Google APIs, Webpack, Babel, ESLint, Websockets, Web Workers, IndexedDB, Canvas, Emotion, SCSS/CSS, Material UI, Twitter Bootstrap"
              },
              tools: {
                label: "Platforms & Tools",
                list: "<banana>{{label}}</banana> - Git, Visual Studio Code, Jira, Git Kraken, Launch Darkly, SourceTree, Figma, Confluence, GitHub, TeamCity"
              }
            },
            education: {
              header: "Education",
              ysu: {
                degree: "Bachelors of Computer Science",
                information: "Youngstown State University | May 2012 | Cum Laude"
              },
            }
          },
        },
      },
    },
  });

export default i18n;
