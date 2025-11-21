import{k as f,m as u}from"./fnc-BPwxTPe6.js";const y=t=>{let e=`
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>카테고리</th>
        <th>주요 역할</th>
        <th>대표 속성</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Display</td>
        <td>박스 존재 여부</td>
        <td><code>display</code>, <code>visibility</code></td>
      </tr>
      <tr>
        <td>Positioning</td>
        <td>위치 지정, 쌓임 순서</td>
        <td><code>position</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, <code>z-index</code>, <code>float</code>, <code>clear</code></td>
      </tr>
      <tr>
        <td>Box Model</td>
        <td>크기/간격 계산</td>
        <td><code>width</code>, <code>height</code>, <code>min-width</code>, <code>max-width</code>, <code>min-height</code>, <code>max-height</code>, <code>margin</code>, <code>padding</code>, <code>border</code>, <code>box-sizing</code></td>
      </tr>
      <tr>
        <td>Flex/Grid</td>
        <td>부모·자식 레이아웃 계산</td>
        <td><code>flex</code>, <code>flex-basis</code>, <code>flex-grow</code>, <code>flex-shrink</code>, <code>grid-template-*</code>, <code>grid-auto-*</code>, <code>gap</code>, <code>justify-content</code>, <code>align-items</code></td>
      </tr>
      <tr>
        <td>Table/Multi-Column</td>
        <td>표·다단 구조</td>
        <td><code>table-layout</code>, <code>columns</code>, <code>column-width</code>, <code>column-gap</code></td>
      </tr>
      <tr>
        <td>Flow/Alignment</td>
        <td>텍스트/인라인 흐름</td>
        <td><code>vertical-align</code>, <code>text-align</code>, <code>writing-mode</code>, <code>line-height</code>, <code>letter-spacing</code>, <code>word-spacing</code></td>
      </tr>
      <tr>
        <td>Containment</td>
        <td>레이아웃 독립성 제어</td>
        <td><code>contain</code></td>
      </tr>
    </tbody>
</table>


  `;return t==="section"?e=`
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>카테고리</th>
        <th>주요 역할</th>
        <th>대표 속성</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Background</td>
        <td>박스 배경 채우기</td>
        <td><code>background-color</code>, <code>background-image</code>, <code>background-position</code>, <code>background-size</code>, <code>background-repeat</code>, <code>background-clip</code>, <code>background-origin</code></td>
      </tr>
      <tr>
        <td>Border / Outline / Shadow</td>
        <td>테두리, 그림자, 외곽선 표시</td>
        <td><code>border-color</code>, <code>border-style</code>, <code>border-width</code>, <code>border-radius</code>, <code>outline</code>, <code>box-shadow</code></td>
      </tr>
      <tr>
        <td>Text / Content</td>
        <td>텍스트 및 가상 요소 표시</td>
        <td><code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>, <code>line-height</code>, <code>letter-spacing</code>, <code>word-spacing</code>, <code>text-decoration</code>, <code>text-transform</code>, <code>content</code></td>
      </tr>
      <tr>
        <td>Overflow / Clipping</td>
        <td>잘린 영역 처리</td>
        <td><code>overflow</code>, <code>overflow-x</code>, <code>overflow-y</code>, <code>clip</code></td>
      </tr>
      <tr>
        <td>List / Counter</td>
        <td>리스트 마커, 카운터 표시</td>
        <td><code>list-style</code>, <code>list-style-type</code>, <code>list-style-position</code>, <code>list-style-image</code>, <code>counter-increment</code>, <code>counter-reset</code></td>
      </tr>
      <tr>
        <td>UI / Interaction</td>
        <td>커서, 선택 가능 여부 등</td>
        <td><code>cursor</code>, <code>pointer-events</code>, <code>user-select</code></td>
      </tr>
    </tbody>
</table>


  
  `:t==="element"?e=`<table>
  <thead>
    <tr>
      <th>카테고리</th>
      <th>주요 역할</th>
      <th>대표 속성</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Font Family / Size</td>
      <td>글꼴 종류와 크기 지정</td>
      <td><code>font-family</code>, <code>font-size</code>, <code>font-style</code>, <code>font-variant</code>, <code>font-weight</code></td>
    </tr>
    <tr>
      <td>Text Color / Decoration</td>
      <td>글자 색상, 장식, 그림자</td>
      <td><code>color</code>, <code>text-decoration</code>, <code>text-shadow</code>, <code>text-transform</code></td>
    </tr>
    <tr>
      <td>Line / Letter Spacing</td>
      <td>글자 간격 및 줄 간격 조정</td>
      <td><code>line-height</code>, <code>letter-spacing</code>, <code>word-spacing</code></td>
    </tr>
    <tr>
      <td>White-space / Wrapping</td>
      <td>줄바꿈, 공백 처리, 텍스트 흐름 제어</td>
      <td><code>white-space</code>, <code>overflow-wrap</code>, <code>word-break</code></td>
    </tr>
    <tr>
      <td>Text Alignment / Direction</td>
      <td>정렬, 글쓰기 방향</td>
      <td><code>text-align</code>, <code>vertical-align</code>, <code>direction</code>, <code>writing-mode</code></td>
    </tr>
    <tr>
      <td>Text Overflow / Clipping</td>
      <td>잘림, 생략 처리</td>
      <td><code>text-overflow</code>, <code>clip</code></td>
    </tr>
  </tbody>
</table>`:t==="item"?e=`<table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>카테고리</th>
        <th>주요 역할</th>
        <th>대표 속성</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Transform</td>
        <td>GPU 합성(Composite)으로 처리되는 2D/3D 변환</td>
        <td><code>transform</code>, <code>transform-origin</code>, <code>transform-style</code>, <code>perspective</code>, <code>perspective-origin</code></td>
      </tr>
      <tr>
        <td>Opacity / Blending</td>
        <td>불투명도, 혼합 효과</td>
        <td><code>opacity</code>, <code>mix-blend-mode</code>, <code>background-blend-mode</code></td>
      </tr>
      <tr>
        <td>Filter / Mask</td>
        <td>GPU 기반 이미지 효과</td>
        <td><code>filter</code>, <code>backdrop-filter</code>, <code>mask</code>, <code>mask-image</code>, <code>mask-mode</code>, <code>mask-size</code></td>
      </tr>
      <tr>
        <td>Compositing / Containment</td>
        <td>합성 계층 제어 및 독립성 확보</td>
        <td><code>will-change</code>, <code>contain</code>, <code>isolation</code></td>
      </tr>
      <tr>
        <td>3D / Perspective</td>
        <td>3D 공간 변환, 깊이 효과</td>
        <td><code>perspective</code>, <code>perspective-origin</code>, <code>backface-visibility</code></td>
      </tr>
    </tbody>
</table>`:t==="atom"&&(e=`<table>
  <thead>
    <tr>
      <th>카테고리</th>
      <th>주요 역할</th>
      <th>대표 속성</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cursor / User Interaction</td>
      <td>마우스 포인터, 상호작용 방식</td>
      <td><code>cursor</code>, <code>pointer-events</code>, <code>touch-action</code></td>
    </tr>
    <tr>
      <td>Content / Generated</td>
      <td>가상 요소 / 콘텐츠 생성</td>
      <td><code>content</code>, <code>counter-increment</code>, <code>counter-reset</code></td>
    </tr>
    <tr>
      <td>Quotes / Counters</td>
      <td>목록, 인용부호, 카운터 스타일</td>
      <td><code>quotes</code>, <code>list-style-type</code>, <code>list-style-position</code></td>
    </tr>
    <tr>
      <td>Overflow / Scroll</td>
      <td>스크롤, 숨김 처리</td>
      <td><code>overflow</code>, <code>overflow-x</code>, <code>overflow-y</code>, <code>scroll-behavior</code></td>
    </tr>
    <tr>
      <td>Pointer / Interaction</td>
      <td>사용자 상호작용 최적화</td>
      <td><code>user-select</code>, <code>resize</code></td>
    </tr>
    <tr>
      <td>Other</td>
      <td>브라우저 특수 처리, 모듈화 관련</td>
      <td><code>all</code>, <code>isolation</code>, <code>clip</code></td>
    </tr>
  </tbody>
</table>`),`
        <style>
        /* 기본 테이블 스타일 */
        table {
          border-collapse: collapse;
          width: 100%;
          font-family: Arial, sans-serif;
          text-align: left;
        }

        /* 헤더 스타일 */
        thead tr {
          background-color: skyblue;
          color: white;
          font-weight: bold;
        }

        /* 짝수행 배경색 */
        tbody tr:nth-child(even) {
          background-color: #f0f8ff; 
        }

        /* 홀수행 배경색 */
        tbody tr:nth-child(odd) {
          background-color: white;
        }

        /* 셀 스타일 */
        th, td {
          border: 1px solid #b0c4de; 
          padding: 10px;
          
        }

        /* code 태그 스타일 */
        code {
          padding: 2px 4px;
          border-radius: 4px;
          font-family: monospace;
        }
        </style>

     ${e}
      
    `};let x="코드규약/CSS/공통/02.속성/01.속성순서";const b=t=>{let e="";return t==="block"?e=`
- 브라우저가 요소의 크기와 위치를 계산하는 단계.
- 이 단계의 속성들은 레이아웃을 다시 계산하게 만든다.
`:t==="section"?e=`- 브라우저가 요소의 시각적 스타일(색상, 배경, 그림자 등)을 채우는 단계
- 이 단계의 속성들은 리페인트를 발생시킨다.
`:t==="element"?e=`- 폰트나 텍스트요소를 그리는 단계
- 이 단계의 속성들은 변경 시 리페인트를 발생시킨다.
`:t==="item"?e=`- 브라우저가 레이어를 GPU로 합성하는 단계.
- 이 단계의 속성은 리플로우나 리페인트 없이 GPU 레벨에서 즉시 반영된다.
- 애니메이션 제작에 적합한 속성임
`:t==="atom"?e=`- 렌더링에는 직접 영향 없지만 문서 흐름이나 접근성에 관련된 속성
`:e=`- CSS순서의 경우 브라우저 랜더링 기준으로 잡는다.
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
`,e},k={title:x,parameters:{docs:{description:{component:f(b())}}}},r=u(y,b,["block","section","element","item","atom"],"style"),d=r.block,o=r.section,c=r.item;var i,s,l;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:"stories.block",...(l=(s=d.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var n,a,g;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"stories.section",...(g=(a=o.parameters)==null?void 0:a.docs)==null?void 0:g.source}}};var p,h,m;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:"stories.item",...(m=(h=c.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const C=["레이아웃","페인팅","합성"];export{C as __namedExportsOrder,k as default,d as 레이아웃,o as 페인팅,c as 합성};
