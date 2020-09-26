
export const CVData = {
    personalData: {
      name: 'Yang Song',
      title: 'Senior Algorithm Developer',
      image: 'cv_img_2019.jpg',
      contacts: [
        { type: 'email', value: 'ysong.sc@gmail.com' },
        { type: 'phone', value: '+49 173 7250812' },
        { type: 'location', value: 'Dusseldorf, Germany' },
        { type: 'website', value: 'ysonggit.github.io' },
        { type: 'linkedin', value: 'linkedin.com/in/song24' },
        { type: 'github', value: 'github.com/ysonggit' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Profile',
        content: 'My passion is to build scalable applications with awesome engineering tools, such as web technology, cloud computating, and artificial intelligence, etc. Never get tired of learning new! I believe these technologies are the key factors to boost and scale the business for nowadays and the coming Internet of Things (IoT) era. I grow my software engineering experince by working with awesome people at early stage startup and the publicly listed tech companies in the Internet and Autonomous Driving industries. The most fulfilling thing to me is to see the growth of my career vision along with the growth of the company.',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Ph.D. Computer Science',
            authority: 'University of South Carolina',
            authorityWebSite: 'https://www.sc.edu',
            rightSide: '2010 - 2015'
          },
          {
            title: 'M.S. Electrical Engineering',
            authority: 'University of New Mexico',
            authorityWebSite: 'https://www.unm.edu',
            rightSide: '2008 - 2009'
          },
          {
            title: 'B.S. Electrical Engineering',
            authority: 'China University of Geosciences',
            authorityWebSite: 'https://www.cug.edu.cn',
            rightSide: '2003 - 2007'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        description: 'Optional',
        icon: 'archive',
        items: [
          {
            title: 'Senior Algorithm Developer',
            company: 'Aptiv',
            description: 'Develop ML-based motion prediction algorithms for autonomous driving vehicles.',
            companyWebSite: 'http://www.aptiv.com',
            companyMeta: 'Wuppertal, Germany',
            datesBetween: '2019.08 - Present',
            descriptionTags: ['C++', 'Python']
          },
          {
            title: 'Software Engineer',
            company: 'Groupon',
            description: 'Build backend RESTful web services. Construct data pipeline on cloud.',
            companyWebSite: 'http://www.groupon.com',
            companyMeta: 'Seattle, WA, USA & Dublin, Ireland',
            datesBetween: '2016.02 - 2019.05',
            descriptionTags: ['Java', 'Rails', 'Spark', 'Scala']
          },
          {
            title: 'Robotics Engineer (Intern)',
            company: 'Auro',
            description: 'Develop motion planning module for the self-driving shuttle.',
            companyWebSite: 'http://auro.ai',
            companyMeta: 'Sunnyvale, CA, USA',
            datesBetween: '2015.05 - 2015.08',
            descriptionTags: ['C++', 'Python']
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projects',
        description: '',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Aptiv',
            description: 'Advanced Engineering',
            items: [
              { title: 'BMW L3 Sitation Assessment', projectUrl: '', description: 'Optional' },
              { title: 'PSA Highway Chauffeur', projectUrl: '', description: 'Optional' }
            ]
          },
          {
            sectionHeader: 'Groupon',
            description: 'Push Marketing',
            items: [
              { title: 'CRM System', projectUrl: '', description: 'Optional' },
              { title: 'Realtime Web Service', projectUrl: '', description: 'Optional' }
            ]
          },
          {
            sectionHeader: 'Groupon',
            description: 'Goods',
            items: [
              { title: 'Merchandise Platform Development', projectUrl: '', description: 'Optional' }            ]
          },
          {
            sectionHeader: 'Auro AI',
            description: '',
            items: [
              { title: 'Motion Planning Design & Test', projectUrl: '', description: 'Optional' }            ]
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Development Tools',
        icon: 'rocket',
        items: ['C++', 'Python', 'Java', 'Scala', 'Javascript', 'SQL', 'Golang', 'Git', 'Jenkins', 'Docker', 'Kubernetes', 'DotCI', 'CircleCI', 'Splunk', 'AWS', 'GCP', 'On-premises']
      },
      {
        type: 'tag-list',
        title: 'Frameworks & Databases',
        icon: 'cubes',
        items: ['Hadoop', 'Spark', 'ROS', 'Java Play', 'EmberJS', 'Rails', 'MySQL', 'Cassandra', 'Redis']
      },
      {
        type: 'common-list',
        title: 'Certificates',
        description: '',
        icon: 'book',
        items: [
          {
            title: 'Self-Driving Car Engineer Nanodegree',
            authority: 'Udacity',
            authorityWebSite: 'https://confirm.udacity.com/KRNP7Q2R'
          },
          {
            title: 'Deep Learning Specialization',
            authority: 'Coursera - Deeplearning.ai',
            authorityWebSite: 'https://www.coursera.org/account/accomplishments/specialization/certificate/B72MXW7QHYAP',
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Professional'
          },
          {
            authority: 'German',
            authorityMeta: 'A2'
          }
        ]
      }
    ]
  }
  