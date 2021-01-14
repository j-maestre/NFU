import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AddContainer from '../components/AddContainer';
import './Add.css';
import {useTranslation} from 'react-i18next';

const Add: React.FC = () => {

  const {t, i18n } = useTranslation();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>{t("Add")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AddContainer name="Add" />
      </IonContent>
    </IonPage>
  );
};

export default Add;
