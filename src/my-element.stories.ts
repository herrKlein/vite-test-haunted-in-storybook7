// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';
import { useState, virtual } from 'haunted';

import './my-element'

const meta: Meta = {
  title: 'MyElement',
  component: 'my-element',
  // decorators: [(story) => html`${virtual(story)()}`],

};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => { 
    const [itemIndex, setItemIndex] = useState(0);

    return html`<my-element ></my-element>`
  },
};