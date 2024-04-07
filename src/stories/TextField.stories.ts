import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from "../components"

const meta = {
    title: 'CommonComponents/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
    },
}

export const Secondary: Story = {
    args: {
        type: 'secondary',
        label: 'Button',
    },
}

export const Info: Story = {
    args: {
        type: 'info',
        label: 'Button',
    },
}

export const Danger: Story = {
    args: {
        type: 'error',
        label: 'Button',
    },
}

export const Back = {
    args: {
        type: 'secondary',
        label: 'go back',
        isBackButton: true,
    },
}
