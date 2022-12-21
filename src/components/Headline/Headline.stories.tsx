import { Headline } from "./Headline";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Headline,
    title: "Shared/Headline",
    parameters: {
        size: "large",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["xxlarge", "xlarge", "large", "medium", "small", "xsmall"],
        },
        smallDeskSize: {
            control: "select",
            options: ["xxlarge", "xlarge", "large", "medium", "small", "xsmall"],
        },
        tabletSize: {
            control: "select",
            options: ["xxlarge", "xlarge", "large", "medium", "small", "xsmall"],
        },
        mobileSize: {
            control: "select",
            options: ["xxlarge", "xlarge", "large", "medium", "small", "xsmall"],
        }
    }
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = args => (
    <Headline {...args}>Lorem Ipsum Dolor Sit Amet</Headline>
);

export const Default = Template.bind({});
