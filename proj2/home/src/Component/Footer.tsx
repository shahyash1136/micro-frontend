import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import { CopyAll } from '@mui/icons-material';

const Footer = () => {
    const theme = useTheme();
    console.log(theme);
    const [year, setYear] = useState<null | number>(null);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    }, [])



    return (
        <Box sx={{
            background: theme.palette.primary.main,
            minHeight: theme.mixins.toolbar,
            color: theme.palette.common.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Container maxWidth="xl">
                <Typography sx={{ textAlign: 'center' }}>Copyright {String.fromCodePoint(0x00A9)} {year} All Rights Reserved</Typography>
            </Container>
        </Box>
    )
}

export default Footer