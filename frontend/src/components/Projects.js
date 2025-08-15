import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Grid from '@mui/material/Grid';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <section style={{ padding: '2rem' }}>
            <Grid container spacing={4}>
                {projects.map(project => (
                    <Grid item key={project.id} xs={12} sm={6} md={4}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}
