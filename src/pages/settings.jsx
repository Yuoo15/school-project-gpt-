import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialData } from '../data/initialData'
export default function Settings(){
const [data, setData] = useLocalStorage('school:data', initialData)


function setSetting(path, value){
const next = {...data, settings: {...data.settings, [path]: value}}
setData(next)
}


return (
<div className="card">
<h2>Настройки</h2>
<label>Дней в неделе: <input className="input" type="number" value={data.settings.days} onChange={e=>setSetting('days', Number(e.target.value))} /></label>
<label>Уроков в день: <input className="input" type="number" value={data.settings.periodsPerDay} onChange={e=>setSetting('periodsPerDay', Number(e.target.value))} /></label>
<label>Запрет подряд тяжёлых предметов:
<input type="checkbox" checked={data.settings.noHeavyConsecutive} onChange={e=>setSetting('noHeavyConsecutive', e.target.checked)} />
</label>
</div>
)
}