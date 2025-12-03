import style from './asset/style';
import doc from './docs/코드작성방법';

export default {
  title: 'Examples/SinglePage'
};

export const SinglePage = (cat) => {
  let result = '';

  for (let i in doc.이벤트핸들링) {
    cat === i ? (result = doc.이벤트핸들링[i]) : '';
  }

  return `${style}${result}`;
};
