# Can't get that Sass to pass

So, you've refactored your CSS to Sass by extracting all your descendent selectors and now you're trying to convert your Sass files back into CSS.  But you're having a couple problems.  Let me see if I can help.

First you try typing `node-sass --output-style expanded --output css/ scss/*.scss` into your terminal command line, but you see that only one of the four files you have is being affected.

Why don't you try typing one file at a time?  `node-sass --output-style expanded --output css/ scss/JUST ONE FILE.scss`.

OH! It worked!?!  Congratulations.  Do you know why it worked?  If not, you probably don't know what those magic words you typed mean.

`node-sass`is a library that allows you to compile your `.scss` files into `.css` files

`--output-style expanded` tells us how the freshly formed .css file will be represented.  There are four options `compact`, `nested`, `compressed`, and `expanded`.  Your choice of `expanded` means you want your CSS to be easily readable by mere humans.

`css/` tells your computer where to put the sass-less CSS.

`scss/FILENAME.scss` tells the compute where to get that sassy code.

when you tried `css/ scss/*.scss` your machine took the first .scss file it found, turned it back into vanilla CSS and thought it was time to go home.  Understand what and why now?


Now, try the next one...

Wait a minute, it's not working now?  Did your terminal get all angry and turn the words red?  (READ THOSE WORDS.  They are there to help you...  Some.)
Here's an example of what your machine might say to you:
```
{
  "message": "invalid property name",
  "column": 1,
  "line": 82,
  "file": "/Users/YOURNAME/Desktop/TIY/TIY-Assignments/VerticalTimeline/scss/mobile.scss",
  "status": 1
}

```
The "message" is where the machine is telling you why it's angry.  Pretty broad, right?  At least you know what part of the Syntax is messed up.  Remember this:
```
Selector {
   property:value;
}
```
Now you know what to look for, but where?  The next two lines appear to be a suggest as to where to look.  Now, don't too excited that the computer wants to help.  It's not very smart sometimes.  This message is a lot like a JavaScript Syntax Error.  The computer is saying, "HEY!  There's a mistake somewhere before the last line of what you've given me!  Good luck finding it." In the case above the file only had 82 lines, so the error is somewhere before that... Thanks for nothing, machine!

Here's another error message.  Take a moment to see if you can figure out where and what the problem is.
```
Here's snippet of code:

li {
  /* Remove bullets on li elements */
  list-style-type: none;
  /*padding: 40px 0;*/
}

p, h2 {
  /* Give text color and space */
  color: white;
  margin: 20px 15px;
  padding: 2px 5px;
}

h2 {
  /* Add underline to header */
  border-bottom: 1px solid grey;s
}
```

```
Here's the error message:

{
  "message": "property \"s\" must be followed by a ':'",
  "column": 25,
  "line": 91,
  "file": "/Users/cathyhall/Desktop/TIY/TIY-Assignments/VerticalTimeline/scss/mobile.scss",
  "status": 1
}

```

Did you see the rogue "s" hanging out by the h2 border-bottom property?  EXTERMINATE THE "s"!

You know your work is done when you get something like this in pretty green colors:

```
Rendering Complete, saving .css file...
Wrote CSS to /Users/YOURNAME/Desktop/YOURPATH/TOYOUR/CSSFILE.css
```

Happy Sassing!  

_Here are some links for more info on:_

* [Sass](http://sass-lang.com/)

* [node-sass](https://www.npmjs.com/package/node-sass)

* [Command line](http://cli.learncodethehardway.org/book/)
