<template>
    <div class="relative min-h-screen flex items-center justify-center">
        <div class="decoration">
            <img src="/img/matahari.svg" alt="Awan" class="absolute left-[60%] top-32 animate-pulse ">
            <img src="/img/awan-1.svg" alt="Awan" class="absolute left-0 top-[50px]">
            <img src="/img/gunung.svg" alt="Awan" class="absolute bottom-0 left-0 w-full">
            <img src="/img/siswa-bendera.svg" alt="Siswa Bendera" class="absolute left-[20%] bottom-0 animate-bounce w-[50%] sm:w-[10%] sm:left-[60%]">
        </div>
        <section class="main z-20">
            <h1 class="text-center text-xl font-bold uppercase text-white drop-shadow-md">
                <span class="font-loveya text-4xl tracking-wider">
                    ABI DAR
                </span>
                <br />
                <small class="text-sm font-loveya tracking-wide">(Aplikasi Belajar Interaktif dan Mandiri)</small>
            </h1>
            <div class="w-full flex justify-center py-4">
                <NuxtLink class="mx-auto text-center rounded-xl px-4 py-2 bg-sky-400 text-white font-loveya uppercase font-bold tracking-[.3em] text-lg shadow-md hover:shadow-xl transition-all hover:bg-pink-400 active:bg-pink-600 text-2xl " to="/menu">Mulai</NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
const tes = ref('Halo')
</script>

<style>
.font-loveya {
    font-family: 'Love Ya Like A Sister', cursive;
}
</style>