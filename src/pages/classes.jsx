import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialData } from '../data/initialData'
import { v4 as uuidv4 } from 'uuid'


export default function Classes(){
const [data, setData] = useLocalStorage('school:data', initialData)
const [name, setName] = useState('')


function addClass(){
if (!name.trim()) return
const id = name.replace(/\s+/g,'')
const next = {...data, classes: [...data.classes, { id, name, students: 0 }]}
setData(next)
setName('')
}


function removeClass(id){
const next = {...data, classes: data.classes.filter(c=>c.id!==id)}
setData(next)
}


return (
<div className="card">
<h2>Классы</h2>
<div style={{display:'flex',gap:8}}>
<input className="input" placeholder="Например: 5А" value={name} onChange={e=>setName(e.target.value)} />
<button className="btn" onClick={addClass}>Добавить</button>
</div>


<ul>
{data.classes.map(c=> (
    <li key={c.id} style={{marginTop:8}}>
        <b>{c.name}</b> — {c.students} учеников
        <button style={{marginLeft:8}} onClick={()=>removeClass(c.id)}>Удалить</button>
    </li>
))}
</ul>
</div>
)
}