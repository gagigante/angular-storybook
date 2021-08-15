import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import Button from '../button/button.component';
import Header from '../header/header.component';
import Page from '../page/page.component';

import * as HeaderStories from '../header/header.stories';

export default {
  title: 'Example/Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [Button, Header],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
