import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box component="footer" sx={{ p: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 'auto' }}>
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} — Senda Zidi
            </Typography>
        </Box>
    )
}
