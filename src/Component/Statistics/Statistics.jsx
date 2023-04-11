import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';


const Statistics = () => {
    const assignment = [
        { id: 1, name: "new-year-new-me-main", mark: 60 },
        { id: 2, name: "g3-architects", mark: 60 },
        { id: 3, name: "legal-solution-resources", mark: 60 },
        { id: 4, name: "assignment-4", mark: 60 },
        { id: 5, name: "geometry-genius-resources", mark: 35 },
        { id: 6, name: "AI-universe-hub", mark: 60 },
        { id: 7, name: "quiz-hero", mark: 60 },
        { id: 8, name: "knowledge-cafe", mark: 60 },
    ]
    return (
        <div className='mx-auto'>
            <RadarChart
                width={600}
                height={400}
                data={assignment}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="mark"                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
                <Tooltip></Tooltip>

            </RadarChart>
        </div>
    );
};

export default Statistics;