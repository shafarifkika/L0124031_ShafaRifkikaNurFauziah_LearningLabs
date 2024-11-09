// Menampilkan konten Puisi atau Cerita Pendek
function showContent(contentType) {
    // Menyembunyikan semua konten
    document.getElementById('poetry').style.display = 'none';
    document.getElementById('short-story').style.display = 'none';

    // Menampilkan konten yang dipilih
    if (contentType === 'poetry') {
        document.getElementById('poetry').style.display = 'block';
    } else if (contentType === 'short-story') {
        document.getElementById('short-story').style.display = 'block';
    }
}

// Untuk menampilkan detail puisi
function showPoetryDetails(poetryId) {
    // Menyembunyikan semua detail puisi
    var allPoetryDetails = document.querySelectorAll('.poetry-detail');
    allPoetryDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

// Menampilkan detail puisi yang dipilih
    document.getElementById(poetryId).style.display = 'block';
}

// Menampilkan detail cerita pendek
function showShortStoryDetails(storyId) {
// Menyembunyikan semua detail cerita pendek
    var allShortStoryDetails = document.querySelectorAll('.short-story-detail');
    allShortStoryDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

// Menampilkan detail cerita pendek yang dipilih
    document.getElementById(storyId).style.display = 'block';
}

// Menampilkan konten puisi atau cerita pendek
function showContent(contentId) {
    // Sembunyikan kedua konten terlebih dahulu
    document.getElementById('puisi').style.display = 'none';
    document.getElementById('cerita-pendek').style.display = 'none';

    // Tampilkan konten yang sesuai dengan ID yang dipilih
    document.getElementById(contentId).style.display = 'block';
}


