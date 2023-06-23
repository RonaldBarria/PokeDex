import React from 'react'

export const Info = () => {
    return (
        <div className="card d-flex justify-content-center" style={{ backgroundColor: "#242325" }}>
            <div className="card m-3" style={{ backgroundColor: "#242325", color: "#fff" }}>
                <div className="d-flex justify-content-center align-items-center">
                    <h3>PokeInfo</h3>
                </div>
                <div className="card-body">
                    <div className='d-flex justify-content-center grid gap-2'>
                        <ul>
                            <li><p>Puedes buscar por nombre y por numero de pokedex</p></li>
                            <li><p>Para las especies que varian por genero puedes usar -f o -m por ejemplo "nidoran-f" o "nidoran-m"</p> </li>
                            <li><p>Para especies multiformas puedes usar "deoxys-normal","deoxis-speed","airatina-altered"</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
