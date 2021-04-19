# Incipit - Plugin jQuery
![incipit.js version](http://img.shields.io/badge/incipit.js-v1.0.0-brightgreen.svg) [![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)

![Logo of Incipit](https://github.com/justineSimmet/jquery-incipit/blob/master/incipit-logo.svg)

---

## What is that?
Incipit is a lightweight and easy to use jQuery plugin to display highly captivating loading screens.
Let your users discover the first sentence of a great novel to brighten up their waiting times.
 
The key points:
* Easy to install and use.
* Highly customizable.
* Compatible with all modern browsers.

<p align="center">

  ![Demo Incipit](https://www.justine-simmet.rocks/demo/incipit/assets/img/incipit.gif)
  
  **[See a live demo](https://www.justine-simmet.rocks/demo/incipit/index.html)**
  
</p>

## Table of contents

* [See a live demo](https://www.justine-simmet.rocks/demo/incipit/index.html)
* [Introduction](#introduction)
    * [Prerequisite](#rerequisite)
    * [Installation](#installation)
* [Usage](#usage)
    * [Standard usage](#standard-usage)
    * [Options](#options)
* [Special thanks](#special-thanks)
* [License](#license)

## Introduction

### Prerequisite

To work, Incipit needs the [jQuery library](http://jquery.com/download/). 

You can call it via an official CDN:
```
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
```

Or download it and insert its compressed version directly into your code:
```
<script src="jquery-3.2.1.min.js"></script>
```
Hey, you can even use Yarn, NPM or Bower, I don't care. But **install jQuery in your project before using Incipit.**

### Installation

Okay, is jQuery in place? We can move on then.

You must have downloaded the contents of the src folder of this repo to continue.
(Note for later: the possibility of passing through package managers is in progress).

First, insert the plugin stylesheet:

```
<link rel="stylesheet" href="assets/jquery-incipit/incipit.min.css">
```

Then insert the plugin, after your call to jQuery:

```
<script src="assets/jquery-incipit/incipit.js"></script>
-----or-----
<script src="assets/jquery-incipit/incipit.min.js"></script>
```

*Do not change the structure of the files organization, unless you are ready to take over all links later...*

## Usage

Now that everything is in place, you can use the plugin.  

### Parameters

#### First step : Initiate Incipit

You initiate Incipit by targeting the body of your document.
The purpose of this action is to create a #incipitContent item in the DOM so that you can later display your loading screen and its contents.
```
$('body').IncipitInit();
```

#### Second step : Use Incipit

Nothing simpler, you have to choose on which event to call your loading screen, and tell Incipit to show up with the "show"action.

Example on a submit :
```
$( "#form" ).submit(function( event ) {
  event.preventDefault();
  $.Incipit('show');
  
  # Your code...
});
```

Example on a click :
```
$( "#button" ).on("click", function( event ) {
  event.preventDefault();
  $.Incipit('show');
  
  # Your code...
});
```

The loading screen will then appear and give your user the first sentence of a novel randomly.

#### Last step : Stop Incipit

You can ask Incipit to return to its initial state with the action "hide".
```
setTimeout(function(){
    $.Incipit('hide');
}, 3000);
```

You can also delete Incipit completely by destroying it. This can be usefull, for example, if you want to call a new instance of Incipit with different options.
```
$.IncipitDestroy();
```

### Options

It is possible to customize the Incipit instance through a series of options. You must define them when you initialize the plugin.

```
$('body').IncipitInit({
    backgroundColor : "#FFFFFF",
    borderColor : "#CCCCCC",
    textColor : "#000000",
    spanColor : "#7e7e7e",
    icon : "fading-squares",
    language : "en",
    note : false,
    noteCustom: '',
    logo : false
});
```
Here is a list of all possible options:

Option | Meaning | Value
------------ | ------------- | -------------
backgroundColor | Allows you to define the background color of the display div of the plugin | **Default value : #FFFFFF**<br>*(Accepted value types: #BEBEBE / rgb(190,190,190) or rgba(190,190,190,1 / lightgray)*
borderColor | Allows you to define the color of the borders surrounding the quote | **Default value : #CCCCCC**<br>*(Accepted value types: #BEBEBE / rgb(190,190,190) or rgba(190,190,190,1 / lightgray)*
textColor | Allows you to define the color of the text in the quote |**Default value : #000000**<br>*(Accepted value types: #BEBEBE / rgb(190,190,190) or rgba(190,190,190,1 / lightgray)*
spanColor | Allows you to define the color of the text of the quote origin text |**Default value : #7e7e7e**<br>*(Accepted value types: #BEBEBE / rgb(190,190,190) or rgba(190,190,190,1 / lightgray)*
icon | Set the type of loading icon to be displayed among the available options |**Default values : fading-squares**<br>*(Accepted value: arrow, download, upload, fading-balls, fading-lines, oval-circle, penduleum, round-block, solid-snake)*
language | Choose the default language of the plugin |**Default values : en**<br>*(Accepted value: en - in english, fr - in french)*
note | Do you want to display a message under the loading icon? |**Default values : false**<br>*(Accepted value: false,  true)*
noteCustom | Set a specific message for your users |**Default values : "Please hold for a moment / Merci de patienter un instant."**<br>*(Accepted value: false,  true)*
logo | Do you want to display your companie logotype, or anything else, under the quote? |**Default values : false**<br>*(Accepted value: false,  true)*
logoSrc | The path to your image. |**example: image/your_logo.svg**

## Special thanks
* [feedbooks.com](http://www.feedbooks.com/?locale=en). - Provider of all displayed texts, all in the public domain.
* [icons8.com-preloaders](https://icons8.com/preloaders/) - The source of the loading icons.

## License

This project was developed under the MIT license - see file [LICENSE](https://github.com/justineSimmet/jquery-incipit/blob/master/LICENSE) for more details.


