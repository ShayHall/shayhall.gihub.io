# Finding your path

### Part 3: Navigating

Over the last two week's tutorials, you learned the importance of knowing where you are in your directory and how to navigate through your paths.  

This week, I will show you how your new found knowledge can be utilized properly with `npm scripts`, `bower scripts`, and installs so you can make the most of your coding adventure.


```
  "scripts": {
    "start": "browser-sync start --server --startPath='src/index.html' --files='src/index.html,src/css/*.css,src/js/*.js'",
    "sass": "node-sass --output src/css/ src/scss/main.scss"
  },
```
