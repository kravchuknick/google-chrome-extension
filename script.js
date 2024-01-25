// manifest.json file will contain meta data about the chrome extension
// Code below is just an example



// async function fetchData(){
//     const url = 'https://api-formula-1.p.rapidapi.com/rankings/drivers?season=1991';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '72dd281243msh0e86cbdb26f31d6p170e3ejsn19a168404eaa',
//             'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
//         }
//     };

//     // try {
//     //     const res = await fetch(url, options);
//     //     const result = await res.text();
//     //     console.log(result);
//     // } catch (error) {
//     //     console.error('request error', error);
//     // }

//     const res = await fetch(url, options);
//     //const result = await res.text();
//     const record = await res.json();
//     console.log('record', record)

//     //document.getElementById("drivers").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
// }

// fetchData();

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

        document.getElementById("drivers").innerHTML = record.response.map(item => `<li>${item.team.name}</li>`).join('');

        console.log(record);
    } catch (error) {
        console.error('error', error);
    }

}

fetchData();