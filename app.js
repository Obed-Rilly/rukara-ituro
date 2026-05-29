// Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBKy8BRVEykWT0H2Ro-3yKuD8HsFyk12sk",
  authDomain: "rukara-ituro-system.firebaseapp.com",
  projectId: "rukara-ituro-system",
  storageBucket: "rukara-ituro-system.firebasestorage.app",
  messagingSenderId: "638528716738",
  appId: "1:638528716738:web:3e55d50d52b94006afe05b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save Christian
window.saveChristian = async function () {

  let amazina = document.getElementById("amazina").value;
  let phone = document.getElementById("phone").value;
  let santarali = document.getElementById("santarali").value;
  let umuryangoremezo = document.getElementById("umuryangoremezo").value;
  let contributionYear = document.getElementById("year").value;
  let contributionDate = document.getElementById("date").value;

  let kiliziya = document.getElementById("kiliziya").value;
  let noheli = document.getElementById("noheli").value;
  let pasika = document.getElementById("pasika").value;
  let asomusiyo = document.getElementById("asomusiyo").value;
  let inyubako = document.getElementById("inyubako").value;
  let diyosezi = document.getElementById("diyosezi").value;

  await addDoc(collection(db, "abakristu"), {
    amazina,
    phone,
    santarali,
    umuryangoremezo,
    contributionYear,
    contributionDate,
    kiliziya,
    noheli,
    pasika,
    asomusiyo,
    inyubako,
    diyosezi
  });

  alert("Amakuru yabitswe neza");

  window.location.href = "dashboard.html";
};

// Load Christians
window.loadChristians = async function () {

  let list = document.getElementById("list");
  list.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "abakristu"));

  querySnapshot.forEach((doc) => {

    let data = doc.data();

    list.innerHTML += `
      <div class="member-card">
        <h3>${data.amazina}</h3>

        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Santarali:</b> ${data.santarali}</p>
        <p><b>Umuryangoremezo:</b> ${data.umuryangoremezo}</p>
        <p><b>Umwaka:</b> ${data.contributionYear}</p>
        <p><b>Italiki:</b> ${data.contributionDate}</p>

        <hr>

        <p>Kiliziya: ${data.kiliziya}</p>
        <p>Noheli: ${data.noheli}</p>
        <p>Pasika: ${data.pasika}</p>
        <p>Asomusiyo: ${data.asomusiyo}</p>
        <p>Inyubako: ${data.inyubako}</p>
        <p>Diyosezi: ${data.diyosezi}</p>
      </div>
    `;
  });
    }
