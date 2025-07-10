const questionGroups = [
  ["stimuli/q1_video1.mp4", "stimuli/q1_video2.mp4", "stimuli/q1_video3.mp4"],
  ["stimuli/q2_video1.mp4", "stimuli/q2_video2.mp4", "stimuli/q2_video3.mp4"],
  ["stimuli/q3_video1.mp4", "stimuli/q3_video2.mp4", "stimuli/q3_video3.mp4"],
  ["stimuli/q4_video1.mp4", "stimuli/q4_video2.mp4", "stimuli/q4_video3.mp4"],
  ["stimuli/q5_video1.mp4", "stimuli/q5_video2.mp4", "stimuli/q5_video3.mp4"],
  // 其他问题组...
];

let current = 0;
let results = [];

window.onload = () => {
  populateRadios();
  loadQuestion(current);
};

// 填充评分控件
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

// 加载问题
function loadQuestion(index) {
  console.log("加载问题", index + 1);
  document.getElementById("question-counter").textContent = `Question ${index + 1} / ${questionGroups.length}`;
  const videos = questionGroups[index];

  // 设置视频源
  videos.forEach((src, i) => {
    document.getElementById(`video${i}`).src = src;
    document.getElementById(`title${i}`).textContent = `视频 ${i + 1}`;  // 设置标题
  });

  document.getElementById("rating-form").reset(); // 重置评分表单
}

// 提交当前问题并加载下一题
document.getElementById("rating-form").addEventListener("submit", (e) => {
  e.preventDefault(); // 防止表单默认提交

  // 获取表单数据
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
  
  current++; // 增加问题索引
  console.log("当前问题:", current);

  // 检查是否有更多问题
  if (current < questionGroups.length) {
    loadQuestion(current);  // 加载下一题
  } else {
    // 如果没有更多问题，显示完成页面
    document.getElementById("rating-form").style.display = "none";
    document.querySelector(".video-row").style.display = "none";
    document.getElementById("complete").style.display = "block";  // 显示完成页面
  }
});

// 下载结果
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
