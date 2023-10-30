import React, { useState } from 'react'
import './AddType.css';
import plus from './69088121-illustration-de-signe-plus-icône-grise.jpg';
import img from './IMAGE.jpg'
function AddType() {
    const [nom, setNom] = useState("");
    const [nbrChamps, setNbrChamps] = useState(0)
    const [valeurs, setValeurs] = useState([]); 

    const ajouterAuTableau = (valeur) => {
        if (valeurs.length === 0 && valeur.trim() === '') {
            return; 
        }
        setValeurs([...valeurs, valeur]);
    }
    
    const handleBlur = (e) => {
        ajouterAuTableau(e.target.value);
    }
    const handleClick = () => {
        console.log(nbrChamps);
        setNbrChamps(nbrChamps+1);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const url = 'http://localhost:8080/create_type/' + nom;
        const data = valeurs;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur HTTP ' + response.status);
                }
                return response.json();
            })
            .then(data => console.log('Réponse du serveur :', data))
            .catch(error => console.error('Erreur :', error));
    setValeurs([]);
    setNbrChamps(0);
    setNom("");
    setNom("");

        }

    return (
        <>
           








<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <br/>
                    </div>
                    <div class="col-md-9 register-right">
                        
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Ajouter un type</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                       
                                        
                                       
                                        <form action=""  class="form-group" onSubmit={handleSubmit}>
              
           
                <input type="text" class="form-control" placeholder='entrer le nom du type' id='tableName' 
                value={nom}
                 onChange={(e) => setNom(e.target.value)} />
              
                <br />

                {
                    Array.from({ length: nbrChamps }).map((_, index) => (
                      <>
                      
                       <input
                            key={index}
                            type="text"
                            defaultValue={null}
                            class="form-control"
                            onBlur={handleBlur} // Appelé lorsque l'élément perd le focus
                           
                            />
                        
                        <br />
                        </> 
                    ))
                }
                <br />
                <button type="button"  onClick={handleClick}>
                    <img src={plus} style={{height:"50px",width:"50px" ,float: "right", display: "flex",
    cursor: "pointer"}} alt="" />
                </button> <br /> <br />
                <button type="submit" className='btnRegister'>enregistrer</button>
            </form> 
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <img src={img} alt="" style={{width:"220px",height:"300px"}} />
                                        
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddType;

