import React, { useState } from "react";

function OfflineFeePay() {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    rollNo: "",
    month: "",
    feeType: "",
    amount: "",
    paymentMethod: "",
    receiptNo: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    alert("✅ Fee payment submitted successfully!");
    setFormData({
      studentName: "",
      className: "",
      rollNo: "",
      month: "",
      feeType: "",
      amount: "",
      paymentMethod: "",
      receiptNo: "",
    });
  };

  const handleSave = () => {
    alert("💾 Fee slip saved successfully!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4 text-dark">Offline Fee Payment</h1>
      <div className="card shadow-lg p-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Student Name */}
            <div className="col-md-6">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                className="form-control"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Class Name */}
            <div className="col-md-6">
              <label className="form-label">Class</label>
              <select
                className="form-select"
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>KG</option>
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

            {/* Roll Number */}
            <div className="col-md-6">
              <label className="form-label">Roll Number</label>
              <input
                type="text"
                className="form-control"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                required
              />
            </div>

            {/* Fee Month */}
            <div className="col-md-6">
              <label className="form-label">Fee Month</label>
              <select
                className="form-select"
                name="month"
                value={formData.month}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>

            {/* Fee Type */}
            <div className="col-md-6">
              <label className="form-label">Fee Type</label>
              <select
                className="form-select"
                name="feeType"
                value={formData.feeType}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>Tuition Fee</option>
                <option>Admission Fee</option>
                <option>Examination Fee</option>
                <option>Other</option>
              </select>
            </div>

            {/* Amount */}
            <div className="col-md-6">
              <label className="form-label">Amount (PKR)</label>
              <input
                type="number"
                className="form-control"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            {/* Payment Method */}
            <div className="col-md-6">
              <label className="form-label">Payment Method</label>
              <select
                className="form-select"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>Cash at School</option>
                <option>Bank Challan</option>
                <option>Pay Order</option>
                <option>Demand Draft</option>
              </select>
            </div>

            {/* Receipt / Challan No */}
            <div className="col-md-6">
              <label className="form-label">Receipt / Challan No</label>
              <input
                type="text"
                className="form-control"
                name="receiptNo"
                value={formData.receiptNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-dark px-5">
              Submit Payment
            </button>
          </div>
        </form>
      </div>

      {/* Fee Slip Section */}
      {submittedData && (
        <div className="card shadow-lg p-4 mt-5">
          <h3 className="text-center fw-bold">🎟 Fee Payment Slip</h3>
          <hr />
          <p><strong>Student Name:</strong> {submittedData.studentName}</p>
          <p><strong>Class:</strong> {submittedData.className}</p>
          <p><strong>Roll No:</strong> {submittedData.rollNo}</p>
          <p><strong>Month:</strong> {submittedData.month}</p>
          <p><strong>Fee Type:</strong> {submittedData.feeType}</p>
          <p><strong>Amount:</strong> PKR {submittedData.amount}</p>
          <p><strong>Payment Method:</strong> {submittedData.paymentMethod}</p>
          <p><strong>Receipt No:</strong> {submittedData.receiptNo}</p>

          <div className="text-center mt-4">
            <button onClick={handleSave} className="btn btn-success me-3 px-4">
              💾 Save
            </button>
            <button onClick={handlePrint} className="btn btn-primary px-4">
              🖨 Print
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OfflineFeePay;
