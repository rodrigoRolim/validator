import { mount } from "@vue/test-utils";
import CsInput from "../../src/components/CsInput";

test('render passed props', () => {
  
  const wrapper = mount(CsInput, {
    propsData: {
      label: "nome",
      error: "campo obrigatório"
    }
  });

  const small = wrapper.find('small');
  const label = wrapper.find('label');
  expect(small.text()).toContain('campo obrigatório');
  expect(label.text()).toContain('nome');
  
});