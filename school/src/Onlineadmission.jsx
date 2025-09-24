import React, { useState } from "react";

function Onlineadmission() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    classApplied: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    previousSchool: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/admission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        address: "",
        classApplied: "",
        fatherName: "",
        fatherOccupation: "",
        motherName: "",
        previousSchool: "",
      });
    } else {
      alert("❌ Error: " + data.error);
    }
  } catch (error) {
    console.error("❌ Fetch error:", error);
    alert("Failed to connect to server.");
  }
};

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4 text-primary">
        Online Admission Form
      </h1>
      <div className="card shadow-lg p-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* First & Last Name */}
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender & DOB */}
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div className="col-12">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                rows="2"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            {/* Class Applied */}
            <div className="col-md-6">
              <label className="form-label">Class Applied For</label>
              <select
                className="form-select"
                name="classApplied"
                value={formData.classApplied}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>KG</option>
                <option>Nursery</option>
                <option>Prep</option>
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
                <option>Class 4</option>
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Matric</option>
              </select>
            </div>

            {/* Parents Info */}
            <div className="col-md-6">
              <label className="form-label">Father's Name</label>
              <input
                type="text"
                className="form-control"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Father's Occupation</label>
              <input
                type="text"
                className="form-control"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mother's Name</label>
              <input
                type="text"
                className="form-control"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
              />
            </div>

            {/* Previous School */}
            <div className="col-12">
              <label className="form-label">Previous School (if any)</label>
              <input
                type="text"
                className="form-control"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success px-5">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Onlineadmission;
