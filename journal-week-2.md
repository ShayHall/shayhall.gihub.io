Draft Thesis #1_

# Software Developers:
## Making Life Easier for the Little People

> ##### _"A Smurf can smurf so that Smurfs can smurf better."_ -al-the-x

### [User Stories](http://www.agilemodeling.com/artifacts/userStory.htm)
While many outside the world of development believe that writing code means some grunt hacking away at the keys alone in some windowless basement, the reality is that functional code does not come from an anonymous bubble nor does it return to a lonely bubble. Code exists because someone asked for it to be made so that someone can use the product of the code to make some activity easier for them.  In other words, code is written so that... _"A Smurf can smurf so that Smurfs can smurf better."_

### [Agile Software Development](https://en.wikipedia.org/wiki/Agile_software_development)

This process should not done in isolation, but takes a whole village of smurfs to defeat their own personal [Gargamel](https://en.wikipedia.org/wiki/Gargamel). Agile Software Development is a strategy for organizing and communicating between different teams within the larger team. These smaller teams are often from different areas of expertise and responsibility such as marketing, finance, and the various aspects of web-development (both front-end and back-end).  

The [Agile Manifesto](http://www.agilemanifesto.org/) is built from a set of [principles](http://www.agilemanifesto.org/principles.html). These principles guide teams toward more cohesive collaboration. Since the big User Story can sometimes be complex and multi-faceted, the Agile Software Development strategy can be useful for getting everyone on the same page, breaking the big problem down into smaller problems, and collaborating regularly to tackle the small pieces that make up the big picture.

### [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
![MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller#/media/File:MVC-Process.svg)

One of the more specific ways a team of developers can organize themselves in order to bring the User Story to reality is by utilizing the Model View Controller concept in their planning and execution.  **Model** represents the data that will be used to achieve the goal of the User Story.  This is the JavaScript on which the application is built.  **View** is brought into the picture with HTML that provides a way for the user to see a representation of the JavaScript in the browser window.  The user sees and then interacts with the application.  With **Controller** the input the user provides then uses DOM JavaScript to 'hook' the HTML to the JavaScript with `EventListeners` in order to manipulate the **Model** and the cycle continues.

MVC is a great visualization of how to bring the User Story to life.  The user might never see or understand the JavaScript that makes the whole machine come to life, and yet that same user is given the ability to see a representation of the JavaScript through the HTML _and_ can participate in manipulating the code to see the smurfing dreams come true.

### [Encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)

All of these principles, including the actual code itself, are working off one central tenet. Encapsulation, the process of distinguishing between internal complexity and the external interface, allows for each level and facet
of creating an application that helps the user achieve a goal efficiently to be accomplished with as little friction as possible.  

The **User Story** incorporates encapsulation because the main User Story must be broken down into smaller stories.  The language of the user must be captured succinctly in the big picture and in the smaller steps along the way.  Then each smaller encapsulated story must be translated into the language of the development team in a way that can be translated back to the language of the user.

**Agile Software Development** requires the practice of encapsulation because various teams are working together, often with unique languages and perspectives.  Each language and perspective must be preserved while at the same time finding a way to communicate between areas of responsibility.

**MVC** breaks the actual code and DOM into manageable pieces so that the actual mechanics of what needs to happen to fulfill the User Story can be accomplished, piece by piece.

### [Conclusion](https://youtu.be/RqbpzEHuO2g) <-- Click it.  (You know you want to.)
Smurfs are small.  Any one smurf by itself would end up a sticky blue blob of goo under the shoe of Gargamel.  One giant smurf would be awkward and frightening to children.  But, but having a lot of little smurfs working together, the whole smurfing world can be conquered.  

Most web development projects would be impossible to conquer in one big chunk and couldn't even be approached with just one small piece of code.  But by intentionally breaking down the big problem into smaller problems and strategically working through each small problem, high quality web applications can be created in a reasonable timeframe with minimal frustration.
