// src/components/Skills.js
import React from "react";
import { Box } from "@mui/material";
import { skillData } from "../data/skillData";
import SkillCategoryCloud from "./SkillCategoryCloud";

export default function Skills() {
    const categories = {
        Frontend: [],
        Backend: [],
        Andere: [],
    };

    skillData.forEach((skill) => {
        if (categories[skill.category]) {
            categories[skill.category].push(skill);
        }
    });

    return (
        <Box sx={{ py: 8, px: 2, color: "#fff", textAlign: "center" }}>
            <SkillCategoryCloud title="Frontend" skills={categories.Frontend} />
            <SkillCategoryCloud title="Backend" skills={categories.Backend} />
            <SkillCategoryCloud title="Andere Kenntnisse" skills={categories.Andere} />
        </Box>
    );
}
