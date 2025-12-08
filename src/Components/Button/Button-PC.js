import style from '../../JS/asset/style';
import ico from '../assets/icon-data';
const categories= [32,28,24,20,18,16,12];
let datas= [[],[],[],[],[],[],[]];

categories.forEach((c,idx)=>{
  for(let i in ico.PC){
    (i.includes(c))?datas[idx].push(ico.PC[i]):'';
  }
});

export const SinglePage = (cat) => {
  let result = '';

  categories.forEach((c,i)=> {
    if(cat === c){
      datas[i].forEach(dt =>{
        result += `   
<h4>${dt.name}</h4>
<i class="${dt.name}" style="display:block; width:${cat}px; height:${cat}px; background-image:url('${dt.img}');background-size:contain; background-position:center; background-repeat:no-repeat "></i>
<br/>
<pre class="code">
<i class="${dt.name}"></i>
</pre>
`;
      });
    } 
  });
  return `${style}${result}`;
};
