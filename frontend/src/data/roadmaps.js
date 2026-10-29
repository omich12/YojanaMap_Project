export const roadmaps = {
  'frontend-developer': {
    title: 'Frontend Developer',

    description:
      'Follow this roadmap step by step to build the core skills needed for frontend development.',

    sections: [
      {
        id: 1,
        title: 'Foundations',
        description: 'Start with the fundamentals of the web.',

        skills: [
          {
            id: 1,
            title: 'Internet Basics',
            type: 'required',

            description:
              'Understand how the internet, browsers, websites, HTTP and domain names work.',

            resources: [
              {
                id: 1,
                title: 'How the Internet Works',
                provider: 'MDN',
                type: 'Article',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
              {
                id: 2,
                title: 'Internet Basics in Nepali',
                provider: 'Nepali Learning Resource',
                type: 'Video',
                cost: 'Free',
                language: 'Nepali',
                source: 'Local',
              },
            ],
          },

          {
            id: 2,
            title: 'HTML & CSS',
            type: 'required',

            description:
              'Learn how to structure web pages using HTML and style them using CSS.',

            resources: [
              {
                id: 1,
                title: 'Learn HTML',
                provider: 'MDN',
                type: 'Documentation',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
              {
                id: 2,
                title: 'HTML & CSS Course',
                provider: 'Nepali Learning Resource',
                type: 'Video',
                cost: 'Free',
                language: 'Nepali',
                source: 'Local',
              },
            ],
          },
        ],
      },

      {
        id: 2,
        title: 'Programming',
        description: 'Learn programming and development tools.',

        skills: [
          {
            id: 3,
            title: 'JavaScript',
            type: 'required',

            description:
              'Learn programming fundamentals and make websites interactive using JavaScript.',

            resources: [
              {
                id: 1,
                title: 'JavaScript Guide',
                provider: 'MDN',
                type: 'Documentation',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
              {
                id: 2,
                title: 'JavaScript in Nepali',
                provider: 'Nepali Learning Resource',
                type: 'Video',
                cost: 'Free',
                language: 'Nepali',
                source: 'Local',
              },
              {
                id: 3,
                title: 'Complete JavaScript Course',
                provider: 'Online Course',
                type: 'Course',
                cost: 'Paid',
                language: 'English',
                source: 'Global',
              },
            ],
          },

          {
            id: 4,
            title: 'Git & GitHub',
            type: 'recommended',

            description:
              'Learn version control and how developers manage and collaborate on code.',

            resources: [
              {
                id: 1,
                title: 'Git and GitHub Basics',
                provider: 'GitHub',
                type: 'Documentation',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
            ],
          },
        ],
      },

      {
        id: 3,
        title: 'Frontend Framework',
        description: 'Start building modern frontend applications.',

        skills: [
          {
            id: 5,
            title: 'React',
            type: 'required',

            description:
              'Learn components, props, state and other concepts used to build modern React applications.',

            resources: [
              {
                id: 1,
                title: 'Learn React',
                provider: 'React',
                type: 'Documentation',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
              {
                id: 2,
                title: 'React Course in Nepali',
                provider: 'Nepali Learning Resource',
                type: 'Video',
                cost: 'Free',
                language: 'Nepali',
                source: 'Local',
              },
            ],
          },

          {
            id: 6,
            title: 'Tailwind CSS',
            type: 'optional',

            description:
              'Learn a utility-first CSS framework that can help you build interfaces faster.',

            resources: [
              {
                id: 1,
                title: 'Tailwind CSS Documentation',
                provider: 'Tailwind CSS',
                type: 'Documentation',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Application Development',
        description: 'Learn how real frontend applications work.',

        skills: [
          {
            id: 7,
            title: 'Working with APIs',
            type: 'required',

            description:
              'Learn how frontend applications request and use information from backend APIs.',

            resources: [
              {
                id: 1,
                title: 'Using Fetch',
                provider: 'MDN',
                type: 'Documentation',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
            ],
          },

          {
            id: 8,
            title: 'Testing',
            type: 'recommended',

            description:
              'Learn the basics of checking that your application works correctly.',

            resources: [
              {
                id: 1,
                title: 'Frontend Testing Basics',
                provider: 'Web Resource',
                type: 'Article',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
            ],
          },
        ],
      },

      {
        id: 5,
        title: 'Career Preparation',
        description: 'Turn your skills into practical experience.',

        skills: [
          {
            id: 9,
            title: 'Build Projects',
            type: 'required',

            description:
              'Apply your skills by building practical frontend projects for your portfolio.',

            resources: [
              {
                id: 1,
                title: 'Frontend Project Ideas',
                provider: 'YojanaMap',
                type: 'Guide',
                cost: 'Free',
                language: 'English',
                source: 'Local',
              },
            ],
          },

          {
            id: 10,
            title: 'Deployment',
            type: 'required',

            description:
              'Learn how to publish your projects so other people can access them online.',

            resources: [
              {
                id: 1,
                title: 'Frontend Deployment Guide',
                provider: 'Web Resource',
                type: 'Guide',
                cost: 'Free',
                language: 'English',
                source: 'Global',
              },
            ],
          },
        ],
      },
    ],
  },
}