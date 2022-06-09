import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";





export function EditItem(user) {
    const CategoryChoosed = (e) => {
        let Products = JSON.parse(localStorage.getItem("products"));
        let temp=Products.find((product)=>e.target.value===product.name)
        setProductname(temp.name)
        setProductprice(temp.price)
        setProductimage(temp.picture)
        console.log(e.target.value)
        console.log(temp)
        // showProducts(e);
    }
    
  
  const [Product, setProduct] = useState(null)
  const [price, setProductprice] = useState();
  const [name, setProductname] = useState()
  const [image, setProductimage] = useState()
//   useEffect(() => {
//     console.log(Product)
  
    
    
//   }, [Product])
  
  let Products = JSON.parse(localStorage.getItem("products"));
//   const [productsList, setProductsList] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    let Products = JSON.parse(localStorage.getItem("products"));
    console.log(e);
    const ProductName = e.target[0].value;
    console.log(ProductName);
    const ProductType = e.target[1].value;
    console.log(ProductType);
    const ProductPrice = e.target[2].value;
    console.log(ProductPrice);
    // const Image=target.files
    // const Image=document.getElementById("image").files[0].name; 
    const Image = e.target[3].value;
    // const Image = Imagee;
    // const selectedFile = e.target.input.files[3];
    //     console.log('Selected File', selectedFile);
    //     var data = new FormData();
    //     data.append('file', selectedFile);
    //     console.log('Form Data', data);
    console.log(Image);
    

    
    Products.push({"id": (Products.length).toString(), "type": ProductType, "name": ProductName, "price": ProductPrice, "picture": Image, "Quanity": "1"});
    localStorage.setItem("products", JSON.stringify(Products));
    alert("המוצר נוסף בהצלחה")

  }
  const navigate = useNavigate();
  useEffect(() => {
    if (user.access != "admin") navigate("/");
    return null;
  }, []);
  return (
    <form onSubmit={submitHandler}>
      <div className="form-innerr">
        <h2>הוספת מוצר</h2>
        
        <div className="form-group">
          
         
        </div>
        <div className="form-group">
          <label htmlFor="email">שם המוצר</label>
          <input type="name" name="name" id="name" onChange={(e) => setProductname(e.target.value)} value={name|| ''}/>
        </div>
        <div className="form-group">
          <label htmlFor="type" style={{    margin: "10px"}}>קטגוריה</label>
          <br />
            
          <select id="type" style={{width: "200px"}} onChange={CategoryChoosed} >
          <option defaultValue selected disabled hidden/> 
          {Products.map((product,key) => {
                    return <option value={product.name} key={key} style={{width: "200px"}} >{product.name}</option>})}
               
            </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">מחיר המוצר</label>
          <input type="price" name="price" id="price" onChange={(e) => setProductprice(e.target.value)} value={price|| ''}/>
        </div>
        <div className="form-group">
        <label htmlFor="image">הוספת תמונה</label>
          <input type="image " name="image " id="image " onChange={(e) => setProductimage(e.target.value)} value={image|| ''}/>
 {/* <input  type="file" id="select-image" />*/}
  {/* <label htmlFor="select-image"></label> 
  <input
                id="image"
                type="file"
                name="input"
                onChange={(value)=>console.log(value)}
              /> */}
          </div>
        <input type="submit" value="העלאה" />
      </div>
    </form>
  );
}
