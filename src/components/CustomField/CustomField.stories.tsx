import { CustomField } from "./CustomField";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: CustomField,
    title: "Shared/Custom Field",
} as ComponentMeta<typeof CustomField>;

const Template: ComponentStory<typeof CustomField> = args => (
    <CustomField {...args}/>
);

export const Default = Template.bind({});
