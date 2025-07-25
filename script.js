const methodOrder = ['MMAudio', 'See2Sound', 'ThinkSound', 'Ours'];
const questionGroups = [
['demo_all/MMAudio/-2-wdcN5vOw_000017.mp4', 'demo_all/See2Sound/-2-wdcN5vOw_000017.mp4', 'demo_all/ThinkSound/-2-wdcN5vOw_000017.mp4', 'demo_all/FoleySpace/-2-wdcN5vOw_000017.mp4'],
['demo_all/MMAudio/-fTfRh0_RQ4_000030.mp4', 'demo_all/See2Sound/-fTfRh0_RQ4_000030.mp4', 'demo_all/ThinkSound/-fTfRh0_RQ4_000030.mp4', 'demo_all/FoleySpace/-fTfRh0_RQ4_000030.mp4'],
['demo_all/MMAudio/-GW1J75oAKU_000304.mp4', 'demo_all/See2Sound/-GW1J75oAKU_000304.mp4', 'demo_all/ThinkSound/-GW1J75oAKU_000304.mp4', 'demo_all/FoleySpace/-GW1J75oAKU_000304.mp4'],
['demo_all/MMAudio/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/See2Sound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/ThinkSound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4', 'demo_all/FoleySpace/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4'],
['demo_all/MMAudio/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/See2Sound/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/ThinkSound/68f2197a-d021-4aab-8973-11c41866489c.mp4', 'demo_all/FoleySpace/68f2197a-d021-4aab-8973-11c41866489c.mp4'],
['demo_all/MMAudio/bird.mp4', 'demo_all/See2Sound/bird.mp4', 'demo_all/ThinkSound/bird.mp4', 'demo_all/FoleySpace/bird.mp4'],
['demo_all/MMAudio/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4', 'demo_all/See2Sound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4', 'demo_all/ThinkSound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4', 'demo_all/FoleySpace/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4'],
['demo_all/MMAudio/gm453192028-44957136.mp4', 'demo_all/See2Sound/gm453192028-44957136.mp4', 'demo_all/ThinkSound/gm453192028-44957136.mp4', 'demo_all/FoleySpace/gm453192028-44957136.mp4'],
['demo_all/MMAudio/gm462108336-56711250.mp4', 'demo_all/See2Sound/gm462108336-56711250.mp4', 'demo_all/ThinkSound/gm462108336-56711250.mp4', 'demo_all/FoleySpace/gm462108336-56711250.mp4'],
['demo_all/MMAudio/gm496369920-78713519.mp4', 'demo_all/See2Sound/gm496369920-78713519.mp4', 'demo_all/ThinkSound/gm496369920-78713519.mp4', 'demo_all/FoleySpace/gm496369920-78713519.mp4'],
['demo_all/MMAudio/gm595781138-103274473.mp4', 'demo_all/See2Sound/gm595781138-103274473.mp4', 'demo_all/ThinkSound/gm595781138-103274473.mp4', 'demo_all/FoleySpace/gm595781138-103274473.mp4'],
['demo_all/MMAudio/gm606093800-104336573.mp4', 'demo_all/See2Sound/gm606093800-104336573.mp4', 'demo_all/ThinkSound/gm606093800-104336573.mp4', 'demo_all/FoleySpace/gm606093800-104336573.mp4'],
['demo_all/MMAudio/gm610206840-105317569.mp4', 'demo_all/See2Sound/gm610206840-105317569.mp4', 'demo_all/ThinkSound/gm610206840-105317569.mp4', 'demo_all/FoleySpace/gm610206840-105317569.mp4'],
['demo_all/MMAudio/gm636596908-114293075.mp4', 'demo_all/See2Sound/gm636596908-114293075.mp4', 'demo_all/ThinkSound/gm636596908-114293075.mp4', 'demo_all/FoleySpace/gm636596908-114293075.mp4'],
['demo_all/MMAudio/gm91809150-7712324.mp4', 'demo_all/See2Sound/gm91809150-7712324.mp4', 'demo_all/ThinkSound/gm91809150-7712324.mp4', 'demo_all/FoleySpace/gm91809150-7712324.mp4'],
['demo_all/MMAudio/moving1.mp4', 'demo_all/See2Sound/moving1.mp4', 'demo_all/ThinkSound/moving1.mp4', 'demo_all/FoleySpace/moving1.mp4'],
['demo_all/MMAudio/moving12.mp4', 'demo_all/See2Sound/moving12.mp4', 'demo_all/ThinkSound/moving12.mp4', 'demo_all/FoleySpace/moving12.mp4'],
['demo_all/MMAudio/moving19.mp4', 'demo_all/See2Sound/moving19.mp4', 'demo_all/ThinkSound/moving19.mp4', 'demo_all/FoleySpace/moving19.mp4'],
['demo_all/MMAudio/moving2.mp4', 'demo_all/See2Sound/moving2.mp4', 'demo_all/ThinkSound/moving2.mp4', 'demo_all/FoleySpace/moving2.mp4'],
['demo_all/MMAudio/moving4.mp4', 'demo_all/See2Sound/moving4.mp4', 'demo_all/ThinkSound/moving4.mp4', 'demo_all/FoleySpace/moving4.mp4'],
['demo_all/MMAudio/moving5.mp4', 'demo_all/See2Sound/moving5.mp4', 'demo_all/ThinkSound/moving5.mp4', 'demo_all/FoleySpace/moving5.mp4'],
['demo_all/MMAudio/static1.mp4', 'demo_all/See2Sound/static1.mp4', 'demo_all/ThinkSound/static1.mp4', 'demo_all/FoleySpace/static1.mp4'],
['demo_all/MMAudio/static5.mp4', 'demo_all/See2Sound/static5.mp4', 'demo_all/ThinkSound/static5.mp4', 'demo_all/FoleySpace/static5.mp4'],
['demo_all/MMAudio/storm.mp4', 'demo_all/See2Sound/storm.mp4', 'demo_all/ThinkSound/storm.mp4', 'demo_all/FoleySpace/storm.mp4'],
['demo_all/MMAudio/Walter_Woodman.mp4', 'demo_all/See2Sound/Walter_Woodman.mp4', 'demo_all/ThinkSound/Walter_Woodman.mp4', 'demo_all/FoleySpace/Walter_Woodman.mp4'],
['demo_all/MMAudio/waves_storm.mp4', 'demo_all/See2Sound/waves_storm.mp4', 'demo_all/ThinkSound/waves_storm.mp4', 'demo_all/FoleySpace/waves_storm.mp4'],
['demo_all/MMAudio/1.mp4', 'demo_all/See2Sound/1.mp4', 'demo_all/ThinkSound/1.mp4', 'demo_all/FoleySpace/1.mp4'],
['demo_all/MMAudio/2.mp4', 'demo_all/See2Sound/2.mp4', 'demo_all/ThinkSound/2.mp4', 'demo_all/FoleySpace/2.mp4'],
['demo_all/MMAudio/3.mp4', 'demo_all/See2Sound/3.mp4', 'demo_all/ThinkSound/3.mp4', 'demo_all/FoleySpace/3.mp4'],
['demo_all/MMAudio/4.mp4', 'demo_all/See2Sound/4.mp4', 'demo_all/ThinkSound/4.mp4', 'demo_all/FoleySpace/4.mp4'],
['demo_all/MMAudio/5.mp4', 'demo_all/See2Sound/5.mp4', 'demo_all/ThinkSound/5.mp4', 'demo_all/FoleySpace/5.mp4'],
['demo_all/MMAudio/6.mp4', 'demo_all/See2Sound/6.mp4', 'demo_all/ThinkSound/6.mp4', 'demo_all/FoleySpace/6.mp4']
];

const container = document.getElementById('video-grid');

questionGroups.forEach((group, idx) => {
  // 创建一个包裹4个视频的容器
  group.forEach((src, j) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'video-item';

    const video = document.createElement('video');
    video.src = src;
    video.controls = true;

    const label = document.createElement('div');
    label.className = 'video-label';
    label.textContent = methodOrder[j % 4];

    wrapper.appendChild(video);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });

  // 每4个视频后插入一条横线（占据整行）
  const separator = document.createElement('div');
  separator.className = 'video-separator';
  container.appendChild(separator);
});