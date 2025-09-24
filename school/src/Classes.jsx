import React from "react";

function Classes() {
  const classLevels = [
    "KG", "Nursery", "Prep",
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
    "Class 6", "Class 7", "Class 8", "Class 9", "Matric"
  ];

  const sections = ["A", "B", "C"];

  const classroomImages = {
    "KG": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=60",
    "Nursery": "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=60",
    "Prep": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=60",
    "Class 1": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Class 2": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Class 3": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60",
    "Class 4": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Class 5": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Class 6": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60",
    "Class 7": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Class 8": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Class 9": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "Matric": "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=800&q=60",
  };

  const allClasses = [];
  classLevels.forEach((level) => {
    sections.forEach((sec) => {
      allClasses.push({
        id: `${level}-${sec}`,
        name: `${level} - Section ${sec}`,
        students: 70,
        img: classroomImages[level],
      });
    });
  });

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold text-primary mb-5">Our Classes & Sections</h1>
      <div className="row g-4">
        {allClasses.map((cls) => (
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
                  borderTopRightRadius: "15px"
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
  );
}

export default Classes;
