import { mount } from "@vue/test-utils";
import BooksList from "@/components/BooksList.vue";
import $axios from "@/axios";
import MockAdapter from "axios-mock-adapter";

test("books render properly", (done) => {
  if (process.env.VITE_MOCK) {
    const mock = new MockAdapter($axios);

    const books = [
      {
        name: "1984",
        author: "George Orwell",
        published: 1949,
      },
      {
        name: "The Gulag Archipelago",
        author: "Aleksandr Solzhenitsyn",
        published: 2018,
      },
    ];

    mock.onGet("").reply(200, books);
  }

  const component = mount(BooksList, {});

  setTimeout(() => {
    expect(component.text()).toContain("1984");
    expect(component.text()).toContain("The Gulag Archipelago");
    done();
  }, 1000);
});
