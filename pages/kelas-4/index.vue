<template>
    <div class="relative bg-[url('/img/kelas-4/cover.png')] h-full bg-no-repeat bg-cover bg-overlay bg-center">
        <div class="content w-full h-full bg-slate-800 backdrop-blur-sm  bg-opacity-60 flex items-center justify-center">
            <div class="main relative px-4">
                
                <h1 class="text-2xl font-bold text-white font-loveya tracking-widest mb-2 text-center">Pembelajaran Kelas 4</h1>
                <ol>
                    <li v-for="(lesson, l) in lessons" :key="l" class="my-3 bg-sky-600 p-2 text-center rounded-xl shadow-md  animate__animated animate__flipInX transition-all leading-4">
                        <NuxtLink class="text-white font-loveya tracking-widest" :to="lesson.url">
                            Bab {{ l+1 }} {{ lesson.label }}
                        </NuxtLink>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
const lessons = ref([
    {
        id: 1,
        label: 'Mengkaji Q.S. Al-Hujurat/49:13 dan Hadis Tentang Keragaman',
        url: '',
    },
    {
        id: 2,
        label: 'Teladan Asmaul Husna',
        url: '',
    },
    {
        id: 3,
        label: 'Indahnya Saling Menghargai dalam Keragaman',
        url: '',
    },
    {
        id: 4,
        label: 'Menyambut Usia Baligh',
        url: '',
    },
    {
        id: 5,
        label: 'Kisah Hijrah Nabi Muhammad saw ke Madinah',
        url: '',
    },
    {
        id: 6,
        label: 'Mengkaji Q.S. At-Tin dan Hadis Tentang Silaturahmi',
        url: '/kelas-4/6/',

    },
    {
        id: 7,
        label: 'Beriman Kepada Rasul-Rasul Allah',
        url: '',
    },
    {
        id: 8,
        label: 'Aku Anak Saleh',
        url: '',
    },
    {
        id: 9,
        label: 'Mengenal Shalat Jumat, Duha dan Tahajud',
        url: '',
    },
    {
        id: 10,
        label: 'Kisah Nabi Muhammad saw Membangun Kota Madinah',
        url: '',
    },
])
</script>