import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

export default function Contact() {
    return (
        <section style={{ padding: '4rem 2rem', backgroundColor: '#ECECEC' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '2rem' }}>Contactez-moi</h2>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Tooltip title="GitHub">
                            <IconButton
                                component="a"
                                href="https://github.com/tonprofil"
                                target="_blank"
                                color="primary"
                            >
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="LinkedIn">
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/tonprofil"
                                target="_blank"
                                color="primary"
                            >
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Envoyer un mail">
                            <IconButton
                                component="a"
                                href="mailto:tonemail@example.com"
                                color="primary"
                            >
                                <EmailIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Télécharger CV">
                            <IconButton
                                component="a"
                                href="/images/cvSenda.pdf"
                                download
                                color="primary"
                            >
                                <DownloadIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}
