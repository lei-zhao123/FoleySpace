
const questionGroups = [
  ["stimuli/q1_video1.mp4", "stimuli/q1_video2.mp4", "stimuli/q1_video3.mp4"],
  ["stimuli/q2_video1.mp4", "stimuli/q2_video2.mp4", "stimuli/q2_video3.mp4"],
  ["stimuli/q3_video1.mp4", "stimuli/q3_video2.mp4", "stimuli/q3_video3.mp4"],
  ["stimuli/q4_video1.mp4", "stimuli/q4_video2.mp4", "stimuli/q4_video3.mp4"],
  ["stimuli/q5_video1.mp4", "stimuli/q5_video2.mp4", "stimuli/q5_video3.mp4"],
  ["stimuli/q6_video1.mp4", "stimuli/q6_video2.mp4", "stimuli/q6_video3.mp4"],
  ["stimuli/q7_video1.mp4", "stimuli/q7_video2.mp4", "stimuli/q7_video3.mp4"],
  ["stimuli/q8_video1.mp4", "stimuli/q8_video2.mp4", "stimuli/q8_video3.mp4"],
  ["stimuli/q9_video1.mp4", "stimuli/q9_video2.mp4", "stimuli/q9_video3.mp4"],
  ["stimuli/q10_video1.mp4", "stimuli/q10_video2.mp4", "stimuli/q10_video3.mp4"],
  ["stimuli/q11_video1.mp4", "stimuli/q11_video2.mp4", "stimuli/q11_video3.mp4"],
  ["stimuli/q12_video1.mp4", "stimuli/q12_video2.mp4", "stimuli/q12_video3.mp4"],
  ["stimuli/q13_video1.mp4", "stimuli/q13_video2.mp4", "stimuli/q13_video3.mp4"],
  ["stimuli/q14_video1.mp4", "stimuli/q14_video2.mp4", "stimuli/q14_video3.mp4"],
  ["stimuli/q15_video1.mp4", "stimuli/q15_video2.mp4", "stimuli/q15_video3.mp4"],
  ["stimuli/q16_video1.mp4", "stimuli/q16_video2.mp4", "stimuli/q16_video3.mp4"],
  ["stimuli/q17_video1.mp4", "stimuli/q17_video2.mp4", "stimuli/q17_video3.mp4"],
  ["stimuli/q18_video1.mp4", "stimuli/q18_video2.mp4", "stimuli/q18_video3.mp4"],
  ["stimuli/q19_video1.mp4", "stimuli/q19_video2.mp4", "stimuli/q19_video3.mp4"],
  ["stimuli/q20_video1.mp4", "stimuli/q20_video2.mp4", "stimuli/q20_video3.mp4"],
  ["stimuli/q21_video1.mp4", "stimuli/q21_video2.mp4", "stimuli/q21_video3.mp4"],
  ["stimuli/q22_video1.mp4", "stimuli/q22_video2.mp4", "stimuli/q22_video3.mp4"],
  ["stimuli/q23_video1.mp4", "stimuli/q23_video2.mp4", "stimuli/q23_video3.mp4"],
  ["stimuli/q24_video1.mp4", "stimuli/q24_video2.mp4", "stimuli/q24_video3.mp4"],
  ["stimuli/q25_video1.mp4", "stimuli/q25_video2.mp4", "stimuli/q25_video3.mp4"],
  ["stimuli/q26_video1.mp4", "stimuli/q26_video2.mp4", "stimuli/q26_video3.mp4"],
  ["stimuli/q27_video1.mp4", "stimuli/q27_video2.mp4", "stimuli/q27_video3.mp4"],
  ["stimuli/q28_video1.mp4", "stimuli/q28_video2.mp4", "stimuli/q28_video3.mp4"],
  ["stimuli/q29_video1.mp4", "stimuli/q29_video2.mp4", "stimuli/q29_video3.mp4"],
  ["stimuli/q30_video1.mp4", "stimuli/q30_video2.mp4", "stimuli/q30_video3.mp4"],
  ["stimuli/q31_video1.mp4", "stimuli/q31_video2.mp4", "stimuli/q31_video3.mp4"],
  ["stimuli/q32_video1.mp4", "stimuli/q32_video2.mp4", "stimuli/q32_video3.mp4"]
];

let current = 0;
let results = [];

window.onload = () => {
  document.getElementById("startButton").addEventListener("click", startQuestionnaire);
  populateRadios();
  loadQuestion(current);
};

function startQuestionnaire() {
  document.getElementById("cover-page").style.display = "none";
  document.getElementById("questionnaire").style.display = "block";
}

function populateRadios() {
  for (let i = 0; i < 3; i++) {
    ["audioQuality", "spatialConsistency", "semanticConsistency", "temporalConsistency", "userPreference"].forEach(metric => {
      const container = document.getElementById(metric + i);
      container.innerHTML = "";
      for (let v = 1; v <= 5; v++) {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="${metric}${i}" value="${v}" required> ${v}`;
        container.appendChild(label);
      }
    });
  }
}

function loadQuestion(index) {
  document.getElementById("question-counter").textContent = `题目 ${index + 1} / ${questionGroups.length}`;
  const videos = questionGroups[index];
  videos.forEach((src, i) => {
    document.getElementById(`video${i}`).src = src;
  });
  document.getElementById("rating-form").reset();
}

document.getElementById("rating-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  for (let i = 0; i < 3; i++) {
    results.push({
      question: current + 1,
      video: questionGroups[current][i],
      audioQuality: data.get(`audioQuality${i}`),
      spatialConsistency: data.get(`spatialConsistency${i}`),
      semanticConsistency: data.get(`semanticConsistency${i}`),
      temporalConsistency: data.get(`temporalConsistency${i}`),
      userPreference: data.get(`userPreference${i}`),
      timestamp: new Date().toISOString()
    });
  }
  current++;
  if (current < questionGroups.length) {
    loadQuestion(current);
  } else {
    document.getElementById("rating-form").style.display = "none";
    document.querySelector(".video-row").style.display = "none";
    document.getElementById("complete").style.display = "block";
  }
});

function downloadCSV() {
  const header = Object.keys(results[0]).join(",");
  const lines = results.map(r => Object.values(r).join(","));
  const csv = [header, ...lines].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "user_study_results.csv";
  a.click();
}
