async function fetchData(){
    // const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/venue/infos?venue_id=10091046';
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/festival/infos?festival_id=157318';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2f73de54e1msh49ee51d6d04428fp18e3b1jsn190bbe463581',
            'x-rapidapi-host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };


    const res = await fetch(url, options)
    const record = await res.json()

    // console.log(record.data)

    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}

fetchData();