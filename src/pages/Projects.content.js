const content = [
    {
        image: 'resources/images/chatter.png',
        title: 'Real-Time Messaging Web Application',
        info: 'Typescript   NodeJS   PostgreSQL',
        org: {
            name: 'Chatter',
            color: 'purple',
            website: 'https://chatter.michaelconnor.ca'
        },
        description: [
            'Employs a RESTful API and websockets, with PostgreSQL storage and React UI',
            'Features secure authentication with salted hashing of passwords',
            'Deployed on AWS instance with a load balancer to provide SSL certificate'
        ]
    },
    {
        image: 'resources/images/krisp.png',
        title: 'Distributed File System',
        info: 'C++',
        org: {
            name: 'Georiga Institute of Technology',
            color: '#A4925A',
            website: 'michaelconnor.ca'
        },
        description: [
            'Distributed file system allowing for storage and retrieval of files on remote servers',
            'Weak consistancy model to allow for higher throughput in concurrent file accesses',
            'Distributed locking construct to allow synchronization of file writes'
        ]
    },
    {
        image: 'resources/images/mystic.png',
        title: 'Open World Game',
        info: 'Java',
        org: {
            name: 'My Github',
            color: '#006618',
            website: 'https://github.com/michaelconnor468/Mystic'
        },
        description: [
            'Scalable multi-threading capable of utilizing high-core processors',
            'Completely modifiable and dynamically loaded infinite open world',
            'Regression unit testing using the JUnit library'
        ]
    },
    {
        image: 'resources/images/krisp.png',
        title: 'Krisp Language and Compiler',
        info: 'Java',
        org: {
            name: 'My Github',
            color: '#33a933',
            website: 'https://github.com/michaelconnor468/KrispCompiler'
        },
        description: [
            'Front end compiler that generates intermediate machine code easily translatable to x86-64 and ARM',
            'Krisp is a made up programming language that supports basic constructs such as variables and loops'
        ]
    },
    {
        image: 'resources/images/foam.png',
        title: 'Foam Framework',
        info: 'Open Source Project',
        org: {
            name: 'Foam Framework',
            color: 'red',
            website: 'https://foam-framework.github.io/foam'
        },
        description: [
            'Improved parser to make scripting language more developer friendly'
        ]
    }
];

export default content;
