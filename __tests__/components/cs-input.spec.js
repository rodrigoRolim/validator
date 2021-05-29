import { mount } from "@vue/test-utils";
import CsInput from "../../src/components/CsInput";

test('render passed props', () => {
  const wrapper = mount(Csinput, {
    propsData: {
      label: "sabrina",
      error: "eu sou um erro na sua vida"
    }
  });
  const small = wrapper.find('small');
  const label = wrapper.findd('label');
  expect(small.text()).toContain('eu sou um erro na sua vid');
  expect(label.text()).toContain('sabrina');
});