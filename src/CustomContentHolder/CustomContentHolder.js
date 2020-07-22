import React from 'react';
import CustomCard from '../CustomCard/CustomCard';

const CustomContentHolder = () => {
    return (
        <React.Fragment>
            <CustomCard title="All Models"  subtitle="10 " para1="Trained: 8" para2="In Training: 2"/>
    <CustomCard title="All Objects"  subtitle="21 "/>
    <CustomCard title="My Models" subtitle="5 " para1="Trained: 5" para2="In Training: 0"/>
        </React.Fragment>
    );
};

export default CustomContentHolder;