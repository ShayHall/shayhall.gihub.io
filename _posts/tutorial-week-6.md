# Finding your path

In last week's tutorial, I showed you how to understand the importance of knowing where you are in your directory. This week we will look at how to navigate through your paths.  

Next week, in the final installment, I will show you how your new found knowledge can be utilized properly with `npm scripts`, `bower scripts`, and installs so you can make the most of your coding adventure.

### Part 2: Navigating

 It's easy for a novice dev to get lost in the many twists and turns, nooks and crannies, and hallways and corridors of the command line.  One way to help make sure you're on the right "path" is to root yourself on the highest level of the documents you will be using.  navigating the command line without leaving home base.  

To begin understanding what this means, take a look at this representation of part of my work tree:
```
├── package.json
├── specs
│   ├── full--desktop-skitch.png
│   ├── full--mobile-skitch.png
│   ├── full--tablet-skitch.png
│   ├── open-blogtab-mobile-skitch.png
│   ├── open-burger-tablet-skitch.png
├── src
│   ├── css
│   │   ├── main.css
│   │   └── normalize.css
│   ├── favicon.ico
│   ├── grid.html
│   ├── img
│   │   └── typing-monkey.png
│   ├── index.html
│   ├── js
│   │   └── main.js
│   ├── robots.txt
│   └── scss
│       ├── _common.scss
│       ├── _desktop.scss
│       ├── _grid.scss
│       ├── _mobile.scss
│       ├── _tablet.scss
│       └── main.scss
│
```
I plucked that map right off my command line.  You can also have access to your [own map](http://mama.indstate.edu/users/ice/tree/).  

This "map" is actually called a "tree."  It's easy to read once you know how.  The tree starts "branching" from wherever you are in your directory when you pull up the tree.  The line down the left side is representative of everything at the same _level_ as your current location.  Each step up shows a different path with files and directories (folders) inside other directories.  

From the top moving down, you can see `package.json`, `specs`, and `src` are all at the same level.  We can tell the directories from the files because the files all have `.something` after their name.  Directories also can hold other directories or files.  So in the `src` directory, we can see `css`, `favicon.ico`, `grid.html`, `img`, `index.html`, `js`, `robots.txt`, and `scss`.

Which of the items directly inside `src` are directories?

.<br>
.<br>
.<br>
.<br>
.<br>
.<br>

If you said `css`, `img`, `js`, and `scss` you're right!

Now that you have a map to follow, let's look at how to get to where you're going without leaving home or how to write your paths properly so that things can find each other.

Let's say you wanted to take a look at `typing-monkey.png` by opening that file.  From _where you are_ you could type `open src/img/typing-monkey.png`  To edit your `main.scss` in Atom, you'd type `src/scss/main.scss`.  These are the paths you would use to find what you want.

Now, if you were to navigate to the `scss` directory for some reason, but wanted to open the `main.css` file to make sure your changes are being registered properly, you could back up a directory by typing `../css/main.css`.  This will back you out of the `scss` directory and then step you into the `css` directory where you can grab the `main.css` file.

- Conclusion: Now you know how to find your way up and down trees, over paths and through directories.  Next week, we'll explore more advanced ways to put this skill into practice.
