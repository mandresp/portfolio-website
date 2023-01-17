import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 1,
        name: 'dreamStream',
        repo: 'https://github.com/btempini/Dream-Journal',
        deployed: 'https://dream-stream270.herokuapp.com/',
        description: 'Social media app for people to record their dreams and nightmares to share with others.',
        img: 'dreamStreamSS.png'
    },
    {
        id: 2,
        name: 'Where ISS It?',
        repo: 'https://github.com/RyanStephens6/distance-from-ISS',
        deployed: 'https://ryanstephens6.github.io/distance-from-ISS/',
        description: 'A website that allows users to see how far away the International Space Station is from their location.',
        img: 'Website Screenshot.png'
    },
    {
        id: 3,
        name: 'Dream Journal',
        repo: 'github link',
        deployed: 'deployed link',
        description: 'ent on them',
        img: 'Prework.png'
    },
    {
        id: 4,
        name: 'Dream Journal',
        repo: 'github link',
        deployed: 'deployed link',
        description: 'ent on them',
        img: 'Prework.png'
    },
    {
        id: 5,
        name: 'Dream Journal',
        repo: 'github link',
        deployed: 'deployed link',
        description: 'ent on them',
        img: 'Prework.png'
    },
    {
        id: 6,
        name: 'Dream Journal',
        repo: 'github link',
        deployed: 'deployed link',
        description: 'ent on them',
        img: 'Prework.png'
    },
];

export default function portfolio() {
  return (
    <div className = 'd-flex'>
        {projects.map(project => (<Project project = {project} key={project.id} />))}
    </div>
  );
}