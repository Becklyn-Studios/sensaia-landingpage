import { Text } from "./Text";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Text,
    title: "Shared/Text",
    parameters: {
        // layout: "centered",
    },
    argTypes: {
        // as: { table: { disable: true } },
        // variant: { table: { disable: true } },
        // href: { table: { disable: true } },
        // shallow: { table: { disable: true } },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text>Lorem Ipsum Dolor Sit Amet</Text>;

export const Default = Template.bind({});
