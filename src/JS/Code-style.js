import readable from './코드스타일_가독성문서';
import consis from './코드스타일_일관성문서';
import maintain from './코드스타일_유지보수성문서';

export default {
  title: 'Examples/SinglePage'
};

export const SinglePage = (cat) => {
  let result = '';
  let style = `
    <style>
      ol{
        list-style-position: inside;
        margin-top:0px;
        padding:0px;
      }
      .css-1fdphfk{
        display:none;
      }
      li{
        font-weight:700;
        line-height:50px;
      }
      h5{
        color: #333;
        line-height:40px;
      }
    </style>
  `;
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
