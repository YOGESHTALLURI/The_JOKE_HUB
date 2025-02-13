// const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

// const fetching= async()=>{
//     let response = await fetch(url);
//     console.log(response);
//      let data= await response.json();
//      console.log(data)
//      const Drinks=document.getElementById("drinks")
//           Drinks.innerText=data.drinks.map(drink => drink.strDrink).join(", ");
          

// }
// fetching();



// const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
 
// async function fetching(){
  
//       console.log("fetching data ....")
//         let response= await fetch(url,post);
//         console.log(response)

//         const data=response.json();
//         console.log(data);
//         const Drinks=document.getElementById("drinks")
//         Drinks.innerText=data.map(drink=>
//             drink.strDrink
// )
   

// }

// fetching();


const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

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

 
    

