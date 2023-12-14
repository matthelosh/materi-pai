<template>
  <div class="relative w-screen w-max-screen h-[100vh] h-max-screen bg-[#cce9ff] overflow-y-auto overflow-x-hidden">
    <div class="navbar fixed top-0 z-10 w-full bg-green-600 shadow-lg h-10 flex items-center justify-center gap-4 text-white">
      <NuxtLink to="/">
        <Icon name="mdi:home" size="32" />
      </NuxtLink>
      <NuxtLink to="/about">
        <Icon name="mdi:information" size="32" />
      </NuxtLink>
    </div>
    <NuxtPage />
    <div class="w-full flex justify-center fixed bottom-2 z-30">
        <button class="text-center mx-auto bg-yellow-500 rounded-full p-3" @click="$router.back()">
            <Icon name="mdi:arrow-u-left-top" size="32" class="text-white" />
        </button>
        <NuxtLink class="text-center mx-auto bg-green-500 rounded-full p-3" to="/menu">
            <Icon name="mdi:menu" size="32" class="text-white" />
        </NuxtLink>
        <button class="text-center mx-auto bg-yellow-500 rounded-full p-3" @click="$router.forward()">
            <Icon name="mdi:arrow-u-right-top" size="32" class="text-white" />
        </button>
    </div>
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