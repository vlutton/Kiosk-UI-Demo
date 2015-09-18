# Kiosk UI

Touchscreen kiosk food ordering software-- demo user interface written in AngularJS.
  - Demo has been de-coupled from the back-end to demonstrate my front-end design and development experience
  - Demo is designed to run on a touchscreen monitor, but will work on a traditional computer
  - Demo is *not responsive so a mobile phone is not recommended!*
  - Demo features usage of filters, factories, and controllers
  - Demo is coded following [JohnPapa's Coding Styleguide][jp1] 
  


### Tech

The kiosk utilizes a number of technologies:

* [AngularJS]
* [Twitter Bootstrap]
* [Gulp]
* [jQuery]
* [Firebase]
* [Yeoman]
* [Sass]
* [Bower] 


### Installation

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone [git-repo-url] kiosk
$ cd kiosk
$ gulp serve
```


### Design
This project was designed to run on touchscreen monitor located inside of a corporation for their employees to be able to order food and have it delivered.

When designing this program I used the following :
  - It had to be *fast!* This software was being deployed in a tech company's headquarters so I wanted to make sure it was *really* responsive to the touch!
  - It had to be quick and easy to use!  To achieve this, I used the following design considerations:
    - I wanted to make it as touch-friendly as possible... no hiding any options behind menus
    - I chose to display the options in a table with a convenient *add to cart* button next to each one
    - I used animations to dynamically hide/show additional product information when desired
    
### Limitations
This software had to be written on a very tight deadline, I was given two weeks from conception until launch date, in that time I had to:
   - Create secure API calls to our existing system which could pull products, pull current categories, create the order, store and get basic customer information, etc.
   - Create the UI from scratch
   - Test everything thoroughly
   - Help design marketing materials and plan events to give the new service exposure



[//]: ()


 
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [jp1]: <https://github.com/johnpapa/angular-styleguide>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [firebase]: <http://firebase.io>
   [yeoman]: <http://yeoman.io/>
   [sass]: <http://sass-lang.com/>
   [bower]: <http://bower.io>
   
