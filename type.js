// 도메인: 응답 → 커피 이유 유형 (프레임워크·DOM 모름)
const LENSES = {
  rit: { name: '의식', color: '#A0522D', types: ['아침 스위치형', '몰입 시동형', '쉼표 수집가'] },
  tas: { name: '맛', color: '#C98A0B', types: ['원두 탐험가', '단골 맛 수호자', '디저트 페어링러'] },
  spa: { name: '공간', color: '#3E7C6B', types: ['창가 자리 지킴이', '카페 오피스러', '여행지 카페 헌터'] },
  con: { name: '연결', color: '#3A6EA5', types: ['같이 한 잔 파', '대화 핑계 메이커', '커피 선물러'] },
};
// q1: 'just'|'rit'|'tas'|'con' · q2,q3: lens key · q4: 0|1|2 (짧게 / 천천히 / 오래)
function computeType(a) {
  const keys = ['rit', 'tas', 'spa', 'con'];
  const score = { rit: 0, tas: 0, spa: 0, con: 0 };
  [a.q2, a.q3].forEach(k => { if (k in score) score[k] += 2; });
  if (a.q1 in score) score[a.q1] += 1;
  const max = Math.max(...keys.map(k => score[k]));
  const top = keys.filter(k => score[k] === max);
  let lens = top[0];
  if (top.length > 1) lens = top.includes(a.q1) ? a.q1 : (top.includes(a.q3) ? a.q3 : top[0]);
  const sub = [0, 1, 2].includes(a.q4) ? a.q4 : 0;
  return { lens, lensName: LENSES[lens].name, color: LENSES[lens].color, type: LENSES[lens].types[sub], wasJust: a.q1 === 'just' };
}
if (typeof module !== 'undefined') module.exports = { computeType, LENSES };
