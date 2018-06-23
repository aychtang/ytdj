# ytdj

DJ using YouTube videos - this app will let you search and select different
videos on YouTube, load them into the browser and mix them.

This was a cool idea but unfortunately the YT iframe api only supports a very
small range of playbackRates, I've submitted an issue about this [here](https://github.com/youtube/api-samples/issues/190) which is going on my list of things that will never happen.

After a bit of hacking which involved dowloading an older version of chrome and disabling web security, I've made this app actually work.

## Build:

```
npm / yarn install
npm / yarn run build
open index.html
```
