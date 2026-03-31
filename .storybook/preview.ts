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
    },
    decorators: [
        // Questo decorator aggiunge una classe (es. .light o .dark) 
        // all'elemento che avvolge la tua storia in Storybook.
        withThemeByClassName({
            themes: {
                light: "light-theme", // La classe CSS per il tema chiaro
                dark: "dark-theme",   // La classe CSS per il tema scuro
            },
            defaultTheme: "light",
            parentSelector: "body",
        }),
    ],
};

export default preview;