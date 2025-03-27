const form = document.querySelector("#form");
const book_name = document.getElementById("bookName");
const authorn = document.querySelector("#AuthorName");
const bookPrice = document.getElementById("cost");
const list = document.querySelector(".list")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const book = book_name.value.trim();
    const author = authorn.value.trim();
    const price = bookPrice.value.trim();

    if(!book || !author || !price){
        alert("please provide the book details");
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book");

    const bn = document.createElement("input");
    bn.classList.add("bookName");
    bn.value = book;
    bn.setAttribute("readonly","readonly");
    bn.type = "text";

    const ba = document.createElement("input");
    ba.classList.add("bookAuthor");
    ba.value = author;
    ba.setAttribute("readonly","readonly");
    ba.type = "text";

    const bp = document.createElement("input");
    bp.classList.add("bookPrice")
    bp.value = price;
    bp.setAttribute("readonly","readonly");
    bp.type = "Number";

    bookDetails.append(bn,ba,bp);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const edbtn = document.createElement("button");
    edbtn.classList.add("edit");
    edbtn.innerHTML = "Edit";

    const delbtn = document.createElement("button");
    delbtn.classList.add("Delete");
    delbtn.innerHTML = "Delete";

    actions.append(edbtn,delbtn);
    task.append(bookDetails,actions);
    list.appendChild(task);

    form.reset();

    edbtn.addEventListener("click",()=>{
        if (edbtn.innerHTML== "Edit"){
            bn.removeAttribute("readonly");
            ba.removeAttribute("readonly");
            bp.removeAttribute("readonly");
            bn.focus();
            edbtn.innerHTML = "Save";
        }else{
            bn.setAttribute("readonly","readonly");
            ba.setAttribute("readonly","readonly");
            bp.setAttribute("readonly","readonly");
            edbtn.innerHTML="Edit";
        }
    });


    delbtn.addEventListener("click",()=>{
        list.removeChild(task);
    });

});
