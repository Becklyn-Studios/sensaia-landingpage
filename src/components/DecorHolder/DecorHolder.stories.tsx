import { DecorHolder } from "./DecorHolder";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DecorBlob } from "../DecorBlob/DecorBlob";

export default {
    component: DecorHolder,
    title: "Shared/DecorHolder",
    parameters: {
        size: "base",
        position: "left",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["base", "big"],
        },
        position: {
            control: "select",
            options: ["left", "right"],
        },
    },
} as ComponentMeta<typeof DecorHolder>;

const Template: ComponentStory<typeof DecorHolder> = args => (
    <DecorHolder {...args}>
    	<div className="decor__bg">
    		<DecorBlob/>
    	</div>

    	<div className="decor__inner">
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusamus tempora numquam deserunt necessitatibus molestiae alias odio, debitis ipsam eligendi incidunt repudiandae dolor eaque omnis, ex similique consectetur ullam sequi, earum quis deleniti! Maxime veritatis repellendus, quia placeat suscipit ea adipisci enim aut odio numquam cum aliquid quibusdam cupiditate magnam quos et, sint dolores illum nobis perspiciatis ut, quaerat sed! Sapiente voluptatum nobis aliquid odit eum quas facere, reprehenderit omnis voluptatibus optio aliquam, cum eius laborum, necessitatibus alias. Nemo consequuntur, molestias cumque? Culpa illo maxime, veniam esse voluptatem, placeat, quidem ea quod sed ad quia impedit cupiditate at enim provident architecto dolorum autem hic! Quis doloremque sint fuga officiis eum quidem quas rem, distinctio corporis quisquam soluta asperiores atque vel. Eligendi, adipisci laudantium. Tempora dolorum odit voluptatem dignissimos rem architecto reiciendis, placeat quisquam libero eum perferendis autem numquam tenetur ratione maxime enim repellat, quas delectus dolorem animi. Maxime pariatur adipisci voluptatem libero architecto alias veniam ducimus minus sint corporis. Delectus fugit culpa commodi distinctio animi esse dolorum unde. Maiores saepe neque ipsa consectetur ad laboriosam, beatae libero blanditiis rerum veritatis quia quas quaerat esse cum voluptatem voluptatibus enim autem sapiente, labore alias facilis molestiae perspiciatis necessitatibus. Aliquid minima voluptatem ipsum dignissimos, maxime voluptatum modi quae id, minus at ut molestias quos quibusdam deserunt cupiditate ab quaerat totam blanditiis. Iure, dicta, exercitationem! Quisquam provident fuga, atque nisi vel obcaecati inventore natus. Error odio impedit, numquam aperiam reiciendis animi, minima asperiores dicta perspiciatis modi dignissimos adipisci, repudiandae tenetur enim magni deleniti. Nobis repellendus eligendi vitae, aperiam fugit excepturi nostrum velit numquam, nisi, eius culpa atque unde sit, pariatur aut nulla laboriosam iusto minus aspernatur! Recusandae maiores autem nesciunt esse aspernatur error mollitia sed obcaecati eos quisquam sapiente cum repellendus iusto ullam amet voluptatem ipsa in a ipsum, animi similique ratione, perferendis repellat.
    	</div>
    </DecorHolder>
);

export const Default = Template.bind({});
