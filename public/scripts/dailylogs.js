document.getElementById("mon-add").addEventListener('click', () => {
    let item = document.createElement('li');
    item.contentEditable = "true";
    item.innerHTML = "ADD ENTRY"
    document.getElementById("mon").getElementsByTagName('ul')[0].appendChild(item);
});