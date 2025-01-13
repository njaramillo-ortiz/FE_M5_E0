import { useState } from 'react'
import './App.css'
import { Doctor } from './classes/Doctor'
import DoctorInfo from './components/DoctorInfo';

function App() {
    const [doctors, setDoctors] = useState([
        new Doctor("Dr. House", "Diagnostico", 8),
        new Doctor("Dra. Grey", "Cirugía", 21),
        new Doctor("Dr. Murphy", "Urgencias", 7),
        new Doctor("Dr. Pepper", "Hidratación", 139),
        new Doctor("Dr. Dencil", "Fraude", 12),
        new Doctor("Dra. Polo", "Leyes", 23),
        new Doctor("Dr. TV", "Medios", 13),
        new Doctor("Dr. Phil", "Psicología", 31),
    ]);

    function setSpecialty(index: number, newSpecialty: string)
    {
        if(index < doctors.length && index >= 0)
        {
            const updatedDoctors = doctors.map((d, i) => 
                {
                    if(i === index)
                    {
                        d.setSpecialty(newSpecialty);
                    }
                    return d;
                }
            );
        
            setDoctors(updatedDoctors);
        }
    }

    return (
        <>
            
            {doctors.map((d, i) => 
            {
                return(
                    <DoctorInfo key={d.name+i} doctor={d} index={i} onUpdate={setSpecialty} />
                );
            })}
        </>
    )
}

export default App
