# Videos

The experiment pages show two kinds of video:

1. **YouTube Shorts.** 38 experiments have a short video from an educator's YouTube channel. The list is in `js/data/videos.js` (and inside each experiment). These need internet.
2. **Your own clips, saved in this folder.** They play even without internet, which is useful when the venue has no Wi-Fi.

## Adding your own clip

1. Copy the video file into this folder, for example `videos/cabbage.mp4`. MP4 (H.264) plays in every browser.
2. Open `js/data/videos.js` and add a line inside `LOCAL_VIDEOS`, using the experiment's id and the file name:

   ```js
   const LOCAL_VIDEOS = {
     cabbage: "cabbage.mp4",
   };
   ```

   The id is the last part of the experiment's address: `pages/experiments.html#/en/exp/cabbage` → `cabbage`.
3. Run `python python/check_project.py` to make sure the file is found.

The clip then appears in that experiment's Video section, next to the YouTube Short.
