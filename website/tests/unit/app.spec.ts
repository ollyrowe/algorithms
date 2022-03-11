import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

import Header from "@/components/site/header/Header.vue";
import Body from "@/components/site/body/Body.vue";
import Footer from "@/components/site/footer/Footer.vue";

describe("App.vue", () => {
  it("renders the header, body and footer components", () => {
    const wrapper = shallowMount(App);

    const header = wrapper.findComponent(Header);
    const body = wrapper.findComponent(Body);
    const footer = wrapper.findComponent(Footer);

    expect(header.exists()).toBe(true);
    expect(body.exists()).toBe(true);
    expect(footer.exists()).toBe(true);
  });
});
