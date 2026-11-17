var stories = document.getElementById("stories");
for (i=0;i<stories.childNodes.length; i++)
{
    console.log("child " + i + " =" + stories.childNodes[i] +
                " nodeType=" + stories.childNodes[i].nodeType);

    // chỉ đổi màu những con là thẻ HTML (nodeType = 1), bỏ qua khoảng trắng (nodeType = 3)
    if (stories.childNodes[i].nodeType == 1) {
        stories.childNodes[i].style.backgroundColor = "green";
    }
}