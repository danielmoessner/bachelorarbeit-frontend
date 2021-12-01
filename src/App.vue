<template>
  <main>
    <BooksList />
    <p>Url: {{ url }}</p>
  </main>
</template>

<script lang="ts">
import BooksList from "@/components/BooksList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BooksList,
  },
  data() {
    return {
      url: import.meta.env.VITE_URL,
    };
  },
});
</script>
