import React from 'react';
import Grid from '@mui/material/Grid';

import lpi from '../images/badges/lpi_badge.png';
import pcep from '../images/badges/pcep_badge.png';
import scrum from '../images/badges/scrum_badge.png';

const badgesData = [
    { name: 'LPI', img: lpi },
    { name: 'SCRUM', img: scrum },
    { name: 'PCEP', img: pcep },
];

export default function Badges() {
    return (
        <section>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {badgesData.map((badge, index) => (
                        <Grid item key={index}>
                            <img
                                src={badge.img}
                                alt={badge.name}
                                style={{
                                    width: '200px',
                                    height: '100px',
                                    objectFit: 'contain',
                                    margin: '0 auto',
                                    filter: 'grayscale(100%)',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
}
