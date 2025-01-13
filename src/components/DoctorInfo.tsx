import { useState } from "react";
import { Doctor } from "../classes/Doctor";

type AppProps = {
    doctor: Doctor,
    index: number,
    onUpdate: (index: number, specialty: string) => void
}

export default function DoctorInfo({doctor, index, onUpdate}: AppProps)
{
    const [specialty, setSpecialty] = useState("");
    const inputStyle = {
        flex: 1, 
        margin: '5px', 
    }

    return(
        <div style={{backgroundColor: 'lightblue', margin: '10px', padding: '10px', width: '600px'}}>
            <h3>{doctor.toString()}</h3>
            <div style={{display:'flex'}}>
                <div style={inputStyle}>Nueva especialidad:</div>
                <input onChange={e => setSpecialty(e.target.value)} value={specialty} style={inputStyle}/>
                <button onClick={() => onUpdate(index, specialty)} style={inputStyle}>Actualizar</button>
            </div>
        </div>
    );
}