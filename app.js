
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,sexist,explicit&type=single"

let btn=document.getElementById("btn")
 async function getjoke(){
  try{
        let response= await fetch(url);  
         if(!response.ok){
            throw new Error(`HTTP ERROR! Status :${response.status}`);
         }
        console.log(response);
        const data= await response.json();
        console.log(data.joke)
       document.getElementById("jokes").innerText=data.joke;
    }

    catch (error){
        console.error('Error fetching joke',error)
        document.getElementById("jokes").innerText="Sorry, Failed to get a joke"
      }
  }

  btn.addEventListener('click',getjoke);

 
    

