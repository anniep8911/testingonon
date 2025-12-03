import style from './asset/style';
import docs from './docs/코드작성방법';

export default {
  title: 'Examples/SinglePage'
};

export const SinglePage = (cat) => {
  let result = '';
  switch (cat) {
    case 'DOM탐색':
      result = docs.DOM탐색조작.DOM탐색;
      break;
    case 'DOM조작':
      result = docs.DOM탐색조작.DOM조작;
      break;
  }

  return `${style}${result}`;
};
