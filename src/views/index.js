import Home from './Home';
import Person from './Person';
import Project from './Project';

export default [
    {
        exact: true,
        title: 'Home',
        path: '/',
        component: Home
    },
    {
        title: 'Person',
        path: '/people/:id',
        component: Person
    },
    {
        title: 'Project',
        path: '/projects/:id',
        component: Project
    }
];