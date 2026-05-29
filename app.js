// FIREBASE VERSION 3 - RUKARA ITURO SYSTEM

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBKy8BRVEykWT0H2Ro-3yKuD8HsFyk12sk",
  authDomain: "rukara-ituro-system.firebaseapp.com",
  projectId: "rukara-ituro-system",
  storageBucket: "rukara-ituro-system.firebasestorage.app",
  messagingSenderId: "638528716738",
  appId: "1:638528716738:web:3e55d50d52b94006afe05b"
};

// INITIALIZE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// SAVE MEMBER
window.saveMember = async function () {

  const amazina = document.getElementById("amazina").value;
  const phone = document.getElementById("phone").value;
  const santarali = document.getElementById("santarali").value;
  const umuryangoremezo = document.getElementById("umuryangoremezo").value;
  const umwaka = document.getElementById("umwaka").value;

  const kiliziya = Number(document.getElementById("kiliziya").value || 0);
  const noheli = Number(document.getElementById("noheli").value || 0);
  const pasika = Number(document.getElementById("pasika").value || 0);
  const asomusiyo = Number(document.getElementById("asomusiyo").value || 0);
  const inyubako = Number(document.getElementById("inyubako").value || 0);
  const diyosezi = Number(document.getElementById("diyosezi").value || 0);

  const italiki = document.getElementById("italiki").value;

  try {

    await addDoc(collection(db, "abakristu"), {

      amazina,
      phone,
      santarali,
      umuryangoremezo,
      umwaka,

      contributions: {
        kiliziya,
        noheli,
        pasika,
        asomusiyo,
        inyubako,
        diyosezi
      },

      italiki,
      createdAt: new Date()

    });

    alert("Umukristu yabitswe neza");

    window.location.href = "dashboard.html";

  } catch (error) {

    alert("Hari ikibazo: " + error);

  }

};

// LOAD MEMBERS
window.loadMembers = async function () {

  const querySnapshot = await getDocs(collection(db, "abakristu"));

  let output = "";

  querySnapshot.forEach((docu) => {

    const data = docu.data();

    output += `
      <div class="member-card">
        <h3>${data.amazina}</h3>
        <p>Santarali: ${data.santarali}</p>
        <p>Umuryangoremezo: ${data.umuryangoremezo}</p>
        <p>Phone: ${data.phone || "-"}</p>
        <p>Umwaka: ${data.umwaka}</p>
      </div>
    `;

  });

  document.getElementById("members").innerHTML = output;

};
