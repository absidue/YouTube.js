# YouTube.js

[![Build](https://github.com/LuanRT/YouTube.js/actions/workflows/node.js.yml/badge.svg)](https://github.com/LuanRT/YouTube.js/actions/workflows/node.js.yml)

An object-oriented wrapper around the Innertube API, which is what YouTube itself uses. This makes YouTube.js fast, simple & efficient. And big thanks to [@gatecrasher777](https://github.com/gatecrasher777/ytcog) for his research on the workings of the Innertube API!

#### What can it do?

As of now, this is one of the most advanced & stable YouTube libraries out there, and it can: 

- Search.
- Get detailed info about videos.
- Fetch notifications (sign-in required).
- Subscribe/Unsubscribe/Like/Dislike/Comment (sign-in required). 
- Last but not least, you can also download videos!

#### Do I need an API key to use this?

No, since it's basically what YouTube itself uses to populate its app/website no API keys are required.

## Installation

```bash
npm install youtubei.js
```

## Usage

[1. Basic Usage](https://github.com/LuanRT/YouTube.js#usage)

[2. Interactions](https://github.com/LuanRT/YouTube.js#interactions)

[3. Downloading Videos](https://github.com/LuanRT/YouTube.js#downloading-videos)

[4. Signing-in](https://github.com/LuanRT/YouTube.js#signing-in)

[5. Disclaimer](https://github.com/LuanRT/YouTube.js#disclaimer)

First of all we're gonna start by initializing the Innertube class:

```js
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube(); 
  //...
}

start();
```

After this you should be good to go, so let's dive into it!

Doing a simple search:

```js
const search = await youtube.search('Looking for life on Mars - Documentary');
```

<details>
<summary>Output</summary>
<p>

```js
{
   "search_metadata":{
      "query":"Looking for life on Mars - documentary",
      "corrected_query":"Looking for life on Mars - documentary",
      "estimated_results":17949539
   },
   "videos":[
      {
         "title":"Looking for Life on Mars | NOVA | PBS",
         "description":"Follow along as NASA launches the Mars 2020 Mission, perhaps the most ambitious hunt yet for signs of ancient life on Mars.",
         "author":"NOVA PBS Official",
         "id":"fhtw7Dpntb4",
         "url":"https://youtu.be/fhtw7Dpntb4",
         "channel_url":"https://www.youtube.com/user/NOVAonline",
         "metadata":{
            "view_count":"3,912,774 views",
            "short_view_count_text":{
               "simple_text":"3.9M views",
               "accessibility_label":"3.9 million views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/fhtw7Dpntb4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHHsKMNZtmzWn4t14vmmJbBotdQg",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/fhtw7Dpntb4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHzmdEUoQM_Sl-6a-bwMOIm-mM7A",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":3243,
               "simple_text":"54:03",
               "accessibility_label":"54 minutes, 3 seconds"
            },
            "published":"7 months ago",
            "badges":[
               "CC"
            ],
            "owner_badges":[
               "Verified"
            ]
         }
      }
      //...
   ]
}
```

</p>
</details> 



Getting details about a specific video:

```js
const video = await youtube.getDetails(search.videos[0].id);
```

<details>
<summary>Output</summary>
<p>

```js
{
   "title":"Looking for Life on Mars | NOVA | PBS",
   "description":"Follow along as NASA launches the Mars 2020 Mission, perhaps the most ambitious hunt yet for signs of ancient life on Mars. \n\nThe spacecraft will blaze into the Martian atmosphere at some 12,000 miles per hour and attempt to lower the Perseverance Rover in the rocky Jezero Crater, home to a dried-up river delta scientists think could have harbored life. Perseverance will comb the area for signs of life and collect samples for possible return to Earth. Traveling onboard is a four-pound helicopter that will conduct a series of test flights—the first on another planet. \n\nDuring its journey, Perseverance will also test technology designed to produce oxygen from the Martian atmosphere, in hopes that the gas could be used for fuel—or for humans to breathe—on future missions.\n\n© 2020 WGBH Educational Foundation\n\nAll rights reserved\n\nThis program was produced by GBH, which is solely responsible for its content. Some funders of NOVA also fund basic science research. Experts featured in this film may have received support from funders of this program.\n\nFunding for NOVA is provided by Draper, the David H. Koch Fund for Science, the NOVA Science Trust, the Corporation for Public Broadcasting, and PBS viewers.\n\nThis program is made possible by viewers like you. Support your local PBS station here: https://pbs.org/donate/",
   "thumbnail":{
      "url":"https://i.ytimg.com/vi/fhtw7Dpntb4/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJV-Cg2bHh4zs_svidj8fmaOQRng",
      "width":686,
      "height":386
   },
   "metadata":{
      "embed":{
         "iframeUrl":"https://www.youtube.com/embed/fhtw7Dpntb4",
         "flashUrl":"http://www.youtube.com/v/fhtw7Dpntb4?version=3&autohide=1",
         "width":1280,
         "height":720,
         "flashSecureUrl":"https://www.youtube.com/v/fhtw7Dpntb4?version=3&autohide=1"
      },
      "likes":22674,
      "dislikes":1771,
      "view_count":3913553,
      "average_rating":4.7102065,
      "length_seconds":"3243",
      "channel_id":"UCjHz5SVHeMT0AViCYZvsGDA",
      "channel_url":"http://www.youtube.com/user/NOVAonline",
      "external_channel_id":"UCjHz5SVHeMT0AViCYZvsGDA",
      "is_live_content":false,
      "is_family_safe":true,
      "is_unlisted":false,
      "is_private":false,
      "has_ypc_metadata":false,
      "category":"Science & Technology",
      "channel_name":"NOVA PBS Official",
      "publish_date":"2021-02-24",
      "upload_date":"2021-02-24",
      "keywords":[
         "mars",
         "nova",
         "pbs",
         "documentary",
         "science",
         "Perseverance",
         "space"
      ]
   }
}
```

</p>
</details>


Fetching notifications:

```js
const notifications = await youtube.getNotifications();
```

<details>
<summary>Output</summary>
<p>

```js
[
   {
      "title":"PewDiePie uploaded: Spoiled Kids Needs To Be Stopped..",
      "sent_time":"2 hours ago",
      "channel_name":"PewDiePie",
      "channel_thumbnail":{
         "url":"https://yt3.ggpht.com/ytc/AKedOLTjRAMaQkJaABC59u63AB9s7UTyQ8enbSoo_TI8cA=s88-c-k-c0x00ffffff-no-rj",
         "width":96,
         "height":96
      },
      "video_thumbnail":{
         "url":"https://i.ytimg.com/vi/raspGsvKf48/hqdefault.jpg",
         "width":640,
         "height":360
      },
      "video_url":"https://youtu.be/raspGsvKf48",
      "read":false,
      "notification_id":"1633455444762970"
   },
   //...
]
```

</p>
</details>

### Interactions:

---

* Subscribing/Unsubscribing to channels:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE); // this is equivalent to opening the watch page on YouTube

await video.subscribe();
await video.unsubscribe();
```

* Liking/Disliking:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE); // this is equivalent to opening the watch page on YouTube

await video.like();
await video.dislike();
await video.removeLike(); // removes either a like or dislike
```

* Commenting:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE);
await video.comment('Haha, nice!');
```

All of the interactions above will return ```{ success: true, status_code: 200 }``` if everything goes alright.

### Signing-in:
---

This library allows you to sign-in in two different ways:

- Using OAuth 2.0, easy, simple & reliable.
- Cookies, usually more complicated to get and unreliable.

OAuth 2.0:

```js
const fs = require('fs');
const Innertube = require('youtubei.js');
const creds_path = './yt_oauth_creds.json';

async function start() {
  const creds = fs.existsSync(creds_path) && JSON.parse(fs.readFileSync(creds_path).toString()) || {};
  const youtube = await new Innertube();
  
  // Only triggered when signing-in.
  youtube.on('auth', (data) => {
    if (data.status === 'AUTHORIZATION_PENDING') {
      console.info(`Hello!\nOn your phone or computer, go to ${data.verification_url} and enter the code ${data.code}`);
    } else if (data.status === 'SUCCESS') {
      fs.writeFileSync(creds_path, JSON.stringify({ access_token: data.access_token, refresh_token: data.refresh_token }));
      console.info('Successfully signed-in, enjoy!');
    }
  });
  
  // Triggered whenever the access token is refreshed.
  youtube.on('update-credentials', (data) => {
    fs.writeFileSync(creds_path, JSON.stringify({ access_token: data.access_token, refresh_token: data.refresh_token }));
    console.info('Credentials updated!', data);
  });
  
  await youtube.signIn(creds);
  
  //...
}

start();
```

Cookies:

```js
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube(COOKIE_HERE); 
  //...
}

start();
```

### Downloading videos:

```js
const fs = require('fs');
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube();
  const search = await youtube.search('Looking for life on Mars - documentary');
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    quality: '360p', // if a video doesn't have a specific quality it'll fall back to 360p, this is ignored when type is set to audio
    type: 'videoandaudio' // can be “video”, “audio” and “videoandaudio”
  });
  
  stream.pipe(fs.createWriteStream(`./${search.videos[0].title}.mp4`));
 
  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  });
  
  stream.on('info', (info) => {
    console.info('[DOWNLOADER]', `Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}

start();
```

Cancelling a download:
```js
stream.cancel();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
## Disclaimer
This project is not affiliated with, endorsed, or sponsored by YouTube or any of their affiliates or subsidiaries. 
All trademarks, logos and brand names are the property of their respective owners. 

Should you have any questions or concerns please contact me directly via email.
## License
[MIT](https://choosealicense.com/licenses/mit/)