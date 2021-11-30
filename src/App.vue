<template>
  <BooksList />
</template>

<script lang="ts">
import BooksList from "@/components/BooksList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BooksList,
  },
});
</script>
