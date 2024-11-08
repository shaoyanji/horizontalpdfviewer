        import React, { useState } from 'react';
        import DataTable from './DataTable';

        function Form() {
          const [formData, setFormData] = useState({
            name: '',
            email: '',
            age: '',
            message: ''
          });
          const [submittedData, setSubmittedData] = useState([]);
          const [showDataTable, setShowDataTable] = useState(false); // State to control showing DataTable

          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };

          const handleSubmit = (e) => {
            e.preventDefault();
            const newData = { ...formData };
            setSubmittedData([...submittedData, newData]);
            setFormData({
              name: '',
              email: '',
              age: '',
              message: ''
            });
          };

          const handleViewData = () => {
            setShowDataTable(true); // Show DataTable when button is clicked
          };

          return (
            <div>
              <h1>Submit Data</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />

                <label htmlFor="age">Age:</label><br />
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} /><br /><br />

                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" rows="4" cols="50" value={formData.message} onChange={handleChange}></textarea><br /><br />

                <input type="submit" value="Submit" />
              </form><br /><br />
              {/* Display button only when there is submitted data */}
              {submittedData.length > 0 && (
                <button onClick={handleViewData}>View Submitted Data</button>
              )}
              {/* Render DataTable component when showDataTable state is true */}
              {showDataTable && <DataTable data={submittedData} />}
            </div>
          );
        }

        export default Form;
