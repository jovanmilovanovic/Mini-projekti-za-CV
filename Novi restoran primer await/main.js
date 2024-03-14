let stocks = {

    Fruits: ["jagoda","grozdje","banana","jabuka"],
    liquid : ["voda","led"],
    holder : ["kornet","casa","stapic"],
    toppings : ["cokolada","kikiriki"],
}


let is_shop_open = true

function time(ms) {
    return new Promise(( resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log('Restoran je zatvoren'))
        }
    })
}

async function kitchen(){
    try{

        // instrukcije idu ovde 


        await time(2000)
        console.log(`${stocks.Fruits[0]} je selektovana`);
        await time(0)
        console.log('Proizvodnja je krenula');
        await time(2000)
        console.log("Voce je iseckano");
        await time(1000)
        console.log(`${stocks.liquid[0]} i ${stocks.liquid[1]} dodati`);
        await time(1000)
        console.log("Startuj masinu");
        await time(3000)
        console.log(`Sladole je postavljen na ${stocks.holder[1]}`);
        await time(2000)
        console.log(`${stocks.toppings[0]} kao preliv`);
        await time(2000)
        console.log('Servirati sladoled');

    }

    //upravljanje greskama idu ovde
    catch(error) {
        console.log("Musterija je napustila restoran", error);
    }

    // svakako se ispisuje na kraju
    finally{
        console.log("Zavrsetak radnog vremena, radnja je zatvorena");
    }
}

// okidac
kitchen()