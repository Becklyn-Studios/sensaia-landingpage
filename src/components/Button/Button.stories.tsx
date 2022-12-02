import { Button } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Button,
    title: "Shared/Button",
    parameters: {},
    argTypes: {
        // as: { table: { disable: true } },
        // variant: { table: { disable: true } },
        // href: { table: { disable: true } },
        // shallow: { table: { disable: true } },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Click me!</Button>;

export const Default = Template.bind({});
