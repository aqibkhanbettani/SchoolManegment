import React, { useState } from "react";

function Visitstudent() {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    visitorName: "",
    relation: "",
    visitDate: "",
    visitTime: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.studentName) newErrors.studentName = "Student name is required";
    if (!formData.className) newErrors.className = "Class is required";
    if (!formData.visitorName) newErrors.visitorName = "Visitor name is required";
    if (!formData.visitDate) newErrors.visitDate = "Visit date is required";
    if (!formData.visitTime) newErrors.visitTime = "Visit time is required";
    if (!formData.purpose) newErrors.purpose = "Purpose is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmittedData([...submittedData, formData]);
      setFormData({
        studentName: "",
        className: "",
        visitorName: "",
        relation: "",
        visitDate: "",
        visitTime: "",
        purpose: "",
      });
      alert("✅ Visit record submitted successfully!");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4 text-info">
        Visit Student Form
      </h1>

      <div className="card shadow-lg p-4 mb-5">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Student Name */}
            <div className="col-md-6">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                className={`form-control ${errors.studentName ? "is-invalid" : ""}`}
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
              />
              {errors.studentName && (
                <div className="invalid-feedback">{errors.studentName}</div>
              )}
            </div>

            {/* Class */}
            <div className="col-md-6">
              <label className="form-label">Class</label>
              <select
                className={`form-select ${errors.className ? "is-invalid" : ""}`}
                name="className"
                value={formData.className}
                onChange={handleChange}
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
              {errors.className && (
                <div className="invalid-feedback">{errors.className}</div>
              )}
            </div>

            {/* Visitor Name */}
            <div className="col-md-6">
              <label className="form-label">Visitor Name</label>
              <input
                type="text"
                className={`form-control ${errors.visitorName ? "is-invalid" : ""}`}
                name="visitorName"
                value={formData.visitorName}
                onChange={handleChange}
              />
              {errors.visitorName && (
                <div className="invalid-feedback">{errors.visitorName}</div>
              )}
            </div>

            {/* Relation */}
            <div className="col-md-6">
              <label className="form-label">Relation with Student</label>
              <input
                type="text"
                className="form-control"
                name="relation"
                value={formData.relation}
                onChange={handleChange}
              />
            </div>

            {/* Visit Date */}
            <div className="col-md-6">
              <label className="form-label">Visit Date</label>
              <input
                type="date"
                className={`form-control ${errors.visitDate ? "is-invalid" : ""}`}
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
              />
              {errors.visitDate && (
                <div className="invalid-feedback">{errors.visitDate}</div>
              )}
            </div>

            {/* Visit Time */}
            <div className="col-md-6">
              <label className="form-label">Visit Time</label>
              <input
                type="time"
                className={`form-control ${errors.visitTime ? "is-invalid" : ""}`}
                name="visitTime"
                value={formData.visitTime}
                onChange={handleChange}
              />
              {errors.visitTime && (
                <div className="invalid-feedback">{errors.visitTime}</div>
              )}
            </div>

            {/* Purpose */}
            <div className="col-12">
              <label className="form-label">Purpose of Visit</label>
              <textarea
                className={`form-control ${errors.purpose ? "is-invalid" : ""}`}
                name="purpose"
                rows="2"
                value={formData.purpose}
                onChange={handleChange}
              />
              {errors.purpose && (
                <div className="invalid-feedback">{errors.purpose}</div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-5">
              Submit Visit
            </button>
          </div>
        </form>
      </div>

      {/* Submitted Data Table */}
      {submittedData.length > 0 && (
        <div className="card shadow-lg p-4">
          <h3 className="text-center text-success mb-3">Submitted Visits</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Visitor Name</th>
                  <th>Relation</th>
                  <th>Visit Date</th>
                  <th>Visit Time</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.studentName}</td>
                    <td>{data.className}</td>
                    <td>{data.visitorName}</td>
                    <td>{data.relation}</td>
                    <td>{data.visitDate}</td>
                    <td>{data.visitTime}</td>
                    <td>{data.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Visitstudent;
