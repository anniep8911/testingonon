export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical', // 기본 정렬 방식
      order: [
        '현대면세점 퍼블리싱가이드',
        'GIT',
        '업무프로세스',
        '코드규약',
        '*', // 나머지
      ],
      locales: 'ko-KR', // 한글 정렬 시 유용
    },
  },
    docs: {
    codePanel: true
  },
  controls: {disable: true },
  
  actions: { disable: true },
};