import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Home from '@/views/HomeView.vue';

describe('Footer', () => {
  it('renders text content', () => {
    const wrapper = mount(Home, {});
    expect(wrapper.text()).toContain('Welcome!');
  });
  it('renders image content', () => {
    const wrapper = mount(Home, {});
    const img = wrapper.find('[class="family-photo"]');
    expect(img.isVisible()).toBe(true);
  });
});
