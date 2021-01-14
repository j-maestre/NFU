import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import languaje from '../../data/languaje.json';
import { Button} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

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
  IonImg

} from '@ionic/react';
import './Profile.css';
import {useTranslation} from 'react-i18next';
import i18n from "../../i18n";


export default class Profile extends React.Component {
  

    constructor(props){
      super(props);      
      this.state = { 
        languajes: languaje.types,
        idiom: i18n.init.lng,
      };          
    }

    
    
    render() {
      // const {t, i18n } = useTranslation();

      // {i18n.init.lng=this.state.idiom}
      return (
        <>
       
          <form padding-right>
            <ion-item>
              <ion-label position="floating">Email/Username</ion-label>
              <ion-input type="text" formControlName="email" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password" formControlName="password" required></ion-input>
            </ion-item>
            <div>Actual languaje: {this.state.idiom}</div>
            {/* <div>{this.state.languajes.$(eval(this.state.idiom)).Profile}</div> */}
            <ion-item className="languajes">
            {Object.values(this.state.languajes).map((data,index)=>(
              <IonSlide key={index}>
              <IonCard key={'col_'+index}>
                <IonCardHeader>
                  <IonImg src={data.Img} onClick={ () => this.setState({ idiom: data.Type })} ></IonImg>
                </IonCardHeader>
              </IonCard>
                  </IonSlide> 

            ))}
            </ion-item>
     
          </form>
        </>
       
      );
    }
}