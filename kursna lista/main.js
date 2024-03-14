let danas = new Date()

// console.log(danas);

let dd = danas.getDate()

let mm = danas.getMonth()+1

let yyyy = danas.getFullYear()


danas = ` ${dd}.${mm}.${yyyy}`
// console.log(danas);


const urlDatum = `https://api.kursna-lista.info/e04c1183a16dc2bf05af01f0cbae109c/kl_na_dan/4.3.2024/json`

console.log(urlDatum);

let lista = [];


$(document).ready(function(){
    $.ajax({

        url: urlDatum,
        dataType: 'jsonp',
        success: function(odgovor){
                lista = odgovor.result

                console.log(lista);
                for (let i in lista) {
                   prikaziKursnuListu(lista[i],i)
                }
                
                
        },
        error: function(error){
            alert(error.message)
        }


    })
})

const prikaziKursnuListu = (podaciZaValutu,valuta) => {
    console.log(podaciZaValutu);

    const kursCatalog = document.getElementById("tableBody")

    if(valuta != "date"){
        const html = 
        
        `
            <tr>
                <td>
                    <img src="images/kurs/${valuta}.png" alt="">
                    <span>${valuta}</span>
                </td>
                <td>${podaciZaValutu.kup}</td>
                <td>${podaciZaValutu.sre}</td>
                <td>${podaciZaValutu.pro}</td>
            </tr>


        `
    kursCatalog.innerHTML += html

    }
}
