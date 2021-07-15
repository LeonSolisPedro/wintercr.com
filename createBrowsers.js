#!/usr/bin/env node

const browserslist = require('browserslist-useragent-regexp')
const fs = require('fs')

const superList = browserslist.getUserAgentRegExp({allowHigherVersions: true})
const superString = `
var supportedBrowsers = ${superList}

ready(testBrowser)

function testBrowser(){
  if (!supportedBrowsers.test(navigator.userAgent)) {
    document.getElementById("browser").style.display = "block"
    var closebutton = document.getElementById("browserclose")
    if (closebutton.addEventListener) {
      closebutton.addEventListener("click", hide);
    } else {
      closebutton.attachEvent("onclick", hide);
    }
  }
}

function hide(){
  document.getElementById("browser").style.display = "none"
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}
`

console.log("Creating supportedbrowsers...")

fs.writeFileSync("public/supportedBrowsers.js", superString)

console.log("Done!")