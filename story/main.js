// .storybook/main.js
export default {
  stories: ['../src/**/*.@(stories.@(js|ts|mdx)|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { docs: true },
    },
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: { autodocs: true },
  staticDirs: ['public'],
   viteFinal: async (config) => {
    config.base = '/Guide/story/storybook-static/'; 
    return config;
  },
};
