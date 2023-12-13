<template>
  <div class="relative w-screen w-max-screen h-screen h-max-screen bg-[#cce9ff] overflow-y-auto overflow-x-hidden">
    <div class="navbar fixed top-0 z-10 w-full bg-slate-400 h-10 flex items-center justify-center gap-4 text-white">
      <NuxtLink to="/">
        Beranda
      </NuxtLink>
      <NuxtLink to="/about">
        Tentang Aplikasi
      </NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from{
  opacity: 0;
  transform: translateX(-100px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>