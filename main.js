const getData = async (type) => {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${id_or_name}/`);
    const data = await res.json()
    const pokemonList = data.pokemon
    const pokemonNameList = []
    for (let pokObj of pokemonList){
        pokemonNameList.push(pokObj.pokemon.name)
    }
    console.log(pokemonNameList)
    return pokemonNameList
};

const createList = (pokemonName) => {
    const my_h4 = document.createElement('h4')
    my_h4.innerText = pokemonName
    my_h4.classname = 'list-group-item list-group-item-action list-group-item-light'
    document.querySelector('section.list-group').insertAdjacentElement('beforeend', my_h4)
};

const loadData = async () => {
    const myInput = document.querySelector('input').value
    const myList = await getData();
    myList.forEach((name)=>(createList(name)))
};


const clearData = () => {
    document.querySelector("section").innerHTML=''
};

const clear = document.getElementsByClassName('btn-danger')[0]
clear.addEventListener('click', clearData)
