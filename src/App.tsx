// import { Redirect, Route } from 'react-router-dom'; <-origin
// import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'; <-origin
// import { IonReactRouter } from '@ionic/react-router'; <-origin
// import Home from './pages/Home'; <-origin
// origin = bawaan dari initial ionic project

import { 
  IonApp, 
  setupIonicReact, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonContent, 
  IonGrid, 
  IonCol, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonRow, 
  IonButton, 
  IonIcon
} from '@ionic/react';
import { scaleOutline, refreshOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
/* import '@ionic/react/css/palettes/dark.system.css'; */
import '@ionic/react/css/palettes/high-contrast.css'
/* import custom.css */
import './imt.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Masa Index Tubuh</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className='ion-padding'>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position='floating'>Tinggi Badan (meter)</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position='floating'>Berat Badan (kg)</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton className='w-full'>
              <IonIcon slot='start' icon={scaleOutline} />
              Hitung
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton className='w-full'>
              <IonIcon slot='start' icon={refreshOutline} />
              Reset
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
);

export default App;
