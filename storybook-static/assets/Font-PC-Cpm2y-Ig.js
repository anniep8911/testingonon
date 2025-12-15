const l={pc:{H1:{exp:"Hero영역사용",fz:46,lh:60,lp:-25,tag:"h1"},H2:{exp:"메인 컨텐츠 타이틀 사용",fz:40,lh:59,lp:-25,tag:"h2"},H3:{exp:"컨텐츠 중단 사용",fz:36,lh:54,lp:-25,tag:"h3"},H4:{exp:"컨텐츠 중단 부제 사용",fz:28,lh:41,lp:-25,tag:"h4"},H5:{exp:"컨텐츠 내 첫번째 타이틀",fz:24,lh:36,lp:-25,tag:"h2"},H6:{exp:"컨텐츠 내 두번째 타이틀",fz:22,lh:33,lp:-25,tag:"h3"},H7:{exp:"컨텐츠 내 두번째 타이틀",fz:20,lh:29,lp:-25,tag:"h4"},H8:{exp:"컨텐츠 내 세번째 타이틀",fz:18,lh:27,lp:-25,tag:"h4"},P1:{exp:"컨텐츠 일반",fz:16,lh:24,lp:-25,tag:"p"},P2:{exp:"기준폰트, 컨텐츠 일반",fz:14,lh:20,lp:-25,tag:"p"},P3:{exp:"컨텐츠 일반",fz:13,lh:19,lp:-25,tag:"p"},CP1:{exp:"리뷰 및 옵션(컨텐츠 하단 부가 설명)",fz:12,lh:18,lp:-25,tag:"p"}},mob:{H1:{exp:"Hero 영역 타이틀",fz:24,lh:34,lp:-50,tag:"h1"},H2:{exp:"메인화면/관련 타이틀, 콘텐츠 첫번째 타이틀",fz:20,lh:29,lp:-50,tag:"h2"},H3:{exp:"콘텐츠 내 두번째 타이틀",fz:18,lh:27,lp:-50,tag:"h3"},H4:{exp:"콘텐츠 내 세번째 타이틀, 주문/결제 인트로, 버튼(CTA)",fz:16,lh:24,lp:-50,tag:"h4"},H5:{exp:"레이아웃 내 본문",fz:15,lh:22,lp:-50,tag:"h5"},H6:{exp:"컨텐츠 영역, 버튼(중)",fz:14,lh:20,lp:-50,tag:"h6"},P1:{exp:"기본 본문, 컨텐츠 영역, 버튼(소)",fz:13,lh:19,lp:-50,tag:"p"},P2:{exp:"부가설명, 컨텐츠-padding 축소된 부가 설명, 버튼(최소)",fz:12,lh:18,lp:-50,tag:"p"},CP1:{exp:"라벨, 태그, 뱃지에서만 사용",fz:11,lh:17,lp:-50,tag:"span"}}};function h(p,t){if(typeof p!="number"||typeof t!="number"||t<0)return NaN;const e=Math.pow(10,t);return Math.floor(p*e)/e}const g=p=>{let t=`
<style>
    .font__${p}{
        font-size: ${l.pc[p].fz}px;
        font-weight:400;
        line-height: ${l.pc[p].lh}px;
        letter-spacing: ${h(l.pc[p].fz*-.025,2)}px;
    }
</style>
    `,e=`<${l.pc[p].tag} class="font__${p}">현대백화점 면세점</${l.pc[p].tag}>`;return console.log(l.pc[p]),`${t}${e}`};export{g as S,l as t};
