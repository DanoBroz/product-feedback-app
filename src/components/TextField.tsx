import { TextField as MuiTextField, type TextFieldProps } from "@mui/material"

export const TextField = (props: TextFieldProps) => {
    const { ...restProps } = props

    return (
        <MuiTextField {...restProps} />
    )
}
