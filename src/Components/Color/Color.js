import color from '../assets/color-data';
const commonStyle = `
    <style>
        .css-s230ta{
            border:0px solid transparent;
            box-shadow: 0 0 0 red;
        }
        .code{
            margin-top:20px;
        }
        .css-1fdphfk{
            display:none;
        }
    </style>
`;

export const SinglePage = (cat) => {
  let result = ``;
  let style = ``;
  let col =``;

  for(let i in color[`${cat}`]){

    col = `background-color : ${color[cat][i].color};`
    if(Array.isArray(color[cat][i].color)){
        col = `background : linear-gradient(127deg,${color[cat][i].color});`;
    }
    style += `
    <style>
         .${color[cat][i].name}{
           width: 400px;
            height: 100px;
            color: #fff;
            ${col}
            margin-top:20px;
            padding:10px;
            font-weight:700;
            text-shadow: 
                -1px -1px 0 #000, /* 좌상단 그림자 */
                1px -1px 0 #000,  /* 우상단 그림자 */
                -1px 1px 0 #000,  /* 좌하단 그림자 */
                1px 1px 0 #000;   /* 우하단 그림자 */;
            outline: 1px solid #ccc;
           mix-blend-mode: difference;
        }
    </style>
    `
    result += `<div class="${color[cat][i].name}">${color[cat][i].name} <br/>${color[cat][i].color} <br/> <sub>${color[cat][i].cmt}</sub></div>  <pre class="code">
${col}</pre>`;
}
  
  return `${commonStyle}${style}${result}`;
};
