import React from 'react'
import "./input.css"
import { useFormik } from 'formik';
import axios from 'axios';
import {Toaster,toast} from 'react-hot-toast';
function AddProducts() {
  const formik = useFormik({
    initialValues: {
      name: '',
      unitPrice: '',
      unitsInStock: '',
    },
    onSubmit: (values) => {
      axios
        .post("https://northwind.vercel.app/api/products", { ...values })
        .then((res) => {
          toast.success("Item added");
          console.log(res);
        });
    },
  });
  return (
    <div className='yan'>
 <form onSubmit={formik.handleSubmit}>
      
        <input placeholder='name' className='inp'
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <input placeholder='unitPrice'  className='inp'
          id="unitPrice"
          name="unitPrice"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.unitPrice}
        />
        <input placeholder='unitStock' className='inp'
          id="unitsInStock"
          name="unitsInStock"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.unitsInStock}
        />

        <button className='sum' type="submit">Submit</button>
      </form>
     <Toaster/>
    </div>
  )
}

export default AddProducts
