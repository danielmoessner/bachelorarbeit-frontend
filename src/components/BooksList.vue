<template>
  <div>
    <span v-if="loading">Loading...</span>
    <span v-if="error">Error</span>
    <span v-if="!loading && !error && books.length === 0">
      There are no books.
    </span>
    <ul>
      <li v-for="book in books" :key="book.name">{{ book.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import $axios from "@/axios";

interface Book {
  name: string;
  author: string;
  published: number;
}

export default defineComponent({
  data() {
    return {
      books: [] as Book[],
      loading: true,
      error: false,
    };
  },
  mounted() {
    $axios
      .get("")
      .then((response) => (this.books = response.data))
      .catch(() => (this.error = true))
      .finally(() => (this.loading = false));
  },
});
</script>
