import naming from './docs/네이밍규칙';
import style from './asset/style';

export default {
  title: 'Examples/SinglePage'
};

export const SinglePage = (cat) => {
  let result = '';
  switch (cat) {
    case 'var':
      result = naming.LET;
      break;
    case 'func':
      result = naming.CONST;
      break;
  }

  return `${style}${result}`;
};
