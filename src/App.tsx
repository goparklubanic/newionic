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
import { useRef, useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  // referensi variabel dan elemen html
  const bb = useRef<HTMLIonInputElement>(null);
  const tb = useRef<HTMLIonInputElement>(null);

  // penyematan value ke dalam elemen html
  const [imt, setImt] = useState(0);
  
  // Triger Tombol
  const hitungImt=() => {
    console.log('hitungImt')
    // Menampung input dan memformulasikan index masa tubuh
    // formula pertama
    // const berat = Number(bb.current?.value);
    // const tinggi = Number(tb.current?.value);
    // const imt = +berat / (+tinggi * +tinggi);
    // console.log(imt)

    // formula kedua
    const berat = bb.current!.value;
    const tinggi = tb.current!.value;
    if( !berat || !tinggi ){
      return;
    }
    const imt = +berat /(+tinggi * +tinggi);
    console.log(imt)

    // tampilkan hasil perhitungan
    setImt(imt)
  }
  const resetImt=() => {
    console.log('resetImt')
    bb.current!.value = '';
    tb.current!.value = '';
    setImt(0);
  }
  
  return(
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
                <IonInput ref={tb}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>Berat Badan (kg)</IonLabel>
                <IonInput ref={bb}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton className='w-full' onClick={hitungImt}>
                <IonIcon slot='start' icon={scaleOutline} />
                Hitung
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className='w-full' onClick={resetImt}>
                <IonIcon slot='start' icon={refreshOutline} />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>Index Masa Tubuh</IonLabel>
                <IonInput value={imt}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
}

export default App;
