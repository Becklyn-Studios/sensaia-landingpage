import { Addition } from "./Addition";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Addition,
    title: "Shared/Addition",
    parameters: {
        size: "base",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["base"],
        },
    },
} as ComponentMeta<typeof Addition>;

const Template: ComponentStory<typeof Addition> = args => (
    <Addition {...args}>Lorem Ipsum Dolor Sit Amet</Addition>
);

export const Default = Template.bind({});
