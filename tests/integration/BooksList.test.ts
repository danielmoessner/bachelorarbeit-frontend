import { mount } from "@vue/test-utils";
import BooksList from "@/components/BooksList.vue";

test("books render properly", (done) => {
  const component = mount(BooksList, {});

  setTimeout(() => {
    expect(component.text()).toContain("1984");
    expect(component.text()).toContain("The Gulag Archipelago");
    done();
  }, 1000);
});
