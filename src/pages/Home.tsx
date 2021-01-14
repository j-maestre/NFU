import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomeContainer from '../components/HomeContainer';
import './Home.css';
import languaje from '../data/languaje.json';
import {useTranslation} from 'react-i18next';

const Home: React.FC = () => {

const {t, i18n } = useTranslation();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("Home")}</IonTitle> {/*Aqui es donde va el cambio de lenguaje*/} {/*languaje.types.en.Home*/}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
