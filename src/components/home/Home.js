import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import epgData from '../../data/epg.json';
import { Button} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonRow,  
  IonLabel,  
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent

} from '@ionic/react';
import './Home.css';
// require("react-bootstrap/ModalHeader")


export default class Home extends React.Component {
  

    constructor(props){
      super(props);      
      this.state = { 
        matches: epgData.games,
        name:epgData.name,
        title:epgData.title,
      };          
    }


  
    render() {
      console.log("render");
      
      const slideOpts = {
        slidesPerView: 'auto', 
        zoom: false, 
        grabCursor: true,       
        virtual: true, 
      }; 


      // const [show, setShow] = useState(false);

      // const handleClose = () => setShow(false);
      // const handleShow = (index) => {
      //   setShow(true);
      // };
      function join (selected,matches){
        console.log("JOOOOINNN")
        Object.values(matches).map((data,index)=>{
          if(index==selected){
            data.match.players_left--;
            // alert("Joined!");
            // return
          }
        });
      }



      return (
        <>
          <IonLabel className="my-label">{this.state.name}</IonLabel> 

          <IonRow>
          <IonLabel className="my-label"></IonLabel> 
          <IonSlides  options={slideOpts}>
            {/* <div>hola</div> */}
            {/* <div>{this.state.idiom}</div> */}
          {Object.values(this.state.matches).map((data,index)=>(
            <IonSlide key={index} //onClick={handleShow(index)}
            >
            <IonCard key={'col_'+index}>
            <IonCardHeader>
              
              <IonCardTitle>{data.match.game}</IonCardTitle>
              <IonCardSubtitle>Left: {data.match.players_left}</IonCardSubtitle>
              <Button variant="primary" onClick={join(index,this.state.matches)}>+</Button>

            </IonCardHeader>

          <Button variant="secondary">Fav</Button>
          </IonCard>
            </IonSlide> 

        ))}
        </IonSlides>
        </IonRow>


        {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}
        </>
       
      );
    }
}