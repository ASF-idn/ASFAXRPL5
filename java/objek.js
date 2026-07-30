//deklarasi objek
const karakter = {
    nama: "asfa",
    level: 100,
    hp: 1000,
    senjata: "pedang"
};
//output
console.log(karakter);
//dot notation
console.log(karakter.nama);
console.log(karakter.senjata);
//bracket notation
console.log(karakter["hp"]);
console.log(karakter["level"]);
//template literal
console.log(`nama karakter adalah ${karakter.nama}`);