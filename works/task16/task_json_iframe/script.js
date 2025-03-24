const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"}
};

function defineNav() {
    const nav = document.getElementById("nav_id");
    for (const key in works) {
        let btn = document.createElement("button");
        btn.textContent = works[key].title;
        btn.onclick = function() {
            document.getElementById("content_frame").src = works[key].url;
        };
        nav.appendChild(btn);
    }
}
defineNav();
