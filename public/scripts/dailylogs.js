document.getElementById("mon-add").addEventListener('click', () => {
  let item = document.createElement('li');
  item.contentEditable = "true";
  item.innerHTML = "ADD ENTRY";
  item.classList.add('task-list');
  document.getElementById("mon").getElementsByTagName('ul')[0].appendChild(item);
});

window.onclick = function(event) {
  if(event.target.classList == 'task-list' && (event.altKey)){
    deleteBulletIcon(event.target);
  }else if(event.target.classList == 'event-list' && (event.altKey)){
    deleteBulletIcon(event.target);
  }else if(event.target.classList == 'important-list' && (event.altKey)){
    deleteBulletIcon(event.target);
  }else if(event.target.classList == 'inspiration-list' && (event.altKey)){
    deleteBulletIcon(event.target);
  }else if(event.target.classList == 'note-list' && (event.altKey)){
    deleteBulletIcon(event.target);
  }
  if(event.target.classList == 'task-list' && event.ctrlKey){
    changeBulletIcon(event.target,'task-list','event-list');
  }else if(event.target.classList == 'event-list' && event.ctrlKey){
    changeBulletIcon(event.target,'event-list','important-list');
  }else if(event.target.classList == 'important-list' && event.ctrlKey){
    changeBulletIcon(event.target,'important-list','inspiration-list');
  }else if(event.target.classList == 'inspiration-list' && event.ctrlKey){
    changeBulletIcon(event.target,'inspiration-list','note-list');
  }else if(event.target.classList == 'note-list' && event.ctrlKey){
    changeBulletIcon(event.target,'note-list','task-list');
  } 
}