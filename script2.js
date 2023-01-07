let favouriteContainer=document.getElementById("favouriteContainer");
let retriveArrFav= JSON.parse(localStorage.getItem("myFavourites"));


console.log(retriveArrFav);


let len=retriveArrFav.length;

for(let i=0;i<len;i++){


    let obj= retriveArrFav[i];


    
let favouriteItem= document.createElement("li");
favouriteItem.setAttribute("class","favouriteItem");

favouriteItem.innerHTML=
`
<div class="favDiv" > 
<img class="favImage" src="${obj.image.url}" >
 
<div class="rightD">
   <p class="aaaad">${obj.id} </p>

   <p class="aaaad">${obj.name} </p>

</div> <img class="deleteimage" onClick="deleteFav(${obj.id})" src="https://cdn.pixabay.com/photo/2021/02/19/14/44/delete-button-6030454__340.png" >
</div>

`;

favouriteContainer.appendChild(favouriteItem);
  
}


// FUNCTIONALITY TO DELETE THE FAVOURITE LIST FROM THE BROWSER

function deleteFav(gotId){
    console.log("delete  functionality has been called", gotId);

    
let retriveArrFav= JSON.parse(localStorage.getItem("myFavourites"));


let len=retriveArrFav.length;


retriveArrFav= retriveArrFav.filter((myobject)=>{
    if(myobject.id != gotId){
        return true;
    }
});

localStorage.setItem("myFavourites", JSON.stringify(retriveArrFav));
window.location.reload();
}
