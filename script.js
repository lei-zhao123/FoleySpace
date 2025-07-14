
const questionGroups = [
['demo_all/see2sound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/mmaudio/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/FoleySpace/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4'],
['demo_all/see2sound/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/mmaudio/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/FoleySpace/68f2197a-d021-4aab-8973-11c41866489c.mp4'],
['demo_all/see2sound/69585af5-8d94-4636-a98e-b5997831225e.mp4', 'demo_all/mmaudio/69585af5-8d94-4636-a98e-b5997831225e.mp4', 'demo_all/FoleySpace/69585af5-8d94-4636-a98e-b5997831225e.mp4'],
['demo_all/see2sound/bird.mp4', 'demo_all/mmaudio/bird.mp4', 'demo_all/FoleySpace/bird.mp4'],
['demo_all/see2sound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4', 'demo_all/mmaudio/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4', 'demo_all/FoleySpace/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4'],
['demo_all/see2sound/gm91809150-7712324.mp4', 'demo_all/mmaudio/gm91809150-7712324.mp4', 'demo_all/FoleySpace/gm91809150-7712324.mp4'],
['demo_all/see2sound/gm150486076-19839487.mp4', 'demo_all/mmaudio/gm150486076-19839487.mp4', 'demo_all/FoleySpace/gm150486076-19839487.mp4'],
['demo_all/see2sound/gm165476240-19937970.mp4', 'demo_all/mmaudio/gm165476240-19937970.mp4', 'demo_all/FoleySpace/gm165476240-19937970.mp4'],
['demo_all/see2sound/gm450500461-16367437.mp4', 'demo_all/mmaudio/gm450500461-16367437.mp4', 'demo_all/FoleySpace/gm450500461-16367437.mp4'],
['demo_all/see2sound/gm453192028-44957136.mp4', 'demo_all/mmaudio/gm453192028-44957136.mp4', 'demo_all/FoleySpace/gm453192028-44957136.mp4'],
['demo_all/see2sound/gm472506175-6086824.mp4', 'demo_all/mmaudio/gm472506175-6086824.mp4', 'demo_all/FoleySpace/gm472506175-6086824.mp4'],
['demo_all/see2sound/gm496369920-78713519.mp4', 'demo_all/mmaudio/gm496369920-78713519.mp4', 'demo_all/FoleySpace/gm496369920-78713519.mp4'],
['demo_all/see2sound/gm516403238-89144623.mp4', 'demo_all/mmaudio/gm516403238-89144623.mp4', 'demo_all/FoleySpace/gm516403238-89144623.mp4'],
['demo_all/see2sound/gm585096518-100303683.mp4', 'demo_all/mmaudio/gm585096518-100303683.mp4', 'demo_all/FoleySpace/gm585096518-100303683.mp4'],
['demo_all/see2sound/gm595781138-103274473.mp4', 'demo_all/mmaudio/gm595781138-103274473.mp4', 'demo_all/FoleySpace/gm595781138-103274473.mp4'],
['demo_all/see2sound/gm599927884-103114649.mp4', 'demo_all/mmaudio/gm599927884-103114649.mp4', 'demo_all/FoleySpace/gm599927884-103114649.mp4'],
['demo_all/see2sound/gm606093800-104336573.mp4', 'demo_all/mmaudio/gm606093800-104336573.mp4', 'demo_all/FoleySpace/gm606093800-104336573.mp4'],
['demo_all/see2sound/gm621660068-109890219.mp4', 'demo_all/mmaudio/gm621660068-109890219.mp4', 'demo_all/FoleySpace/gm621660068-109890219.mp4'],
['demo_all/see2sound/gm612551978-106728579.mp4', 'demo_all/mmaudio/gm612551978-106728579.mp4', 'demo_all/FoleySpace/gm612551978-106728579.mp4'],
['demo_all/see2sound/gm626342258-111269215.mp4', 'demo_all/mmaudio/gm626342258-111269215.mp4', 'demo_all/FoleySpace/gm626342258-111269215.mp4'],
['demo_all/see2sound/gm636596908-114293075.mp4', 'demo_all/mmaudio/gm636596908-114293075.mp4', 'demo_all/FoleySpace/gm636596908-114293075.mp4'],
['demo_all/see2sound/gm692031814-129247553.mp4', 'demo_all/mmaudio/gm692031814-129247553.mp4', 'demo_all/FoleySpace/gm692031814-129247553.mp4'],
['demo_all/see2sound/moving1.mp4', 'demo_all/mmaudio/moving1.mp4', 'demo_all/FoleySpace/moving1.mp4'],
['demo_all/see2sound/moving2.mp4', 'demo_all/mmaudio/moving2.mp4', 'demo_all/FoleySpace/moving2.mp4'],
['demo_all/see2sound/moving3.mp4', 'demo_all/mmaudio/moving3.mp4', 'demo_all/FoleySpace/moving3.mp4'],
['demo_all/see2sound/moving4.mp4', 'demo_all/mmaudio/moving4.mp4', 'demo_all/FoleySpace/moving4.mp4'],
['demo_all/see2sound/moving5.mp4', 'demo_all/mmaudio/moving5.mp4', 'demo_all/FoleySpace/moving5.mp4'],
['demo_all/see2sound/moving7.mp4', 'demo_all/mmaudio/moving7.mp4', 'demo_all/FoleySpace/moving7.mp4'],
['demo_all/see2sound/moving8.mp4', 'demo_all/mmaudio/moving8.mp4', 'demo_all/FoleySpace/moving8.mp4'],
['demo_all/see2sound/moving10.mp4', 'demo_all/mmaudio/moving10.mp4', 'demo_all/FoleySpace/moving10.mp4'],
['demo_all/see2sound/moving11.mp4', 'demo_all/mmaudio/moving11.mp4', 'demo_all/FoleySpace/moving11.mp4'],
['demo_all/see2sound/moving14.mp4', 'demo_all/mmaudio/moving14.mp4', 'demo_all/FoleySpace/moving14.mp4'],
['demo_all/see2sound/static1.mp4', 'demo_all/mmaudio/static1.mp4', 'demo_all/FoleySpace/static1.mp4'],
['demo_all/see2sound/static2.mp4', 'demo_all/mmaudio/static2.mp4', 'demo_all/FoleySpace/static2.mp4'],
['demo_all/see2sound/static3.mp4', 'demo_all/mmaudio/static3.mp4', 'demo_all/FoleySpace/static3.mp4'],
['demo_all/see2sound/static5.mp4', 'demo_all/mmaudio/static5.mp4', 'demo_all/FoleySpace/static5.mp4'],
['demo_all/see2sound/static10.mp4', 'demo_all/mmaudio/static10.mp4', 'demo_all/FoleySpace/static10.mp4'],
['demo_all/see2sound/storm.mp4', 'demo_all/mmaudio/storm.mp4', 'demo_all/FoleySpace/storm.mp4'],
['demo_all/see2sound/typing.mp4', 'demo_all/mmaudio/typing.mp4', 'demo_all/FoleySpace/typing.mp4'],
['demo_all/see2sound/Walter_Woodman.mp4', 'demo_all/mmaudio/Walter_Woodman.mp4', 'demo_all/FoleySpace/Walter_Woodman.mp4'],
['demo_all/see2sound/waves_storm.mp4', 'demo_all/mmaudio/waves_storm.mp4', 'demo_all/FoleySpace/waves_storm.mp4'],
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
