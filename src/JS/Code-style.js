import style from './asset/style';
import readable from './docs/코드스타일_가독성문서';
import maintain from './docs/코드스타일_유지보수성문서';
import consis from './docs/코드스타일_일관성문서';

export default {
  title: 'Examples/SinglePage'
};

export const SinglePage = (cat) => {
  let result = '';

  switch (cat) {
    case 'readable':
      result = readable;
      break;
    case 'consis':
      result = consis;
      break;
    case 'maintain':
      result = maintain;
      break;
  }
  return `${style}${result}`;
};
