<template>
  <div class="card">
    <img class="card__img" :src="person.image" :alt="fullName" loading="lazy" />
    <h2 class="card__name">{{ fullName }}</h2>
    <p class="card__phone">{{ person.phone }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
});

const fullName = computed(() => {
  const first = props.person.firstname ?? "";
  const last = props.person.lastname ?? "";
  return `${first} ${last}`.trim();
});
</script>

<style scoped>
.card {
  background-color: rgba(54, 54, 54);
  border: 2px rgb(73, 73, 73) solid;
  border-radius: 10px;
  padding: 5px;
  transition-duration: 0.25s;
}
img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card:hover {
  transform: scale(1.05);
  transform:perspective();
  box-shadow: 0 0px 12px rgba(129, 163, 172, 0.35);
  background-color: rgb(63, 73, 75);
}
</style>
