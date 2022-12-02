import { Logo } from "./Logo";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    component: Logo,
    title: "Shared/Logo",
    parameters: {
        // layout: "centered",
    },
    argTypes: {
        // as: { table: { disable: true } },
        // variant: { table: { disable: true } },
        // href: { table: { disable: true } },
        // shallow: { table: { disable: true } },
    },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />;

export const Default = Template.bind({});
