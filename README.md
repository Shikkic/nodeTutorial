# nodepractice
=
First let's get started by SSHing into our server and downloading Node via PPA

SSH into nodeme.cloudapp.net

With the user: newuser password: Password321

Clone the git repo onto your folder. 

git clone https://github.com/Shikkic/nodepractice

=
# Installing Node.js on Ubuntu
DigitalOcean  has a great article on this here (https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)

1).Install the PPA (personal package archive) maintained by NodeSource.

```
curl -sL https://deb.nodesource.com/setup | sudo bash -
```

2). Install nodejs! This package contains npm, so we don't need to install npm seperatery.
```
sudo apt-get install nodejs
```

3).  Lastly, inorder for NPM to install correctly we need to install something called the build-essentials
```
sudo apt-get install build-essential
```

Now we've finished~~~~ wooooo
=
#Inititalizing our NPM package and installing our dependencies 

Node itself is just an enviorment, we need need node packages such as ``require, request, and express```

So let's intialize our projects package details

```
npm init
```

We pretty much can hit enter until we exit the list for now.

Now lets install require, it allows us to import packages we install and use them in node.

```npm install require --save```

This saves ```require`` in our projects package so that when someone downloads our projects and wants to run it, npm will install all the dependencies listed for you!

```npm install express --save```
Next we install express, this allows us to make web server objects that we use using javascript.

``` npm install request --save```

request allows us to make HTTP requst with out web server objects we make
=
#Final Step!

Last but not least is the skelton of our web server!

First we need to make a file called ````index.js``` in our git root folder where we installed npm. Next we need to create variables and import the packages we downloaded from npm.

```
var express = require('express');
var app= express();
var request = require('request');
``` 

Our ```app``` is our web server object we created using express. 

Now lets whens someone hit's the root of our domain we need to send a file, preferbly an html doc, so we're going to listen for requests on a certain endpoint!

```
app.get('/', function(req, res){
	res.sendfile('./index.html');
});

```

Lastly we listen on a port for all request!

```
app.listen(80, function(){
	console.log('Serve is listening');
});
```
=
#Running the server!

All we have to do now is run the ```index.js``` 

```sudo node index.js```

You're done!!!!

```
Pro tip: If you want the server to run even if you close your sssh session we need to run it in tmux
```