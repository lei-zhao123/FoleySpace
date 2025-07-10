
const questions = [
    '音频质量', '空间一致性', '语义一致性', '时间一致性', '用户偏好'
];

const videoCount = 15;  // 15 个问题，每个问题有 3 个视频
const videosContainer = document.getElementById('videosContainer');

// 生成视频和问题部分
for (let i = 10; i <= videoCount; i++) {
    const videoSection = document.createElement('div');
    videoSection.classList.add('video-section');

    // 每个问题的三个视频
    videoSection.innerHTML = `
        <h2>问题 ${i}</h2>
        ${['1', '2', '3'].map((videoId) => {
            return `
                <div class="video">
                    <h4>视频 ${videoId}</h4>
                    <video width="100%" height="300" controls>
                        <source src="stimuli/q${i}_video${videoId}.mp4" type="video/mp4">
                        你的浏览器不支持视频标签。
                    </video>
                    <div class="questionnaire">
                        ${questions.map((question, qIndex) => `
                            <div class="question">
                                <label for="q${i}-video${videoId}-question${qIndex + 1}">${question}：</label>
                                ${[1, 2, 3, 4, 5].map(value => `
                                    <input type="radio" name="q${i}-video${videoId}-question${qIndex + 1}" value="${value}" required> ${value}
                                `).join('')}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('')}
    `;

    videosContainer.appendChild(videoSection);
}

function generateCSV() {
    const formData = new FormData(document.getElementById('surveyForm'));
    const results = [];

    formData.forEach((value, key) => {
        const [questionId, videoId] = key.split('-').slice(0, 2);
        results.push({ questionId, videoId, value });
    });

    const headers = ['问题ID', '视频ID', '评分'];
    let csvContent = headers.join(',') + '\n';

    results.forEach(result => {
        csvContent += `${result.questionId},${result.videoId},${result.value}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'survey_results.csv';
    link.click();
}
