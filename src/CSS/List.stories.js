
import { SinglePage } from './List.js';
import { marked } from 'marked';
import makeStories from '../fnc.js';

let path= '코드규약/CSS/공통/02.속성/01.속성순서';

const md=(type)=>{
  let result = ``;
  (type ==='block')?
  // 블록일때 표시할 내용
    result=
`
- 브라우저가 요소의 크기와 위치를 계산하는 단계.
- 이 단계의 속성들은 레이아웃을 다시 계산하게 만든다.
` 

 :
  (type ==='section')?
  // 블록일때 표시할 내용
    result=
`- 브라우저가 요소의 시각적 스타일(색상, 배경, 그림자 등)을 채우는 단계
- 이 단계의 속성들은 리페인트를 발생시킨다.
` 
:
(type ==='element')?
// 블록일때 표시할 내용
result=
`- 폰트나 텍스트요소를 그리는 단계
- 이 단계의 속성들은 변경 시 리페인트를 발생시킨다.
`  
 :
 
(type ==='item')?
// 블록일때 표시할 내용
result=
`- 브라우저가 레이어를 GPU로 합성하는 단계.
- 이 단계의 속성은 리플로우나 리페인트 없이 GPU 레벨에서 즉시 반영된다.
- 애니메이션 제작에 적합한 속성임
`  
 :
 
(type ==='atom')?
// 블록일때 표시할 내용
result=
`- 렌더링에는 직접 영향 없지만 문서 흐름이나 접근성에 관련된 속성
`  
 :
  // 전체 공통으로 표시할 내용
  result=
`- CSS순서의 경우 브라우저 랜더링 기준으로 잡는다.
- 브라우저 랜더링 순서는 크게 아래와 같은 순서대로 구현된다.

    1. 레이아웃 단계
    2. 페인팅 단계
    3. 텍스트/폰트 단계
    4. 합성단계
    5. 기타속성(순서관련 없음)

작업은 다음과 같은 vscode Extension으로 정렬 프로그램을 활용한다. (암기 불필요)
 <details>
    <summary>설정 및 사용방법(열어서 확인)</summary>
    <ol>
      <li>VSCode에서 Postsorting CSS를 검색한다</li>
      <img src="./css_exten01.png" style="width:50%" />
      <li>PostCSS sorting을 설치한다.</li>
      <img src="./css_exten02.png" style="width:50%"/>
      <li><div style="display:flex"><a href="./settings.json" target="_blank">여기</a>의 코드를 복사한다.</div></li>
      <img src="./css_exten03.png" style="width:50%"/>
      <li>확장팩 상세페이지에서 세탕으로 들어간다.</li>
      <img src="./css_exten04.png" style="width:50%"/>
      <li>edit in settings.json을 클릭한다.</li>
      <img src="./css_exten05.png" style="width:50%"/>
      <li>3에서 복사한 작업내용을 붙여넣기한다. (만약 기존에 내용이 있다면 ,로 구분해서 아래에 추가한다.)</li>
      <img src="./css_exten06.png" style="width:50%"/>
      <li>vscode에서 단축키를 설정한다</li>
      <div style="display:flex; column-gap:10px">
        <img src="./css_exten07.png" style="width:40%"/>
        <img src="./css_exten08.png" style="width:50%"/>
      </div>
      <li>.css 형태의 파일에서만 작업한다. (이벤트의 경우 ctrl c + ctrl v)</li>
      <img src="./css_exten09.png" />
    </ol>
  </details>
`
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
const stories = makeStories(SinglePage,md, ['block', 'section', 'element','item','atom'],'style');

// 🔹 개별 export (Storybook은 이름 기반으로 자동 인식)
export const 레이아웃 = stories.block;
export const 페인팅 = stories.section;
export const 합성 = stories.item;
