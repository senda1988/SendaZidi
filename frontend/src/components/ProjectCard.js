import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ project }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {project.image && (
                <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    {project.description}
                </Typography>
                {project.tech.map((t, i) => (
                    <Typography key={i} variant="body2" sx={{ color: 'text.secondary' }}>
                        • {t}
                    </Typography>
                ))}
            </CardContent>
            <CardActions>
                <Button size="small" href={project.link} target="_blank">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
