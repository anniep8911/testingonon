import style from './asset/style';
import doc from './docs/코드작성방법';

export default {
  title: 'Examples/SinglePage'
};

export const SinglePage = (cat) => {
  let result = '';
  switch (cat) {
    case 'let':
      result = doc.변수상수관리.LET;
      break;
    case 'cons':
      result = doc.변수상수관리.CONST;
      break;
  }

  return `${style}${result}`;
};
