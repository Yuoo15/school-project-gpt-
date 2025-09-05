import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialData } from '../data/initialData'


export default function Teachers(){
const [data, setData] = useLocalStorage('school:data', initialData)
const [name, setName] = useState('')
const [subjectsInput, setSubjectsInput] = useState('')


function addTeacher(){
if (!name.trim()) return
const subs = subjectsInput.split(',').map(s=>s.trim()).filter(Boolean)
const id = 't'+Date.now()
const next = {...data, teachers: [...data.teachers, { id, name, subjects: subs }]}
setData(next)
setName('')
setSubjectsInput('')
}


function removeTeacher(id){ setData({...data, teachers: data.teachers.filter(t=>t.id!==id)}) }


return (
<div className="card">
<h2>Учителя</h2>
<div style={{display:'grid',gridTemplateColumns:'1fr 160px',gap:8}}>
<input className="input" placeholder="ФИО" value={name} onChange={e=>setName(e.target.value)} />
<input className="input" placeholder="subject ids через запятую (math, rus)" value={subjectsInput} onChange={e=>setSubjectsInput(e.target.value)} />
<button className="btn" onClick={addTeacher}>Добавить учителя</button>
</div>


<ul>
{data.teachers.map(t=> (
<li key={t.id} style={{marginTop:8}}>
<b>{t.name}</b> — {t.subjects.join(', ')}
<button style={{marginLeft:8}} onClick={()=>removeTeacher(t.id)}>Удалить</button>
</li>
))}
</ul>
</div>
)
}