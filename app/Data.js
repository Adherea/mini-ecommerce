// Import all images from the 'public/asset' directory
const images = require.context("../public/asset", false, /\.(jpg|jpeg|png)$/);

// Function to get image by name
const getImage = (name) => images(`./${name}`).default;

// Define your data array with image names
const data = [
  { id: 1, gambar: getImage("1.jpg"), nama: "Tempat tidur Kayu jati ukuran 180 x 200", kategori: "ranjang", harga: 5000000 },
  { id: 2, gambar: getImage("2.jpg"), nama: "Kursi Meja madura kayu jati Kapasitas 3211", kategori: "kursimeja", harga: 8000000 },
  { id: 3, gambar: getImage("3.jpg"), nama: "Lemari Pakaian Kayu Jati 3 Pintu", kategori: "lemari", harga: 5000000 },
  { id: 4, gambar: getImage("4.jpg"), nama: "Lemari Pakaian Kayu Jati Modern 3 Pintu", kategori: "lemari", harga: 6000000 },
  { id: 5, gambar: getImage("5.jpg"), nama: "Sofa Modern Minimalis", kategori: "tamu", harga: 10000000 },
  { id: 6, gambar: getImage("6.jpg"), nama: "Gazebo kayu", kategori: "Gazebo", harga: 13000000 },
  { id: 7, gambar: getImage("7.jpg"), nama: "Lemari Partisi Kayu Jati Modern Ukuran 200 x 200", kategori: "lemari", harga: 7000000 },
  { id: 8, gambar: getImage("8.jpg"), nama: "Lemari Partisi Kayu Jati Ukuran 200 x 300", kategori: "lemari", harga: 10000000 },
  { id: 9, gambar: getImage("9.jpg"), nama: "Bale Bale Kayu Jati ukuran 80 x 200", kategori: "souvenir", harga: 4500000 },
  { id: 10, gambar: getImage("10.jpg"), nama: "Kursi + Meja makan bahan Kayu Minimalis ", kategori: "dapur", harga: 10000000 },
  { id: 11, gambar: getImage("11.jpg"), nama: "Kursi + Meja modern Minimalis", kategori: "souvenir", harga: 5500000 },
  { id: 12, gambar: getImage("12.jpg"), nama: "Sofa Kayu Jati", kategori: "Souvenir", harga: 15000000 },
  { id: 13, gambar: getImage("13.jpg"), nama: "Ranjang Tidur (Tanpa Kasur)", kategori: "ranjang", harga: 12000000 },
  { id: 14, gambar: getImage("14.jpg"), nama: "Kursi Tamu blok dengan lengan Bulat", kategori: "tamu", harga: 20000000 },
  { id: 15, gambar: getImage("15.jpg"), nama: "Lemari kayu 3 Pintu minimalis Modern", kategori: "lemari", harga: 6500000 },
  { id: 16, gambar: getImage("16.jpg"), nama: "Set Kursi makan Ukir Salina kayu jati", kategori: "dapur", harga: 10000000 },
  { id: 17, gambar: getImage("17.jpg"), nama: "1 set Kursi + Meja makan Kayu Minimalis (Kecil)", kategori: "dapur", harga: 5000000 },
  { id: 18, gambar: getImage("18.jpg"), nama: "Buffet TV Retro Minimalis ", kategori: "lemari", harga: 4000000 },
  { id: 19, gambar: getImage("19.jpg"), nama: "Kursi + Meja makan Kayu Minimalis ukiran Salina (Kecil)", kategori: "dapur", harga: 7000000 },
  { id: 20, gambar: getImage("20.jpg"), nama: "Sofa Tamu Minimalis", kategori: "tamu", harga: 8000000 },
  { id: 21, gambar: getImage("21.jpg"), nama: "Kursi Tamu Jati Minimalis", kategori: "tamu", harga: 8000000 },
  { id: 22, gambar: getImage("22.jpg"), nama: "Buffet Minimalis Kayu jati", kategori: "lemari", harga: 5500000 },
  { id: 23, gambar: getImage("23.jpg"), nama: "Kursi Tamu jati Madura", kategori: "tamu", harga: 7000000 },
  { id: 24, gambar: getImage("24.jpg"), nama: "Meja Makan marmer 4 Kursi", kategori: "dapur", harga: 7000000 },
];

export default data;
