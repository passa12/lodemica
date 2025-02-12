// Importar Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuración de Firebase (usa tu configuración real)
const firebaseConfig = {
  apiKey: "AIzaSyB98r0hWQe5e6l_-kt_uo6UtnJ8qiQPnjU",
  authDomain: "lodemicaturnos.firebaseapp.com",
  projectId: "lodemicaturnos",
  storageBucket: "lodemicaturnos.firebasestorage.app",
  messagingSenderId: "211971887324",
  appId: "1:211971887324:web:eb0844c882be45c7b16419"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener turnos
async function obtenerTurnos() {
  const querySnapshot = await getDocs(collection(db, "turnos"));
  let turnos = [];
  querySnapshot.forEach((doc) => {
    turnos.push(doc.data());
  });
  return turnos;
}

export { obtenerTurnos };
