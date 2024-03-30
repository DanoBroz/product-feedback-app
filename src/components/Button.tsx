import { twMerge } from 'tailwind-merge'
import { MouseEvent } from 'react'
import BackIconSrc from '../assets/shared/icon-arrow-left.svg'
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'info' | 'error'
    isBackButton?: boolean
    label: string
    onClick?: (e: MouseEvent) => void
}

export const Button = (props: ButtonProps) => {
    const { type = 'primary', isBackButton, label, ...restProps } = props

    return (
        <MuiButton
            type='button'
            variant={isBackButton ? 'text' : 'contained'}
            color={type}
            className={twMerge(
                'flex items-center gap-4 rounded-[10px] px-6 py-3 text-sm font-bold capitalize transition-opacity hover:opacity-80',
                isBackButton &&
                    'bg-transparent text-Blue-neutral hover:underline hover:opacity-100 shadow-none hover:bg-transparent',
            )}
            sx={{ textTransform: 'none' }}
            {...restProps}
        >
            {isBackButton && <img src={BackIconSrc} alt="back" />}
            {label}
        </MuiButton>
    )
}
