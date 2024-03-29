import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '../components'

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        type: 'primary',
        label: 'Button',
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
