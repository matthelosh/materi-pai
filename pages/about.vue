<template>
    <div class="w-full h-screen max-h-screen overflow-hidden pt-14 p-4 relative bg-white">
        <div class="article w-full animate__animated animate__fadeInUp sm:text-xl sm:w-[40%]">
            <h1 class="text-xl font-bold text-slate-600 sm:text-4xl">Tentang Aplikasi</h1>
            <p class="my-2 text-justify sm:text-left sm:leading-10">
                Aplikasi ini dibuat dalam rangka mengikuti lomba membuat media pembelajaran berbasis ICT untuk GPAI TK/SD/SMP/SMA/SLB pada HAB Kemenag ke 78 Kantor Wilayah Kementerian Agama Provinsi Jawa Timur. 
            </p>
            <p class="my-2 text-justify sm:text-left sm:leading-10">
                Dikembangkan menggunakan teknologi berbasis web, menggunakan Nuxtjs 3 sebagai basis backend dan vue 3 untuk frontend.
            </p>
        </div>
        <div class="article w-full animate__animated animate__fadeInUp relative">
            <h1 class="text-xl font-bold text-slate-600 sm:text-4xl">Tentang Pengembang</h1>
            <img src="/img/matt.png" alt="Author" class="w-[100px] absolute -left-8 sm:w-auto animate__animated animate__fadeInLeft">
            <div class="text ml-[80px] sm:ml-[250px] my-4 sm:text-xl sm:w-[30%]">
                <p class="my-2 sm:leading-10">Salam! Nama saya <span class="font-bold text-green-800">Muhammad Soleh, S. Pd.I</span>. Saya berasal dari desa Petungsewu Kecamatan Wagir Kabupaten Malang. Bertugas menjadi GPAI di <span class="font-bold text-green-800">SD Negeri 1 Bedalisodo</span> Kecamatan Wagir.</p>
                <p class="my-2 sm:leading-10">Saya memiliki minat untuk belajar pengembangan aplikasi berbasis web, khususnya untuk dunia pendidikan.</p>
                <div class="w-full flex gap-3">
                    <a href="mailto:matthelosh@gmail.com">
                        <Icon name="mdi:gmail" size="32" class="text-red-600" />
                    </a>
                    <a href="https://matsoleh.my.id" target="_blank" class="text-sky-500">
                        <Icon name="mdi:web" size="32" />
                    </a>
                    <a href="https://wa.me/6285173303784" target="_blank">
                        <Icon name="mdi:whatsapp" size="32" class="text-green-500" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>