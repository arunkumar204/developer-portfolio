import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'CarePulse',
        description: "CarePulse aims to simplify the process of booking medical appointments, ensuring that patients receive timely and efficient healthcare services , Additionally, we have integrated Twilio to enhance the user experience. Upon submitting your appointment request, you will receive a confirmation message stating, Your appointment is confirmed!",
        tools: ['Reactjs', 'Nextjs', 'Typescript', 'Twilio', 'Appwrite', 'Javascript'],
        role: 'Frontend and Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Live Docs',
        description: 'Live Docs built with Next.js! , Utilize a feature-rich text editor for collaborative document creation. Users can edit documents simultaneously with live updates, ensuring real-time collaboration and seamless workflow , Leverage Clerk for handling user registration and login. Clerk simplifies authentication and session management, providing a secure and user-friendly experience.',
        tools: ['NextJS', 'Tailwind CSS', "TypeScript", 'Sentry', 'Clerk'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Yoom Website',
        description: 'Yoom Website With Stream integration, experience high-quality audio and video during your virtual meetings. Engage in productive discussions with confidence Our platform goes beyond just video conferencing. Explore predictive charts that forecast internet quality, voice clarity, and video range. Stay ahead of potential issues and ensure smooth communication every time.',
        tools: ['React', 'TypeScript', 'Clerk', 'NextJS', 'Appwrite', 'Sentry'],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://arun-zoom.vercel.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: '3D Game',
        description: "3D gaming refers to interactive computer entertainment games with characteristics of three-dimensional graphics: height, width, and depth. 3D gaming is believed to create immersive experience in a virtual worlds with realistic representations.",
        tools: ['ReactJS', 'ThreeJS', 'Typescript'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },