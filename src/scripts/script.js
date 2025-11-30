fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_goKVzx944pBGnH68vsN8MT6A0wSbu`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.ip);
    });