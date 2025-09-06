// src/components/SkillCategoryCloud.js
import React from "react";
import { Grid, Paper, Box, CircularProgress, Typography, Tooltip } from "@mui/material";

const SkillCategoryCloud = ({ title, skills }) => (
    <Box sx={{
        backgroundColor: "#2E3A50",
        borderRadius: "32px",
        p: 4,
        mb: 6,
        boxShadow: 5,
    }}>
        <Typography variant="h5" sx={{ mb: 3, color: "#7DCFDD" }}>
            {title}
        </Typography>
        <Grid container spacing={3} justifyContent="center">
            {skills.map((skill, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                    <Tooltip title={skill.description || "Keine Beschreibung"} arrow>
                        <Paper
                            elevation={6}
                            sx={{
                                p: 3,
                                backgroundColor: "#7C8996",
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "16px",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                cursor: "pointer",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: "0 10px 30px rgba(124, 255, 255, 0.4)"
                                },
                            }}
                        >
                            {/* Background Icon */}
                            <Box sx={{
                                position: "absolute",
                                top: "55%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                zIndex: 0,
                            }}>
                                {skill.icon}
                            </Box>

                            {/* Circular Progress */}
                            <Box sx={{ position: "relative", display: "inline-flex", zIndex: 1 }}>
                                <CircularProgress
                                    variant="determinate"
                                    value={skill.level}
                                    size={100}
                                    thickness={4}
                                    sx={{ color: skill.color }}
                                />
                                <Box
                                    sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: "absolute",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography variant="h6" component="div" color="white">
                                        {`${skill.level}%`}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Title */}
                            <Typography variant="h6" sx={{ mt: 2, zIndex: 1, position: "relative", color: "#fff" }}>
                                {skill.name}
                            </Typography>
                        </Paper>
                    </Tooltip>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default SkillCategoryCloud;
