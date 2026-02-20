document.addEventListener("DOMContentLoaded", function () {
    filterArticles();
});

function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";
}

function filterArticles() {
    var showOpinion = document.getElementById("opinionCheckbox").checked;
    var showRecipe = document.getElementById("recipeCheckbox").checked;
    var showUpdate = document.getElementById("updateCheckbox").checked;

    var articles = document.querySelectorAll("#articleList article");
    for (var i = 0; i < articles.length; i++) {
        var art = articles[i];
        if (art.classList.contains("opinion")) {
            art.style.display = showOpinion ? "" : "none";
        } else if (art.classList.contains("recipe")) {
            art.style.display = showRecipe ? "" : "none";
        } else if (art.classList.contains("update")) {
            art.style.display = showUpdate ? "" : "none";
        }
    }
}

function addNewArticle() {
    var titleInput = document.getElementById("inputHeader");
    var textInput = document.getElementById("inputArticle");
    var title = titleInput.value.trim();
    var text = textInput.value.trim();
    if (!title) return;

    var typeClass = "opinion";
    var markerText = "Opinion";
    if (document.getElementById("recipeRadio").checked) {
        typeClass = "recipe";
        markerText = "Recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        typeClass = "update";
        markerText = "Update";
    }

    var article = document.createElement("article");
    article.className = typeClass;

    var marker = document.createElement("span");
    marker.className = "marker";
    marker.textContent = markerText;
    article.appendChild(marker);

    var h2 = document.createElement("h2");
    h2.textContent = title;
    article.appendChild(h2);

    var p = document.createElement("p");
    p.textContent = text;
    article.appendChild(p);

    var readMore = document.createElement("p");
    var link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    readMore.appendChild(link);
    article.appendChild(readMore);

    document.getElementById("articleList").appendChild(article);

    filterArticles();

    titleInput.value = "";
    textInput.value = "";
    document.getElementById("opinionRadio").checked = true;
    document.getElementById("newContent").style.display = "none";
}
