let movies=[
    {
        name:"Naruto",
        poster:"https://pics.filmaffinity.com/Naruto_Shippauden_TV_Series-656283041-large.jpg",
        ratings:10
    },
    {
        name:"After Ever Happy",
        poster:"https://m.media-amazon.com/images/I/71SZrXPxq5L._AC_UF1000,1000_QL80_.jpg",
        ratings:6.5
    },
    {
        name:"SitaRamam",
        poster:"https://www.telugubulletin.com/wp-content/uploads/2022/05/sita-ramam-696x870.jpg",
        ratings:8.6
    },
    {
        name:"DaDa",
        poster:"https://m.media-amazon.com/images/S/pv-target-images/c71c6718ab15c8a88dd5d9e60902d23bd3633fbd3e7fc10e98a45d861a796cfa.jpg",
        ratings:8.2
    },
    {
        name:"Mankatha",
        poster:"https://bestoftheyear.in/wp-content/uploads/2017/05/Mankatha-poster.jpg",
        ratings:9
    },
    {
        name:"Leo",
        poster:"https://static.moviecrow.com/movies/4882-leo/216822-216819-leo-px214.jpeg",
        ratings:8.6
    },
    {
        name:"Remo",
        poster:"https://m.media-amazon.com/images/S/pv-target-images/9fffccd050d59f6d72e70740a0b3a8fc3ca835bb81a3d7b0a92d62ccf491ccf9.jpg",
        ratings:7
    },
    {
        name:"Atrangi Re",
        poster:"https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2021/atrangi-re/atrangi-re-poster-2.jpg",
        ratings:6.5
    },
    {
        name:"Money Heist",
        poster:"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
        ratings:6.5
    },
    
    {
        name:"Squid Game",
        poster:"https://i.pinimg.com/736x/b9/08/9f/b9089f49fbdfda8d8b2a3de852f7c703.jpg",
        ratings:8.9
    },
    
    {
        name:"Attack On Titan",
        poster:"https://flxt.tmsimg.com/assets/p10701949_b_v9_ah.jpg",
        ratings:9.5
    },
    {
        name:"My Fault",
        poster:"https://ok-th.com/uploads/video_thumb/1682.jpg",
        ratings:7.5
    },
]


function displayMovies(data) {
    let htmlString=  ``;

for (let i = 0;  i< data.length; i++) {
    
    htmlString=htmlString+
    ` <div class="movie">
    <div class="overlay">
        <div class="video">

        </div>
        <div class="detials">
            <h1>${data[i].name}</h1>
            <h4>${data[i].ratings}</h4>
            <p>Dulquer Salmaan . Mrunal Thakur . Rashmika Mandanna</p>
        </div>
    </div>
    <img class="poster" src="${data[i].poster}" alt="">

</div>`
    // console.log(htmlString);
}
document.querySelector(".movies").innerHTML=htmlString
    
}
displayMovies(movies);

let searchBar=document.getElementById("searchBar");

let gettext=()=>{
    console.log(searchBar.value)
    
}

// if(searchBar!=="")
// //     {
// //       let result=  movies.filter(function(movies)
// //         {
// //             return movies.name.toUpperCase===searchBar.toUpperCase
// //         })
// //         console.log(result);
// //     }


searchBar.addEventListener("input",gettext)