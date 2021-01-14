import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProfileContainer from '../components/ProfileContainer';
import './Profile.css';
import languaje from '../data/languaje.json';
import {useTranslation} from 'react-i18next';

const Profile: React.FC = () => {
  const {t, i18n } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("Profile")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProfileContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
