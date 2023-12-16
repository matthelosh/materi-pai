<template>
    <div>
      <h1>Quiz Memasangkan Kata dan Gambar</h1>
      <div v-if="!quizOver">
        <div v-for="(question, index) in questions" :key="index">
          <p>{{ question.word }}</p>
          <img :src="question.image" alt="Image" style="max-width: 200px; max-height: 200px;">
          <input v-model="userAnswers[index]" @change="checkAnswer(index)" />
        </div>
        <button @click="submitQuiz">Submit</button>
      </div>
      <div v-else>
        <h2>Hasil Quiz</h2>
        <p>{{ score }} dari {{ questions.length }} pertanyaan benar!</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const questions = ref([
    { word: 'Zaitun', image: '/img/kelas-4/p6/zaitun.jpg', answer: 'A' },
    { word: 'Tin', image: '/img/kelas-4/p6/tin.jpg', answer: 'B' },
    // Tambahkan pertanyaan dan gambar lainnya di sini
  ]);
  
  const userAnswers = ref(Array(questions.value.length).fill('')); // Inisialisasi jawaban pengguna
  const quizOver = ref(false);
  const score = ref(0);
  
  const checkAnswer = (index) => {
    // Fungsi untuk memeriksa jawaban setiap pertanyaan
    // Disesuaikan sesuai dengan aturan penilaian quiz Anda
  };
  
  const submitQuiz = () => {
    // Fungsi untuk menilai jawaban dan menampilkan hasil quiz
    // Anda dapat menyesuaikan logika penilaian sesuai dengan kebutuhan
    quizOver.value = true;
    score.value = calculateScore();
  };
  
  const calculateScore = () => {
    // Fungsi untuk menghitung skor quiz
    // Sesuaikan dengan logika penilaian Anda
    let correctAnswers = 0;
    for (let i = 0; i < questions.value.length; i++) {
      if (userAnswers.value[i].toUpperCase() === questions.value[i].answer.toUpperCase()) {
        correctAnswers++;
      }
    }
    return correctAnswers;
  };
  </script>
  