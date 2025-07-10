// 每组视频路径：你的视频 + baseline1 + baseline2
const groups = [
  ["stimuli/sample_01_ours.mp4", "stimuli/sample_01_base1.mp4", "stimuli/sample_01_base2.mp4"],
  ["stimuli/sample_02_ours.mp4", "stimuli/sample_02_base1.mp4", "stimuli/sample_02_base2.mp4"],
  // 更多组可继续添加
];

let groupIndex = 0;
let videoIndex = 0;
const results = [];

const media = document.getElementById("media");
const label = document.getElementById("video-label");
const form = document.getElementById("rating-form");
const final = document.getElementById("final");

function loadVideo() {
  if (groupIndex >= groups.length) {
    document.getElementById("video-block").style.display = "none";
    document.getElementById("rating-form-container").style.display = "none";
    final.style.display = "block";
    return;
  }

  const videoPath = groups[groupIndex][videoIndex];
  media.src = videoPath;
  label.textContent = `第 ${groupIndex + 1} 组 - 视频 ${videoIndex + 1} / 3`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const entry = {
    group: groupIndex + 1,
    videoInGroup: videoIndex + 1,
    videoFile: groups[groupIndex][videoIndex],
    audioQuality: data.get("audioQuality"),
    spatialConsistency: data.get("spatialConsistency"),
    semanticConsistency: data.get("semanticConsistency"),
    temporalConsistency: data.get("temporalConsistency"),
    timestamp: new Date().toISOString()
  };
  results.push(entry);
  form.reset();

  videoIndex++;
  if (videoIndex >= 3) {
    videoIndex = 0;
    groupIndex++;
  }

  loadVideo();
});

function downloadCSV() {
  const header = Object.keys(results[0]).join(",");
  const rows = results.map(r => Object.values(r).join(","));
  const csvContent = [header, ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "user_study_results.csv";
  a.click();
}

window.onload = () => {
  loadVideo();
};
