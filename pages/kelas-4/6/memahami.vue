<template>
    <div class="w-full h-full pt-10 overflow-y-auto bg-white">
        <figure class="relative">
            <h1 class="absolute left-0 right-0 bottom-0 text-green-800 text-2xl bg-white p-2 bg-opacity-80 shadow font-loveya max-auto">Memahami Pesan Pokok QS. At-Tin/95</h1>
            <img src="/img/kelas-4/p6/memahami.png" alt="Memahami QS At-Tin" class="h-32 w-full object-cover object-center" />
        </figure>
        <figure>
            <img src="/img/kelas-4/p6/peta-6-2.svg" alt="Peta konsep" class="drop-shadow-lg">
            <figcaption class="text-center text-xs -mt-4 italic text-gray-500">Peta Kegiatan Belajar</figcaption>
        </figure>
        <section class="ringkasan">
            <article class="mengartikan animate__animated animate__fadeInLeft" v-if="mode == 'mengartikan'">
                <h1 class="text-lg font-bold text-gray-700">Mengartikan QS At-Tin</h1>
                <iframe class="w-full sm:w-560 sm:mx-auto" src="https://www.youtube.com/embed/itjP4qQP5YY?si=PNGZmPtg-U029t6L" title="Mengartikan QS At-Tin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Perhatikan arti kata dalam surah At-Tin berikut!</p>
                <table class="border border-collapse border-1 border-black w-full">
                    <tr class="bg-green-200">
                        <td class="border border-black px-2 py-1 w-[50%]">Demi buah Tin</td>
                        <td class="border border-black px-2 py-1 text-right text-rtl rtl quran">
                            <p>وَالتِّينِ </p>
                        </td>
                    </tr>
                    <tr clas="bg-green-50">
                        <td class="border border-black px-2 py-1 w-[50%]">Sinai</td>
                        <td class="border border-black px-2 py-1 text-right text-rtl rtl quran">
                            <p> سِينِينَ</p>
                        </td>
                    </tr>
                    <tr class="bg-green-200">
                        <td class="border border-black px-2 py-1 w-[50%]">Negeri yang aman</td>
                        <td class="border border-black px-2 py-1 text-right text-rtl rtl quran">
                            <p>الْبَلَدِ الْأَمِينِ</p>
                        </td>
                    </tr>
                    <tr clas="bg-green-50">
                        <td class="border border-black px-2 py-1 w-[50%]">bentuk yang sebaik-baiknya</td>
                        <td class="border border-black px-2 py-1 text-right text-rtl rtl quran">
                            <p> أَحْسَنِ تَقْوِيمٍ</p>
                        </td>
                    </tr>
                    <tr class="bg-green-200">
                        <td class="border border-black px-2 py-1 w-[50%]">tempat yang serendah-rendahnya</td>
                        <td class="border border-black px-2 py-1 text-right text-rtl rtl quran">
                            <p> أَسْفَلَ سَافِلِينَ </p>
                        </td>
                    </tr>
                    <tr clas="bg-green-50">
                        <td class="border border-black px-2 py-1 w-[50%]">pahala yang tidakada putus-putusnya</td>
                        <td class="border border-black px-2 py-1 text-right text-rtl rtl quran">
                            <p>  أَجْرٌ غَيْرُ مَمْنُونٍ </p>
                        </td>
                    </tr>
                    <tr class="bg-green-200">
                        <td class="border border-black px-2 py-1 w-[50%]">maka apa yang menyebabkan (mereka) mendustakanmu</td>
                        <td class="border border-black px-2 py-1 text-right text-rtl rtl quran">
                            <p> فَمَا يُكَذِّبُكَ </p>
                        </td>
                    </tr>
                    <tr class="bg-green-50">
                        <td class="border border-black px-2 py-1 w-[50%]">hakim yang paling bijaksana</td>
                        <td class="border border-black px-2 py-1 text-right text-rtl rtl quran">
                            <p> بِأَحْكَمِ الْحَاكِمِينَ </p>
                        </td>
                    </tr>
                </table>
                

            </article>
            <div class="hafalan w-full my-4">
                <h1 class="text-center bg-green-500 py-3 text-amber-200 font-bold tracking-wide text-lg">Klik ayat untuk menampilkan artinya</h1>
                <div v-for="(ayah, a) in ayahs" :key="a" >
                    <div @click="toggleArti" class="quran my-2  py-1 px-3  border-b">
                        <p class="text-rtl rtl text-right">
                            {{ ayah.text }} ({{ a+1 }})
                        </p>
                        <div class="arti hidden animate__animated animate__fadeIn">
                            {{ artis[a] }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="latihan w-full my-4  p-2 bg-green-500 text-white">
                <p class="my-2 font-bold tracking-wide text-justify">Ayo latihan! Klik ayat dibawah dan pilih artinya!</p>
                <div class="quran bg-green-600 p-3 shadow" @click="guessArti">
                    <p class=" text-yellow-300" style="font-size: 2em;text-align: center;">{{ ayahs[ayah].text }}</p>
                </div>
                <div class="arti fixed z-50 top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-80 backdrop-blur-sm p-4 flex flex-column justify-center items-center" v-if="showArti">
                    <div class="quran">
                        <p class="text-center" style="border: 1px solid yellow; color: yellow; font-size: 1.5em;letter-spacing: .08em;padding:2px;margin-bottom: 10px;">{{ ayahs[ayah].text }}</p>
                        <button v-for="(arti, a) in artis" :key="a" class="p-2 text-left bg-green-200 text-gray-800 my-1 rounded shadow hover:bg-green-500 active:bg-sky-400" @click="checkArti(a)">{{ arti }}</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="evaluasi mb-20">
            t
            <!-- <LazyQuizKelas4Lesson6Subtwo /> -->
        </section>
    </div>

</template>

<script setup>
const mode = ref('mengartikan');
const ayah = ref(0);
const ayahs = ref([
    {
        text: ' وَالتِّينِ وَالزَّيْتُونِ ',
        arti: 0
    },
    {
        text: 'وَطُورِ سِينِينَ ',
        arti: 1
    },
    {
        text: ' وَهَٰذَا الْبَلَدِ الْأَمِينِ ',
        arti: 2
    },
    {
        text: ' لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ ',
        arti: 3
    },
    {
        text: ' ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ ',
        arti: 4
    },
    {
        text: ' إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ ',
        arti: 5
    },
    {
        text: ' فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ ',
        arti: 6
    },
    {
        text: ' أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ ',
        arti: 7
    },
])
const showArti = ref(false)
const artis = ref([
    'Demi (buah) Tin dan (buah) Zaitun',
    'demi gunung Sinai',
    'dan demi negeri (Makkah) yang aman ini',
    'Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya',
    'kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya',
    'kecuali orang-orang yang beriman dan mengerjakan kebajikan; maka mereka akan mendapat pahala yang tidak ada putusnya',
    'Maka apa yang menyebabkan (mereka) mendustakanmu (tentang) hari pembalasan setelah (adanya keterangan-keterangan) itu?',
    'Bukankah Allah hakim yang paling adil?'
])

const randomAyah = () => {
    ayah.value = Math.floor(Math.random() * 8 )
}

const guessArti = () => {
    showArti.value = true
}

const checkArti = (answer) => {
    setTimeout(()=>{
        if(answer == ayahs.value[ayah.value].arti) {
            
                alert('Betul')
                randomAyah()
                showArti.value = false
        } else {
            alert('Salah')
        }
    }, 500)
}

const toggleArti = (e) => {
    let parent = e.target.closest(".quran")
    let arti = parent.querySelector(".arti")
    // console.log(parent)
    arti.classList.toggle("hidden")
} 

onMounted(() => {
    randomAyah()
})
</script>