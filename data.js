// data.js

// ==============================
// 작품 데이터
// ==============================
const artworks = [
{
    id: 0,
    link: "https://wplace.live/?lat=38.414897142801934&lng=127.59125943427733&zoom=11.972094337239767",
    hintLink: "https://wplace.live/?lat=38.643030049034095&lng=127.35870084052732&zoom=14.621848974633494",
    image: "images/image0.jpg",
    size: "완커",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "동남쪽으로 가세요", "위치 공개!"],
    tags: ["츠키","반님","테리","하유","메이","리리","하루","하네","아테","소리"]
  },
  {
    id: 1,
    link: "https://wplace.live/?lat=38.03528574531568&lng=126.27536099677732&zoom=11.908473128408984",
    hintLink: "https://wplace.live/?lat=37.97655906789116&lng=126.55415005927733&zoom=12.8520626485129",
    image: "images/image1.jpg",
    size: "완커",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "서쪽으로 가세요", "위치 공개!"],
    tags: ["테리"]
  },
  {
    id: 2,
    link: "https://wplace.live/?lat=37.97157067432562&lng=126.19854459052732&zoom=12.230253549912431",
    hintLink: "https://wplace.live/?lat=37.97655906789116&lng=126.55415005927733&zoom=12.8520626485129",
    image: "images/image2.jpg",
    size: "중간",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "서쪽으로 가세요", "위치 공개!"],
    tags: ["메이"]
  },
  {
    id: 3,
    link: "https://wplace.live/?lat=37.785789482476105&lng=126.25180630927736&zoom=12.550636121896222",
    hintLink: "https://hint.example.com/1",
    image: "images/image3.jpg",
    size: "중간",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "두 번째 힌트", "세 번째 힌트"],
    tags: ["하유"]
  },
  {
    id: 4,
    link: "https://wplace.live/?lat=37.82995320348113&lng=126.31754849677733&zoom=13.342813453931972",
    hintLink: "https://hint.example.com/1",
    image: "images/image4.jpg",
    size: "중간",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "두 번째 힌트", "세 번째 힌트"],
    tags: ["테리"]
  },
  {
    id: 5,
    link: "https://wplace.live/?lat=36.3868328548721&lng=128.25026334052734&zoom=13.599574817085038",
    hintLink: "https://hint.example.com/1",
    image: "images/image5.jpg",
    size: "치비",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "두 번째 힌트", "세 번째 힌트"],
    tags: ["하유"]
  },
  {
    id: 6,
    link: "https://wplace.live/?lat=36.434082561640416&lng=128.23004849677733&zoom=13.876831573294917",
    hintLink: "https://hint.example.com/1",
    image: "images/image6.jpg",
    size: "중간",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "두 번째 힌트", "세 번째 힌트"],
    tags: ["하루","소리","아테","하네"]
  },
  {
    id: 7,
    link: "https://wplace.live/?lat=38.32972973964912&lng=128.17450162177732&zoom=14.109423166041323",
    hintLink: "https://hint.example.com/1",
    image: "images/image7.jpg",
    size: "치비",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "두 번째 힌트", "세 번째 힌트"],
    tags: ["반님"]
  },
  {
    id: 8,
    link: "https://wplace.live/?lat=38.02780901836128&lng=126.32036099677731&zoom=14.848925910534648",
    hintLink: "https://wplace.live/?lat=37.97655906789116&lng=126.55415005927733&zoom=12.8520626485129",
    image: "images/image8.jpg",
    size: "치비",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "서쪽으로", "위치 공개!"],
    tags: ["테리"]
  },
{
    id: 9,
    link: "https://wplace.live/?lat=35.872315425094484&lng=127.76440396552732&zoom=12.176181112850301",
    hintLink: "1",
    image: "images/image9.jpg",
    size: "완커",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "2", "위치 공개!"],
    tags: ["츠키","반님","테리","하유","메이","리리","하루","하네","아테","소리"]
  },
  {
    id: 10,
    link: "https://wplace.live/?lat=35.943930301052404&lng=128.09206021552734&zoom=13.65518660183689",
    hintLink: "1",
    image: "images/image10.jpg",
    size: "중간",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "2", "위치 공개!"],
    tags: ["하유"]
  },
  {
    id: 11,
    link: "https://wplace.live/?lat=35.934394884752294&lng=128.12106412177735&zoom=14.73263011416146",
    hintLink: "1",
    image: "images/image11.jpg",
    size: "치비",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "2", "위치 공개!"],
    tags: ["하네"]
  },
  { 
    id: 12,
    link: "https://wplace.live/?lat=35.9493379363319&lng=128.12000943427734&zoom=14.598776121940784",
    hintLink: "1",
    image: "images/image12.jpg",
    size: "치비",
    quizHints: ["클릭하시면 작품 근처로 이동합니다.", "2", "위치 공개!"],
    tags: ["하루"]
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
