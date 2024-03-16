<script setup>
defineProps(['type']);
const papo = ref('pasjpodaksojp')
</script>

<template>
    <div :class="[type]">
        {{ type }}
        <p>{{ papo }}</p>
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>