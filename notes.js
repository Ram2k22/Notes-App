const addBox = document.querySelector(".add-box"),
popBox = document.querySelector(".pop-box"),
popClose = document.querySelector(".ptop i"),
addBtn = document.querySelector(".pbottom button"),
titleIn = document.querySelector(".title-input"),
descIn = document.querySelector(".description");

const months = ["January","Februry","March","April","May","June","July","August","September","October",'November',"December"];
const notes = JSON.parse(localStorage.getItem("notes") || "[]");



addBox.addEventListener("click",()=>{
    popBox.classList.add("show");
});

popClose.addEventListener("click",() => {
    titleIn.value="";
    descIn.value="";
    popBox.classList.remove("show");
})

function showNotes(){
    document.querySelectorAll('.note').forEach(note => note.remove());
    notes.forEach(item => {
        let liTag = `<li class="note">
                        <div class="top-content">
                            <h1>${item.title}</h1>
                            <p>${item.description}</p>
                        </div>
                        <div class="bottom-content">
                            <div class="date">
                                <span >${item.date}</span>
                            </div>
                            <div class="settings-icon">
                                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                <ul class="settings">
                                    <li><i class="fa fa-pencil" aria-hidden="true"> edit</i></li>
                                    <li><i class="fa fa-trash" aria-hidden="true"> delete</i></li>
                                </ul>
                            </div>
                        </div>
                    </li>`
        addBox.insertAdjacentHTML('afterend',liTag);
    });
}


addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let noteTitle = titleIn.value,
    noteDesc = descIn.value;
    if(noteTitle || noteDesc){
        let cuDate = new Date(),
        date = cuDate.getDate(),
        month = months[cuDate.getMonth()],
        year = cuDate.getFullYear();
        notesInfo = {
            title:noteTitle,
            description:noteDesc,
            date:`${month} ${date} ${year}`
        }
    }
    notes.push(notesInfo);
    localStorage.setItem("notes",JSON.stringify(notes));
    popClose.click();
    showNotes();
})