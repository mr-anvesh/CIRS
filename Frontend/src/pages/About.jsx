import './About.css';
import mission from '../assets/campus.jpg';

function About(){
    const benefits =[
        {
      title: 'Students',
      points: [
        'Easy, mobile-friendly reporting',
        'Real-time status updates',
        'Safer living & learning spaces',
      ],
        },
        {
        title: 'Staff & Faculty',
        points: [
            'Quick resolution of office issues',
            'Reduced paperwork & tracking',
            'Improved work environment',
        ],
        },
        {
        title: 'Administration',
        points: [
            'Data-driven resource allocation',
            'Comprehensive analytics dashboard',
            'Accountability & transparency',
        ],
        },
    ];
    const stakeholders = [
        'Facilities Dept.',
        'IT Services',
        'Student Union',
        'Campus Security',
    ];

    return(
        <>
        <main className="about-page">
        <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>Improving Campus Life Together</h1>
          <p>
            Our mission is to empower the university community through
            streamlined, digital infrastructure management.
          </p>
          <div className="about-hero-actions">
            <button className="about-btn primary">Our Vision</button>
            <button className="about-btn secondary">Contact Us</button>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            The Campus Issue Reporting System (CIRS) was born from a need to
            transition from outdated manual reporting to a digital-first
            approach. By leveraging technology, we ensure that every facility
            issue, from broken lights to plumbing leaks, is addressed swiftly
            and transparently.
          </p>
          <p>
            We believe that a well-maintained campus is the foundation of a
            great learning experience. Our goal is to bridge the communication
            gap between the student body and maintenance operations, fostering a
            safer, more efficient, and responsive campus environment.
          </p>
        </div>
        <div className="mission-image">
          <img src={mission} alt="Mission visual" />
        </div>
      </section>

      <section className="about-benefits">
        <h2>Key Benefits</h2>
        <p className="section-subtitle">
          Tailored solutions for every member of our campus ecosystem.
        </p>

        <div className="benefits-grid">
          {benefits.map((item) => (
            <article className="benefit-card" key={item.title}>
              <div className="benefit-icon">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-stakeholders">
        <h2>Project Stakeholders</h2>
        <p className="section-subtitle">
          CIRS is a collaborative effort between multiple campus departments.
        </p>

        <div className="stakeholders-row">
          {stakeholders.map((name) => (
            <div className="stakeholder-pill" key={name}>
              <span className="stakeholder-icon">
                <i className="fa-solid fa-users"></i>
              </span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
        </>
    );
}
export default About;