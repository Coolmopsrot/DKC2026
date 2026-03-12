import { useState } from "react";

const races = [
"1. Lauf – 26.04.26 – Lohsa",
"2. Lauf – 17.05.26 – Belleben",
"3. Lauf – 21.06.26 – Mülsen",
"4. Lauf – 13.09.26 – Nachtrennen Belleben",
"5. Lauf – 27.09.26 – Cheb",
"6. Lauf – 11.10.26 – Wallrav"
];

const classes = [
"Rotax Senior","Rotax Junior","Rotax Mini","Rotax Micro",
"Rotax DD2","Rotax DD2 Master","Rotax DD2 Trophy","FUN Klasse"
];

export default function App(){
const [form,setForm]=useState({
race:races[0],firstName:"",lastName:"",email:"",
kartNumber:"",teamName:"",kartClass:""
});

function submit(e){
e.preventDefault();
alert("Demo: Registrierung gespeichert.");
setForm({...form,firstName:"",lastName:"",email:"",kartNumber:"",teamName:"",kartClass:""});
}

return (
<div style={{fontFamily:"Arial",padding:30,background:"#0b0b0b",color:"white",minHeight:"100vh"}}>
<h1>Deutsche Kartchallenge – Anmeldung</h1>

<form onSubmit={submit} style={{display:"grid",gap:10,maxWidth:500}}>

<select value={form.race} onChange={e=>setForm({...form,race:e.target.value})}>
{races.map(r=><option key={r}>{r}</option>)}
</select>

<input placeholder="Vorname"
value={form.firstName}
onChange={e=>setForm({...form,firstName:e.target.value})}/>

<input placeholder="Nachname"
value={form.lastName}
onChange={e=>setForm({...form,lastName:e.target.value})}/>

<input type="email" placeholder="E‑Mail"
value={form.email}
onChange={e=>setForm({...form,email:e.target.value})}/>

<input placeholder="Kartnummer"
value={form.kartNumber}
onChange={e=>setForm({...form,kartNumber:e.target.value})}/>

<input placeholder="Teamname"
value={form.teamName}
onChange={e=>setForm({...form,teamName:e.target.value})}/>

<select value={form.kartClass}
onChange={e=>setForm({...form,kartClass:e.target.value})}>
<option value="">Klasse wählen</option>
{classes.map(c=><option key={c}>{c}</option>)}
</select>

<button type="submit">Registrieren</button>

</form>

<p style={{marginTop:30,opacity:0.7}}>
Grundversion für GitHub + IONOS Deploy Now.
</p>

</div>
)
}