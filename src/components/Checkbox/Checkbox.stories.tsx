import { Checkbox } from "./Checkbox";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Checkbox,
    title: "Shared/Checkbox",
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
    <Checkbox {...args} label="Checkbox label?" />
);

export const Default = Template.bind({});
