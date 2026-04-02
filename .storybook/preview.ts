import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import "../src/styles/reset.css";
import "../src/styles/typograpy.css";
import "../src/styles/variables.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        // Disabilita background automatici di Storybook
        backgrounds: {
            disable: true,
        },

        docs: {
            canvas: {
                withToolbar: true,
            },
        },
    },

    decorators: [
        withThemeByClassName({
            themes: {
                light: "light-theme",
                dark: "dark-theme",
            },
            defaultTheme: "light",
            parentSelector: "body",
        }),
    ],
};

export default preview;