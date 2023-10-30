import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowType.css';
import image from '../AddType/materiel.jpg'
function ShowType() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchType();
  }, []);

  useEffect(() => {
    handleTypeChange();
  }, [selectedType]);

  const fetchType = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get_type");
      setTypes(response.data);
    } catch (error) {
      console.error('Error fetching types:', error);
    }
  };

  const handleTypeChange = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getProductsByTypes/${selectedType}`);
      setProducts(response.data);
    } catch (error) {
      console.error(`Error fetching products for type ${selectedType}:`, error);
    }
  };

  return (
    <>
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">Produit du type <div style={{color:"gray"}}>{selectedType}</div></h5>
          <div className="row">
          <select
              name="productType"
              id="productType"
              onChange={(e) => setSelectedType(e.target.value)}
              value={selectedType}
              style={{
                backgroundColor: 'gray',
                color: 'black',
                padding: '10px',
                borderRadius: '5px',
                width: '50%',
              }}
            >
              {types.map((item, index) => (
                <option key={index} value={item.nom}>
                  {item.nom}
                </option>
              ))}
            </select>
         
            <div className="row">
         
         <br /><br />     {products.map((product, index) => (
                <div key={index} className="col-xs-12 col-sm-6 col-md-4">
                  <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <br /><br />
                            {Object.entries(product).map(([key, value], index) => (
                              <div  key={index}>
                                <h4  className="card-title" style={{ width: '100%', height: 'auto' }}>{key}: {value}</h4>
                              </div>
                            ))}
                            <p className="card-text">This is basic card with image on top, title, description and button.</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <ul className="list-inline">
                             
                              
                            <img src={image} alt=""    style={{ width: '100%', height: 'auto' }}
                                  className="img-fluid"/>
                              <li className="list-inline-item"></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShowType;
