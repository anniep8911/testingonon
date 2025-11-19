export default {
  title: 'Examples/SinglePage',
};

export const SinglePage = (cat) =>{
  let ele = 
  `
  /* 공통 */ <br/>
    .content__wrap{} <br/>
    .content{}<br/>
    .content header{}<br/>
    .content header h2{}<br/>
    .content header h4{}<br/>
    .content section{}<br/>
    .content article{}<br/>
    .content article .image{}<br/>
    .content article .texts{}<br/>
    .content article h2{}<br/>
    .content article h4{}<br/>
    .content article p{}<br/>
    
    <br/>
    
  /* 개별 */ <br/>
    .content__wrap--01{}<br/>
    .content--01{}<br/>
    .content--01 header{}<br/>
    .content--01 header h2{}<br/>
    .content--01 header h4{}<br/>
    .content--01 section{}<br/>
    .content--01 article{}<br/>
    .content--01 article:nth-of-type(1){}<br/>
    .content--01 .art--01{}<br/>
    .content--01 .art--01 .image{}<br/>
    .content--01 .art--01 .texts{}<br/>
    .content--01 .art--01 h3{}<br/>
    .content--01 .art--01 h4{}<br/>
    .content--01 .art--01 p{}<br/>
  `;


if(cat ==='element'){
    ele = 
   `
    div.content__wrap--01{}<br/>
    #contentWrap{}<br/>
    .content__wrap--01#contentWrap{}<br/>
    article.art--01{}<br/>
    #article01.content__art<br/>
    div.conten--01 header h2{}<br/>
    div.conten--01 section article .image{}<br/>
    .content--01 .art--01 .texts h3{}<br/>
    .content--01 .art--01 .texts>h3{}<br/>
    .content--01 .art--01 .texts h3+h4{}<br/>
    .content--01 .content__art ~ div{}<br/>
   `;
  
}
  let result = `${ele}
<style>
${ele.replaceAll('<br/>','')}
</style>`;

  return result
}
  
