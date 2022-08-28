/* Inspired by https://dribbble.com/shots/1480%259-Boarding-Pass/attachments/5991808?mode=media */
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

if ((m <= 9, h <= 9)) {
	document.getElementById("boarding-time").innerHTML =
		"0" + h + ":0" + m + "<span>发车时间</span>";
}
if ((m <= 9, h > 10)) {
	document.getElementById("boarding-time").innerHTML =
		h + ":0" + m + "<span>发车时间</span>";
}
if ((h <= 9, m > 10)) {
	document.getElementById("boarding-time").innerHTML =
		"0" + h + ":" + m + "<span>发车时间</span>";
}
if ((h > 10, m > 10)) {
	document.getElementById("boarding-time").innerHTML =
		h + ":" + m + "<span>发车时间</span>";
}

var month = new Array();
month[0] = "1月";
month[1] = "2月";
month[2] = "3月";
month[3] = "4月";
month[4] = "5月";
month[5] = "6月";
month[6] = "7月";
month[7] = "8月";
month[8] = "9月";
month[9] = "10月";
month[10] = "11月";
month[11] = "12月";

var d = new Date();
const n = new Date();
var mon = month[d.getMonth()];
var day = n.getDate();
document.getElementById("boarding-date").innerHTML =
	mon + " " + day + "日" + "<span>发车日期</span>";