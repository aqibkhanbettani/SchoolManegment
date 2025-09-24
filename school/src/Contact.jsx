import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4 text-primary">Contact Us</h1>
      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-6">
          <div className="card shadow-lg p-4">
            <h4 className="mb-3 text-secondary">Send us a message</h4>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Subject */}
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <div className="invalid-feedback">{errors.subject}</div>
                )}
              </div>

              {/* Message */}
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-6">
          <div className="card shadow-lg p-4">
            <h4 className="mb-3 text-secondary">Our Contact Information</h4>
            <p><strong>📍 Address:</strong> University Road, Peshawar, Pakistan</p>
            <p><strong>📞 Phone:</strong> +92 345 1234567</p>
            <p><strong>📧 Email:</strong> info@schoolmanagement.com</p>

            {/* Google Map */}
            <div className="mt-3">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.2316609154513!2d71.5168!3d34.0150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91f4cde14dfad%3A0xd1b7cb5f3a81d7e0!2sUniversity%20Road%2C%20Peshawar!5e0!3m2!1sen!2s!4v1683108422453!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
