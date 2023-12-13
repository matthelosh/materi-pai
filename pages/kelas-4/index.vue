<template>
    <div class="relative bg-[url('/img/kelas-4/cover.png')] h-full bg-no-repeat bg-cover bg-overlay pt-10 bg-center">
        <div class="content w-full h-full bg-slate-800 backdrop-blur-sm  bg-opacity-60 flex items-center justify-center">
            <div class="main relative">
                
                <h1 class="text-2xl font-bold text-white font-loveya tracking-widest mb-6">Pembelajaran Kelas 4</h1>
                <ol>
                    <li v-for="i in 10" :key="i" class="my-3 bg-sky-600 p-2 text-center rounded-xl shadow-md">
                        <NuxtLink class="text-white font-loveya tracking-widest">Pelajaran {{ i }}</NuxtLink>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>