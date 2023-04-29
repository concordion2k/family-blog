import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Register from '@/views/RegisterView.vue';

describe('Register', () => {
  it('renders register container', () => {
    const wrapper = mount(Register, {});
    expect(wrapper.text()).toContain('Register');
  });

  it('renders register form', () => {
    const wrapper = mount(Register, {});
    expect(wrapper.find('[data-testid="uname"]').text()).toBe('');
    expect(wrapper.find('[data-testid="uname"]').attributes()["placeholder"]).toContain('Username');
  });
});
