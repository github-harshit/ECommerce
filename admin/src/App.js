 import {useState} from "react"; 
 import axios from "axios"
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null,
    price : '', 
    categories: [], 
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Upload file to Cloudinary
    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append('file', formData.file);
    cloudinaryFormData.append('upload_preset', 'Ecommerce');

    try {
      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dird1jf6e/image/upload',
        cloudinaryFormData
      );

      
       const { secure_url: imageUrl } = cloudinaryResponse.data;
       console.log(imageUrl); 


      // Send rest of the form data to your server; 

      


      const serverResponse = await axios.post('http://localhost:5000/api/products/add', {
        title: formData.name,
        desc: formData.description,
        img: imageUrl,
        price:formData.price // assuming you want to include the image URL in the server data
      }, );
       console.log(serverResponse);


      // Handle server responses as needed...
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="App">
         <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        File:
        <input type="file" name="file" onChange={handleFileChange} />
      </label>
      <br />
      <label>
        Price
        <input type= "number" name="price" onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
