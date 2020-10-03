
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
        content: 'My passion is to build scalable applications with fine platform and tools, such as web technology, cloud computing, and artificial intelligence, etc. Never get tired of learning new! I believe these technologies are the key factors to boost and scale the business for nowadays and the coming Internet of Things (IoT) era. My sense of accomplishment comes from the growth of the team, as well as my career by working with awesome people!',
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
            datesBetween: '2019.08 - Present'
          },
          {
            title: 'Software Engineer',
            company: 'Groupon',
            description: 'Build backend RESTful web services. Construct data pipeline on cloud.',
            companyWebSite: 'http://www.groupon.com',
            companyMeta: 'Seattle, WA, USA & Dublin, Ireland',
            datesBetween: '2016.02 - 2019.05'
          },
          {
            title: 'Robotics Engineer (Intern)',
            company: 'Auro AI',
            description: 'Build a self-driving shuttle from scratch with 3 co-founders and 4 engineers in three months (seed round investment: $120K)',
            companyWebSite: 'http://auro.ai',
            companyMeta: 'Sunnyvale, CA, USA',
            datesBetween: '2015.05 - 2015.08'
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
            description: 'BMW L3 Highway Pilot',
            items: [
              { title: '', projectUrl: '', description: 'Design and implement an end-to-end workflow to generate metrics and KPI for the situation assessment module of BMW L3 highway pilot (Python).' },
              { title: '', projectUrl: '', description: 'Cooperate with the stakeholders to improve the Object-Oriented Design (OOD) of the error handling interface (UML, C++14) of the system, and implement unit tests (Gtest).' }
            ]
          },
          {
            sectionHeader: 'Aptiv',
            description: 'PSA Highway Chauffeur Autopilot',
            items: [
              { title: '', projectUrl: '', description: '[Ownership] Lead the ML-based lane change prediction algorithms design for highway autopilot, implement the module with C++14 (ROS) and achieve accuracy over 93+%' }
            ]
          },
          {
            sectionHeader: 'Groupon',
            description: 'CRM Back-End Web Service',
            items: [
              { title: '', projectUrl: '', description: 'Develop features for a core REST back-end web service using Java Play framework to send email campaigns and mobile notifications to over 6MM global users daily for customer engagement and A/B testing.' },
              { title: '', projectUrl: '', description: 'Migrate and upgrade the back-end tech stack from Hive to Spark and achieve 10x performance boost on top of the on-premises cloud architecture, by collaborating with the Data Systems team.'},
              { title: '', projectUrl: '', description: 'Contribute to the system logging with Log4j and implement a comprehensive dashboard of system metrics using Splunk accordingly.'},
              ]
          },
          {
            sectionHeader: 'Groupon',
            description: 'Data Pipeline Services',
            items: [
              { title: '', projectUrl: '', description: '[Ownership] Design and optimize a scalable data aggregation service over Hadoop and Cassandra clusters using Spark to achieve 2x performance improvement.' },
              { title: '', projectUrl: '', description: '[Ownership] Design and implement data integration pipeline for recommendation systems using Spark to reduce 50+% cloud job runtime and 80+% cloud storage compared with Hive SQL.'},
              { title: '', projectUrl: '', description: 'Ownership of multiple web services in production environment and experience of the safe deployment and continuous integration testing (CI) procedures'}
            ]
          },
          {
            sectionHeader: 'Groupon',
            description: 'Merchandise Platform Development',
            items: [
              { title: '', projectUrl: '', description: 'Develop RESTful back-end API (CRUD) on Rails to interact with front-end UI (EmberJS) for the EMEA merchandise platform.' },        
              { title: '', projectUrl: '', description: 'Implement unit and integration tests with RSpec to improve system robustness (code coverage 70+% --> 80+%).' }            
            ]
          },
          {
            sectionHeader: 'Auro AI',
            description: 'Motion Planning Design & Test',
            items: [
              { title: '', projectUrl: '', description: '[Ownership] Develop the motion planning module of the autopilot using C++. Implement waypoint-following path planner using Map & GPS and RRT* path planner using LiDAR.' },           
              { title: '', projectUrl: '', description: 'Performance analysis of different planning algorithms (A*, RRT*) via simulations and autopilot road tests. ' },           
              { title: '', projectUrl: '', description: 'Teamwork demonstration on YC Demo Day Summer 2015 & received $2.1M investments afterward.' }            
            ]
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Development Tools',
        icon: 'rocket',
        items: ['C++', 'Python', 'Java', 'Scala', 'Maven', 'CMake', 'Capistrano', 'Javascript', 'SQL', 'Go', 'Git', 'Gtest', 'RSpec', 'Jenkins', 'Docker', 'Kubernetes', 'DotCI', 'Splunk', 'AWS', 'GCP']
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
      },
      {
        type: 'common-list',
        title: 'Extra-Curricular Activities',
        icon: 'cubes',
        items: [
          {
            authority: 'Born Free Foundation Supporter',
            authorityWebSite: 'https://bornfree.org.uk/'
          },
          {
            authority: 'Four Paws Org Supporter',
            authorityWebSite: 'https://www.vier-pfoten.de/'
          }
        ]
      }
    ]
  }
  