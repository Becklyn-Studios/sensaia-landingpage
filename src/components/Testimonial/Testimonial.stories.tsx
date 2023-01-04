import { Testimonial } from "./Testimonial";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Testimonial,
    title: "Shared/Testimonial",
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = () => (
    <Testimonial comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sunt a commodi architecto cupiditate voluptates molestiae accusamus libero, consequuntur! Eos fuga quisquam quae aperiam harum, tempora asperiores expedita eius doloribus!" author="Lorem Dolor"/>
);

export const Default = Template.bind({});
