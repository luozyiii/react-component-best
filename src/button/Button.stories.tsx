import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// 基础用法
export const Basic = () => {
  return (
    <>
      <Button>default</Button>
      <Button type="primary" style={{ marginLeft: "12px" }}>
        primary
      </Button>
      <Button type="dashed" style={{ marginLeft: "12px" }}>
        dashed
      </Button>
      <Button type="link" style={{ marginLeft: "12px" }}>
        link
      </Button>
      <Button type="text" style={{ marginLeft: "12px" }}>
        text
      </Button>
    </>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  children: "Button",
};
