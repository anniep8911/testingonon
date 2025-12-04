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
    // 👉 GitHub Pages 절대 경로 (나중에 필요하면 활성화)
    config.base = '/testingonon/storybook-static/'; 

    // 👉 Codespaces에서 실행 시 경로
    // config.base = '/storybook-static/';

    // 👉 🔥 여기 추가 (HMR OFF)
    config.server = {
      ...(config.server || {}),
      hmr: false,   // Codespace 깜빡임 방지 핵심 옵션
    };

    return config;
  },
};
