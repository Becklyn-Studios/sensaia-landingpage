import { CustomSelect } from "./CustomSelect";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: CustomSelect,
    title: "Shared/Custom Select",
    parameters: {
        size: "base",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["base"],
        },
    },
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = args => (
    <CustomSelect {...args} list={["1", "2", "3"]} />
);

export const Default = Template.bind({});
