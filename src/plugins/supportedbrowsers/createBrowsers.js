#!/usr/bin/env node

const browserslist = require('browserslist-useragent-regexp')
const fs = require('fs')

const superList = browserslist.getUserAgentRegExp({allowHigherVersions: true})
const superString = `
// This file was generated dynamically
// Do not modify this file, modify the original file, not this one.

var supportedBrowsers = ${superList}

ready(testBrowser)

function testBrowser(){
  if (!supportedBrowsers.test(navigator.userAgent)) {
    document.getElementById("browser").style.display = "block"
    var closebutton = document.getElementById("browserclose")
    if (closebutton.addEventListener) {
      closebutton.addEventListener("click", hide, false);
    } else {
      closebutton.attachEvent("onclick", hide);
    }
  }
}

function hide(){
  document.getElementById("browser").style.display = "none"
}

function ready(func) {
  this.n = typeof this.n == 'undefined' ? 0 : this.n + 1;
  if (typeof func == 'function' && typeof this.func == 'undefined') {
    this.func = func;
  }
  if (typeof document.getElementsByTagName != 'undefined' && (document.getElementsByTagName('body')[0] != null || document.body != null)) {
    this.func();
  }
  else if (this.n < 60) {
    setTimeout(function(){ready()}, 250);
  }
};
`


const superCss = "#browser{display:none;background-color:#fff3cd;position:fixed;max-width:600px;width:80%;padding:5px 10px;top:10px;left:10px;z-index:1000;}#browserclose{float:right;cursor:pointer;margin:0}"

console.log("Creating supportedbrowsers...")

fs.writeFileSync("src/plugins/supportedbrowsers/list.jsfake", superString)
fs.writeFileSync("src/plugins/supportedbrowsers/style.cssfake", superCss)

console.log("Done!")