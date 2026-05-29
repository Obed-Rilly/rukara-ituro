let members = JSON.parse(localStorage.getItem("members")) || [];

function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(
(email === "admin@gmail.com" && password === "1234") ||
(email === "comptable@gmail.com" && password === "1234") ||
(email === "secretary@gmail.com" && password === "1234")
){

window.location.href = "dashboard.html";

}else{
alert("Wrong credentials");
}

}

function logout(){
window.location.href = "index.html";
}

function formatDate(dateString){

let d = new Date(dateString);

let day = String(d.getDate()).padStart(2,'0');
let month = String(d.getMonth()+1).padStart(2,'0');
let year = d.getFullYear();

return `${day}/${month}/${year}`;

}

function saveMember(){

let numero = document.getElementById("numero").value;

let contribution = {

italiki:formatDate(document.getElementById("italiki").value),

umwaka:document.getElementById("umwaka").value,

kiliziya:Number(document.getElementById("kiliziya").value || 0),
noheli:Number(document.getElementById("noheli").value || 0),
pasika:Number(document.getElementById("pasika").value || 0),
asomusiyo:Number(document.getElementById("asomusiyo").value || 0),
inyubako:Number(document.getElementById("inyubako").value || 0),
diyosezi:Number(document.getElementById("diyosezi").value || 0)

};

let found = members.find(m => m.numero === numero);

if(found){

found.contributions.push(contribution);

}else{

members.push({

amazina:document.getElementById("amazina").value,
numero,
phone:document.getElementById("phone").value,
santarali:document.getElementById("santarali").value,
umuryangoremezo:document.getElementById("umuryangoremezo").value,
contributions:[contribution]

});

}

localStorage.setItem("members", JSON.stringify(members));

alert("Saved successfully");

window.location.href = "dashboard.html";

}

function searchMember(){

let keyword = document.getElementById("searchInput").value.toLowerCase();

let results = document.getElementById("results");

results.innerHTML = "";

members.filter(m =>

m.amazina.toLowerCase().includes(keyword) ||
m.numero.toLowerCase().includes(keyword)

)

.forEach((m,index)=>{

results.innerHTML += `

<div class="result-item" onclick="openMember(${index})">

<h3>${m.amazina}</h3>

<p>${m.numero}</p>

<button>OK</button>

</div>

`;

});

}

function openMember(index){

localStorage.setItem("selectedMember", index);

window.location.href = "member.html";

}

function loadMemberFile(){

let index = localStorage.getItem("selectedMember");

if(index === null) return;

let m = members[index];

let div = document.getElementById("memberFile");

if(!div) return;

let contributionsHtml = "";

m.contributions.forEach(c=>{

contributionsHtml += `

<div class="contrib">

<p><b>Itariki:</b> ${c.italiki}</p>
<p><b>Umwaka:</b> ${c.umwaka}</p>
<p>Kiliziya: ${c.kiliziya} Frw</p>
<p>Noheli: ${c.noheli} Frw</p>
<p>Pasika: ${c.pasika} Frw</p>
<p>Asomusiyo: ${c.asomusiyo} Frw</p>
<p>Inyubako: ${c.inyubako} Frw</p>
<p>Diyosezi: ${c.diyosezi} Frw</p>

</div>

`;

});

div.innerHTML = `

<h1>${m.amazina}</h1>

<p><b>Numero:</b> ${m.numero}</p>
<p><b>Phone:</b> ${m.phone || "Nta nimero"}</p>
<p><b>Santarali:</b> ${m.santarali}</p>
<p><b>Umuryangoremezo:</b> ${m.umuryangoremezo}</p>

<h2>Contribution History</h2>

${contributionsHtml}

`;

}

loadMemberFile();
