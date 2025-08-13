// ====== 配置区：在这里填你的视频清单 ======
const videoList = [
  // 示例：替换为你的路径（支持本地或在线）
{ src: "demo_all/AudioX/-2-wdcN5vOw_000017.mp4", id: "AudioX/-2-wdcN5vOw_000017.mp4"},
{ src: "demo_all/ThinkSound/-2-wdcN5vOw_000017.mp4", id: "ThinkSound/-2-wdcN5vOw_000017.mp4"},
{ src: "demo_all/FoleySpace25fps/-2-wdcN5vOw_000017.mp4", id: "FoleySpace25fps/-2-wdcN5vOw_000017.mp4"},
{ src: "demo_all/FoleySpace8frames/-2-wdcN5vOw_000017.mp4", id: "FoleySpace8frames/-2-wdcN5vOw_000017.mp4"},
{ src: "demo_all/MMAudio/-2-wdcN5vOw_000017.mp4", id: "MMAudio/-2-wdcN5vOw_000017.mp4"},
{ src: "demo_all/See2Sound/-2-wdcN5vOw_000017.mp4", id: "See2Sound/-2-wdcN5vOw_000017.mp4"},
{ src: "demo_all/ThinkSound/-fTfRh0_RQ4_000030.mp4", id: "ThinkSound/-fTfRh0_RQ4_000030.mp4"},
{ src: "demo_all/FoleySpace25fps/-fTfRh0_RQ4_000030.mp4", id: "FoleySpace25fps/-fTfRh0_RQ4_000030.mp4"},
{ src: "demo_all/FoleySpace8frames/-fTfRh0_RQ4_000030.mp4", id: "FoleySpace8frames/-fTfRh0_RQ4_000030.mp4"},
{ src: "demo_all/See2Sound/-fTfRh0_RQ4_000030.mp4", id: "See2Sound/-fTfRh0_RQ4_000030.mp4"},
{ src: "demo_all/MMAudio/-fTfRh0_RQ4_000030.mp4", id: "MMAudio/-fTfRh0_RQ4_000030.mp4"},
{ src: "demo_all/AudioX/-fTfRh0_RQ4_000030.mp4", id: "AudioX/-fTfRh0_RQ4_000030.mp4"},
{ src: "demo_all/FoleySpace8frames/-GW1J75oAKU_000304.mp4", id: "FoleySpace8frames/-GW1J75oAKU_000304.mp4"},
{ src: "demo_all/See2Sound/-GW1J75oAKU_000304.mp4", id: "See2Sound/-GW1J75oAKU_000304.mp4"},
{ src: "demo_all/ThinkSound/-GW1J75oAKU_000304.mp4", id: "ThinkSound/-GW1J75oAKU_000304.mp4"},
{ src: "demo_all/MMAudio/-GW1J75oAKU_000304.mp4", id: "MMAudio/-GW1J75oAKU_000304.mp4"},
{ src: "demo_all/AudioX/-GW1J75oAKU_000304.mp4", id: "AudioX/-GW1J75oAKU_000304.mp4"},
{ src: "demo_all/FoleySpace25fps/-GW1J75oAKU_000304.mp4", id: "FoleySpace25fps/-GW1J75oAKU_000304.mp4"},
{ src: "demo_all/See2Sound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4", id: "See2Sound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4"},
{ src: "demo_all/FoleySpace25fps/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4", id: "FoleySpace25fps/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4"},
{ src: "demo_all/ThinkSound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4", id: "ThinkSound/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4"},
{ src: "demo_all/FoleySpace8frames/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4", id: "FoleySpace8frames/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4"},
{ src: "demo_all/AudioX/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4", id: "AudioX/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4"},
{ src: "demo_all/MMAudio/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4", id: "MMAudio/2b81e2de-6380-46f7-b46b-00ce187b7f1c.mp4"},
{ src: "demo_all/AudioX/68f2197a-d021-4aab-8973-11c41866489c.mp4", id: "AudioX/68f2197a-d021-4aab-8973-11c41866489c.mp4"},
{ src: "demo_all/MMAudio/68f2197a-d021-4aab-8973-11c41866489c.mp4", id: "MMAudio/68f2197a-d021-4aab-8973-11c41866489c.mp4"},
{ src: "demo_all/ThinkSound/68f2197a-d021-4aab-8973-11c41866489c.mp4", id: "ThinkSound/68f2197a-d021-4aab-8973-11c41866489c.mp4"},
{ src: "demo_all/FoleySpace8frames/68f2197a-d021-4aab-8973-11c41866489c.mp4", id: "FoleySpace8frames/68f2197a-d021-4aab-8973-11c41866489c.mp4"},
{ src: "demo_all/FoleySpace25fps/68f2197a-d021-4aab-8973-11c41866489c.mp4", id: "FoleySpace25fps/68f2197a-d021-4aab-8973-11c41866489c.mp4"},
{ src: "demo_all/See2Sound/68f2197a-d021-4aab-8973-11c41866489c.mp4", id: "See2Sound/68f2197a-d021-4aab-8973-11c41866489c.mp4"},
{ src: "demo_all/MMAudio/bird.mp4", id: "MMAudio/bird.mp4"},
{ src: "demo_all/FoleySpace25fps/bird.mp4", id: "FoleySpace25fps/bird.mp4"},
{ src: "demo_all/See2Sound/bird.mp4", id: "See2Sound/bird.mp4"},
{ src: "demo_all/ThinkSound/bird.mp4", id: "ThinkSound/bird.mp4"},
{ src: "demo_all/AudioX/bird.mp4", id: "AudioX/bird.mp4"},
{ src: "demo_all/FoleySpace8frames/bird.mp4", id: "FoleySpace8frames/bird.mp4"},
{ src: "demo_all/FoleySpace8frames/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4", id: "FoleySpace8frames/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4"},
{ src: "demo_all/FoleySpace25fps/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4", id: "FoleySpace25fps/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4"},
{ src: "demo_all/MMAudio/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4", id: "MMAudio/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4"},
{ src: "demo_all/AudioX/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4", id: "AudioX/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4"},
{ src: "demo_all/ThinkSound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4", id: "ThinkSound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4"},
{ src: "demo_all/See2Sound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4", id: "See2Sound/f2cefffb-1e73-4854-aa7d-a437c5a8436d.mp4"},
{ src: "demo_all/See2Sound/gm453192028-44957136.mp4", id: "See2Sound/gm453192028-44957136.mp4"},
{ src: "demo_all/FoleySpace8frames/gm453192028-44957136.mp4", id: "FoleySpace8frames/gm453192028-44957136.mp4"},
{ src: "demo_all/MMAudio/gm453192028-44957136.mp4", id: "MMAudio/gm453192028-44957136.mp4"},
{ src: "demo_all/FoleySpace25fps/gm453192028-44957136.mp4", id: "FoleySpace25fps/gm453192028-44957136.mp4"},
{ src: "demo_all/AudioX/gm453192028-44957136.mp4", id: "AudioX/gm453192028-44957136.mp4"},
{ src: "demo_all/ThinkSound/gm453192028-44957136.mp4", id: "ThinkSound/gm453192028-44957136.mp4"},
{ src: "demo_all/See2Sound/gm462108336-56711250.mp4", id: "See2Sound/gm462108336-56711250.mp4"},
{ src: "demo_all/MMAudio/gm462108336-56711250.mp4", id: "MMAudio/gm462108336-56711250.mp4"},
{ src: "demo_all/AudioX/gm462108336-56711250.mp4", id: "AudioX/gm462108336-56711250.mp4"},
{ src: "demo_all/ThinkSound/gm462108336-56711250.mp4", id: "ThinkSound/gm462108336-56711250.mp4"},
{ src: "demo_all/FoleySpace25fps/gm462108336-56711250.mp4", id: "FoleySpace25fps/gm462108336-56711250.mp4"},
{ src: "demo_all/FoleySpace8frames/gm462108336-56711250.mp4", id: "FoleySpace8frames/gm462108336-56711250.mp4"},
{ src: "demo_all/FoleySpace8frames/gm496369920-78713519.mp4", id: "FoleySpace8frames/gm496369920-78713519.mp4"},
{ src: "demo_all/MMAudio/gm496369920-78713519.mp4", id: "MMAudio/gm496369920-78713519.mp4"},
{ src: "demo_all/ThinkSound/gm496369920-78713519.mp4", id: "ThinkSound/gm496369920-78713519.mp4"},
{ src: "demo_all/See2Sound/gm496369920-78713519.mp4", id: "See2Sound/gm496369920-78713519.mp4"},
{ src: "demo_all/FoleySpace25fps/gm496369920-78713519.mp4", id: "FoleySpace25fps/gm496369920-78713519.mp4"},
{ src: "demo_all/AudioX/gm496369920-78713519.mp4", id: "AudioX/gm496369920-78713519.mp4"},
{ src: "demo_all/FoleySpace8frames/gm595781138-103274473.mp4", id: "FoleySpace8frames/gm595781138-103274473.mp4"},
{ src: "demo_all/FoleySpace25fps/gm595781138-103274473.mp4", id: "FoleySpace25fps/gm595781138-103274473.mp4"},
{ src: "demo_all/See2Sound/gm595781138-103274473.mp4", id: "See2Sound/gm595781138-103274473.mp4"},
{ src: "demo_all/MMAudio/gm595781138-103274473.mp4", id: "MMAudio/gm595781138-103274473.mp4"},
{ src: "demo_all/AudioX/gm595781138-103274473.mp4", id: "AudioX/gm595781138-103274473.mp4"},
{ src: "demo_all/ThinkSound/gm595781138-103274473.mp4", id: "ThinkSound/gm595781138-103274473.mp4"},
{ src: "demo_all/FoleySpace25fps/gm606093800-104336573.mp4", id: "FoleySpace25fps/gm606093800-104336573.mp4"},
{ src: "demo_all/MMAudio/gm606093800-104336573.mp4", id: "MMAudio/gm606093800-104336573.mp4"},
{ src: "demo_all/ThinkSound/gm606093800-104336573.mp4", id: "ThinkSound/gm606093800-104336573.mp4"},
{ src: "demo_all/FoleySpace8frames/gm606093800-104336573.mp4", id: "FoleySpace8frames/gm606093800-104336573.mp4"},
{ src: "demo_all/AudioX/gm606093800-104336573.mp4", id: "AudioX/gm606093800-104336573.mp4"},
{ src: "demo_all/See2Sound/gm606093800-104336573.mp4", id: "See2Sound/gm606093800-104336573.mp4"},
{ src: "demo_all/MMAudio/gm610206840-105317569.mp4", id: "MMAudio/gm610206840-105317569.mp4"},
{ src: "demo_all/FoleySpace25fps/gm610206840-105317569.mp4", id: "FoleySpace25fps/gm610206840-105317569.mp4"},
{ src: "demo_all/See2Sound/gm610206840-105317569.mp4", id: "See2Sound/gm610206840-105317569.mp4"},
{ src: "demo_all/FoleySpace8frames/gm610206840-105317569.mp4", id: "FoleySpace8frames/gm610206840-105317569.mp4"},
{ src: "demo_all/AudioX/gm610206840-105317569.mp4", id: "AudioX/gm610206840-105317569.mp4"},
{ src: "demo_all/ThinkSound/gm610206840-105317569.mp4", id: "ThinkSound/gm610206840-105317569.mp4"},
{ src: "demo_all/FoleySpace25fps/gm636596908-114293075.mp4", id: "FoleySpace25fps/gm636596908-114293075.mp4"},
{ src: "demo_all/FoleySpace8frames/gm636596908-114293075.mp4", id: "FoleySpace8frames/gm636596908-114293075.mp4"},
{ src: "demo_all/AudioX/gm636596908-114293075.mp4", id: "AudioX/gm636596908-114293075.mp4"},
{ src: "demo_all/ThinkSound/gm636596908-114293075.mp4", id: "ThinkSound/gm636596908-114293075.mp4"},
{ src: "demo_all/MMAudio/gm636596908-114293075.mp4", id: "MMAudio/gm636596908-114293075.mp4"},
{ src: "demo_all/See2Sound/gm636596908-114293075.mp4", id: "See2Sound/gm636596908-114293075.mp4"},
{ src: "demo_all/FoleySpace25fps/gm91809150-7712324.mp4", id: "FoleySpace25fps/gm91809150-7712324.mp4"},
{ src: "demo_all/ThinkSound/gm91809150-7712324.mp4", id: "ThinkSound/gm91809150-7712324.mp4"},
{ src: "demo_all/FoleySpace8frames/gm91809150-7712324.mp4", id: "FoleySpace8frames/gm91809150-7712324.mp4"},
{ src: "demo_all/AudioX/gm91809150-7712324.mp4", id: "AudioX/gm91809150-7712324.mp4"},
{ src: "demo_all/See2Sound/gm91809150-7712324.mp4", id: "See2Sound/gm91809150-7712324.mp4"},
{ src: "demo_all/MMAudio/gm91809150-7712324.mp4", id: "MMAudio/gm91809150-7712324.mp4"},
{ src: "demo_all/FoleySpace8frames/moving1.mp4", id: "FoleySpace8frames/moving1.mp4"},
{ src: "demo_all/AudioX/moving1.mp4", id: "AudioX/moving1.mp4"},
{ src: "demo_all/MMAudio/moving1.mp4", id: "MMAudio/moving1.mp4"},
{ src: "demo_all/ThinkSound/moving1.mp4", id: "ThinkSound/moving1.mp4"},
{ src: "demo_all/See2Sound/moving1.mp4", id: "See2Sound/moving1.mp4"},
{ src: "demo_all/FoleySpace25fps/moving1.mp4", id: "FoleySpace25fps/moving1.mp4"},
{ src: "demo_all/FoleySpace8frames/moving12.mp4", id: "FoleySpace8frames/moving12.mp4"},
{ src: "demo_all/AudioX/moving12.mp4", id: "AudioX/moving12.mp4"},
{ src: "demo_all/FoleySpace25fps/moving12.mp4", id: "FoleySpace25fps/moving12.mp4"},
{ src: "demo_all/See2Sound/moving12.mp4", id: "See2Sound/moving12.mp4"},
{ src: "demo_all/ThinkSound/moving12.mp4", id: "ThinkSound/moving12.mp4"},
{ src: "demo_all/MMAudio/moving12.mp4", id: "MMAudio/moving12.mp4"},
{ src: "demo_all/FoleySpace25fps/moving19.mp4", id: "FoleySpace25fps/moving19.mp4"},
{ src: "demo_all/AudioX/moving19.mp4", id: "AudioX/moving19.mp4"},
{ src: "demo_all/ThinkSound/moving19.mp4", id: "ThinkSound/moving19.mp4"},
{ src: "demo_all/FoleySpace8frames/moving19.mp4", id: "FoleySpace8frames/moving19.mp4"},
{ src: "demo_all/See2Sound/moving19.mp4", id: "See2Sound/moving19.mp4"},
{ src: "demo_all/MMAudio/moving19.mp4", id: "MMAudio/moving19.mp4"},
{ src: "demo_all/AudioX/moving2.mp4", id: "AudioX/moving2.mp4"},
{ src: "demo_all/See2Sound/moving2.mp4", id: "See2Sound/moving2.mp4"},
{ src: "demo_all/FoleySpace25fps/moving2.mp4", id: "FoleySpace25fps/moving2.mp4"},
{ src: "demo_all/FoleySpace8frames/moving2.mp4", id: "FoleySpace8frames/moving2.mp4"},
{ src: "demo_all/ThinkSound/moving2.mp4", id: "ThinkSound/moving2.mp4"},
{ src: "demo_all/MMAudio/moving2.mp4", id: "MMAudio/moving2.mp4"},
{ src: "demo_all/FoleySpace8frames/moving4.mp4", id: "FoleySpace8frames/moving4.mp4"},
{ src: "demo_all/See2Sound/moving4.mp4", id: "See2Sound/moving4.mp4"},
{ src: "demo_all/MMAudio/moving4.mp4", id: "MMAudio/moving4.mp4"},
{ src: "demo_all/FoleySpace25fps/moving4.mp4", id: "FoleySpace25fps/moving4.mp4"},
{ src: "demo_all/AudioX/moving4.mp4", id: "AudioX/moving4.mp4"},
{ src: "demo_all/ThinkSound/moving4.mp4", id: "ThinkSound/moving4.mp4"},
{ src: "demo_all/AudioX/moving5.mp4", id: "AudioX/moving5.mp4"},
{ src: "demo_all/ThinkSound/moving5.mp4", id: "ThinkSound/moving5.mp4"},
{ src: "demo_all/FoleySpace25fps/moving5.mp4", id: "FoleySpace25fps/moving5.mp4"},
{ src: "demo_all/MMAudio/moving5.mp4", id: "MMAudio/moving5.mp4"},
{ src: "demo_all/FoleySpace8frames/moving5.mp4", id: "FoleySpace8frames/moving5.mp4"},
{ src: "demo_all/See2Sound/moving5.mp4", id: "See2Sound/moving5.mp4"},
{ src: "demo_all/See2Sound/static1.mp4", id: "See2Sound/static1.mp4"},
{ src: "demo_all/AudioX/static1.mp4", id: "AudioX/static1.mp4"},
{ src: "demo_all/FoleySpace8frames/static1.mp4", id: "FoleySpace8frames/static1.mp4"},
{ src: "demo_all/ThinkSound/static1.mp4", id: "ThinkSound/static1.mp4"},
{ src: "demo_all/FoleySpace25fps/static1.mp4", id: "FoleySpace25fps/static1.mp4"},
{ src: "demo_all/MMAudio/static1.mp4", id: "MMAudio/static1.mp4"},
{ src: "demo_all/FoleySpace25fps/static5.mp4", id: "FoleySpace25fps/static5.mp4"},
{ src: "demo_all/ThinkSound/static5.mp4", id: "ThinkSound/static5.mp4"},
{ src: "demo_all/See2Sound/static5.mp4", id: "See2Sound/static5.mp4"},
{ src: "demo_all/FoleySpace8frames/static5.mp4", id: "FoleySpace8frames/static5.mp4"},
{ src: "demo_all/AudioX/static5.mp4", id: "AudioX/static5.mp4"},
{ src: "demo_all/MMAudio/static5.mp4", id: "MMAudio/static5.mp4"},
{ src: "demo_all/FoleySpace8frames/storm.mp4", id: "FoleySpace8frames/storm.mp4"},
{ src: "demo_all/MMAudio/storm.mp4", id: "MMAudio/storm.mp4"},
{ src: "demo_all/FoleySpace25fps/storm.mp4", id: "FoleySpace25fps/storm.mp4"},
{ src: "demo_all/ThinkSound/storm.mp4", id: "ThinkSound/storm.mp4"},
{ src: "demo_all/See2Sound/storm.mp4", id: "See2Sound/storm.mp4"},
{ src: "demo_all/AudioX/storm.mp4", id: "AudioX/storm.mp4"},
{ src: "demo_all/See2Sound/Walter_Woodman.mp4", id: "See2Sound/Walter_Woodman.mp4"},
{ src: "demo_all/FoleySpace8frames/Walter_Woodman.mp4", id: "FoleySpace8frames/Walter_Woodman.mp4"},
{ src: "demo_all/FoleySpace25fps/Walter_Woodman.mp4", id: "FoleySpace25fps/Walter_Woodman.mp4"},
{ src: "demo_all/ThinkSound/Walter_Woodman.mp4", id: "ThinkSound/Walter_Woodman.mp4"},
{ src: "demo_all/AudioX/Walter_Woodman.mp4", id: "AudioX/Walter_Woodman.mp4"},
{ src: "demo_all/MMAudio/Walter_Woodman.mp4", id: "MMAudio/Walter_Woodman.mp4"},
{ src: "demo_all/FoleySpace25fps/waves_storm.mp4", id: "FoleySpace25fps/waves_storm.mp4"},
{ src: "demo_all/ThinkSound/waves_storm.mp4", id: "ThinkSound/waves_storm.mp4"},
{ src: "demo_all/See2Sound/waves_storm.mp4", id: "See2Sound/waves_storm.mp4"},
{ src: "demo_all/MMAudio/waves_storm.mp4", id: "MMAudio/waves_storm.mp4"},
{ src: "demo_all/AudioX/waves_storm.mp4", id: "AudioX/waves_storm.mp4"},
{ src: "demo_all/FoleySpace8frames/waves_storm.mp4", id: "FoleySpace8frames/waves_storm.mp4"},
{ src: "demo_all/See2Sound/1.mp4", id: "See2Sound/1.mp4"},
{ src: "demo_all/FoleySpace8frames/1.mp4", id: "FoleySpace8frames/1.mp4"},
{ src: "demo_all/FoleySpace25fps/1.mp4", id: "FoleySpace25fps/1.mp4"},
{ src: "demo_all/ThinkSound/1.mp4", id: "ThinkSound/1.mp4"},
{ src: "demo_all/MMAudio/1.mp4", id: "MMAudio/1.mp4"},
{ src: "demo_all/AudioX/1.mp4", id: "AudioX/1.mp4"},
{ src: "demo_all/FoleySpace25fps/2.mp4", id: "FoleySpace25fps/2.mp4"},
{ src: "demo_all/FoleySpace8frames/2.mp4", id: "FoleySpace8frames/2.mp4"},
{ src: "demo_all/MMAudio/2.mp4", id: "MMAudio/2.mp4"},
{ src: "demo_all/AudioX/2.mp4", id: "AudioX/2.mp4"},
{ src: "demo_all/See2Sound/2.mp4", id: "See2Sound/2.mp4"},
{ src: "demo_all/ThinkSound/2.mp4", id: "ThinkSound/2.mp4"},
{ src: "demo_all/FoleySpace25fps/3.mp4", id: "FoleySpace25fps/3.mp4"},
{ src: "demo_all/ThinkSound/3.mp4", id: "ThinkSound/3.mp4"},
{ src: "demo_all/MMAudio/3.mp4", id: "MMAudio/3.mp4"},
{ src: "demo_all/See2Sound/3.mp4", id: "See2Sound/3.mp4"},
{ src: "demo_all/AudioX/3.mp4", id: "AudioX/3.mp4"},
{ src: "demo_all/FoleySpace8frames/3.mp4", id: "FoleySpace8frames/3.mp4"},
{ src: "demo_all/ThinkSound/4.mp4", id: "ThinkSound/4.mp4"},
{ src: "demo_all/FoleySpace8frames/4.mp4", id: "FoleySpace8frames/4.mp4"},
{ src: "demo_all/AudioX/4.mp4", id: "AudioX/4.mp4"},
{ src: "demo_all/MMAudio/4.mp4", id: "MMAudio/4.mp4"},
{ src: "demo_all/See2Sound/4.mp4", id: "See2Sound/4.mp4"},
{ src: "demo_all/FoleySpace25fps/4.mp4", id: "FoleySpace25fps/4.mp4"},
{ src: "demo_all/MMAudio/5.mp4", id: "MMAudio/5.mp4"},
{ src: "demo_all/FoleySpace25fps/5.mp4", id: "FoleySpace25fps/5.mp4"},
{ src: "demo_all/ThinkSound/5.mp4", id: "ThinkSound/5.mp4"},
{ src: "demo_all/AudioX/5.mp4", id: "AudioX/5.mp4"},
{ src: "demo_all/FoleySpace8frames/5.mp4", id: "FoleySpace8frames/5.mp4"},
{ src: "demo_all/See2Sound/5.mp4", id: "See2Sound/5.mp4"},
{ src: "demo_all/ThinkSound/6.mp4", id: "ThinkSound/6.mp4"},
{ src: "demo_all/FoleySpace25fps/6.mp4", id: "FoleySpace25fps/6.mp4"},
{ src: "demo_all/FoleySpace8frames/6.mp4", id: "FoleySpace8frames/6.mp4"},
{ src: "demo_all/AudioX/6.mp4", id: "AudioX/6.mp4"},
{ src: "demo_all/MMAudio/6.mp4", id: "MMAudio/6.mp4"},
{ src: "demo_all/See2Sound/6.mp4", id: "See2Sound/6.mp4"},
];

// 评分项定义（键、中文名）
const CRITERIA = [
  { key: "audioQuality", label: "音频质量 (Audio Quality)" },
  { key: "spatialConsistency", label: "空间一致性 (Spatial Consistency)" },
  { key: "semanticConsistency", label: "语义一致性 (Semantic Consistency)" },
  { key: "temporalConsistency", label: "时间一致性 (Temporal Consistency)" },
  { key: "PSS", label: "感知空间感得分（PSS）" },
];

// ====== 状态 ======
let idx = 0; // 当前视频索引
// ratings: [{videoId, audioQuality, spatialConsistency, semanticConsistency, temporalConsistency, PSS}]
const ratings = Array.from({ length: videoList.length }, () => ({}));

// ====== DOM 引用 ======
const cover = document.getElementById("cover");
const page = document.getElementById("page");
const done = document.getElementById("done");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const downloadBtn = document.getElementById("downloadBtn");
const counter = document.getElementById("counter");
const videoEl = document.getElementById("video");
const videoTitle = document.getElementById("videoTitle");
const formArea = document.getElementById("formArea");
const errorBox = document.getElementById("errorBox");

// ====== 事件绑定 ======
startBtn.addEventListener("click", () => {
  idx = 0;
  renderPage();
});

backBtn.addEventListener("click", () => {
  if (idx > 0) {
    collectCurrentPage(); // 允许未满也保存，方便返回修正
    idx--;
    renderPage();
  }
});

nextBtn.addEventListener("click", () => {
  if (!collectCurrentPage()) {
    errorBox.style.display = "block";
    return;
  }
  if (idx < videoList.length - 1) {
    idx++;
    renderPage();
  } else {
    // 完成
    page.style.display = "none";
    done.style.display = "block";
  }
});

downloadBtn.addEventListener("click", downloadCSV);

// ====== 渲染单页 ======
function renderPage() {
  cover.style.display = "none";
  done.style.display = "none";
  page.style.display = "block";

  const N = videoList.length;
  counter.textContent = `第 ${idx + 1} / ${N} 条`;
  videoTitle.textContent = `视频 ${idx + 1}`;
  videoEl.src = videoList[idx].src;
  videoEl.load();

  // 渲染 5 个评分项
  const saved = ratings[idx];
  formArea.innerHTML = "";
  CRITERIA.forEach((c) => {
    const q = document.createElement("div");
    const title = document.createElement("div");
    title.innerHTML = `<strong>${c.label}</strong>`;
    const group = makeRadioGroup(c.key, saved[c.key]);
    q.appendChild(title);
    q.appendChild(group);
    q.style.marginBottom = "10px";
    formArea.appendChild(q);
  });

  // 按钮 & 错误提示
  backBtn.style.visibility = idx === 0 ? "hidden" : "visible";
  nextBtn.textContent = idx === N - 1 ? "提交并完成" : "下一条";
  errorBox.style.display = "none";
}

// ====== 工具：生成 1~5 单选 ======
function makeRadioGroup(name, saved) {
  const wrap = document.createElement("div");
  wrap.className = "radio-group";
  for (let v = 1; v <= 5; v++) {
    const id = `${name}-${v}`;
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name; // 单页唯一
    input.value = String(v);
    input.id = id;
    if (saved && String(saved) === String(v)) input.checked = true;
    const span = document.createElement("span");
    span.textContent = v;
    label.appendChild(input);
    label.appendChild(span);
    wrap.appendChild(label);
  }
  return wrap;
}

// ====== 收集当前页数据；未完成返回 false ======
function collectCurrentPage() {
  const current = { videoId: videoList[idx].id ?? `index_${idx}` };
  for (const c of CRITERIA) {
    const chosen = document.querySelector(`input[name="${c.key}"]:checked`);
    if (!chosen) return false;
    current[c.key] = Number(chosen.value);
  }
  ratings[idx] = current;
  return true;
}

// ====== 导出 CSV ======
function downloadCSV() {
  const header = ["video_id", ...CRITERIA.map((c) => c.key)];
  const lines = [header.join(",")];
  ratings.forEach((r) => {
    const row = [r.videoId, ...CRITERIA.map((c) => r[c.key])];
    lines.push(row.join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "user_study.csv";
  a.click();
  URL.revokeObjectURL(url);
}
