const items = [
        { label: "WEEK 1", url: "week1/index.html" },
        { label: "WEEK 2", url: "week2/index.html" },
        { label: "WEEK 3", url: "week3/index.html" },
        { label: "WEEK 4", url: "week4/index.html" },

]

items.forEach((item) => {
    let point = document.createElement("li");    
    let week = document.createElement("a");

    week.innerHTML = item.label;
    week.href = item.url;

    point.appendChild(week);
    document.querySelector("ol.list").appendChild(point);
});