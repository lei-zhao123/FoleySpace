
const questionGroups = [
['demo_all/FoleySpace/-2-wdcN5vOw_000017.mp4', 'demo_all/ThinkSound/-2-wdcN5vOw_000017.mp4', 'demo_all/MMAudio/-2-wdcN5vOw_000017.mp4', 'demo_all/See2Sound/-2-wdcN5vOw_000017.mp4'],
['demo_all/FoleySpace/-fTfRh0_RQ4_000030.mp4', 'demo_all/ThinkSound/-fTfRh0_RQ4_000030.mp4', 'demo_all/MMAudio/-fTfRh0_RQ4_000030.mp4', 'demo_all/See2Sound/-fTfRh0_RQ4_000030.mp4'],
['demo_all/FoleySpace/-GW1J75oAKU_000304.mp4', 'demo_all/ThinkSound/-GW1J75oAKU_000304.mp4', 'demo_all/See2Sound/-GW1J75oAKU_000304.mp4', 'demo_all/MMAudio/-GW1J75oAKU_000304.mp4'],
['demo_all/ThinkSound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/See2Sound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/FoleySpace/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/MMAudio/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4'],
['demo_all/ThinkSound/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/See2Sound/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/MMAudio/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/FoleySpace/68f2197a-d021-4aab-8973-11c41866489c.mp4'],
['demo_all/ThinkSound/bird.mp4', 'demo_all/MMAudio/bird.mp4', 'demo_all/See2Sound/bird.mp4', 'demo_all/FoleySpace/bird.mp4'],
['demo_all/FoleySpace/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4', 'demo_all/See2Sound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4', 'demo_all/MMAudio/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4', 'demo_all/ThinkSound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4'],
['demo_all/ThinkSound/gm453192028-44957136.mp4', 'demo_all/See2Sound/gm453192028-44957136.mp4', 'demo_all/FoleySpace/gm453192028-44957136.mp4', 'demo_all/MMAudio/gm453192028-44957136.mp4'],
['demo_all/See2Sound/gm462108336-56711250.mp4', 'demo_all/MMAudio/gm462108336-56711250.mp4', 'demo_all/FoleySpace/gm462108336-56711250.mp4', 'demo_all/ThinkSound/gm462108336-56711250.mp4'],
['demo_all/See2Sound/gm496369920-78713519.mp4', 'demo_all/MMAudio/gm496369920-78713519.mp4', 'demo_all/ThinkSound/gm496369920-78713519.mp4', 'demo_all/FoleySpace/gm496369920-78713519.mp4'],
['demo_all/FoleySpace/gm595781138-103274473.mp4', 'demo_all/See2Sound/gm595781138-103274473.mp4', 'demo_all/MMAudio/gm595781138-103274473.mp4', 'demo_all/ThinkSound/gm595781138-103274473.mp4'],
['demo_all/FoleySpace/gm606093800-104336573.mp4', 'demo_all/See2Sound/gm606093800-104336573.mp4', 'demo_all/ThinkSound/gm606093800-104336573.mp4', 'demo_all/MMAudio/gm606093800-104336573.mp4'],
['demo_all/MMAudio/gm610206840-105317569.mp4', 'demo_all/FoleySpace/gm610206840-105317569.mp4', 'demo_all/ThinkSound/gm610206840-105317569.mp4', 'demo_all/See2Sound/gm610206840-105317569.mp4'],
['demo_all/MMAudio/gm636596908-114293075.mp4', 'demo_all/FoleySpace/gm636596908-114293075.mp4', 'demo_all/See2Sound/gm636596908-114293075.mp4', 'demo_all/ThinkSound/gm636596908-114293075.mp4'],
['demo_all/See2Sound/gm91809150-7712324.mp4', 'demo_all/ThinkSound/gm91809150-7712324.mp4', 'demo_all/FoleySpace/gm91809150-7712324.mp4', 'demo_all/MMAudio/gm91809150-7712324.mp4'],
['demo_all/ThinkSound/moving1.mp4', 'demo_all/See2Sound/moving1.mp4', 'demo_all/FoleySpace/moving1.mp4', 'demo_all/MMAudio/moving1.mp4'],
['demo_all/FoleySpace/moving12.mp4', 'demo_all/See2Sound/moving12.mp4', 'demo_all/ThinkSound/moving12.mp4', 'demo_all/MMAudio/moving12.mp4'],
['demo_all/ThinkSound/moving19.mp4', 'demo_all/MMAudio/moving19.mp4', 'demo_all/FoleySpace/moving19.mp4', 'demo_all/See2Sound/moving19.mp4'],
['demo_all/ThinkSound/moving2.mp4', 'demo_all/See2Sound/moving2.mp4', 'demo_all/FoleySpace/moving2.mp4', 'demo_all/MMAudio/moving2.mp4'],
['demo_all/FoleySpace/moving4.mp4', 'demo_all/ThinkSound/moving4.mp4', 'demo_all/See2Sound/moving4.mp4', 'demo_all/MMAudio/moving4.mp4'],
['demo_all/ThinkSound/moving5.mp4', 'demo_all/FoleySpace/moving5.mp4', 'demo_all/MMAudio/moving5.mp4', 'demo_all/See2Sound/moving5.mp4'],
['demo_all/ThinkSound/static1.mp4', 'demo_all/MMAudio/static1.mp4', 'demo_all/See2Sound/static1.mp4', 'demo_all/FoleySpace/static1.mp4'],
['demo_all/FoleySpace/static5.mp4', 'demo_all/ThinkSound/static5.mp4', 'demo_all/See2Sound/static5.mp4', 'demo_all/MMAudio/static5.mp4'],
['demo_all/FoleySpace/storm.mp4', 'demo_all/MMAudio/storm.mp4', 'demo_all/ThinkSound/storm.mp4', 'demo_all/See2Sound/storm.mp4'],
['demo_all/ThinkSound/Walter_Woodman.mp4', 'demo_all/FoleySpace/Walter_Woodman.mp4', 'demo_all/See2Sound/Walter_Woodman.mp4', 'demo_all/MMAudio/Walter_Woodman.mp4'],
['demo_all/ThinkSound/waves_storm.mp4', 'demo_all/MMAudio/waves_storm.mp4', 'demo_all/FoleySpace/waves_storm.mp4', 'demo_all/See2Sound/waves_storm.mp4'],
['demo_all/FoleySpace/_6spzSHLoY0_000030.mp4', 'demo_all/See2Sound/_6spzSHLoY0_000030.mp4', 'demo_all/ThinkSound/_6spzSHLoY0_000030.mp4', 'demo_all/MMAudio/_6spzSHLoY0_000030.mp4'],
['demo_all/FoleySpace/_bkX5VkZg8U_000189.mp4', 'demo_all/See2Sound/_bkX5VkZg8U_000189.mp4', 'demo_all/MMAudio/_bkX5VkZg8U_000189.mp4', 'demo_all/ThinkSound/_bkX5VkZg8U_000189.mp4'],
['demo_all/MMAudio/_eceNIlHt4E_000204.mp4', 'demo_all/See2Sound/_eceNIlHt4E_000204.mp4', 'demo_all/FoleySpace/_eceNIlHt4E_000204.mp4', 'demo_all/ThinkSound/_eceNIlHt4E_000204.mp4'],
['demo_all/MMAudio/_GoMg7oF7Ww_000074.mp4', 'demo_all/FoleySpace/_GoMg7oF7Ww_000074.mp4', 'demo_all/ThinkSound/_GoMg7oF7Ww_000074.mp4', 'demo_all/See2Sound/_GoMg7oF7Ww_000074.mp4'],
['demo_all/See2Sound/_r--eecSZRk_000024.mp4', 'demo_all/ThinkSound/_r--eecSZRk_000024.mp4', 'demo_all/FoleySpace/_r--eecSZRk_000024.mp4', 'demo_all/MMAudio/_r--eecSZRk_000024.mp4'],
['demo_all/FoleySpace/_z5KQY02rYI_000002.mp4', 'demo_all/See2Sound/_z5KQY02rYI_000002.mp4', 'demo_all/MMAudio/_z5KQY02rYI_000002.mp4', 'demo_all/ThinkSound/_z5KQY02rYI_000002.mp4']];

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
  for (let i = 0; i < 4; i++) {
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
  for (let i = 0; i < 4; i++) {
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
