// Kelompok 7

const fs = require('fs');
const readline = require('readline');

const filePath = 'database.json';

// Membaca data dari JSON
function loadData() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]', 'utf8');
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Menyimpan data ke JSON
function saveData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Menampilkan daftar item
function listItems() {
    const data = loadData();
    console.log('\n========================================');
    console.log('           📚 DAFTAR ITEM 📚           ');
    console.log('========================================');
    if (data.length === 0) {
        console.log('❌ Tidak ada item dalam database.');
    } else {
        data.forEach((item, index) => {
            console.log(` ${index + 1}. ${item.name} | ${item.genre} | ${item.year}`);
        });
    }
    console.log('========================================\n');
}

