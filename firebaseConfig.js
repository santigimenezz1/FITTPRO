import React, { useContext } from "react";
import { CartContext } from "./Context/Context";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";



// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD-5BEJfqJs17ii7MIkufC-rSEMqk2uxww",
  authDomain: "kit-soccer-fittlline.firebaseapp.com",
  projectId: "kit-soccer-fittlline",
  storageBucket: "kit-soccer-fittlline.firebasestorage.app",
  messagingSenderId: "144159455233",
  appId: "1:144159455233:web:9247c6dccafe6a79016800",
  measurementId: "G-YMMS6W2LYX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// =======================
// FUNCIONES DE NOTIFICACIÓN
// =======================


// =======================
// FUNCIÓN LOGIN
// =======================

export const login = async (email, password, setUsuarioOn) => {
  try {
  
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res && res.user) {
      setUsuarioOn(true);
      console.log("✅ Sesión iniciada");
       let ms = auth.currentUser
    console.log({ms})
    } else {
      console.log("❌ No se pudo iniciar sesión");
    }
  } catch (error) {
    console.log("❌ Error en login:", error);
    showMessage({
      message: 'Error en el inicio de sesión',
      description: 'Revisa tu correo y contraseña',
      type: 'danger',
    });
  }
   
};

// =======================
// FUNCIÓN CREATE (registro)
// =======================

export const create = async (email, password, setUsuarioOn) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res && res.user) {
      setUsuarioOn(true);
      console.log("✅ Usuario creado");
    }
  } catch (error) {
    console.log("❌ Error en registro:", error);
    showMessage({
      message: 'Error al crear la cuenta',
      description: error.message,
      type: 'danger',
    });
  }
};
