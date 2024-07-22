const button = document.querySelector('.btn');


button.addEventListener('click', function() {
    // show result
    
    // Penulis-1
    const nadep1 = document.querySelector('#nadep1').value;
    const nateng1 = document.querySelector('#nateng1').value;
    const nakh1 = document.querySelector('#nakh1').value;
    //Penulis-2
    const nadep2 = document.querySelector('#nadep2').value;
    const nateng2 = document.querySelector('#nateng2').value;
    const nakh2 = document.querySelector('#nakh2').value;
    // Penulis-3
    const nadep3 = document.querySelector('#nadep3').value;
    const nateng3 = document.querySelector('#nateng3').value;
    const nakh3 = document.querySelector('#nakh3').value;
    
    // Tahun terbit
    const thunTerbit = document.querySelector('#thunTerbit').value;

    // // Judul artikel
    const jdulArtikel = document.querySelector('#jdulArtikel').value;
    

    // Nama jurnal
    const nmaJurnal = document.querySelector('#nmaJurnal').value;

    // Volume
    const vlm = document.querySelector('#vlume').value;

    // Nomor jurnal
    const nmrJurnal = document.querySelector('#nmr').value;

    // Halaman 
    const hlmnJurnal = document.querySelector('#hlmn').value;
    

    const show = document.querySelector('#show');
    show.innerHTML = nakh1  + ',' + (nadep1.charAt(0)) + '.' + (nateng1.charAt(0)) + '.,' + nakh2 + ',' + (nadep2.charAt(0)) + '.' + (nateng2.charAt(0)) + '.,' + nakh3 + ',' + (nadep3.charAt(0)) + '.' + (nateng3.charAt(0)) + '.' + '(' + thunTerbit + ').' + jdulArtikel + '.' + nmaJurnal  + '.' + vlm + '(' + nmrJurnal + ').' + hlmnJurnal + '.';
})

// + jdulArtikel + '.' + nmaJurnal + '.' + vlm + '(' + nmrJurnal + ').' + hlmnJurnal


//  + ',' + (nadep1.charAt(0)) + '.' + (nateng1.charAt(0)) + '.,' + nakh2 + ',' + (nadep2.charAt(0)) + '.' + (nateng2.charAt(0)) + '.,' + nakh3 + ',' + (nadep3.charAt(0)) + '.' + (nateng3.charAt(0)) + '.' + '(' + thunTerbit + ').'