<template>
    <h1 class="font-bold text-gray-700">Soal Latihan Kelas 4 Pelajaran 6 Sub 1</h1>
    <ol class="list-decimal pl-4">
        <li v-for="(question, q) in questions" :key="q">
            {{ question.text }}
            <div class="flex justify-between flex-wrap">
                <button class="px-4 rounded shadow hover:shadow-lg text-white my-1 py-2 bg-sky-400 hover:bg-sky-600 active:bg-sky-500" v-for="(option, o) in question.options" :key="option" @click="checkAnswer(o, question.correct)">{{ option }}</button>
            </div>
        </li>
    </ol>
</template>

<script setup>
const activeQuestion  =ref(0);
const answer = ref(null);
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
])

const checkAnswer = (option, correct) => {
    alert(option == correct)
}
</script>