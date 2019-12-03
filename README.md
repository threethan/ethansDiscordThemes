# Ethan's Discord Themes
A small collection of themes for Discord, requires [BetterDiscord](https://betterdiscord.net/).



**The better resizing theme is meant to work with smaller window sizes than Discord's Default Minimum Size**

To reduce the minimum window size of Discord on windows:

Open the Discord's settings.json

​	Windows: C:\Users\\\<user\>\AppData\Roaming\discord\settings.json

​	Mac: Macintosh HD⁩/⁨Users/\<user\>/⁨Library⁩/⁨Application Support/⁨discord/settings.json

Then add MIN_WIDTH and MIN_HEIGHT values

Example: 

```{
  "IS_MAXIMIZED": false,
  "IS_MINIMIZED": false,
  "MIN_WIDTH": 500,
  "MIN_HEIGHT": 250,
  "WINDOW_BOUNDS": {
    "x": 862,
    "y": 161,
    "width": 1682,
    "height": 1172
  },
  "BACKGROUND_COLOR": "#202225"
}
```