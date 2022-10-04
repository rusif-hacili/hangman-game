
var sozler = ['kitab', 'defter', 'nar', 'alma', 'saat', 'fincan'];
var sozuSec = sozler[Math.floor(Math.random() * sozler.length)];
var netice = [];
for (let i = 0; i < sozuSec.length; i++) {
    netice.push('_');
}
console.log(netice);

var cehd = 9;
var sozleriAyir = [];
var sehfHerf = [];
var dogruHerf = [];
var wins = 0;
var losses = 0;


const dogru = document.querySelector('#true');
const yanlis = document.querySelector('#false');
const tr = document.querySelector('#try');
const viktory = document.querySelector('#viktory');
const defeat = document.querySelector('#defeat');



var obj = {

    duzgunHerf: function (simvol) {
        for (let j = 0; j < sozuSec.length; j++) {
            if (sozuSec.charAt(j) === simvol) {
                netice[j] = simvol;
                dogru.innerHTML = netice.join(' ');

            }

        }

        if (sozuSec.length === dogruHerf.length) {
            wins++;
            viktory.innerHTML = wins;
            alert('qalib geldiniz!!!');
            cehd = 1
            return
        }


        console.log('netice:', netice);

    },

    sehfHerf: function () {
        cehd--;
        yanlis.innerHTML = sehfHerf.join(' ');
        console.log('yanlish herfi tapdin', sehfHerf);
    },

    cehdSayi: function () {
        tr.innerHTML = cehd
        console.log('cehdler', cehd);
        if (cehd <= 0) {
            losses++;
            defeat.innerHTML = losses;
            console.log('dsc', losses);
            alert('meglub oldunuz !!!')
            cehd = 1
            return
        }

    }

}

window.onkeyup = function (e) {

    console.log('secilen soz:', sozuSec)



    if (sozuSec.includes(e.key)) {
        dogruHerf.push(e.key);
        obj.duzgunHerf(e.key);


    } else {
        sehfHerf.push(e.key)
        obj.sehfHerf();
        obj.cehdSayi();
    }
}
