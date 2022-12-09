import { Paragraph } from "./Paragraph";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Paragraph,
    title: "Shared/Paragraph",
    parameters: {
        size: "copyText",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["copyText"],
        },
    },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = args => (
    <Paragraph {...args}>Lorem Ipsum Dolor Sit Amet</Paragraph>
);

export const Default = Template.bind({});
