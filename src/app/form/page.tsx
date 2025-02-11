'use client';

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('All fields are required');
      return false;
    }
    if (formData.name.length > 50) {
      setError('Name must be 50 characters or less');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Invalid email format');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Phone number must be exactly 10 digits');
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (!validateInputs()) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit');
      await res.json();
      setMessage(`✅ Hello ${formData.name}, your form has been submitted successfully!`);
    } catch {
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '' });
    setMessage('');
    setError('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />

        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      
      <p id="error" style={{ color: 'red', visibility: error ? 'visible' : 'hidden' }}>{error}</p>
      <p id="message" style={{ color: 'green', visibility: message ? 'visible' : 'hidden' }}>{message}</p>
    </div>
  );
}
