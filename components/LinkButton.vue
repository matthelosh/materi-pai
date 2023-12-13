
<template>
    <NuxtLink :class="`bg-${bg}-400`">
        <slot />
    </NuxtLink>
</template>
<script setup>
const bg = ref('pink');
</script>