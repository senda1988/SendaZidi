import React from "react";
import { Box, Grid, Paper, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

export default function Contact() {
    return (
        <Box
            sx={{
                py: 6,
                px: 3,


            }}
        >


            <Grid container spacing={3} justifyContent="center">
                {/* LinkedIn */}
                <Grid item>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            borderRadius: "50%",
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.1)" },
                        }}
                    >
                        <IconButton
                            href="https://www.linkedin.com/in/tonprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "#0A66C2", fontSize: 40 }}
                        >
                            <LinkedInIcon fontSize="inherit" />
                        </IconButton>
                    </Paper>
                </Grid>

                {/* Gmail */}
                <Grid item>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            borderRadius: "50%",
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.1)" },
                        }}
                    >
                        <IconButton
                            href="mailto:tonemail@gmail.com"
                            sx={{ color: "#D44638", fontSize: 40 }}
                        >
                            <EmailIcon fontSize="inherit" />
                        </IconButton>
                    </Paper>
                </Grid>

                {/* GitHub */}
                <Grid item>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            borderRadius: "50%",
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.1)" },
                        }}
                    >
                        <IconButton
                            href="https://github.com/tonprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "black", fontSize: 40 }}
                        >
                            <GitHubIcon fontSize="inherit" />
                        </IconButton>
                    </Paper>
                </Grid>

                {/* Download CV */}
                <Grid item>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            borderRadius: "50%",
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.1)" },
                        }}
                    >
                        <IconButton
                            href="/cv_senda.pdf"
                            download
                            sx={{ color: "#1E40AF", fontSize: 40 }}
                        >
                            <DownloadIcon fontSize="inherit" />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
