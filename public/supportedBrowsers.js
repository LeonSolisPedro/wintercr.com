
var supportedBrowsers = /((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(11[_.]0|11[_.]([1-9]|\d{2,})|11[_.]2|11[_.]([3-9]|\d{2,})|(1[2-9]|[2-9]\d|\d{3,})[_.]\d+|12[_.]0|12[_.]([1-9]|\d{2,})|12[_.]4|12[_.]([5-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})[_.]\d+|13[_.]0|13[_.]([1-9]|\d{2,})|13[_.]7|13[_.]([8-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})[_.]\d+|14[_.]0|14[_.]([1-9]|\d{2,})|14[_.]4|14[_.]([5-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})[_.]\d+)(?:[_.]\d+)?)|(CFNetwork\/8.* Darwin\/17\.0\.\d+)|(CFNetwork\/8.* Darwin\/17\.2\.\d+)|(CFNetwork\/8.* Darwin\/17\.3\.\d+)|(CFNetwork\/8.* Darwin\/17\.\d+)|(Opera\/.+Opera Mobi.+Version\/(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+))|(Opera\/(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+))|(SamsungBrowser\/(7\.2|7\.([3-9]|\d{2,})|7\.4|7\.([5-9]|\d{2,})|([8-9]|\d{2,})\.\d+|8\.2|8\.([3-9]|\d{2,})|(9|\d{2,})\.\d+|10\.1|10\.([2-9]|\d{2,})|(1[1-9]|[2-9]\d|\d{3,})\.\d+|11\.2|11\.([3-9]|\d{2,})|(1[2-9]|[2-9]\d|\d{3,})\.\d+|12\.0|12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+))|(Edge\/(15(?:\.0)?|15(?:\.([1-9]|\d{2,}))?|(1[6-9]|[2-9]\d|\d{3,})(?:\.\d+)?|79(?:\.0)?|79(?:\.([1-9]|\d{2,}))?|([8-9]\d|\d{3,})(?:\.\d+)?|83(?:\.0)?|83(?:\.([1-9]|\d{2,}))?|(8[4-9]|9\d|\d{3,})(?:\.\d+)?))|((Chromium|Chrome)\/(58\.0|58\.([1-9]|\d{2,})|(59|[6-9]\d|\d{3,})\.\d+|83\.0|83\.([1-9]|\d{2,})|(8[4-9]|9\d|\d{3,})\.\d+)(?:\.\d+)?([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$)))|(Version\/(11\.0|11\.([1-9]|\d{2,})|(1[2-9]|[2-9]\d|\d{3,})\.\d+|12\.0|12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+|13\.0|13\.([1-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+|14\.0|14\.([1-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})\.\d+)(?:\.\d+)? Safari\/)|(Firefox\/(53\.0|53\.([1-9]|\d{2,})|(5[4-9]|[6-9]\d|\d{3,})\.\d+)\.\d+)|(Firefox\/(53\.0|53\.([1-9]|\d{2,})|(5[4-9]|[6-9]\d|\d{3,})\.\d+)(pre|[ab]\d+[a-z]*)?)/

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
