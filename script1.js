// To get inputValue of an function that we can used for featch the data from the Api to handle the on click event that button we made in the Html part
// we async the reuest by give the Api and fetch it 
let ul1= document.getElementById("ul1");
let inputValue= document.getElementById("input1");
//we are actually making array of objects that would be stored in LocalStorage for the further use
let myFavourites =[];
localStorage.setItem("myFavourites",JSON.stringify(myFavourites));
// let accessToken= "1211886636113722";
//this handleInput is triggered from search  button when it is clicked
function handleInput(){
    const searchValue= inputValue.value;

    localStorage.setItem("searchValue", searchValue);
    // const searchValue="batman";
    
    const myReq=  async ()=>{
    const url= `https://www.superheroapi.com/api.php/1211886636113722/search/${searchValue}`;
    const response= await fetch(url);
    const mydata= await response.json();
    //  checking for the list of what is there in the Api to show the heros in the console 
    // console.log(mydata.results);
    const res= mydata.results;
    // checking for the 0 index what is the output in 0 index
    // console.log(res[0]);
    // console.log(res.length);
     //  for traverse through the loop for showing the list item that we are fetching to the Api of heros that are show in the search bar
    for(let i=0;i<res.length;i++){
      // making list item that would be used as list
      let listItem=  document.createElement("li");
      listItem.setAttribute("class","listItem");
     // In this we are show the give ID,name,Image to the Api of an heros after click on them where at to the palce where the heros has the detail
    // "i" is a give heros assined to work as a result of an Api where we are fetch our all data  

      listItem.innerHTML=  `

      <div class="content">
                    <div class="leftDiv">
                    <a href="detail.html" > <img onClick="handleShowDetail(${res[i].id})" class="listimage" src="${res[i].image.url}" > </a>
                                    </div>
                    <div class="rightDiv">
                        <span class="myId"> Id: ${res[i].id}</span>
                        <span class="myName"> ${res[i].name} </span>
                    </div>
                    <div class="btn">
                        <button onClick="handleAddFavourite(${res[i].id})" >
                            <img  class="likeImage" src="https://cdn-icons-png.flaticon.com/512/3128/3128313.png" alt="" >
                        </button>
                    </div>
                </div>
   
       `;
    // by this we are checking all the result or address of heros are woking fine 
    // OR we are going in the right heros in which we are click in 
    // console.log(res[i].id, res[i].name,res[i].image.url );
    //append the list to the listItem of an search  
    //   console.log(res[i].id, res[i].name,res[i].image.url );
      ul1.appendChild(listItem);
    }
}
// making API call 
myReq();
}
// functionality to handle the showDetail of particular hero of API
function handleShowDetail(givenId){
 /// JSON.parse(arg);
 console.log(givenId);
 window.localStorage.setItem("givenId", givenId);
  console.log("functionality of handle show detail has been caaleed");
 // console.log(arg);
}

// funcitonality to add favourite into myFavorite page

function handleAddFavourite(gotId){

  console.log(gotId,"add favourite functionality has been called");

  
const myCall = async ()=>{

  // let searchId= localStorage.getItem("givenId");
  let searchValue= localStorage.getItem("searchValue");
  console.log(searchValue);
  const url= `https://www.superheroapi.com/api.php/1211886636113722/search/${searchValue}`;

  const response= await fetch(url);

   const mydata= await response.json();

  
  // console.log(mydata.results);

  const res= mydata.results;

  console.log(res);
  // console.log(res[2].id);
  // console.log("searchId", searchId);

  // console.log(res[1].id == searchId);

  let n= res.length;
  for(let i=0;i<n;i++){
      if(res[i].id == gotId){
          // console.log(i);

          // console.log(res[i]);
         let  myobj=res[i];

          console.log("myobj",myobj);

             let retrieveArrayOFFav= JSON.parse(localStorage.getItem("myFavourites"));

            //  console.log(retrieveArrayOFFav);

             retrieveArrayOFFav.push(myobj);

             localStorage.setItem("myFavourites",JSON.stringify(retrieveArrayOFFav));

      }}

}


myCall();

}

