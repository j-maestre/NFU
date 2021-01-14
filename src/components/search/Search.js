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
  IonCardContent,
  IonInput,
  IonItem

} from '@ionic/react';
import './Search.css';



export default class Search extends React.Component {
  

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


      function join (selected,matches){

        Object.values(matches).map((data,index)=>{
          if(index==selected){
            data.match.players_left--;
    
          }
        });
      }


      // let [text, setText] = useState();
      // const [number, setNumber] = useState();
      return (
        <>
      
        <ion-item>
          <ion-label position="floating">Search</ion-label>
          <ion-input ></ion-input>
        </ion-item>


          <IonLabel className="my-label">{this.state.name}</IonLabel> 

          <IonRow>
          <IonLabel className="my-label"></IonLabel> 
          <IonSlides  options={slideOpts}>
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
        </>
       
      );
    }
}