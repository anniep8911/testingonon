
import { SinglePage } from './Selector.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path= '코드규약/CSS/공통/01.선택자';

// 작성 내용은 아래의 기준에 따라서 작성할것.
let 기본다큐먼트 =  `
- 모든 선택자는 class위주로 작성한다 (‼️아이디 사용금지‼️)
- 꼭 필요한 override경우를 제외하고 자식, 형제 결합자 사용금지 (+,~,>)
- 꼭 필요한 케이스를 제외하고 태그와 함께 클래스 선택자 사용금지 (예: article.content__art.article--01)
- 3depth 이상의 선택자는 지양한다 (전면금지는 아니지만, 최대한 사용을 줄인다)
- 상태, 타이포그래피, 컬러, 배경컬러 등은 단일 선택자로 설정한다.
- n번째 자식요소 선택시 nth-of-type만 사용한다 (짝수, 홀수 동일)

다음과 같은 구조의 html을 선택한다고 가정할때, 모범케이스와 금지 케이스는 아래와 같다. <br/>
<sub>아래의 케이스는 마크업 규약과 무관한 태그로, 실제 마크업 규약에서는 ‼️id 전면 사용 금지‼️이다.</sub>
<div style="width:100%; outline:1px solid #ccc; padding: max(2%, 5px)">
  <pre>
  &lt;div class="content\\_\\_wrap content\\_\\_wrap--01" id="contentWrap"&gt;
    &lt;div class="content content--01"&gt;
       &lt;header&gt;
          &lt;h2&gt;콘텐츠 타이틀&lt;/h2&gt;
          &lt;h4&gt;콘텐츠 서브 타이틀&lt;/h4&gt;
       &lt;/header&gt;
       &lt;section&gt;
          &lt;article class="content__art art--01" id="article01"&gt;
              &lt;div class="image"&gt;&lt;/div&gt;
              &lt;div class="texts"&gt;
                &lt;h3&gt;아티클 타이틀&lt;/h3&gt;
                &lt;h4&gt;아티클 섭타이틀&lt;/h4&gt;
                &lt;p&gt; 두줄이상의 내용 &lt;/p&gt;
              &lt;/div&gt;
          &lt;/article&gt;
       &lt;/section&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  </pre>
  </div>
`;

let 모범케이스다큐먼트 =`- class위주의 선택자 작성
- 태그와 클래스 선택자 미사용
- 최대 3depth의 선택자 사용`; 

let 금지케이스다큐먼트 =  `
- 아이디 선택자 사용
- 3depth 이상 선택자 사용
- 태그와 선택자명 동시 사용
- 자식 형제결합자 사용
`;

const md=(type)=>{
  let result = ``;
  (type ==='block')?
  // 블록일때 표시할 내용
    result=모범케이스다큐먼트

: (type ==='element')?
  result = 금지케이스다큐먼트

:
  // 전체 공통으로 표시할 내용
  result=기본다큐먼트;
  return result;
}


// 🔹 스토리북 기본 메타 정보
export default {
  title: path,
   parameters: {
      docs: {description: { component: marked(md())},
      },
    },
};



// 🔹 스토리 생성 (자동 등록)
const stories = makeStories(SinglePage,md, ['block','element'],'style');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 모범케이스 = stories.block;
export const 금지케이스 = stories.element;