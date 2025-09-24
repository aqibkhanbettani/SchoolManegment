import React from "react";

function Profile() {
  // Names list
  const names = [
    "John Smith", "Michael Johnson", "David Brown", "James Williams", "Robert Jones",
    "William Garcia", "Charles Miller", "Thomas Davis", "Christopher Martinez", "Daniel Hernandez",
    "Matthew Lopez", "Anthony Gonzalez", "Mark Wilson", "Paul Anderson", "Steven Taylor",
    "Andrew Moore", "Joshua Jackson", "Kevin Martin", "Brian Lee", "Edward Perez",
    "George Thompson", "Timothy White", "Ronald Harris", "Jason Clark", "Jeffrey Lewis",
    "Ryan Robinson", "Jacob Walker", "Gary Hall", "Nicholas Allen", "Eric Young",
    "Jonathan King", "Larry Wright", "Justin Scott", "Brandon Green", "Frank Adams",
    "Gregory Baker", "Raymond Nelson", "Patrick Carter", "Dennis Mitchell", "Jerry Perez"
  ];

  // Example subjects to rotate through
  const subjects = ["Physics", "Mathematics", "Chemistry", "Biology", "Computer Science"];
  const educationLevels = ["BSc", "MSc", "PhD"];

  // Create 40 members
  const members = names.map((name, i) => ({
    id: i + 1,
    name,
    subject: subjects[i % subjects.length],
    education: educationLevels[i % educationLevels.length],
    experience: `${(i % 10) + 1} Years`,
    email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
    contact: `+1 555 000${1000 + i}`,
  }));

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold text-primary">Our Team information</h1>

      <div className="row g-4">
        {members.map((m) => (
          <div key={m.id} className="col-12 col-md-6">
            <div className="card profile-card h-100 shadow-lg">
              <div className="card-body">
                {/* Row 1 */}
                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <strong>Name</strong>
                  <span>{m.name}</span>
                </div>

                {/* Row 2 */}
                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <strong>Teacher</strong>
                  <span>{m.subject}</span>
                </div>

                {/* Row 3 */}
                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <strong>Education</strong>
                  <span>{m.education}</span>
                </div>

                {/* Row 4 */}
                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <strong>Experience</strong>
                  <span>{m.experience}</span>
                </div>

                {/* Row 5 */}
                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <strong>Email</strong>
                  <span>{m.email}</span>
                </div>

                {/* Row 6 */}
                <div className="d-flex justify-content-between">
                  <strong>Contact</strong>
                  <span>{m.contact}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom styles */}
      <style>
        {`
          .profile-card {
            background: linear-gradient(135deg, #f9fafc, #eef2f7);
            border-radius: 15px;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .profile-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
          .profile-card .card-body {
            padding: 1.5rem;
          }
          .profile-card strong {
            color: #0d6efd; /* Bootstrap primary */
          }
        `}
      </style>
    </div>
  );
}

export default Profile;
