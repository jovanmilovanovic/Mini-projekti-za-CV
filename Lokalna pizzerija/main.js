const fetchNearByShop = ({longi,lat}) => {
    console.log(`Lociramo piceriju na sledecoj lokaciji (${longi} ${lat}) `);
    return new Promise((resolve, reject) => {
        setTimeout(function (){

                // Da pretpostavimo da je ovo najbliza pizza restoran
                // i resavamo sa id-em restorana
                const response = {
                    shopId: "s-123"
                }

                resolve(response.shopId)
        },1000)
    })
}

const fetchAvailablePizzas = ({shopId}) => {
    console.log(`Dobijanje liste pica u piceriji ${shopId}`);

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const response = {
                // Lista svih pizza
                // dostupnih u radnjama
                pizzas: [
                    {
                        type: "veg",
                        name: "margarita",
                        id: "pv-123",
                    },
                    {
                        type: "nonveg",
                        name: "pepperoni slice",
                        id: "pnv-124"
                    },


                ]
            }
            resolve(response)
        },1000)
    })
}

const getMyPizza = (result, type, name) => {
    const pizzas = result.pizzas
    console.log("Dobili smo listu pizza", pizzas);

    const myPizza = pizzas.find((pizza) => {
        return(pizza.type === type && pizza.name === name)
    })
    return new Promise((resolve, reject) => {
        if(myPizza) {
            console.log(`Nasao sam picu koja se potrazuje ${myPizza.name}!`);
            resolve(myPizza)

        } else {
            reject(
                new Error(
                    ` Zao mi je, nemamo ${type} ${name} picu. Da li hocete nesto drugo?`
                )
            )
        }
    })
}

const fetchBeverages = ({pizzaId}) => {
    console.log(`Uzimamo osvezenje za picu ${pizzaId}...`);
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const response ={
                id: "b-10",
                name: "cola"
            }
            resolve(response)
        },1000)
    })
}

const create = (endpoint, payload) => {
    if(endpoint.includes(`/api/pizzahub/order`)){
        console.log("Postavljanje porudzbenice za picu...", payload);
        const {type, name, beverage} = payload
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve({
                    succes: true,
                    message: `${type} ${name} pica nalog sa ${beverage} je postavljena uspesno.`
                })
            },1000)
        })

    }
}

function fetch(endpoint, payload) {
    if(endpoint.includes("/api/pizzahub/shop")) {
        return fetchNearByShop(payload)
    } else if(endpoint.includes("/api/pizzahub/pizza")) {
        return fetchAvailablePizzas(payload)
    } else if(endpoint.includes("/api/pizzahub/beverages")) {
        return fetchBeverages(payload)
    }
}

function orderPizza(type, name) {
        // Pribavi obliznju piceriju
        fetch("/api/pizzahub/shop", {'longi': 38.8951, 'lat': -77.0364})
        // preuzmi sve pice iz picerije
        .then((shopId) => fetch("/api/pizzahub/pizza", {'shopId': shopId}))
        // proveri dostupnost pica
        .then((allPizzas) => getMyPizza(allPizzas,type,name))
        // proveri dostupnost trazenog pica
        .then((pizza) => fetch("/api/pizzahub/beverages", {'pizzaId': pizza.id}))
        // Kreiranje porudzbenice
        .then((beverage) =>
        create("/api/pizzahub/order", {
            beverage: beverage.name,
            name: name,
            type: type,

        })
        ) 
            .then((result) => console.log(result.message))
            .catch(function(error) {
                console.error(`${error.message}`);
            })    

}

// Naruci picu

orderPizza("veg","margarita")