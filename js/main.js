let NavUl = document.getElementById("nav");

for(let i = 0; i < NavUl.childNodes.length; i++)
{
    if(NavUl.childNodes[i].localName == "li")
    {
        NavUl.childNodes[i].addEventListener("click", (event) => {
            let ind = NavUl.childNodes[i].childNodes[0].href.indexOf("/pages");
            if(ind == -1)
            {
                window.location.href = "/index.html";
            }
            else
            {
                window.location.href = NavUl.childNodes[i].childNodes[0].href.substr(ind);
            }
        });
    }
}

$(document).on("click", aboutArrow, function(e) {
    e.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 1000); // плавно переходим к блоку
});