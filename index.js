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
// Interface CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n========================================');
    console.log('⿡  Lihat daftar item');
    console.log('⿢  Tambah item');
    console.log('⿣  Lihat detail item');
    console.log('⿤  Update item');
    console.log('⿥  Hapus item');
    console.log('⿦  Keluar');
    console.log('========================================');
    rl.question('👉 Pilih aksi: ', (answer) => {
        if (answer === '1') {
            listItems();
            showMenu();
        } else if (answer === '2') {
            rl.question('📖 Masukkan judul buku: ', (name) => {
                rl.question('🎭 Masukkan genre: ', (genre) => {
                    rl.question('👤 Masukkan nama pengarang : ', (year) => {
                        addItem(name, genre, year);
                        showMenu();
                    });
                });
            });
        } else if (answer === '3') {
            rl.question('🔍 Masukkan nomor item: ', (num) => {
                viewItem(parseInt(num) - 1);
                showMenu();
            });

        } else if (answer === '4') {
            rl.question('✏  Masukkan nomor item yang akan diupdate: ', (num) => {
                rl.question('📖 Masukkan judul baru: ', (newName) => {
                    rl.question('🎭 Masukkan genre baru: ', (newGenre) => {
                        rl.question('👤 Masukkan nama pengarang baru: ', (newYear) => {
                            updateItem(parseInt(num) - 1, newName, newGenre, newYear);
                            showMenu();
                        });
                    });
                });
            });
        } else if (answer === '5') {
            rl.question('🗑  Masukkan nomor item yang akan dihapus: ', (num) => {
                deleteItem(parseInt(num) - 1);
                showMenu();
            });
        } else if (answer === '6') {
            console.log('\n👋 Terima Kasih Telah Menggunakan Database Zein Book!\n');
            rl.close();
        } else {
            console.log('\n❌ Pilihan tidak valid!\n');
            showMenu();
        }
    });
}

// Tampilan awal hanya muncul sekali
console.log('\n==================================================');
console.log('    🎉 SELAMAT DATANG DI DATABASE ZEIN BOOK 🎉');
console.log('==================================================');

showMenu();
