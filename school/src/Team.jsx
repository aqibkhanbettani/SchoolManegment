import React from "react";
import { Link } from "react-router-dom";

function Team() {
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

  // Team members
  const teamMembers = names.map((name, i) => ({
    id: i + 1,
    name,
    role: "Team Member",
    img: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`,
  }));

  return (
    <div className="container py-5">
      <h1 className="team text-center mb-5">Our Team</h1>
      <div className="row g-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
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
              <div className="card-footer bg-transparent border-0 pb-3">
                <Link to="/Profile" className="btn btn-primary btn-sm">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
