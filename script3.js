// In this we are makeing a localStorage in which we can store the heros Api to show in the Detail page
// fetch the data form the superhero Api for local storage
let obj;
const mycall=async()=>{
    let searchId=localStorage.getItem("givenId");
    let searchValue=localStorage.getItem("searchValue");
    console.log(searchValue);
    const url= `https://www.superheroapi.com/api.php/1211886636113722/search/${searchValue}`;
    const response= await fetch(url);
    const mydata= await response.json();
    // console.log(mydata.results);
    const res=mydata.results;
    console.log(res);
    console.log("searchId", searchId);
    // console.log(res);
    // By this we are traverse to a loop that when we search a superHeors in search bar the condition of this will check if the search id is equal to the Api id they will show the out come result by the if condition   
    // length is for more then one superheros.
    let n=res.length;
    for(let i=0;i<n;i++){
        if(res[i].id==searchId){
            console.log(i);
            obj=res[i];
            console.log("obj",obj);
    //Now it time to give a detil to a superheros. In this we are making a detail continer in which we are show all the detail of an superheros for the API  
    //Making an obj where we find an ID of an superhero in the serach bar or you can say that form the condition(result ID equls to API ID) 
            let detailContainer=document.getElementById("detailContainer");
            function detailGenerator(obj){
            let containerDiv=document.createElement("div");
            containerDiv.setAttribute("class","containerDiv");
            containerDiv.innerHTML=
            `
        <div> <img class="detailImg" src="${obj.image.url}" > </div>
        <p class="mybold" > id: ${obj.id} </p>
        <p class="mybold" > name: ${obj.name} </p>
        <h4 class="head"> Appearance </h4>
          <p class="appearance"> gender: ${obj.appearance.gender} </p>
          <p class="appearance"> race: ${obj.appearance.race} </p>
          <p class="appearance"> eyeColor: ${obj.appearance.eyeColor} </p>
          <p class="appearance"> hairColor: ${obj.appearance.hairColor} </p>

          <h4 class="head1"> PowerStats </h4>
            <p class="powerstats">  intelligence: ${obj.powerstats.intelligence} </p>
            <p class="powerstats">  strength: ${obj.powerstats.strength}  </p>
            <p class="powerstats"> speed: ${obj.powerstats.speed} </p>
            <p class="powerstats"> durablity: ${obj.powerstats.durablity} </p>
            <p class="powerstats">  power: ${obj.powerstats.power} </p>
        `;
        // Now append the detail of an superhero API where we search the heros deltil can show in the deltil page  
        detailContainer.append(containerDiv);
        }
        detailGenerator(obj);
        }
    }
}
mycall();