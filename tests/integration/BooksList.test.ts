import { flushPromises, mount } from "@vue/test-utils";
import BooksList from "@/components/BooksList.vue";
import $axios from "@/axios";
import MockAdapter from "axios-mock-adapter";

describe("books component", () => {
  test("renders books", async () => {
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

      const component = mount(BooksList, {});

      await flushPromises();

      expect(component.text()).toContain("1984");
      expect(component.text()).toContain("The Gulag Archipelago");
    } else {
      const component = mount(BooksList, {});

      setTimeout(() => {
        expect(component.text()).toContain("1984");
        expect(component.text()).toContain("The Gulag Archipelago");
      }, 1000);
    }
  });

  test("shows loading", () => {
    const component = mount(BooksList, {});
    expect(component.text()).toContain("Loading...");
  });

  test("shows error", async () => {
    const mock = new MockAdapter($axios);
    mock.onGet("").networkError();

    const component = mount(BooksList, {});
    await flushPromises();
    expect(component.text()).toContain("Error");
  });

  test("shows empty", async () => {
    const mock = new MockAdapter($axios);
    mock.onGet("").reply(200, []);

    const component = mount(BooksList, {});
    await flushPromises();
    expect(component.text()).toContain("There are no books.");
  });
});
