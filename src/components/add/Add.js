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
  IonItem,
  DatePicker

} from '@ionic/react';
import './Add.css';



export default class Add extends React.Component {
  

    constructor(props){
      super(props);      
      this.state = { 
        matches: epgData.games,
        name:epgData.name,
        title:epgData.title,
      };          
    }


  
    render() {
      


      
      return (
        <>
           <form padding-right>
    <ion-item>
      <ion-label position="floating">Game name</ion-label>
      <ion-input type="text" formControlName="game_name" required></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Players you need</ion-label>
      <ion-input type="number" placeholder="1" formControlName="players_left" required></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Start Date</ion-label>
      <ion-datetime value="2021-01-01" placeholder="Select Date"></ion-datetime>
    </ion-item>
    <ion-item>
      <ion-label>Start Time</ion-label>
      <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
    </ion-item>

    <Button>Create</Button>
     
    </form>
        </>
       
      );
    }
}


//Para el login
{/* <form padding-right>
<ion-item>
  <ion-label position="floating">Email/Username</ion-label>
  <ion-input type="text" formControlName="email" required></ion-input>
</ion-item>
<ion-item>
  <ion-label position="floating">Password</ion-label>
  <ion-input type="password" formControlName="password" required></ion-input>
</ion-item> */}