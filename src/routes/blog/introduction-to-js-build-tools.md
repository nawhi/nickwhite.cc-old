---
title: A brief introduction to JavaScript build tools
date: 2022-01-16
description: Confused by the world of frontend build tools? You will probably still be after reading this article.
draft: true
# TODO:
# - [ ] defs
---

## Introduction

Having started my career in C/C++ and server-side Java, I had a late introduction to the front-end of the web. One of the things that I found hardest to get my head around was what happened when you "ran the build". Trying to understand the output of this cryptic `npm run build` command felt like learning programming all over again.

Worse was trying to understand the errors that would happen when you hadn't configured your app correctly. Hours and hours of unexpected tokens. And then when you got it to build... `Cannot find module`... `Cannot read property 'e' of undefined`. Gah.  

Years on and I'm starting to get a handle on how it all works, and just as important, why it is the way it is. This article is a short introduction to what I've learned.

## What's a build tool?

For the purposes of this article, a _build tool_ is a piece of software that takes a web application that you've written and organises it into a _bundle_ a way that makes it possible for browsers to understand it. (Other uses, like libraries and server-side code, are out-of-scope here - but the principles are similar.)

This decouples the development environment of the code from the way browsers and the Internet work, so that the developers can write better code, and modularise their code, more easily.

This leads to a few definitions.

[//]: # (<!-- TODO turn this into a <Def/> component -->)

[//]: # ()
[//]: # (| Term                | Definition                                                                                                                                                                                    |)

[//]: # (|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|)

[//]: # (| **Build tool**      | A piece of software that transforms source code into a browser-ready bundle                                                                                                                   |)

[//]: # (| **Bundle**          | The result of running the build tool: one or many files that represent all of the assets needed to run the application compressed together in a way that the target browsers will understand. |)

[//]: # (| **Target browsers** | The browsers &#40;or the version of JavaScript that runs on the browsers&#41; that the bundle should run correctly on.                                                                                |)

[//]: # (| **Source code**     | The code that developers edit that makes up the web application, including static assets.                                                                                                     |)

[//]: # (| **Assets**          | One of the files that make up a bundle. Could be JavaScript, CSS, images, videos, JSON, or something else.                                                                                    |)

## What does a build tool do?

Most build tools have a handful of different jobs.

1. **Compile**: turn entirely different languages, like TypeScript, ClojureScript or PureScript, into JavaScript

2. **Transpile**: replace language features that aren't available in the target browsers, like JSX or proposal-stage features of JavaScript, with compatible implementations

3. **Transform**: add environment variables that are only known at build time (like the build number), or ones that are kept separately as best practice or to make testing easier

4. **Bundle**: link all the files needed to run the web app together - source code, images, CSS, and third-party libraries - then output them as a single file or several files linked together in a way the target browser will understand

6. **Optimise**: Improve the performance of the bundle

7. **Obfuscate**: Make it harder to reverse-engineer any IP in the bundle

One other thing build tools do is generate **source maps**, which allow you to cross-reference errors thrown in the bundled code with the site of the error in the original source. I don't understand them yet so I've ignored them here. Maybe there'll be another article on it soon.

## Examples

This separation into steps is a bit academic. Each step is rarely used on its own - nearly every build tool uses a combination. 

A companion to this article is a repository (TODO LINK) with a bunch of examples, which are designed to be a bit easier to separate all the different features from the average production app.  
