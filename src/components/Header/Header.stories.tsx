import { Header } from "./Header";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Header,
    title: "Shared/Header",
    parameters: {},
    argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});
