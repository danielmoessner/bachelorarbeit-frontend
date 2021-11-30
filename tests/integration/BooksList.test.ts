import { mount } from "@vue/test-utils";
import BooksList from "@/components/BooksList.vue";
import { nextTick } from "vue";

test("books render properly", async () => {
  const component = mount(BooksList, {});
  await nextTick();
  expect(component.text()).toContain("1984");
  expect(component.text()).toContain("The Gulag Archipelago");
});
