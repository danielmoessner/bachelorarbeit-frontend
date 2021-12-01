<template>
  <ul>
    <li v-for="book in books" :key="book.name">{{ book.name }}</li>
  </ul>
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
    };
  },
  mounted() {
    $axios.get("").then((response) => (this.books = response.data));
    // this.books = [
    //   {
    //     name: "1984",
    //     author: "George Orwell",
    //     published: 1949,
    //   },
    //   {
    //     name: "The Gulag Archipelago",
    //     author: "Aleksandr Solzhenitsyn",
    //     published: 2018,
    //   },
    // ];
  },
});
</script>
