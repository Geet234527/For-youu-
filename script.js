document.getElementById("mulaiBtn").addEventListener("click", function() {
    // Menghilangkan tombol setelah ditekan
    this.classList.add("hidden");

    // Menampilkan kontainer Spotify dan memutar lagu
    var spotifyContainer = document.getElementById("spotifyContainer");
    spotifyContainer.classList.remove("hidden");
    
    // Menampilkan div kata-kata cinta
    var kataCinta = document.getElementById("kataCinta");
    kataCinta.classList.remove("hidden");
    
    // Memutar lagu dari Spotify
    var spotifyPlayer = document.getElementById("spotifyPlayer");
    spotifyPlayer.src += "?autoplay=1"; // Menambahkan parameter autoplay
});