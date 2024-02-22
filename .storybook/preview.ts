import type { Preview } from "@storybook/react";
import React from 'react';
import GlobalSVGProvider from '../src/assets/SVGIconProvider';
import { StoryFn } from "@storybook/react";

const withGlobalSVGProvider: StoryFn<any> = (Story) => (
  React.createElement(React.Fragment, null, 
    React.createElement(GlobalSVGProvider, null),
    React.createElement(Story, null)
  )
);
    
const preview: Preview = {
  decorators:[withGlobalSVGProvider],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
