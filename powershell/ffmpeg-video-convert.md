#### convert mp4 to gif
```shell
    ffmpeg -i input.mp4 video.gif
```

#### cut using spec. time

```shell
ffmpeg -i input.mp4 -ss 00:05:10 -to 00:15:30 -c:v copy -c:a copy output.mp4

```

#### cut end of video for 10minuts

```shell
ffmpeg -sseof -00:10:00 -i input.mp4 -c copy output.mp4
```
