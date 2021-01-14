// import React from 'react';
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from 'react-bootstrap';

import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {
    IonSlides,
    IonSlide,
    IonRow,  
    IonLabel,  
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent
  
  } from '@ionic/react';

  // require("react-bootstrap/ModalHeader")

const HomeRow = (props) =>{
    const slideOpts = {
        slidesPerView: 'auto', 
        zoom: false, 
        grabCursor: true,       
        virtual: true, 
      }; 


      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = (index) => {
        setShow(true);
      };

    return (
        <>
        
        <IonRow>
        <IonLabel className="my-label"></IonLabel> 
        <IonSlides  options={slideOpts}>
        {props.matches.map((eventEPG,index) => (  
         <IonSlide key={index} onClick={handleShow(index)}
          // onClick={ 
          //   //Aqui es donde hace click en el evento
          //   () => handleClick(eventEPG.spa.start,eventEPG.spa.duration) 
          //   } 
        >
          <IonCard key={'col_'+index}>
          <IonCardHeader>
            <IonCardSubtitle>{eventEPG.match.date}</IonCardSubtitle>
            <IonCardTitle>{eventEPG.match.game}</IonCardTitle>
          </IonCardHeader>

          {/*<IonCardContent>
            {eventEPG.spa.ext && eventEPG.spa.ext.text}
          </IonCardContent> */}
        </IonCard>
          </IonSlide> 
        ))}
      </IonSlides>
      </IonRow>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          </>
    )
}

export default HomeRow;