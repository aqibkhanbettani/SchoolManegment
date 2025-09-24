import React, { useState } from "react";

function Offlineadmission() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    gender: "",
    dob: "",
    phone: "",
    address: "",
    classApplied: "",
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Offline Form Data:", formData);
    alert("📄 Offline Admission form saved successfully! Please print & submit.");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4 text-success">
        Offline Admission Form
      </h1>
      <div className="card shadow-lg p-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Student Name */}
            <div className="col-md-6">
              <label className="form-label">Student Full Name</label>
              <input
                type="text"
                className="form-control"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Father Name */}
            <div className="col-md-6">
              <label className="form-label">Father's Name</label>
              <input
                type="text"
                className="form-control"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
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

            {/* DOB */}
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

            {/* Phone */}
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

            {/* File Upload */}
            <div className="col-12">
              <label className="form-label">Upload Documents (PDF / Image)</label>
              <input
                type="file"
                className="form-control"
                name="documents"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={handleChange}
              />
              <small className="text-muted">
                * Attach photo, B-Form, or previous marksheet
              </small>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-5">
              Save & Print
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Offlineadmission;
