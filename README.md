
==========
## Installation

1) Install [node.js](http://nodejs.org/), by either crack open your favourite package manager: typically `apt-get install nodejs` on Debian/Ubuntu Linux, `brew install node` on a Mac
 or directly from the website [http://nodejs.org](http://nodejs.org/)


2) Clone the repository from github:
<br>
```
$ git clone https://github.com/simmy1094/apiautoamtion.git

3) CD into the repository 
<br>
```
$ cd api-assignment
```

4) Install all the dependencies by:
<br>
```
$ npm install
```

5) Run test using mocha
<br>
```
$ mocha (file name) e.g. ./node_modules/mocha/bin/mocha test/test.js
or 
Set up a test script in package.json:
"scripts": {
    "test": "mocha"
  }
npm test

```
6)command to install html report generator
npm install --save-dev mocha-simple-html-reporter

7)comand to run with report

mocha OpenCart.Js --reporter mocha-simple-html-reporter --reporter-options output=report.html

8) Report generator-npm install --save-dev mochawesome
run eg.
mocha testfile.js --reporter mochawesome

 





