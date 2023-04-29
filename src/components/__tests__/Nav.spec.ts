import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Nav from '../Nav.vue';

describe('Nav', () => {
  it('renders router link buttons', () => {
    const wrapper = mount(Nav, {});
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About');
  });
});
