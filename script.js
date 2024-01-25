// manifest.json file will contain meta data about the chrome extension
// Code below is just an example
alert("Extension works")

async function fetchData() {

    const url = 'https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2022';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '72dd281243msh0e86cbdb26f31d6p170e3ejsn19a168404eaa',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const record = await response.json();

        document.querySelector("tbody").innerHTML = record.response.map(item => `    <tr>
                <td><img src = '${item.driver.image}'></td> 
                <td> ${item.driver.name}</td> 
                <td> ${item.points}</td> 
                <td> ${item.wins}</td> 
                </tr>`).join('');
                document.querySelector('table').classList.remove('hidden')
        // document.getElementById("drivers").innerHTML = record.response.map(item => `<li>${item.driver.name}</li>`).join('');
        console.log(record);
    } catch (error) {
        console.error('error', error);
    }

}
fetchData();

let linkTag = document.getElementsByTagName('a');
console.log(linkTag)






