import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box component="footer" sx={{ p: 2, textAlign: 'center', bgcolor: '#1f2630', mt: 'auto' }}>
            <Typography variant="body2" color="#ffffffc2">
                © {new Date().getFullYear()} — Senda Zidi
            </Typography>
        </Box>
    )
}
