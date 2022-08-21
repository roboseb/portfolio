# Seb's Portfolio

---Features---

    -A big beautiful and responsive island to explore

    -A shore complete with procedurally swimming fish and Miko, the shrine maiden

    -A bonsai garden with info about me planted in the sand

    -A tea house with decorations that link to my LinkedIn and github, and copy my email to clipboard

    -All of my previous projects shown as fish that Miko has caught

    -Click on a fish to expand into an info panel with a title, short description and animated gif showing the site in action

    -Info panels also link to github repos and live sites

    -All art custom made by me for this project in particular

    -Massive drop in art quality after the first assets I made, can you guess what they are?

    -Most objects realistically swaying in the wind, many with shadows that sway along with them

    -Simple UI to move around the island and see different sections.

    -Option to toggle zoom level, so that you can see the entire island all at once!

---Devlog---

Aug 10th, 2022

    Yippee, finished up my JS final project yesterday, coincidentally around the time that a new module was added to that path. Fuck that for now, I'll come back later at some point probably.

    Also yippee, it's portfolio time. Now I get to make sure all of my past projects actually run on GH pages. I think most do overall, but most of the react apps will not, so that will take some doing. Still can't get over that I'm finally done with the JS final project. It's a lot of fun to play around with. It's also hard to compare to other final projects, since they're all so different. Regardless, I'm happy with it and happy to move on from it.

    For my portfolio, I wanted to do something a little different. It seems like the portfolio is used as a place to showcase cool animations, which I feel I'm pretty good at. The only difference is that a lot of these portfolio animations that I see people using are beyong what I've come up with, which is actually a good thing. Good artists borrow and great artists steal as they say. 

    The primary original idea I have is to have the whole site take place on some sort of beach. The user is experience their life flashing before their eyes, or more accurately my life flashing before their eyes, and my portfolio is a representation of those memories. In the waters along the beach are fish, each being an item from my portfolio. You can fish for them like a fishing minigame, or just look through them normally. I think the normal layout will be the default.

    First hiccup of the day was my restaurant page, which I knew would need fixing. Basically it just needed to import images the same way I do with react, so that it could properly be bundled. All good now. But it looks like I'll have to this same fix with all my non-react webpack shit.

    Steady progress, but I've literally spent four hours just fixing two projects so that I can acutually run them on GH pages.

    So in a lot of these older projects, I have images placed in the dist folder, which somehow wasn't an issue before, but now building the package basically deletes all of them. Thanks to Github it's not much of an issue, but I'm still not sure why this would have been working before.

Aug 12th, 2022

    Went to the local fair yesterday. Lots of fun. Some sort of gas attack as well.

    Was able to wrap up hosting the rest of my sites properly in an hour. Feels good, having my sites actually accessible as web sites in the same form that I work on them. Also hashrouter is crazy crucial, and I'm not sure why it's never mentioned in the routing section of TOP. Or maybe it is, and I just forgot about it.

    Now to get working on the good stuff. I think most of the site will be not that complicated, so I can layout the basics and just get working on the portfolio pool.

    Fuck me, I've got a fish textured with a gif if my JS final project swimming around in a pool, and he points to where he's going. Which of course doesn't sound all that impressive, but it actually required using math from high school that I have long forgotten. 

Aug 13th, 2022

    Slept like shit again. Gonna start today off by importing all 22 website gifs. Then I'm going to start drawing some assets for the island and shrine maiden. My mom lent me her drawing tablet, as it's apparently stressing her out. Sucks for her, but this thing is pretty sick so good for me.

    22 GIFs all done and added to the images folder. Gonna eat some pizza, and then turn them all into fish. Once that's done, I think I can the art. Having that done first will simp
    lify adding info details to the different sections, I hope.

Aug 15th, 2022

    Did a bunch of random errands with my family yesterday, but back at the grind today. Spent most of the day throwing together some assets, and the shrine maiden looks dope.

    Gonna call it here for today, but I got Miko in and looking hot, and her dress waves in the wind too. Tried to get her hair to do the same, but it's proving a little more difficult. Might try restarting on that tomorrow. 

Aug 16th, 2022

    Gotta fix these bangs. Also, expecting to only spend about two more days on this, as it's mostly styling an I think I finished all the art I need. Then moving on to the final section of TOP.

    Added a lot of new stuff in, and with the island mostly filled out, I'm not sure if I like the look anymore. Hopefully a few minor changes will help out with that.

Aug 17th, 2022

    Gonna start today off by adding in info panels for the garden and house. I think one is an about page and the other is a contact page. Probably house is the contact page.

    House was the contact page. Got it working nicely too, although I think there's a timing issue with its animations. Garden is also done. Cute little animations as usual. Managed to throw together a little fish rack, which will be used to store caught fish on. By default though, all the fish/websites will be on there and you can fish for them only if you want. Think I'll also add a little fishing minigame. Hopefully I can come up with something both straightforward and clever.

Aug 18th, 2022

    God damn, this better be the last day, which I think it can be. Biggest thing left to do is just finish up the portfolio/shore section. A lot of these other things are optional. I really need to scale back the scope of these projects so that I can make them more polished. Also, sold the last of my stonks today, so unless I start selling pokemon cards the money's pretty much out.

Aug 19th, 2022

    Had a dream that I was out in the street at night. Someone offered me a joint that was way too heavy, and I smoked some, even though I knew that I would regret it as weed makes me nauseous.

    Not sure what I wanna get done today exactly. Most of the functionality is there, and the styling is also largely done. For some reason, the font I'm using has placeholder text randomly sprinkled throughout blocks of text. I might be able to fix it by just rephrasing certain things, since I really like the font.

    It seems almost guaranteed that my portfolio will be updated pretty regularly, so it seems fair to skip the fishing minigame for now. Maybe once I finish TOP I can add it in before I start applying for jobs.

Aug 21st, 2022 

    Gonna try to do a half day on this project, and then move on to next TOP section.

    Christ, that's all done for now. I can't believe I wanted to add a fishing minigame and a day/night cycle. I am deranged.



---To-Do---

-Mark portfolio items as desktop/mobile friendly
DONE-fix fish gif performance
DONE-fix fish pointing at random time intervals
DONE-angle fishboxes with perspective
-fishing animation
DONE-sand texture/water texture
DONE(not watercolor)-watercolor map for nav buttons
DONE-water animation/blur
DONE-tide coming in and out
DONE-vertical flag on house with animation
DONE-tree shaking in wind animation
-day/night cycle, including shadows
-button to toggle between modes with more text like a regular portfolio and a more immersive island adventure
-scroll to cycle through areas
DONE-add shadows to about cards
DONE-add string suspending caught fish and wind animation
DONE-make rack back button into a little sign
DONE-fix fishrack zoom with zoom css variable
-mobile layout
-fix various shadows
DONE-add my name somewhere big and obvious
-Add a message for copying email to clipboard