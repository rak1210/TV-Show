document.querySelector("button").addEventListener("click",result)
var div1 = document.createElement("div");
div1.setAttribute("id","results");
var card = document.createElement("div");
card.innerHTML="";

async function result(){
    try {
        var ask = document.getElementById("Shows").value; 
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`);
        var res = await data.json();
        console.log(res);
        res.forEach(show => {
            card.innerHTML = `<div class="card" style="width: 18rem;">
                <img src="${show.show.image ? show.show.image.original : 'placeholder.jpg'}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Showname: ${show.show.name}</p>
                    <p class="card-text">Genres: ${show.show.genres}</p>
                    <p class="card-text">Premeried Date: ${show.show.premiered}</p>
                    <p class="card-text">Run Time: ${show.show.averageRuntime}</p>
                    <p class="card-text">Rating: ${show.show.rating.average}</p>
                    <p class="card-text">Show Days: ${show.show.schedule.days}</p>
                    <p class="card-text">Official Site: ${show.show.officialSite}</p>
                    <p class="card-text">Network : ${show.show.network.name}</p>
                    <p class="card-text">Country: ${show.show.network.country.name}</p>
                    <p class="card-text">Summary: ${show.show.summary}</p>
                </div>
            </div>`;
            document.body.append(card);
        });
        
    } catch (error) {
        console.log(error);
    }
        
}
    

   


