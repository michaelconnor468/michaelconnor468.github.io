const content = [
    {
        image: 'resources/images/nexjhealth.png',
        title: 'Software Developer',
        info: {
            start: new Date('March 22, 2021'),
            end: null
        },
        org: {
            name: 'Nexj Health',
            website: 'https://www.nexjhealth.com/',
            color: 'rgb(21, 131, 109)'
        },
        description: [
            'Developed RESTful and RPC based APIs in agile environment',
            'Designed batching system for user operations reducing network load ',
            'Improved services API to allow for better tolerance of server side errors'
        ]
    },
    {
        image: 'resources/images/nanopay.png',
        title: 'Software Developer Intern',
        info: {
            start: new Date('May 13, 2019'),
            end: new Date('December 20, 2019')
        },
        org: {
            name: 'Nanopay',
            website: 'https://nanopay.net',
            color: '#4D7AF7'
        },
        description: [
            'Developed a new security authorization framework',
            'Designed and implemented a database performance monitoring API',
            'Developed declarative API for use in creating RESTful micro-services, reducing related bugs in codebase by over 80\%'
        ]
    }
];

export default content;
