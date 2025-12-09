import typo from '../assets/typo-data';

export const SinglePage = (cat) => {
    let style = `
<style>
    .font__${cat}{
        font-size: ${typo.mob[cat].fz}px;
        font-weight:400;
        line-height: ${typo.mob[cat].lh}px;
    } 
</style>
    `;
  let result = `<${typo.mob[cat].tag} class="font__${cat}">현대백화점 면세점</${typo.mob[cat].tag}>`;
  console.log(typo.mob[cat]);
  
  return `${style}${result}`;
};
