<template>
    <div class="w-full h-full pt-10 overflow-y-auto">
        
        <div class="content w-full mb-32">
            
            <figure class="relative w-full">
                <audio autoplay controls class="h-6 w-full sm:w-[96%]">
                    <source src="/sounds/kelas-4/p6/membaca-qs-attin.mp3" type="audio/mpeg" />
                </audio>
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
            </article>
            <article class="my-2 text-xl p-4 bg-white mx-4 rounded shadow animate__animated animate__fadeInUp">
                <h1 class="font-bold">Belajar Tajwid</h1>
                <h1 class="mb-2 italic text-sm">Hukum Nun Mati dan Tanwin</h1>
                <img src="/img/kelas-4/p6/peta-nun-tanwin.svg" alt="Peta Hukum Nun Mati dan Tanwin" />
                <p class="text-justify mb-2">Huruf Nun sukun atau harakat tanwin (fathatain, kasrotain, dhommatain) ketika bertemu huruf tertentu, maka cara membacanya juga beragam. Ada empat macam bacaan, yaitu:</p>
                <h4 class="font-bold text-teal-600 italic">1. Idhar ( اظْهَار )</h4>
                <p class="text-justify">Huruf nun mati atau tanwin harus dibaca jelas ketika bertemu dengan salah satu 6 huruf: <span class="text-rtl text-xl font-bold text-teal-500">( ء ه ع غ ح خ )</span>. Contoh: <span class="text-rtl text-xl">مِنْ غِلٍّ</span></p>
                <img src="/img/kelas-4/p6/idhar.svg" alt="Idhar" />
                <h4 class="mt-2 font-bold text-lime-600">2. Iqlab ( إقْلَبْ )</h4>
                <p class="text-justify">Huruf nun mati atau tanwin harus dibaca menjadi suara mim sukun ( مْ ) ketika bertemu huruf ba' ( ب ). Contoh: <span>مِنْ بَعْضِ</span></p>
                <img src="/img/kelas-4/p6/iqlab.svg" alt="Iqlab" class="h-48 mx-auto" />
                <h4 class="mt-2 font-bold text-orange-600">Idghom ( إدْغَامْ )</h4>
                <p class="text-justify">Suara huruf Nun mati dan Tanwin harus dihilangkan ketika bertemu dengan beberapa huruf berikut. Adakalanya disertai suara dengungan (ghunnah), adakalanya tanpa suara dengung (bila ghunnah).</p>
                <ol class="list-[lower-latin] pl-8">
                    <li>
                        Bighunnah (berdengung): Ketika bertemu dengan huruf: ي ن م و. Contoh: شُعُوْبًا وَّقَبَائِلَ
                    </li>
                    <li>
                        Bila ghunnah (tanpa berdengung): Ketika bertemu dengan huruf:  ل ر Contoh: غَفُوْرٌ رَّحِيْمٌ
                    </li>
                </ol>
                <img src="/img/kelas-4/p6/idghom.svg" alt="Idghom" />
                <h4 class="mt-2 font-bold text-orange-700">Ikhfa ( إخْفَاءْ )</h4>
                <p class="text-justify">Suara nun mati atau tanwin harus dibaca samar ketika bertemu dengan huruf selain yang di atas, yaitu: ت ط س ش ث ذ ف ض ظ ج ز ك ص د ق. Contoh: الْاِنْسَانَ</p>
                <img src="/img/kelas-4/p6/ikhfa.svg" alt="Ikhfa"  />
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