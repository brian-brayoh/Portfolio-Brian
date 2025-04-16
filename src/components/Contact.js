import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setStatus('');
    try {
      // Replace these placeholders with your EmailJS credentials
      await emailjs.send(
        'service_wvr9sr8',
        'template_bbd0den',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message
        },
        'arPzp_mqTSvFZmfnq' // e.g. 'user_xxxxxxxx'
      );
      setStatus('Message sent successfully!');
      setForm(initialState);
    } catch (err) {
      setStatus('Failed to send message. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <p>Have questions? I'd love to hear from you!</p>
      <ul className="contact-info">
        <li><strong>Email:</strong> mmuthomibrian@gmail.com</li>
        <li><strong>Phone:</strong> +254746404011</li>
        <li><strong>Address:</strong> Kenya</li>
      </ul>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
        <input
          type="text"
          name="subject"
          placeholder="Subject (Optional)"
          value={form.subject}
          onChange={handleChange}
          disabled={loading}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        {status && <div className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</div>}
      </form>
      <div className="form-note">
    
      </div>
    </section>
  );
};

export default Contact;
