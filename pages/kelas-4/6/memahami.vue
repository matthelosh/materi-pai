<template>
    <div class="w-full h-full pt-10 overflow-y-auto bg-white pb-24">
        <figure class="relative">
            <h1 class="absolute left-0 right-0 bottom-0 text-green-800 text-2xl bg-white p-2 bg-opacity-80 shadow font-loveya max-auto">Memahami Pesan Pokok QS. At-Tin/95</h1>
            <img src="/img/kelas-4/p6/memahami.png" alt="Memahami QS At-Tin" class="h-32 w-full object-cover object-center" />
        </figure>
        <figure>
            <img src="/img/kelas-4/p6/peta-6-2.svg" alt="Peta konsep" class="drop-shadow-lg">
            <figcaption class="text-center text-xs -mt-4 italic text-gray-500">Peta Kegiatan Belajar</figcaption>
        </figure>
        <div class="w-full flex gap-2 mt-8 mb-4 justify-center">
            <button class="rounded shadow-lg active:shadow text-white px-2 py-1 uppercase bg-red-500" @click="mode = 'mengartikan'">Mengartikan</button>
            <button class="rounded shadow-lg active:shadow text-white px-2 py-1 uppercase bg-orange-500" @click="mode = 'informasi'">Informasi</button>
            <button class="rounded shadow-lg active:shadow text-white px-2 py-1 uppercase bg-yellow-500" @click="mode = 'penjelasan'">Penjelasan</button>
        </div>
        <section class="ringkasan" v-if="mode == 'mengartikan'">
            <article class="mengartikan animate__animated animate__fadeInLeft" >
                <h1 class="text-lg font-bold text-gray-700">Mengartikan QS At-Tin</h1>
                <iframe class="w-[90%] h-[300px] sm:w-[600px] mx-auto" src="https://www.youtube.com/embed/itjP4qQP5YY?si=PNGZmPtg-U029t6L" title="Mengartikan QS At-Tin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Perhatikan arti kata dalam surah At-Tin berikut!</p>
                <table class="border border-collapse border-1 border-black w-full">
                    <tbody>
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
                    </tbody>
                </table>
                

            </article>
            <div class="hafalan w-full my-4">
                <h1 class="text-center bg-green-500 py-3 text-amber-200 font-bold tracking-wide text-lg">Klik ayat untuk menampilkan artinya</h1>
                <div v-for="(ayah, a) in ayahs" :key="a" >
                    <div @click="toggleArti($event, a)" class="quran my-2  py-1 px-3  border-b">
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
        <section class="infromasi mb-20 animate__animated animate__slideInLeft p-2" v-if="mode == 'informasi'">
            <h1 class="font-bold text-slate-700">Informasi Surah At-Tin</h1>
            <img src="/img/kelas-4/p6/info-attin.svg" alt="Informasi Surat At-Tin" />
            
        </section>
        <section class="penjelasan mb-20 animate__animated animate__slideInLeft p-3" v-if="mode == 'penjelasan'">
            <h1 class="font-bold text-slate-700">Memahami Pesan QS. At-Tin</h1>
            <p class="my-2 text-justify">Apa arti at-Tin? Mengapa disebut surah at-Tin?</p>
            <p class="my-2 text-justify">Surah at-Tin berada pada urutan nomor 95 dari 114 surat di dalam Al-Quran. Surah at-Tin terdiri dari 8 ayat. Surah at-Tin termasuk golongan surah Makkiyah karena diturunkan sebelum Nabi Muhammad saw berhijrah ke kota Madinah.</p>
            <p class="my-2 text-justify">Nama surah ini diambil dari ayat yang pertama "wa ar-Tin" yan gberarti buah Tin.</p>
            <p class="my-2 text-justify">Apa pesan pokok yang terkandung di dalam surah at-Tin? Mengapa surah ini diawali dengan sumpah atas nama buah tin dan zaitun? Mengapa Allah swt menjadikan manusia dalam bentuk sebaik-baiknya? Apa kelebihan manusia dibandingkan makhluk yang lain? Kenapa manusia yang sempurna itu bisa terjerumus ke tempat yan gserendah-rendahnya?</p>
            <p class="my-2 text-justify">Mari kita simak penjelasannya di bawah ini.</p>
            
            <h3 class="font-bold text-sky-500">Ayat 1-3</h3>
            <h3 class="quran">
                <p class="text-rtl ">
                    {{ ayahs[0].text }}<span class="ayah">&#1633</span> 
                    &nbsp;{{ ayahs[1].text }}<span class="ayah">&#1634</span>
                    &nbsp;{{ ayahs[2].text }}<span class="ayah">&#1635</span>
                </p>
            </h3>
            <p class="text-justify italic">(1) {{ artis[0] }}, (2) {{ artis[1] }}, (3) {{ artis[2] }}</p>
            <p class="text-justify my-2">Buah Tin dan Zaitun banyak tumbuh di Syam (sekarang negara Palestina, Suriah, Yordania dan Lebanon) dan Baitul Maqdis (Yerusalem Palestina), tempatpara nabi diutus, antara lain Nabi Isa a.s. Gunung Sinai di Mesir adalah tempat Nabi Musa a.s. bermunajat. Sedangkan Makkah adalah tempat kelahiran dan pengutusan Nabi Muhammad saw. Ketiga nabi ini memiliki misi yang sama, yaitu mengajak manusia menuju tauhid atau mengesakan Allah.</p>
            <h1 class="mt-3">Perhatikan Ilustrasi di Bawah ini.</h1>
            <div class="flex flex-wrap justify-center gap-2">
                <figure class="my-3">
                    <img src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/02/15032226/Catat-Ini-Manfaat-Buah-Tin-yang-Sayang-untuk-Dilewatkan-01.jpg.webp" alt="Buah Tin" class="w-[150px] mx-auto rounded-full aspect-square object-cover border-4 border-slate-300 shadow-lg">
                    <figcaption class="text-sm italic text-gray-500 text-center">Buah Tin</figcaption>
                </figure>
                <figure class="my-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBP-K0yk29URfM3DoFm9D_TSyJBzNnDmWsjq8DxtkmrzURmhXyX60jzl80QQIC1djejU&usqp=CAU" alt="Buah Zaitun" class="w-[150px] mx-auto rounded-full aspect-square object-cover border-4 border-slate-300 shadow-lg">
                    <figcaption class="text-sm italic text-gray-500 text-center">Buah Zaitun</figcaption>
                </figure>
                <figure class="my-3">
                    <img src="https://3.bp.blogspot.com/-h1JZCYaEUPo/VGdpfovuhAI/AAAAAAAAAjA/URo8Q_BeKek/s1600/b.m.jpg" alt="Baitul Maqdis" class="w-[150px] mx-auto rounded-full aspect-square object-cover border-4 border-slate-300 shadow-lg">
                    <figcaption class="text-sm italic text-gray-500 text-center">Baitul Maqdis</figcaption>
                </figure>
                <figure class="my-3">
                    <img src="https://static.republika.co.id/uploads/images/inpicture_slide/gunung-sinai-_120618112753-360.jpg" alt="Gunung Sinai" class="w-[150px] mx-auto rounded-full aspect-square object-cover border-4 border-slate-300 shadow-lg">
                    <figcaption class="text-sm italic text-gray-500 text-center">Gunung Sinai</figcaption>
                </figure>
                <figure class="my-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46wY--_XnYiP4YbQAdKcj8rITu9yblmf9gz1QVbSiY5XQ6-9-2-4a5iQ7hulLjfOJQu8&usqp=CAU" alt="Kota Mekah" class="w-[200px] mx-auto rounded-full aspect-square object-cover border-4 border-slate-300 shadow-lg">
                    <figcaption class="text-sm italic text-gray-500 text-center">Kota Mekah</figcaption>
                </figure>
            </div>

            <h3 class="font-bold text-sky-500">Ayat 4</h3>
            <h3 class="quran">
                <p class="text-rtl ">
                    {{ ayahs[3].text }}<span class="ayah">&#1636</span> 
                </p>
            </h3>
            <p class="text-justify italic">(4) {{ artis[3] }}</p>
            <p class="my-2 text-justify">Allah telah menciptakan manusia dalam bentuk yang sebaik-baiknya, jauh lebih sempurna daripada hewan. Allah juga membekali manusia dengan akal dan sifat-sifat yang unggul. Dengan kelebihan-kelebihan itulah Allah memberikan amanat kepada manusia sebagai pemimpin di bumi. Manusia sebagai pemimpin bertugas untuk melestarikan bumi.</p>

            <h3 class="font-bold text-sky-500">Ayat 5</h3>
            <h3 class="quran">
                <p class="text-rtl ">
                    {{ ayahs[4].text }}<span class="ayah">&#1637</span> 
                </p>
            </h3>
            <p class="text-justify italic">(5) {{ artis[4] }}</p>
            <p class="my-2 text-justify">Bila manusia durhaka kepada Allah dan tidak menaati utusan-Nya, maka akan dikembalikan ke tempat yang serendah-rendahnya, yaitu ke neraka. Tubuh sempurna yang dilengkapi akal namun durhaka, tidak akan menyelamatkan manusia dari azab Allah.</p>

            <h3 class="font-bold text-sky-500">Ayat 6</h3>
            <h3 class="quran">
                <p class="text-rtl ">
                    {{ ayahs[5].text }}<span class="ayah">&#1638</span> 
                </p>
            </h3>
            <p class="text-justify italic">(6) {{ artis[5] }}</p>
            <p class="my-2 text-justify">Orang-orang yang benar-benar beriman dan mengerjakan kebajikan akan dibalas dengan pahala yang tidak ada putus-putusnya dan diselamatkan dari neraka.</p>
            <p class="my-2 text-justify">Coba kalian sebutkan, apa sajakah ciri-ciri orang beriman? Apa sajakah contoh kebajikan?</p>

            <h3 class="font-bold text-sky-500">Ayat 7</h3>
            <h3 class="quran">
                <p class="text-rtl ">
                    {{ ayahs[6].text }}<span class="ayah">&#1639</span> 
                </p>
            </h3>
            <p class="text-justify italic">(7) {{ artis[6] }}</p>
            <p class="my-2 text-justify">Allah menciptakanmu dengan bentuk yang sempurna. Melewati berbagai tahap dari bayi, anak, kemudian akan menjadi remaja, dewasa, tua, hingga meninggal. Itu merupakan bukti yang paling jelas tentang kekuasaan Allah. Dia Mahakuasa untuk membangkitkanmu dari kematian. Maka, apa yang menyebabkan mereka mendustakanmu tentang hari pembalasan yaitu hari kiamat setelah adanya keterangan-keterangan yang gamblang itu?</p>
            <div class="flex flex-wrap justify-center gap-2">
                <figure class="my-3">
                    <img src="https://storage.nu.or.id/storage/post/16_9/mid/8865_1696584334.webp" alt="Musim Kemarau" class="w-[150px] mx-auto rounded-full aspect-square object-cover border-4 border-slate-300 shadow-lg">
                    <figcaption class="text-sm italic text-gray-500 text-center">Musim Kemarau</figcaption>
                </figure>
                <figure class="my-3">
                    <img src="https://storage.nu.or.id/storage/post/16_9/mid/1578359127.jpg" alt="Musim Hujan" class="w-[150px] mx-auto rounded-full aspect-square object-cover border-4 border-slate-300 shadow-lg">
                    <figcaption class="text-sm italic text-gray-500 text-center">Musim hujan</figcaption>
                </figure>
            </div>
            <p class="my-2 text-justify">Apa yang terjadi jika musim kemarau? Ya, tanah terlihat retak. Daun berguguran. Tumbuhan kering. Terlihat seperti mati, bukan?</p>
            <p class="my-2 text-justify">Apa yang terjadi jika musim hujan? Ya, di sekeliling kita terlihat hijau. Rumput dan pohon tumbuh. Padahal sebelumnya terlihat seperti mati. Begitulah perumpamaan hari kebangkitan. “Dan yang menurunkan air dari langit menurut ukuran (yang diperlukan) lalu dengan air itu Kami hidupkan negeri yang mati (tandus). Seperti itulah kamu akan dikeluarkan (dari kubur).” (Q.S. Az-Zukhruf/43:11)</p>
            
            <h3 class="font-bold text-sky-500">Ayat 8</h3>
            <h3 class="quran">
                <p class="text-rtl ">
                    {{ ayahs[7].text }}<span class="ayah">&#1640</span> 
                </p>
            </h3>
            <p class="text-justify italic">(8) {{ artis[7] }}</p>
            <p class="my-2 text-justify">Jangan kaukira Allah menciptakan manusia secara sia-sia. Allah telah menurunkan aturan syariat. Dia akan memberi putusan dengan adil yaitu memberi pahala kepada orang yang taat dan menghukum orang yang bersalah.</p>
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

const toggleArti = (e, index) => {
    let parent = e.target.closest(".quran")
    let arti = parent.querySelector(".arti")
    // console.log(parent)
    arti.classList.toggle("hidden");
    let sound = new Audio(`/sounds/kelas-4/p6/arti-attin-${index+1}.mp3`)
    if(!arti.classList.contains("hidden")) {sound.play()} else {sound.pause; sound.currentTime = 0;};
    
} 

onMounted(() => {
    randomAyah()
})
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