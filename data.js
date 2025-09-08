// data.js

// ==============================
// 작품 데이터
// ==============================
const artworks = [
  {
    id: 1,
    title: "들어오세요",
    artist: "하유",
    image: "images/image1.jpg",
    quizHints: ["첫 번째 힌트", "두 번째 힌트", "세 번째 힌트"],
    tags: ["tag1", "tag2"]
  },
  {
    id: 2,
    title: "사탕물어요",
    artist: "하유",
    image: "images/image2.jpg",
    quizHints: ["첫 번째 힌트", "두 번째 힌트", "세 번째 힌트"],
    tags: ["tag1", "tag2"]
  },
  {
    id: 3,
    title: "어제어땠어",
    artist: "하유",
    image: "images/image3.jpg",
    quizHints: ["첫 번째 힌트", "두 번째 힌트", "세 번째 힌트"],
    tags: ["tag1", "tag2"]
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
// 퀴즈 힌트 가져오기
// console.log(getRandomQuizHint(1));

// 갤러리용 데이터 가져오기
// console.log(getArtworkById(2));

// 모든 작품 가져오기
// console.log(getAllArtworks());
