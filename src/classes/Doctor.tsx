interface IDoctor{
    name: string,
    specialty: string,
    experience: number
}

export class Doctor implements IDoctor{
    constructor(public name: string, public specialty: string, public experience: number){}

    toString(): string{
        return `${this.name}, especialidad: ${this.specialty}, años de experiencia: ${this.experience}`
    }

    setSpecialty(newSpecialty: string)
    {
        this.specialty = newSpecialty;
    }
}