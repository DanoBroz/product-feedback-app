import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/index.css'
import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CssPriorityProvider } from '../src/providers/CssPriorityProvider'
import { muiTheme } from '../src/styles/muiTheme'

export const decorators = [
    (Story) => (
        <CssPriorityProvider>
            <CssBaseline />
            <ThemeProvider theme={muiTheme}>
                <Story />
            </ThemeProvider>
        </CssPriorityProvider>
    ),
    withThemeByDataAttribute({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'light',
        attributeName: 'data-mode',
    }),
]

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators,
}

export default preview
