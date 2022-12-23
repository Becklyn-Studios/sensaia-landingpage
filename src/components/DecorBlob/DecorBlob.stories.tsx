import { DecorBlob } from "./DecorBlob";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: DecorBlob,
    title: "Shared/DecorBlob",
} as ComponentMeta<typeof DecorBlob>;

const Template: ComponentStory<typeof DecorBlob> = () => <DecorBlob />;

export const Default = Template.bind({});
