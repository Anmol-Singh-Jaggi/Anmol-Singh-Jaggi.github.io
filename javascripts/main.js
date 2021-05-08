console.log('This would be the main JS file.');
var downloads = document.getElementById("downloads");
downloads.parentNode.removeChild(downloads);
var headerContainer = document.getElementById("a-title").parentNode;
for (var child of headerContainer.children)
{
  if (child.tagName == "H2")
  {
    child.remove();
    break;
  }
}
