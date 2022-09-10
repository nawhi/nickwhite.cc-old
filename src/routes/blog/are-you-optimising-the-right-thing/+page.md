---
title: Are you optimising the right thing?
date: 2022-09-10
description: Sometimes, being lazy is better than being fast.
---

For a while, I had a mild obsession with speeding up frontend builds. Whenever I saw a build tool in a repo I was responsible for, I'd inevitably fall into a rabbit-hole analysing what could be done to make it build faster. It was good for developer experience and productivity.

A representative example of a project that received my optimisation obsession was a substantial single-page React app providing a UI for customer product configuration. I spent hours on this thing, first with good results, and increasingly with 

Before I started, it was around 30-45 seconds wait for a dev build to show the front page, and upwards of 90 seconds for a full production build. Tests were three to five minutes depending on the The CI took about ten minutes to go through 

I tried a lot of stuff to get this thing to be faster. After a while, when it was acceptable, I stopped doing it on work time and started doing it in my learning time. And I learned lots of interesting things about concurrency in Jest, how fast different transpilers are and what the most expensive transpilation operations are. 

But eventually I had a realisation: 

## Are you blocked by slowness, or just impatient?
Do any of your colleagues express strong opinions about the slowness? Or is it just that you are at the impatient end of the spectrum?  

This is a subtle one and it's difficult to get right. Sometimes I have pushed on with an optimisation even when it seemed totally pointless to my colleagues, but after it was finished, it really turned out to have been worth it, and others agreed with me. Other times it paid back its effort, but only for my individual productivity. Other times still, I've cut my losses after hours of yak-shaving and never missed the prize that I was after.

The flip-side of this is that if you're someone at the "less accurate" end of the spectrum (like yours truly) then increasing feedback speed truly does have a disproportionate positive impact on your productivity. Let's say you make a mistake every ten lines of code which requires a redeploy to fix. If you have to deploy  

We know that incremental development is far superior to large batched code changes: bugs tend to hide in the latter. And so we often talk about wanting to shorten feedback loops. I would defend this to the hilt if it's an hour, day, or week before you can see whether your code works. But when we are below about ten minutes, the rewards start getting more fuzzy.

For deployments, in fact, there's a sweet spot where the feedback loop is long enough that the cost of inappropriate error is material, but not so long that you completely forget what you were doing by the time it has deployed. For me it's five to ten minutes - time for a cup of tea and a quick stare out the window. Longer than that and I'll forget what I was doing; much shorter than that and I'll find myself making more production outages and being less disciplined about my Git commits.

Understanding the difference between simple impatience, and a necessary adjustment to your environment for personal success, is very hard.  I'm still getting better at it.

## The build speed is probably not your bottleneck
This one is the real kicker, and it's the most valuable bit of experience I've gained in the last few years. 

**The slowest part of your workflow is probably not the thing that _feels_ the slowest.**

Imagine you're styling a dialog that is buried inside three sub-menus in your app. You start the app, wait 10 seconds for it to compile, then it shows the index page. You navigate to the dialog to see whether your CSS changes have worked.

In this case, the biggest bottleneck is not the ten seconds you spent waiting - although that might well feel like it. The biggest bottleneck is the 20 seconds you spent clicking to get to the dialog.

If you have a very static app, hot-reloading will probably take care of this, but that doesn't do much if your dialog is reliant on some application state that you can only get to by interacting with the app. A more subtle consequence of this is that edge cases that are hard to get to are likely to attract less developer attention and not work as well. Yet the best apps have quality throughout.

You can solve this by moving to building your UIs in a visual testing tool like (Storybook)[https://storybook.js.org/]. As well as providing instant feedback as you build out a component, and making it easy to simulate any component state without clicking, it comes with the bonus discipline of helping you think through the code organisation into logical components. The resulting test files can also be published for living visual documentation, and automated into CSS regression tests.

## You might be doing work that you don't need to do
Say your app is large, but well maintained and well-tested. It's a React app and it uses React Testing Library, which is an excellent testing tool. Perhaps it also has end-to-end tests that render entire pages.

Running the tests on this kind of project is slower than a herd of turtles stampeding through peanut butter. Test runs of five, ten or twenty minutes are not uncommon in this scenario. If you are someone who likes to work incrementally and run the tests after every change, you will be on your knees.

Except - how often will you genuinely need to run the whole test suite if it is

Jest has a marvellous CLI option, [`--onlyChanged`](https://jestjs.io/docs/cli#--onlychanged) , that helps out here. With this switch on, Jest will look at Git and run only tests related to files that have changed since the last commit. When working at the leaves of a large dependency tree, this will normally take the test run down to almost instantaneous. 

In the case that you're working on high-level components that are used everywhere, you'll find that the majority of test files will run even with `--onlyChanged`. But here, ask yourself: do you really need to run everything? How likely is it that some far-downstream test will fail because of a change in the file you're working on? More importantly, it shouldn't ever happen - it violates the dependency inversion principle. Things that shouldn't happen are not a good candidate for a serious optimisation.

## Speed is relative to what you are used to
From my prose, it'll be immediately obvious that I've spent too much time optimising  
I've worked on code bases which take three minutes to compile even when there have been no changes, and huge Java APIs that take a couple of minutes to start up. But at this point, I'd been mostly working on Node.js microservices, which have a pretty low startup overhead (almost nil these days if you use the right serverless platform) - so when I came back to the longer frontend builds, the impatience was instant and

## Conclusion
There's a great book about buying a house which introduces the idea of a "balcony break". When you're in the tunnel, trying to make difficult decisions, step out onto the balcony for a moment; breathe in the fresh air and take in the view. From the perspective of the balcony, you can consider your choice with more impartiality. 

Intense focus on an optimisation of one part of your workflow is a great time for a "balcony break", whether it's an actual balcony, or a colleague, or a rubber duck. The biggest culprit in an inefficient workflow is often not the most obvious.
