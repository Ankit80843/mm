async function getdata() {
    const api = await fetch('https://dummyapi.online/api/movies');
    let data = await api.json();
    console.log(data);
    
    data.map((val) => {
        document.querySelector('.movie').innerHTML += `
            <div class="moviecard">
                <img src="images.png" alt="">
                <div class="title">
                    <h5>${val.movie}</h5>
                    <h4>${val.rating}</h4>
                </div>
            </div>
        `;
    });

    // Event listeners after the elements are added
    let cards = document.querySelectorAll('.moviecard');
    cards.forEach((card) => {
        card.addEventListener('mouseover', () => {
            card.querySelector('.title').classList.add("showTitle");
        });
        card.addEventListener('mouseout', () => {
            card.querySelector('.title').classList.remove("showTitle");
        });
    });
}

getdata();
