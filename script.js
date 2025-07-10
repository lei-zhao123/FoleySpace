const groups = [
  ["stimuli/group1_ours.mp4", "stimuli/group1_base1.mp4", "stimuli/group1_base2.mp4"],
  ["stimuli/group2_ours.mp4", "stimuli/group2_base1.mp4", "stimuli/group2_base2.mp4"]
];

let currentGroup = 0;
let results = [];

function populateSelects() {
  const selects = document.querySelectorAll("select");
  selects.forEach(select => {
    select.innerHTML = `<option value="">请选择</option>`;
    for (let i = 1; i <= 5; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }
  });
}

function loadGroup(index) {
  document.getElementById("group-label").textContent = `第 ${index + 1} 组`;
  const videos = groups[index];
  videos.forEach((src, i) => {
    document.querySelector(`#video${i} video`).src = src;
  });
  const forms = document.querySelectorAll(".rating-form");
  forms.forEach(form => form.reset());
}

document.getElementById("next-button").addEventListener("click", () => {
  const forms = document.querySelectorAll(".rating-form");
  let allValid = true;
  const groupData = [];

  forms.forEach((form, i) => {
    const data = new FormData(form);
    const ratings = {
      group: currentGroup + 1,
      videoIndex: i + 1,
      videoFile: groups[currentGroup][i],
      audioQuality: data.get("audioQuality"),
      spatialConsistency: data.get("spatialConsistency"),
      semanticConsistency: data.get("semanticConsistency"),
      temporalConsistency: data.get("temporalConsistency"),
      timestamp: new Date().toISOString()
    };
    if (
      !ratings.audioQuality || !ratings.spatialConsistency ||
      !ratings.semanticConsistency || !ratings.temporalConsistency
    ) {
      allValid = false;
    }
    groupData.push(ratings);
  });

  if (!allValid) {
    alert("请为每个视频完整评分！");
    return;
  }

  results.push(...groupData);
  currentGroup++;

  if (currentGroup < groups.length) {
    loadGroup(currentGroup);
  } else {
    document.getElementById("video-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("group-label").style.display = "none";
    document.getElementById("complete").style.display = "block";
  }
});

function downloadCSV() {
  const headers = Object.keys(results[0]).join(",");
  const lines = results.map(obj => Object.values(obj).join(","));
  const csv = [headers, ...lines].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "user_study_results.csv";
  a.click();
}

window.onload = () => {
  populateSelects();
  loadGroup(currentGroup);
};
