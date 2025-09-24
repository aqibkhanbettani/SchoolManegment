const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // adjust if frontend runs elsewhere
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "",       // your MySQL password
  database: "school_db", // your DB name
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});


// ============================
// 📌 API Route: Admission Form
// ============================
app.post("/api/admission", (req, res) => {
  const {
    firstName,
    lastName,
    gender,
    dob,
    email,
    phone,
    address,
    classApplied,
    fatherName,
    fatherOccupation,
    motherName,
    previousSchool,
  } = req.body;

  const sql = `
    INSERT INTO admissions 
    (first_name, last_name, gender, dob, email, phone, address, class_applied, father_name, father_occupation, mother_name, previous_school, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
  `;

  db.query(
    sql,
    [
      firstName,
      lastName,
      gender,
      dob,
      email,
      phone,
      address,
      classApplied,
      fatherName,
      fatherOccupation,
      motherName,
      previousSchool,
    ],
    (err, result) => {
      if (err) {
        console.error("❌ Insert error:", err.sqlMessage);
        return res.status(500).json({ error: "Database insert failed" });
      }
      res.json({
        message: "✅ Admission form saved successfully!",
        id: result.insertId,
      });
    }
  );
});


// ============================
// 📌 API Route: Fee Payment
// ============================
app.post("/api/fee-payment", (req, res) => {
  const {
    studentName,
    className,
    rollNo,
    month,
    feeType,
    amount,
    paymentMethod,
    transactionId,
  } = req.body;

  const sql = `
    INSERT INTO fee_payments 
    (student_name, class, roll_no, month, fee_type, amount, payment_method, transaction_id, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
  `;

  db.query(
    sql,
    [studentName, className, rollNo, month, feeType, amount, paymentMethod, transactionId],
    (err, result) => {
      if (err) {
        console.error("❌ Insert error:", err.sqlMessage);
        return res.status(500).json({ error: "Database insert failed" });
      }
      res.json({
        message: "✅ Fee payment saved successfully!",
        id: result.insertId,
      });
    }
  );
});


// ============================
// 🚀 Start Server
// ============================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
