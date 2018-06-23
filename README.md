# ytdj

DJ using YouTube videos - this app will let you search and select different
videos on YouTube, load them into the browser and mix them.

This was a cool idea but unfortunately the YT iframe api only supports a very
small range of playbackRates, I've submitted an issue about this [here](https://github.com/youtube/api-samples/issues/190) which is going on my list of things that will never happen.

After a bit of hacking which involved dowloading an older version of chrome and disabling web security, I've made this app actually work.

## Demo video:

https://youtu.be/Xhkqii89ym4
[![YTDJ Demo Video](https://img.youtube.com/vi/Xhkqii89ym4/0.jpg)](https://www.youtube.com/watch?v=Xhkqii89ym4)


## Build:

```
npm / yarn install
npm / yarn build
```

## Running the application

In order to use this application you must disable the SOP security measures in your browser, here is how you would do it for Chrome on OSX:

* First install a copy of Chrome v66
* Then disable web security `open -n -a /Applications/Google\ Chrome\ 2.app --args --user-data-dir="/tmp/chrome" --disable-web-security`
* Then go to index.html
