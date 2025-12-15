import { SinglePage } from './Excel.js';

const md = (name) => {
  const descriptions = {
    Excel: '돈 계산과 스케줄 관리를 위한 간단한 엑셀 도구',
  };
  return descriptions[name] || '';
};

const stories = {
  Excel: { render: () => SinglePage() },
};

export const Excel = stories.Excel;

export default {
  title: 'Etc/Excel',
  parameters: {
    docs: {
      description: {
        component: md('Excel'),
      },
    },
  },
};
