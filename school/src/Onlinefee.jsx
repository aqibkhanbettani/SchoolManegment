import React, { useState } from "react";

function OnlineFeePay() {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    rollNo: "",
    month: "",
    feeType: "",
    amount: "",
    paymentMethod: "",
    transactionId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/fee-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      setFormData({
        studentName: "",
        className: "",
        rollNo: "",
        month: "",
        feeType: "",
        amount: "",
        paymentMethod: "",
        transactionId: "",
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
      <h1 className="text-center fw-bold mb-4 text-primary">Online Fee Payment</h1>
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

            {/* Roll No */}
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

            {/* Month */}
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
                <option>Credit/Debit Card</option>
                <option>Bank Transfer</option>
                <option>JazzCash</option>
                <option>Easypaisa</option>
                <option>Cash Deposit</option>
              </select>
            </div>

            {/* Transaction ID */}
            <div className="col-md-6">
              <label className="form-label">Transaction ID</label>
              <input
                type="text"
                className="form-control"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success px-5">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OnlineFeePay;
