// .storybook/manager.js
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: '현대백화점 면세점 코드북',
    brandUrl: './',
    brandImage: './logo.svg', // ✅ 절대경로 (슬래시 붙이기!)
  }),
  
});


// ✅ 로고를 가운데 정렬하기 위한 CSS 주입
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.innerHTML = `
    .css-mq3wcb{
      display:flex !important;
      justify-content: center;
    }
    .css-11xgcgt{
      bottom: auto !important;
      top: 0px;
      border: 1px solid transparent !important;
    }
    .css-1fdphfk{
      background-color: rgba(38, 85, 115, 0.15) !important;
      color: #000 !important;
      border: 1px solid transparent !important;
    }

  `;
  document.head.appendChild(style);
  // ✅ 첫 실행 시 Introduction 문서로 이동 (자동 리다이렉트)
  const url = new URL(window.location);
  const hasPath = url.searchParams.has('path');
  if (!hasPath) {
    window.location.replace('./?path=/docs/현대면세점-퍼블리싱가이드--docs');
  }



   // UTF-8 안전한 Base64 디코딩
  function decodeBase64Utf8(str) {
    try {
      const bytes = Uint8Array.from(atob(str), c => c.charCodeAt(0));
      return new TextDecoder('utf-8').decode(bytes);
    } catch (e) {
      return 'Unknown';
    }
  }

  const name = decodeBase64Utf8('67CV7KCV7JWE');

  const footer = document.createElement('div');
  footer.innerHTML = `
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      text-align:center;
      font-size:12px;
      color:#999;
      background:rgba(255,255,255,0.8);
      padding:4px 0;
      border-top:1px solid #eee;
      z-index:9999;
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Noto Sans KR',sans-serif;
    ">
      © 2025 Hyundai Duty Free — Publishing Guide System · Created by <strong>${name}</strong>
    </div>
  `;
  document.body.appendChild(footer);
  
});