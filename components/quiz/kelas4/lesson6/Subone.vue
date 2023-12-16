<template>
    <h1 class="font-bold text-gray-700">Soal Latihan Kelas 4 Pelajaran 6 Sub 1</h1>
    <ol class="list-decimal pl-4">
        <li v-for="(question, q) in questions" :key="q" class="butir-soal">
            <div v-html="question.text"></div>
            <div class="flex justify-between sm:justify-start sm:gap-4 flex-wrap">
                <label v-for="(option, o) in question.options"  :key="q+o" for="">
                    <input type="radio"  :value="option" :id="q+0" :name="q" v-model="answers[q]" class="mr-1">
                    {{ option }}
                </label>
                
            </div>
        </li>
    </ol>
    <div class="w-full flex justify-center py-4">
        <button class="bg-sky-500 py-2 px-4 text-white rounded shadow" @click="checkAnswer">Cek Jawaban</button>
    </div>
    <div class="overlay fixed top-0 right-0 bottom-0 left-0 bg-slate-900 bg-opacity-60  backdrop-blur-sm" v-if="answersChecked">
        <div class="dialog w-full h-full flex justify-center items-start py-4 animate__animated animate__slideInUp"  @click.self="answersChecked = !answersChecked">
            <div class="content bg-white w-[90%] p-2 rounded">
                <h1 class="text-center font-bold text-slate-700 mb-2">Lihat Hasil Latihanmu!</h1>
                <h3>Jawaban Benar: {{ hasil.benar }}</h3>
                <h3>Jawaban Salah: {{ hasil.salah }}</h3>
                <h1>Skor: {{ hasil.skor }}</h1>
                <h1 v-if="hasil.skor > 70" class="text-center font-bold text-slate-600">
                    <Icon name="mdi:trumpet" size="48" class="text-amber-500 animate__animated animate__swing" /> <br>
                    Selamat! Kamu berhasil!
                </h1>
                <h1 v-if="hasil.skor <= 70" class="text-center font-bold text-red-600">
                    <Icon name="mdi:emoticon-excited" size="48" class="text-amber-500 animate__animated animate__swing" /> <br>
                    Tetap semangat! Coba lagi!
                </h1>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const answersChecked  =ref(false);
const answers = ref([]);
const questions = ref([
    {
        text: 'Berapa macam hukum bacaan huruf Nun sukun dan tanwin?',
        options: ['1','2','3','4'],
        correct: 3
    },
    {
        text: 'Jika nun mati atau tanwin bertemu dengan huruf b, maka harus dibaca?',
        options: ['Jelas','Diganti mim mati','Samar','Hilang'],
        correct: 1
    },
    {
        text: 'Huruf hijaiyah yang jika menyandang harakat sukun atau mati dibaca memantul disebut bacaan ...',
        options: ['qalqalah','Idhar','Iqlab','Idgham'],
        correct: 0
    },
    {
        text: 'Huruf nun mati yang bertemu dengan huruf ba\' harus dibaca ...',
        options: ['Ikhfa\'','Idhar','Iqlab','Idgham'],
        correct: 2
    },
    {
        text: 'Huruf nun mati yang bertemu dengan huruf ba\' harus dibaca ...',
        options: ['Ikhfa\'','Idhar','Iqlab','Idgham'],
        correct: 2
    },
    {
        text: '<p>Putar dan dengarkan bacaan berikut dan tebak hukum bacaannya!<p><audio controls><source src="/sounds/kelas-4/p6/soal-membaca/laqod.mp3" type="audio/mpeg" /></audio>',
        options: ['Qalqalah','Idhar','Iqlab','Idgham'],
        correct: 0
    },
    {
        text: '<p>Putar dan dengarkan bacaan berikut dan tebak hukum bacaannya! <span class="text-xl font-bold tetx-rtl"> (رٌ غَيْرُ) </span><p><audio controls><source src="/sounds/kelas-4/p6/soal-membaca/ajrun-ghoiru.mp3" type="audio/mpeg" /></audio>',
        options: ['Qalqalah','Idhar','Iqlab','Idgham'],
        correct: 1
    },
])

const hasil = ref({
    benar: 0, salah: 0, skor: 0
})

const checkAnswer = () => {
    let corrects=0; let falses=0;
    let butirs = document.querySelectorAll("li.butir-soal")
    answers.value.forEach((item, index) => {
        if(item == questions.value[index].options[questions.value[index].correct]) {
            corrects+=1;
            butirs[index].style.color = 'black'
        } else {
            falses+=1;
            butirs[index].style.color = 'red'
        }
    })

    console.log(corrects, falses);
    hasil.value = { benar: corrects, salah: falses, skor: corrects/answers.value.length*100}
    
    answersChecked.value = true
}
</script>

<style scoped>
    .selected {
        background: green;
    }
</style>