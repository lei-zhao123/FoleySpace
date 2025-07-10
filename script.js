const groups = [
  ["stimuli/group1_ours.mp4", "stimuli/group1_base1.mp4", "stimuli/group1_base2.mp4"],
  ["stimuli/group2_ours.mp4", "stimuli/group2_base1.mp4", "stimuli/group2_base2.mp4"],
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
  const videoEls = [
    document.getElementById("video0"),
    document.getElementById("video1"),
    document.getElementById("video2")
  ];
  groups[index].forEach((src, i) => {
    videoEls[i].src = src;
  });

  document.getElementById("rating-form").reset();
}

document.getElementById("rating-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  for (let i = 0; i < 3; i++) {
    results.push({
      group: currentGroup + 1,
      video: groups[currentGroup][i],
      audioQuality: formData.get(`audioQuality${i}`),
      spatialConsistency: formData.get(`spatialConsistency${i}`),
      semanticConsistency: formData.get(`semanticConsistency${i}`),
      temporalConsistency: formData.get(`temporalConsistency${i}`),
      timestamp: new Date().toISOString()
    });
  }

  currentGroup++;
  if (currentGroup < groups.length) {
    loadGroup(currentGroup);
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

window.onload = () => {
  populateSelects();
  loadGroup(currentGroup);
};
