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

// Menambahkan item baru
function addItem(name, genre, year) {
    const data = loadData();
    data.push({ name, genre, year });
    saveData(data);
    console.log('\n✅ Item berhasil ditambahkan!\n');
}

// Melihat detail 1 item
function viewItem(index) {
    const data = loadData();
    console.log('\n========================================');
    if (index >= 0 && index < data.length) {
        console.log(` 📖 Nama Buku : ${data[index].name}`);
        console.log(` 🎭 Genre Buku : ${data[index].genre}`);
        console.log(` 👤 Pengarang : ${data[index].year}`);
    } else {
        console.log('❌ Item tidak ditemukan!');
    }
    console.log('========================================\n');
}

// Mengupdate item
function updateItem(index, newName, newGenre, newYear) {
    const data = loadData();
    if (index >= 0 && index < data.length) {
        data[index] = { name: newName, genre: newGenre, year: newYear };
        saveData(data);
        console.log('\n✅ Item berhasil diperbarui!\n');
    } else {
        console.log('\n❌ Item tidak ditemukan!\n');
    }
}

// Menghapus item
function deleteItem(index) {
    const data = loadData();
    if (index >= 0 && index < data.length) {
        data.splice(index, 1);
        saveData(data);
        console.log('\n🗑️  Item berhasil dihapus!\n');
    } else {
        console.log('\n❌ Item tidak ditemukan!\n');
    }
}