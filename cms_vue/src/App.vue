<script setup>
import { ref, onMounted } from "vue";
import UserCard from "@/components/UserCard.vue";

const people = ref([]);

const api =
  "https://fakerapi.it/api/v2/persons?_quantity=10&_locale=en_US&_seed=42";

async function load() {
  await fetch(api)
    .then((response) => response.json())
    .then((j) => {
      people.value = (j.data || []).map((p, i) => ({
        ...p,

        image: `https://picsum.photos/1000/3000?rand=${Math.random().toString(36)}`,
      }));
    })
    .catch((e) => console.error(e));
}
load();
</script>

<template>
  <main>
    <h1>HTL Dornbirn 5bWI</h1>
    <div class="container">
      <UserCard
        v-for="(person, index) in people"
        :key="index"
        :person="person"
      ></UserCard>
    </div>
  </main>
</template>

<style scoped>
h1{
  text-align: right;
  font-size: 4rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 3rem 5rem 3rem 0rem;
}
.container {
  align-items: center;
  justify-content: center;
  width: 80vw;
  margin-left: 10vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

</style>
