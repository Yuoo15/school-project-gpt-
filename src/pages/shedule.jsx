import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialData } from '../data/initialData'
import ScheduleGrid from '../components/ScheduleGrid'
import {  generateAllSchedulesBacktracking} from '../utils/generator'



export default function Schedule(){
const [data, setData] = useLocalStorage('school:data', initialData)


function setSchedule(schedule){ setData({...data, schedule}) }


function onGenerate(){
    const generated = generateAllSchedulesBacktracking ({ classes: data.classes, subjects: data.subjects, teachers: data.teachers, settings: data.settings })
    setSchedule(generated)
}


return (
<div className="grid">
<div className="card">
<h2>Генератор расписания</h2>
<p>Нажми «Сгенерировать», чтобы автоматически заполнить сетки для всех классов (базовый алгоритм).</p>
<button className="btn" onClick={onGenerate}>Сгенерировать</button>
</div>


{data.classes.map(c=> (
<ScheduleGrid
key={c.id}
  clsId={c.id}
  schedule={data.schedule}        // data.schedule может быть undefined — наш компонент это обработает
  setSchedule={setSchedule}       // setSchedule должен принимать НОВЫЙ объект schedule (как в шаблоне)
  subjects={data.subjects}
  teachers={data.teachers}
  settings={data.settings}
/>
))}
</div>
)
}