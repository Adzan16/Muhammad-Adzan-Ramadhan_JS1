let ketinggianPemain = 185;

if (ketinggianPemain >= 190) {
    console.log("Pemain sangat tinggi!");
} else if (ketinggianPemain >= 170) {
    console.log("Pemain tinggi");
} else {
    console.log("Pemain cukup tinggi");
}


// Nested if
let suhu = -5;

if (suhu > 0) {
    if (suhu % 2 === 0) {
        console.log("Suhu positif dan genap");
    } else {
        console.log("Suhu positif dan ganjil");
    }
} else if (suhu < 0) {
    console.log("Suhu negatif");
} else {
    console.log("Suhu nol");
}


let namaHari = "Wednesday";
let tipeHari;

switch (namaHari) {
    case "Monday":
    case "Tuesday":
    case "Thursday":
        tipeHari = "Hari Kerja";
        break;
    case "Wednesday":
        tipeHari = "Serba Selasa";
        break;
    case "Friday":
        tipeHari = "Hari Jumat";
        break;
    case "Saturday":
    case "Sunday":
        tipeHari = "Akhir Pekan";
        break;
    default:
        tipeHari = "Hari Tidak Valid";
}

console.log(`Hari ini ${namaHari} dan itu adalah ${tipeHari}`);


for (let i = 10; i <= 50; i += 10) {
    console.log(`Iterasi ke-${i / 10}`);
}


let hitungMundur = 3;

// while loop
while (hitungMundur > 0) {
    console.log(`Mundur ke-${hitungMundur}`);
    hitungMundur--;
}

// reset hitungMundur
hitungMundur = 3;

// do-while loop
do {
    console.log(`Do-While Loop Iteration ${hitungMundur}`);
    hitungMundur--;
} while (hitungMundur > 0);


function hitungVolumeKubus(sisi) {
    return sisi ** 3;
}

let sisiKubus = 4;
let volumeKubus = hitungVolumeKubus(sisiKubus);

console.log(`Volume kubus dengan sisi ${sisiKubus} adalah: ${volumeKubus}`);
