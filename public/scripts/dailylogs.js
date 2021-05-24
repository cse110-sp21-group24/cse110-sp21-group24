document.getElementById("mon-add").addEventListener('click', () => {
    let item = document.createElement('li');
    item.contentEditable = "true";
    item.innerHTML = "ADD ENTRY"
    document.getElementById("mon").getElementsByTagName('ul')[0].appendChild(item);
});

document.getElementById("tue-add").addEventListener('click', () => {
    let  lab = document.createElement('label');
    lab.innerHTML = "NEW"
    lab.classList.add("log");
    lab.setAttribute("contenteditable", "true");
    let inp = document.createElement('input');
    inp.setAttribute("type", "checkbox");
    let box = document.createElement("span");
    box.classList.add("checkmark");;
    lab.appendChild(inp);
    lab.appendChild(box);
    document.getElementById("tue").appendChild(lab);
});


/*
document.getElementsByTagName("li").forEach(item => {
    item.addEventListener('dblclick', () => {
        item.style.text.decoration = "line-through";
    })
});
*/