'use client'
import React, { useState } from 'react'
import './Expandable.css'

interface ExpandableSectionProps {
    title: string;
    children: React.ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='expand-container' onClick={toggleExpand}>
            <div className='que-title'>
                <div className='flex exp-head'>
                    <h1>{title}</h1>
                    <div className='que-icon'>
                        <div className={`vertical-line ${isExpanded && 'vertical-line-exp'}`}></div>
                        <div className='horizontal-line'></div>
                    </div>
                </div>
                <div className={isExpanded ? 'expanded-content expanded' : 'expanded-content'}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ExpandableSection;
