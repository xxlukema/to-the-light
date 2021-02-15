import React, { lazy, Suspense } from 'react';

const LazyAbout = lazy(() => import('./About'));

const About = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
    <Suspense fallback={null}>
        <LazyAbout {...props} />
    </Suspense>
);

export default About;
