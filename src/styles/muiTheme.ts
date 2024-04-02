import { createTheme } from '@mui/material'

export const muiTheme = createTheme({
    typography: {
        fontSize: 16,
        fontFamily: ['Jost', 'sans-serif'].join(','),
        allVariants: {
            color: '#3A4374',
        },
    },
    shape: {
        borderRadius: 6,
    },
    palette: {
        primary: {
            main: '#AD1FEA',
            contrastText: '#F2F4FE',
        },
        secondary: {
            main: '#3A4374',
            contrastText: '#F2F4FE',
        },
        info: {
            main: '#4661E6',
            contrastText: '#F2F4FE',
        },
        error: {
            main: '#D73737',
            contrastText: '#F2F4FE',
        },
    },
})
