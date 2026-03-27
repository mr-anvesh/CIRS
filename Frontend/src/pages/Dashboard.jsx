import './Dashboard.css';

function Dashboard(){

    const issues = [
        { id: 'CIRS-8921', title: 'Broken Wi-Fi Router - Lab B', category: 'IT Support', date: 'Oct 24, 2023', status: 'In-Progress' },
        { id: 'CIRS-8845', title: 'Water Leak - 3rd Floor Dorm', category: 'Maintenance', date: 'Oct 22, 2023', status: 'Pending' },
        { id: 'CIRS-8762', title: 'AC Unit Noise - Library', category: 'Facilities', date: 'Oct 20, 2023', status: 'Resolved' },
        { id: 'CIRS-8744', title: 'Staircase Lighting Out', category: 'Safety', date: 'Oct 19, 2023', status: 'Resolved' }
    ];

    return(
        <>
            <div className="dashboard-container">
                <aside className="sidebar">
                    <div className="sidebar-top">
                        <a href="#" className="sidebar-link active">
                             <i className="fa-solid fa-table-columns"></i> Dashboard
                        </a>
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-file-lines"></i> My Reports
                        </a>
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-map-location-dot"></i> Campus Map
                        </a>
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-circle-question"></i> Knowledge Base
                        </a>
                    </div>
                    <div className="sidebar-bottom">
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-gear"></i> Settings
                        </a>
                    </div>
                </aside>
                   <main className="dashboard-main">

        {/* --- Title Row --- */}
        <div className="dashboard-header-row">
          <div>
            <h1 className="dashboard-title">Student Dashboard</h1>
            <p className="dashboard-subtitle">
              Welcome back, Alex. Here&apos;s what&apos;s happening on campus today.
            </p>
          </div>
          <button className="report-btn">
            <i className="fa-solid fa-circle-plus"></i> Report New Issue
          </button>
        </div>

        {/* --- Status Cards --- */}
        <div className="status-cards">
          <div className="status-card">
            <div className="status-icon pending-icon">
              <i className="fa-solid fa-box-open"></i>
            </div>
            <div>
              <span className="status-label">Pending</span>
              <span className="status-value">4</span>
            </div>
          </div>
          <div className="status-card">
            <div className="status-icon progress-icon">
              <i className="fa-solid fa-list-check"></i>
            </div>
            <div>
              <span className="status-label">In-Progress</span>
              <span className="status-value">2</span>
            </div>
          </div>
          <div className="status-card">
            <div className="status-icon resolved-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div>
              <span className="status-label">Resolved</span>
              <span className="status-value">15</span>
            </div>
          </div>
        </div>

        {/* --- Recent Issues Table --- */}
        <div className="issues-section">
          <div className="issues-header">
            <h2>Recent Issue Submissions</h2>
            <a href="#" className="view-all">View All</a>
          </div>
          <table className="issues-table">
            <thead>
              <tr>
                <th>REPORT ID</th>
                <th>ISSUE TITLE</th>
                <th>CATEGORY</th>
                <th>DATE SUBMITTED</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id}>
                  <td>#{issue.id}</td>
                  <td>{issue.title}</td>
                  <td>{issue.category}</td>
                  <td>{issue.date}</td>
                  <td>
                    <span className={`badge badge-${issue.status.toLowerCase()}`}>
                      {issue.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Bottom Row: Service Updates + Emergency --- */}
        <div className="dashboard-bottom">

          {/* Service Updates */}
          <div className="service-updates">
            <h3>
              <i className="fa-solid fa-circle-info"></i> Campus Service Updates
            </h3>
            <div className="update-item">
              <div className="update-icon">
                <i className="fa-solid fa-wifi"></i>
              </div>
              <div>
                <strong>Library Wi-Fi Maintenance</strong>
                <p>Scheduled maintenance on Oct 28, 2 AM - 5 AM. Connectivity might be intermittent.</p>
              </div>
            </div>
            <div className="update-item">
              <div className="update-icon">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <div>
                <strong>Cafeteria Renovations</strong>
                <p>South Wing cafeteria will be closed for floor upgrades until Monday.</p>
              </div>
            </div>
          </div>

          {/* Emergency Card */}
          <div className="emergency-card">
            <h3>Need Immediate Help?</h3>
            <p>For campus security emergencies, call the direct 24/7 hotline.</p>
            <div className="emergency-actions">
              <button className="phone-btn">
                <i className="fa-solid fa-phone"></i> 555-0199
              </button>
              <button className="chat-btn">
                <i className="fa-solid fa-circle-question"></i> Open Chat
              </button>
            </div>
          </div>

        </div>
      </main>

            </div>
        </>
    );
}
export default Dashboard;