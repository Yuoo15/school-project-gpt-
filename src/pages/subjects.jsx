import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialData } from '../data/initialData'


export default function Subjects(){
const [data, setData] = useLocalStorage('school:data', initialData)
const [id, setId] = useState('')
const [name, setName] = useState('')
const [hours, setHours] = useState(1)
const [diff, setDiff] = useState('normal')


function addSubject(){
if (!id.trim()||!name.trim()) return
const next = {...data, subjects: [...data.subjects, { id, name, hoursPerWeek: Number(hours), difficulty: diff }]}
setData(next)
setId(''); setName(''); setHours(1)
}


function removeSubject(_id){ setData({...data, subjects: data.subjects.filter(s=>s.id!==_id)}) }


return (
<div className="card">
<h2>Предметы</h2>
<div style={{display:'grid',gridTemplateColumns:'120px 1fr 120px 120px',gap:8}}>
<input className="input" placeholder="id (math)" value={id} onChange={e=>setId(e.target.value)} />
<input className="input" placeholder="Название" value={name} onChange={e=>setName(e.target.value)} />
<input className="input" type="number" min={1} value={hours} onChange={e=>setHours(e.target.value)} />
<select className="input" value={diff} onChange={e=>setDiff(e.target.value)}>
<option value="light">Лёгкий</option>
<option value="normal">Нормальный</option>
<option value="hard">Тяжёлый</option>
</select>
<button className="btn" onClick={addSubject}>Добавить предмет</button>
</div>


<ul>
{data.subjects.map(s=> (
<li key={s.id} style={{marginTop:8}}>
<b>{s.name}</b> ({s.id}) — {s.hoursPerWeek} ч/н — {s.difficulty}
<button style={{marginLeft:8}} onClick={()=>removeSubject(s.id)}>Удалить</button>
</li>
))}
</ul>
</div>
)
}