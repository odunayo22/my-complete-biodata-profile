import React from "react";


import IMG1 from '../../assets/login.jpg';
import IMG2 from '../../assets/rice.jpeg';
import IMG3 from '../../assets/image6.jpg';
import IMG4 from '../../assets/image3.jpg';
import IMG5 from '../../assets/website.jpg';
import IMG6 from '../../assets/banking.jpg';
import video1 from '../../assets/video-1.mp4';
import video2 from '../../assets/meals.mp4';
import video3 from '../../assets/php-login.mp4';
import video4 from '../../assets/slide.mp4';




const data = 
[
    {
        id: 1,
        image: IMG1,
        title: 'My Profile-1',
        github: 'https://github.com/odunayo22/react-php.git',
        demo: video1,
    },

    {
        id: 2,
        image: IMG2,
        title: 'Meal app',
        github: 'https://github.com/odunayo22/meals.git',
        demo: video2,
    },

    {
        id: 3,
        image: IMG3,
        title: 'My Login Page',
        github: 'https://github.com/odunayo22/login-system.git',
        demo: video3,
    },

    {
        id: 4,
        image: IMG4,
        title: 'Automatic Sliding',
        github: 'https://github.com/odunayo22/another-slide.git',
        demo: video4,
    },

    {
        id: 5,
        image: IMG5,
        title: 'My Bootstrap Project',
        github: 'https://github.com/odunayo22/my-bootstrap.git',
        demo: 'https://github.com/odunayo22/my-bootstrap.git',
    },

    {
        id: 6,
        image: IMG6,
        title: 'Banking-App',
        github: 'https://github.com/odunayo22/banking.git',
        demo: 'https://github.com/odunayo22/banking.git',
    },
]

export default data;