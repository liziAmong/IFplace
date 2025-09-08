// data.js

// ==============================
// 작품 데이터
// ==============================
const artworks = [
  {
    id: 1,
    link: "https://wplace.live/?lat=38.016038550337875&lng=126.27413052802731&zoom=12.078841361844278",
    image: "images/image1.jpg",
    size: "완커",
    quizHints: ["첫 번째 힌트", "두 번째 힌트", "세 번째 힌트"],
    tags: ["테리"]
  },
  {
    id: 2,
    link: "https://wplace.live/?lat=37.97157067432562&lng=126.19854459052732&zoom=12.230253549912431",
    image: "images/image2.jpg",
    size: "중간",
    quizHints: ["첫 번째 힌트", "두 번째 힌트", "세 번째 힌트"],
    tags: ["메이"]
  },
  {
    id: 3,
    link: "https://wplace.live/?lat=37.785789482476105&lng=126.25180630927736&zoom=12.550636121896222",
    image: "images/image3.jpg",
    size: "중간",
    quizHints: ["첫 번째 힌트", "두 번째 힌트", "세 번째 힌트"],
    tags: ["하유"]
  },
  {
    id: 4,
    link: "https://wplace.live/?lat=37.82995320348113&lng=126.31754849677733&zoom=13.342813453931972",
    image: "images/image4.jpg",
    size: "중간",
    quizHints: ["첫 번째 힌트", "두 번째 힌트", "세 번째 힌트"],
    tags: ["테리"]
  },
  {
    id: 5,
    link: "https://wplace.live/?lat=36.3868328548721&lng=128.25026334052734&zoom=13.599574817085038",
    image: "images/image5.jpg",
    size: "중간",
    quizHints: ["첫 번째 힌트", "두 번째 힌트", "세 번째 힌트"],
    tags: ["하"]
  },
  // 나머지 작품들도 같은 형식으로 추가
];

// ==============================
// 퀴즈 모드 함수
// ==============================
function getQuizHints(id) {
  const artwork = artworks.find(a => a.id === id);
  return artwork ? artwork.quizHints : [];
}

function getRandomQuizHint(id) {
  const hints = getQuizHints(id);
  if (hints.length === 0) return "";
  const randomIndex = Math.floor(Math.random() * hints.length);
  return hints[randomIndex];
}

// ==============================
// 갤러리/감상 모드 함수
// ==============================
function getArtworkById(id) {
  return artworks.find(a => a.id === id) || null;
}

function getAllArtworks() {
  return artworks;
}

// ==============================
// 태그 검색 함수
// ==============================
function getArtworksByTag(tag) {
  return artworks.filter(a => a.tags.includes(tag));
}

// ==============================
// 예시 사용
// ==============================
// console.log(getRandomQuizHint(1));
// console.log(getArtworkById(2));
// console.log(getAllArtworks());
