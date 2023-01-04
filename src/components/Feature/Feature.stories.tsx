import { Feature } from "./Feature";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Feature,
    title: "Shared/Feature",
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = () => (
    <Feature icon="" title="Lorem ipsum dolor." text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, facere."/>
);

export const Default = Template.bind({});
