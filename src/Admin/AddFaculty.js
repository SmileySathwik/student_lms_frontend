import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import  config from '../config'

const AddFaculty = () => {
  const [formData, setFormData] = useState({
    name: '',
    fid:'',
    email: '',
    phoneNumber: '',
    password: '',
    gender: '',
    course:''
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
    axios.post(`${config.url}/api/v1/admin/addfaculty`, formData)
      .then(response => {
        console.log('Faculty added successfully:', response.data);
        // Reset form after successful submission
        setFormData({
          name: '',
          fid:'',
          email: '',
          phoneNumber: '',
          password: '',
          gender: '',
          course:''
        });
        toast.success("Faculty Added Successfully!!")
      })
      .catch(error => {
        console.error('Error adding Faculty:', error);
      });
  };

  return (
    <div>
        <center><h3>Add Faculty</h3></center>
        <form className="form-container" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="name">Faculty id:</label>
            <input type="text" id="fid" name="fid" value={formData.fid} onChange={handleChange} />
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
        <div>
            <label htmlFor="course">Course Code:</label>
            <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} />
        </div>
        <button type="submit">Add Faculty</button>
        </form>
    </div>
  );
};

export default AddFaculty;
