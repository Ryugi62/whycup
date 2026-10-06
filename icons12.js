// 12유형 아이콘(흰 선, 48x48) — 유형별 얼굴
const S = 'viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
const TYPE_ICONS = {
  '아침 스위치형': `<svg ${S}><path d="M10 32a14 14 0 0 1 28 0"/><path d="M6 38h36"/><path d="M24 8v6M11 13l4 4M37 13l-4 4"/></svg>`,
  '몰입 시동형': `<svg ${S}><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="1.5"/></svg>`,
  '쉼표 수집가': `<svg ${S}><circle cx="24" cy="20" r="7"/><path d="M30 22c0 8-5 13-11 16"/></svg>`,
  '원두 탐험가': `<svg ${S}><circle cx="24" cy="24" r="17"/><path d="M30 18l-4 10-8 4 4-10z"/></svg>`,
  '단골 맛 수호자': `<svg ${S}><path d="M24 7l14 5v11c0 9-6 15-14 18-8-3-14-9-14-18V12z"/><path d="M18 24l4 4 8-8"/></svg>`,
  '디저트 페어링러': `<svg ${S}><path d="M8 34l30-14v14z"/><path d="M8 34h30v6H8z"/><path d="M38 20c0-4-3-6-6-5"/></svg>`,
  '창가 자리 지킴이': `<svg ${S}><rect x="9" y="7" width="30" height="22" rx="3"/><path d="M24 7v22M9 18h30"/><path d="M14 41v-6h20v6M18 35v-4h12v4"/></svg>`,
  '카페 오피스러': `<svg ${S}><rect x="11" y="11" width="26" height="17" rx="2"/><path d="M6 34h36l-3 4H9z"/></svg>`,
  '여행지 카페 헌터': `<svg ${S}><path d="M24 42s13-12 13-22a13 13 0 0 0-26 0c0 10 13 22 13 22z"/><circle cx="24" cy="20" r="5"/></svg>`,
  '같이 한 잔 파': `<svg ${S}><path d="M6 18h14l-2 18H8z"/><path d="M28 18h14l-2 18H30z"/><path d="M13 12c0-2 2-2 2-4M35 12c0-2 2-2 2-4"/></svg>`,
  '대화 핑계 메이커': `<svg ${S}><path d="M8 10h32v20H22l-8 7v-7H8z"/><path d="M16 20h2M23 20h2M30 20h2"/></svg>`,
  '커피 선물러': `<svg ${S}><rect x="8" y="18" width="32" height="22" rx="2"/><path d="M6 12h36v6H6zM24 12v28"/><path d="M24 12c-4-6-11-6-10-1M24 12c4-6 11-6 10-1"/></svg>`,
};
if (typeof module !== 'undefined') module.exports = { TYPE_ICONS };
