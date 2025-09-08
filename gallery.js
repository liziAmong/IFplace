// 작품 데이터
const artworks = [
  { name: "#리쟈", link: "https://wplace.net/example1" },
  { name: "#하유", link: "https://wplace.net/example2" },
  { name: "#민수", link: "https://wplace.net/example3" },
  { name: "#지아", link: "https://wplace.net/example4" }
];

const container = document.getElementById("gallery-container");
const search = document.getElementById("search");

// 렌더링 함수
function render(items) {
  container.innerHTML = "";
  if (items.length === 0) {
    container.innerHTML = "<p>검색 결과가 없습니다 😢</p>";
    return;
  }

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "artwork-card";
    div.innerHTML = `
      <p>${item.name}</p>
      <a href="${item.link}" target="_blank" class="btn small">보러가기</a>
    `;
    container.appendChild(div);
  });
}

// 초기 렌더링
render(artworks);

// 검색 이벤트
search.addEventListener("input", (e) => {
  const keyword = e.target.value.trim();
  const filtered = artworks.filter(a => a.name.includes(keyword));
  render(filtered);
});
