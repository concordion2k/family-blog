import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer', () => {
  it('renders copyright in footer', () => {
    const wrapper = mount(Footer, {});
    expect(wrapper.text()).toContain('© Dan Douston');
  });
});
