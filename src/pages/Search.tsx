import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SearchContainer from '../components/SearchContainer';
import './Search.css';
import {useTranslation} from 'react-i18next';

const Search: React.FC = () => {
  const {t, i18n } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>{t("Search")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SearchContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Search;
