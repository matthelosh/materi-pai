<template>
    <div class="relative min-h-screen flex items-center justify-center">
        <div class="decoration w-full absolute h-full">
            <img src="/img/awan-1.svg" alt="Pohon Warna Warni 1" class="absolute right-[30%] top-0">
            <img src="/img/taman.svg" alt="Taman" class="absolute bottom-0">
            <img src="/img/masjid.svg" alt="Masjid" class="absolute right-[30%] -bottom-20">
            <img src="/img/santri.svg" alt="Mengaji" class="absolute -right-40 bottom-0">
        </div>
        <section class="main relative text-center">
            <h1 class="text-center text-xl font-bold uppercase text-gray-600 drop-shadow-md">Pilih Kelas Kamu</h1>
                
                <NuxtLink
                    v-for="(kelas,i) in kelases"
                    :key="i"
                    class="animate__animated animate__flipInX p-4 flex m-4 justify-center text-white font-loveya text-xl tracking-wider font-bold rounded-xl shadow hover:shadow-xl hover:-translate-y-[5px] transition-all border-4 border-white"
                    :to="kelas.url"
                    :style="`background: ${kelas.bg}`"
                >
                    {{ kelas.label }}
                </NuxtLink>
        </section>
    </div>
</template>

<script setup>
const num = ref(0)
const kelases = ref([
    {
        id: 1,
        label: 'Kelas I (SATU)',
        url: '/kelas-1',
        bg: '#FF6D60'
    },
    {
        id: 2,
        label: 'Kelas II (DUA)',
        url: '/kelas-2',
        bg: '#FF6D60'
    },
    {
        id: 3,
        label: 'Kelas III (TIGA)',
        url: '/kelas-3',
        bg: '#F7D060'
    },
    {
        id: 4,
        label: 'Kelas IV (EMPAT)',
        url: '/kelas-4',
        bg: '#F7D060'
    },
    {
        id: 5,
        label: 'Kelas V (LIMA)',
        url: '/kelas-5',
        bg: '#98D8AA'
    },
    {
        id: 6,
        label: 'Kelas VI (ENAM)',
        url: '/kelas-6',
        bg: '#98D8AA'
    },
])
onMounted(() => {

})
</script>

<style>
.fade-in-enter-active {
  transition: all 0.5s ease;
}

.fade-in-leave-active {
  transition: all 0.5s ease;
}

.fade-in-enter, .fade-in-leave-to {
    transform: translateX(-100px);
  opacity: 0;
}
</style>