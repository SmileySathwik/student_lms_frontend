import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import  config from '../config'

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    sid:'',
    email: '',
    phoneNumber: '',
    password: '',
    gender: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post(`${config.url}/api/v1/admin/addstudent`, formData)
      .then(response => {
        console.log('Student added successfully:', response.data);
        // Reset form after successful submission
        setFormData({
          name: '',
          sid:'',
          email: '',
          phoneNumber: '',
          password: '',
          gender: '',
        });
        toast.success("Student Added Successfully!!")
      })
      .catch(error => {
        console.error('Error adding student:', error);
      });
  };

  return (
    <div>
    <center><h2>Add Student</h2></center>
    <br/><br/>
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="name">Student id:</label>
        <input type="text" id="sid" name="sid" value={formData.sid} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit">Add Student</button>
    </form>
    </div>
  );
};

export default AddStudent;
