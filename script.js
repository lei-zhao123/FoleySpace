const methodOrder = ['MMAudio', 'See2Sound', 'ThinkSound', 'Ours'];
const questionGroups = [
  ['demo_all/See2Sound/-2-wdcN5vOw_000017.mp4', 'demo_all/FoleySpace/-2-wdcN5vOw_000017.mp4', 'demo_all/MMAudio/-2-wdcN5vOw_000017.mp4', 'demo_all/ThinkSound/-2-wdcN5vOw_000017.mp4'],
  ['demo_all/ThinkSound/-fTfRh0_RQ4_000030.mp4', 'demo_all/FoleySpace/-fTfRh0_RQ4_000030.mp4', 'demo_all/See2Sound/-fTfRh0_RQ4_000030.mp4', 'demo_all/MMAudio/-fTfRh0_RQ4_000030.mp4'],
  ['demo_all/See2Sound/-GW1J75oAKU_000304.mp4', 'demo_all/ThinkSound/-GW1J75oAKU_000304.mp4', 'demo_all/FoleySpace/-GW1J75oAKU_000304.mp4', 'demo_all/MMAudio/-GW1J75oAKU_000304.mp4'],
  ['demo_all/MMAudio/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/See2Sound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/ThinkSound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/FoleySpace/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4'],
  ['demo_all/See2Sound/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/FoleySpace/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/MMAudio/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/ThinkSound/68f2197a-d021-4aab-8973-11c41866489c.mp4'],
  // ...其余省略，为了节省展示空间，请你直接粘贴到这里继续
];

const container = document.getElementById('video-grid');

questionGroups.forEach((group, idx) => {
  const groupDiv = document.createElement('div');
  groupDiv.className = 'video-row';
  group.forEach((src, j) => {
    const videoDiv = document.createElement('div');
    videoDiv.className = 'video-item';

    const video = document.createElement('video');
    video.src = src;
    video.controls = true;

    const label = document.createElement('div');
    label.className = 'video-label';
    label.textContent = methodOrder[j % 4];

    videoDiv.appendChild(video);
    videoDiv.appendChild(label);
    groupDiv.appendChild(videoDiv);
  });
  container.appendChild(groupDiv);
});
