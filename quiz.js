// 퀴즈 데이터
const quizzes = [
  {
    title: "작품 1",
    step1: "00시 주변에 있습니다.",
    step2: "00시에서 3시 방향으로 가면 있어요!",
    link: "https://wplace.net/example1"
  },
  {
    title: "작품 2",
    step1: "06시 근처에 있습니다.",
    step2: "06시에서 9시 방향으로 가면 있어요!",
    link: "https://wplace.net/example2"
  }
];

const container = document.getElementById("quiz-container");

// 각 퀴즈 표시
quizzes.forEach((quiz, index) => {
  const div = document.createElement("div");
  div.className = "quiz-box";

  div.innerHTML = `
    <h3>${quiz.title}</h3>
    <p>1단계 힌트: ${quiz.step1}</p>
    <button class="btn" id="step2-${index}">2단계 힌트 보기</button>
    <p class="hint" id="hint2-${index}" style="display:none;">${quiz.step2}</p>
    <button class="btn" id="step3-${index}" style="display:none;">3단계 링크 보기</button>
    <p class="hint"><a href="${quiz.link}" target="_blank" id="link-${index}" style="display:none;">🔗 작품 보러가기</a></p>
  `;

  container.appendChild(div);

  // 버튼 이벤트
  document.getElementById(`step2-${index}`).addEventListener("click", () => {
    document.getElementById(`hint2-${index}`).style.display = "block";
    document.getElementById(`step3-${index}`).style.display = "inline-block";
    document.getElementById(`step2-${index}`).style.display = "none";
  });

  document.getElementById(`step3-${index}`).addEventListener("click", () => {
    document.getElementById(`link-${index}`).style.display = "inline-block";
    document.getElementById(`step3-${index}`).style.display = "none";
  });
});
