/* 2;3;4 */
var daysOfWeek = new Array("Mon","Tues","Wed","Thur","Fri");
/*5*/
//document.write(daysOfWeek + "<br>");

daysOfWeek.push("Sat");
//document.write(daysOfWeek + "<br/>");

daysOfWeek.unshift("Sun");
//document.write(daysOfWeek + "<br/>");
/*6;7;8*/
document.write("<table border=1>");
document.write("<tr>");

for (i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
document.write("<th>" + day + "</th>");
}
// Các ngày từ 1 đến 30, mỗi hàng 7 ngày, tháng bắt đầu từ Chủ nhật
document.write("<tr>");
for (var d = 1; d <= 30; d++) {
    document.write("<td>" + d + "</td>");
    if (d % 7 == 0) {
        document.write("</tr><tr>");
    }
}
document.write("</tr>");

document.write("</table>");