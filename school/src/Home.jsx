import React from "react";
import { Link } from "react-router-dom";

// Footer Component
function Footer() {
  const addresses = [
    "University Road, Peshawar, KPK, Pakistan",
    "Saddar Cantt, Peshawar, KPK, Pakistan",
    "Hayatabad Phase 3, Peshawar, KPK, Pakistan",
    "Kohat Road, Peshawar, KPK, Pakistan",
    "Warsak Road, Peshawar, KPK, Pakistan",
  ];

  const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];

  return (
    <footer className="text-light pt-5 pb-3" style={{ backgroundColor: "#111" }}>
      <div className="container">
        <div className="row">
          {/* Left: About / Logo */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">School Management</h5>
            <p className="small text-muted">
              A modern school management system to simplify admissions, classes,
              and student management in Peshawar.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-light">Home</Link></li>
              <li><Link to="/Onlineadmission" className="text-decoration-none text-light">Online Admission</Link></li>
              <li><Link to="/Offlineadmission" className="text-decoration-none text-light">Offline Admission</Link></li>
              <li><Link to="/Visitstudent" className="text-decoration-none text-light">Visit Student</Link></li>
               <li><Link to="/Onlinefee" className="text-decoration-none text-light">Online fee pay</Link></li>
                <li><Link to="/Offlinefee" className="text-decoration-none text-light">Offline fee pay</Link></li>
              <li><Link to="/Contact" className="text-decoration-none text-light">Contact</Link></li>
            </ul>
          </div>

          {/* Right: Address */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Address</h6>
            <p className="small">{randomAddress}</p>
            <p className="small">📞 +92 300 1234567</p>
            <p className="small">✉️ info@schoolmanagement.pk</p>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center small text-muted">
          © {new Date().getFullYear()} School Management | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

// Main Home Component
function Home() {
  // Team Members
  const names = [
    "John Smith", "Michael Johnson", "David Brown", "James Williams", "Robert Jones",
    "William Garcia", "Charles Miller", "Thomas Davis", "Christopher Martinez", "Daniel Hernandez",
  ];

  const teamMembers = names.map((name, i) => ({
    id: i + 1,
    name,
    role: "Team Member",
    img: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`,
  }));

  // Class Levels
  const classLevels = [
    "KG", "Nursery", "Prep",
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
    "Class 6", "Class 7", "Class 8", "Class 9", "Matric"
  ];

  const sections = ["A", "B", "C"];

  const classroomImages = {
    KG: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=60",
    Nursery: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=60",
    Prep: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=60",
    "Class 1": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Class 2": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Class 3": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60",
    "Class 6": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60",
    "Class 9": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    Matric: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=800&q=60",
  };

  const allClasses = [];
  classLevels.forEach((level) => {
    sections.forEach((sec) => {
      allClasses.push({
        id: `${level}-${sec}`,
        name: `${level} - Section ${sec}`,
        students: 70,
        img: classroomImages[level] || classroomImages["KG"],
      });
    });
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid back d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="fw-bold text-white mb-4">School Management</h1>
        <Link to="/Onlineadmission" className="btn btn-danger btn-lg">
          Online Admission
        </Link>
      </div>

      {/* Team Preview */}
      <div className="container py-5">
        <h1 className="text-center mb-5">Our Team</h1>
        <div className="row g-4">
          {teamMembers.slice(0, 3).map((member) => (
            <div key={member.id} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="pt-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-circle img-fluid shadow"
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text small text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/team" className="btn btn-primary">
            View All Team
          </Link>
        </div>
      </div>

      {/* Classes Preview */}
      <div className="container py-5">
        <h1 className="text-center fw-bold text-primary mb-5">Our Classes</h1>
        <div className="row g-4">
          {allClasses.slice(0, 3).map((cls) => (
            <div key={cls.id} className="col-12 col-md-4">
              <div className="card class-card h-100 shadow-lg">
                <img
                  src={cls.img}
                  alt={cls.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold text-dark">{cls.name}</h5>
                  <p className="text-muted mb-2">Students Enrolled</p>
                  <span className="badge bg-primary fs-6">{cls.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/classes" className="btn btn-success">
            View All Classes
          </Link>
        </div>

        {/* Custom CSS */}
        <style>
          {`
            .class-card {
              border-radius: 15px;
              overflow: hidden;
              transition: transform 0.3s, box-shadow 0.3s;
              background: #fdfdfd;
            }
            .class-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 12px 30px rgba(0,0,0,0.2);
            }
          `}
        </style>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
