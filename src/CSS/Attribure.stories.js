import { SinglePage } from './Attribute.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path= '코드규약/CSS/공통/02.속성/02.금지속성';

const md=(type)=>{
  let result = ``;
  (type ==='block')?
    result=
    `
      블록
    ` 

 :
  (type ==='section')?
  
    result=
    `
    섹션
    ` 
:
  (type ==='element')?
    result=
    `
    엘리먼트
    `    
 :

    result=
    `
    금지 속성이라는 의미는, 추후 유지보수를 위해 스타일의 override 혼동을 방지하기 위함으로 지정한 내용이다.
    `
  return result;
}



// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
   parameters: {
      docs: {
        description: { 
          component: marked(md()),
        },
      },


    },
};



// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage,md, ['block', 'section', 'element','item','atom'],'style');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 금지속성 = stories.block;