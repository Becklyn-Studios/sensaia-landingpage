import { Text } from "./Text";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Text,
    title: "Shared/Text",
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = () => <Text>Lorem Ipsum Dolor Sit Amet</Text>;

export const Default = Template.bind({});
