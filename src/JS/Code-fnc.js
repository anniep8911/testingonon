import style from './asset/style';
import doc from './docs/코드작성방법';

export default {
  title: 'Examples/SinglePage'
};

export const SinglePage = (cat) => {
  let result = '';

  switch (cat) {
    case '함수선언':
      result = doc.함수작성규칙.함수선언;
      break;
    case '호출순서':
      result = doc.함수작성규칙.호출순서;
      break;
    case 'maintain':
      result = maintain;
      break;
  }

  return `${style}${result}`;
};
