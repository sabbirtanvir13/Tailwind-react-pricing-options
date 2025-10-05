import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPremise}) => {
    const marksDataRes=use(marksPremise)
    const matrksdata=marksDataRes.data;
  const  marksChatdata = matrksdata.map(studentsData => ({
    id: studentsData.id,
    name: studentsData.name,
    Math: studentsData.subjects.Math,
    English: studentsData.subjects.English,
    Physics: studentsData.subjects.Physics,
    Chemistry: studentsData.subjects.Chemistry
    
}

));

console.log(marksChatdata)

    return (
        <div>
            <BarChart width={500} height={500} data={marksChatdata}>
                <XAxis dataKey={`name`}> </XAxis>
                <YAxis></YAxis>
                <Bar dataKey={`Math`} fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;