<template>
    <div class="w-full h-full pt-10 overflow-y-auto">
        
        <div class="content w-full mb-32">
            <audio autoplay controls class="absolute z-10 h-6 w-[96%]">
                <source src="/sounds/kelas-4/p6/membaca-qs-attin.mp3" type="audio/mpeg" />
            </audio>
            <figure class="relative">
                <h1 class="absolute left-0 right-0 bottom-0 text-2xl bg-white p-2 bg-opacity-80 shadow font-loveya max-auto">Membaca QS. At-Tin/95</h1>
                <img src="/img/mengaji.png" alt="Mengaji" class="h-32 w-full object-cover object-center" />
            </figure>
            <h1 class="font-bold text-center my-2">Simak Video Materi Di Bawah ini</h1>
            <iframe class="w-[90%] h-[300px] sm:w-[600px] mx-auto animate__animated animate__fadeInUp"  src="https://www.youtube.com/embed/yzvkrw64-kM"></iframe>
            <article class="quran text-center my-2 text-xl p-4 bg-white mx-4 rounded shadow animate__animated animate__fadeInUp">
                <h1 class="text-md leading-5 mb-2 pb-2 border-b border-b-2">Klik Ayat untuk mendengarkan contoh bacaannya</h1>
                <p class="mb-4 hover:cursor-pointer active:text-green-500" @click="playAyah(0)">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(1)">وَالتِّينِ وَالزَّيْتُونِ <span class="ayah">&#1633</span></p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(2)"> وَطُورِ سِينِينَ <span class="ayah">&#1634</span></p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(3)"> وَهَٰذَا الْبَلَدِ الْأَمِينِ <span class="ayah">&#1635</span></p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(4)"> لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ <span class="ayah">&#1636</span></p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(5)"> ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ <span class="ayah">&#1637</span></p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(6)"> إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ <span class="ayah">&#1638</span></p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(7)"> فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ <span class="ayah">&#1639</span></p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(8)"> أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ <span class="ayah">&#1640</span></p>
                <p class="my-3 hover:cursor-pointer active:text-green-500" @click="playAyah(9)"></p>
            </article>
            <article class="my-2 text-xl p-4 bg-white mx-4 rounded shadow animate__animated animate__fadeInUp">
                <h1 class="mb-2 font-bold">Tugas Terstruktur</h1>
                <p class="my-2">Setelah menyimak dan mengikuti pembelajaran membaca QS. At-Tin di atas, anak-anak harus terus mengulangnya agar lancar. </p>
                <ol class="list-decimal pl-4">
                    <li>Setelah itu, baca di depan guru atau ustadz agar beliau dapat mengoreksi dan menilai bacaan anak-anak!</li>
                    <li>Temukan bacaan tajwid di dalam QS At-Tin Sebanyak-banyaknya!</li>
                </ol>
            </article>
            <article class="my-2 text-xl p-4 bg-white mx-4 rounded shadow animate__animated animate__fadeInUp">
                <h1 class="mb-2 font-bold">Latihan Soal</h1>
                <p class="my-2">Kerjakan soal di bawah ini untuk lebih memahami tentang Hukum Bacaan Nun Mati dan Tanwin! </p>
                <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfS02D2LAQYdmAIKpCs5qM4m5Tj_byBKZvhx8B1JA8pfSClQ/viewform?embedded=true" width="320" height="2   000" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe> -->
                <LazyQuizKelas4Lesson6Subone />
            </article>
        </div>
        
    </div>
</template>

<script setup>
const playAyah = (ayah) => {
    let sound = new Audio(sounds[ayah])
    sound.play()
}

const sounds = [
    '/sounds/bismillah.mp3', 
    '/sounds/kelas-4/p6/attin-1.mp3',
    '/sounds/kelas-4/p6/attin-2.mp3',
    '/sounds/kelas-4/p6/attin-3.mp3',
    '/sounds/kelas-4/p6/attin-4.mp3',
    '/sounds/kelas-4/p6/attin-5.mp3',
    '/sounds/kelas-4/p6/attin-6.mp3',
    '/sounds/kelas-4/p6/attin-7.mp3',
    '/sounds/kelas-4/p6/attin-8.mp3',
    ]
</script>

<style>
.quran p {
    font-size: 1.3em; font-weight: normal;
    font-family: 'KFGQPC Uthman Taha Naskh', KFGQPC_Naskh, 'traditional arabic';
    padding-left: 20px; padding-right: 20px;
    direction: rtl; line-height: 34px;
    font-weight: 600;
}
.ayah {
  padding: 0 .3em;
  display: inline-block;
  position: relative;
  font-size: .8em;
}

.ayah::after {
  content: "\06DD";
  display: block;
  position: absolute;
  font-size: 1.3em;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
}
</style>