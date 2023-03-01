
let btn1 = document.getElementById('get-data');
console.log(btn1);


const getData1 = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {

            console.log(data);
            $(document).ready(function () {
                $('div').attr('id', 'dane-programisty')
            })

            let pImie = document.createElement('div');
            let nazwisko = document.createElement('div');
            let pZawod = document.createElement('div');
            let pFirma = document.createElement('div');
            let hr = document.createElement('hr')


            pImie.innerText = `Imie: ${data.imie} `;
            nazwisko.innerText = `Nazwisko: ${data.nazwisko} `;
            pZawod.innerText = `Zawód: ${data.zawod} `;
            pFirma.innerText = `Firma: ${data.firma} `;

            document.body.appendChild(pImie);
            document.body.appendChild(nazwisko);
            document.body.appendChild(pZawod);
            document.body.appendChild(pFirma);
            document.body.appendChild(hr)
        })
        .catch(error => {
            console.error(error);
        })
}


btn1.addEventListener('click', getData1)

