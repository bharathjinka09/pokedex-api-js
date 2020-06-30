
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    name: 'pikachu',
}

const {url, type, name} = apiData

const apiUrl = `${url}${type}/${name}`


const generateHtml = (data) => {
    console.log(data)
    const html = `
    <div class="card border-success mb-3" style="width: 18rem;">

        <img width='100%;' src=${data.sprites.front_default} class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <div class="card-text">
                <span>Height: ${data.height}</span>
                <span>Weight: ${data.weight}</span>
            </div>
        </div>
    </div>
    `
    const pokemonDiv = document.querySelector('.pokemon');
    console.log(pokemonDiv);
    pokemonDiv.innerHTML = html;
}



fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))
