import {React,useState} from 'react'

import { Link } from 'react-router-dom'
import axios from "axios";
export default function ItemCategory() {
    const [category_image, setcategory_image] = useState(null)
    const [ItemCategoryData, setItemCategoryData] = useState({
        item_category_id:"",
        category_name:"",
        category_name_hindi:"",
        vehicle_id:"",
        priority:0
        
    })

    const formhandler=(e)=>{
        e.preventDefault();
        const response = window.confirm("Are you sure you want to do that?");
        if(response)
        {
            console.log(ItemCategoryData,category_image)
            let url="http://localhost:5002/api/addItemCategory";
            const formdata=new FormData();

            formdata.append("item_category_id",ItemCategoryData.item_category_id);
            formdata.append("category_name",ItemCategoryData.category_name);
            formdata.append("category_name_hindi",ItemCategoryData.category_name_hindi);
            formdata.append("vehicle_id",ItemCategoryData.vehicle_id);
            formdata.append("priority",ItemCategoryData.priority);
            formdata.append("ItemCategoryImage",category_image);
            formdata.append("created_by","Admin1");
            formdata.append("updated_by","Admin2");
            formdata.append("is_deleted",0);

            
            fetch(url,{
                method:'POST',
                
                body:formdata
            }).then(()=>{
            
                alert("successfully done")
            }).catch((err)=>{
                console.log(err);

            })
        }
        else
        {
            alert("Not submitted")
        }

    }
   
    const handleDataChange=(e)=>{
        
        if(e.target.name==="category_image")
        {
            
             setcategory_image(e.target.files[0])
        }
        else{
                setItemCategoryData({...ItemCategoryData,[e.target.name]: e.target.value})
            }

    }
    
  return (
      <div className="container">
        <div className="row d-flex justify-content-center my-5" style={{backgroundColor:'rgb(14 12 12)',color:'white'}}>
            <div className="col-5 "  >
                <form onSubmit={formhandler}>
                    <div className="row my-4" style={{textAlign:'center'}}>
                        <h2 >ItemCategroy</h2>
                    </div>
                    <div className="row my-2">
                        <label  className="form-label">Item Category Id</label>
                        <input
                         type="text"
                         className="form-control" 
                         id="exampleFormControlInput1" 
                         placeholder="Enter Item Category Id"
                         name="item_category_id"
                         value={ItemCategoryData.item_category_id}
                         onChange={handleDataChange}
                         />
                    </div>
                    <div className="row my-1">
                        <label  className="form-label">Item Category Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput2" 
                        placeholder="Enter Item Category Name"
                        name="category_name"
                        value={ItemCategoryData.category_name}
                        onChange={handleDataChange}
                        />
                    </div>
                    <div className="row my-1">
                        <label  className="form-label">Item Category Name(Hindi)</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput2" 
                        placeholder="Enter Item Category Name in hindi"
                        name='category_name_hindi'
                        value={ItemCategoryData.category_name_hindi}
                        onChange={handleDataChange}
                        />
                    </div>
                    <div className="row my-1">
                        <label  className="form-label">Vehicle Id</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput2" 
                        placeholder="Enter Vehicle id"
                        name='vehicle_id'
                        value={ItemCategoryData.vehicle_id}
                        onChange={handleDataChange}
                        />
                    </div>
                    <div className="row my-1">
                        <label  className="form-label">Priority</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        id="exampleFormControlInput2" 
                        placeholder="Enter Priority"
                        name='priority'
                        value={ItemCategoryData.priority}
                        onChange={handleDataChange}
                        />
                    </div>
                    <div className="row my-1">
                        <label  className="form-label">Item Category Image</label>
                        <input type="file" 
                        name='category_image'
                        
                        onChange={handleDataChange}
                        />
                    </div>
                   <div className="row my-2 mb-4">
                        <div className="row d-flex justify-content-center">
                            <div className="col-4">

                               <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </div>
                   </div>
                </form>   
            </div>
        </div>
      </div>
  )
}
