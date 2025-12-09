import typo from '../assets/typo-data';
import truncate from '../../math.fnc';



export const SinglePage = (cat) => {
    let style = `
<style>
    .font__${cat}{
        font-size: ${typo.pc[cat].fz}px;
        font-weight:400;
        line-height: ${typo.pc[cat].lh}px;
        letter-spacing: ${truncate(typo.pc[cat].fz * -0.025,2)}px;
    }
</style>
    `;
  let result =`<${typo.pc[cat].tag} class="font__${cat}">현대백화점 면세점</${typo.pc[cat].tag}>`;
  console.log(typo.pc[cat]);
  
  return `${style}${result}`;
};252
