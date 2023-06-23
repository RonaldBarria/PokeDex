import React, { useEffect, useState } from 'react'
import { Estadisticas } from './Estadisticas'

const PokeView = ({ data }) => {
    const [pokeImg, setPokeImg] = useState('');
    const [isShiny, setIsShyni] = useState(false);

    useEffect(() => {
        setPokeImg(data.sprites.other["official-artwork"].front_default);
        setIsShyni(false);
    }, [data]);

    const chageImg = () => {
        if (!isShiny) {
            setPokeImg(data.sprites.other["official-artwork"].front_shiny)
            setIsShyni(true)
        } else {
            setPokeImg(data.sprites.other["official-artwork"].front_default)
            setIsShyni(false)
        }
    }
    const getTipo = (tipo) => {
        let icono;
        switch (tipo) {
            case "dark":
                icono = "http://imgfz.com/i/PgOFaXc.png";
                break;
            case "electric":
                icono = "http://imgfz.com/i/UrGomaC.png";
                break;
            case "fairy":
                icono = "http://imgfz.com/i/bGj6R7y.png";
                break;
            case "fighting":
                icono = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87beb1a1-f90b-4548-be40-01b6330931c5/d9mlmgi-3338baff-6f1e-4e74-b243-a0a21d45509c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODdiZWIxYTEtZjkwYi00NTQ4LWJlNDAtMDFiNjMzMDkzMWM1XC9kOW1sbWdpLTMzMzhiYWZmLTZmMWUtNGU3NC1iMjQzLWEwYTIxZDQ1NTA5Yy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.AtNxdDI55MAcFfpWtW6coZ4xUhVhP8Nt1AlM7Lzb8wM";
                break;
            case "ground":
                icono = "http://imgfz.com/i/s0kwYBi.png";
                break;
            case "ice":
                icono = "http://imgfz.com/i/VURCBjF.png";
                break;
            case "normal":
                icono = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87beb1a1-f90b-4548-be40-01b6330931c5/d9mlg2i-eaa5e893-7f1f-448b-9e42-c95b956bed03.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3YmViMWExLWY5MGItNDU0OC1iZTQwLTAxYjYzMzA5MzFjNVwvZDltbGcyaS1lYWE1ZTg5My03ZjFmLTQ0OGItOWU0Mi1jOTViOTU2YmVkMDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3ohTJf7kv3D1A9lmydz9YK-tmjIc49gVB7_jrPbb0Og";
                break;
            case "poison":
                icono = "http://imgfz.com/i/FnD9wdP.png";
                break;
            case "psychic":
                icono = "http://imgfz.com/i/NSI42pz.png";
                break;
            case "rock":
                icono = "http://imgfz.com/i/s0kwYBi.png";
                break;
            case "steel":
                icono = "http://imgfz.com/i/Iaf1jil.png";
                break;
            case "water":
                icono = "http://imgfz.com/i/tyLb0N4.png";
                break;
            case "dragon":
                icono = "http://imgfz.com/i/3saEgJr.png";
                break;
            case "grass":
                icono = "http://imgfz.com/i/L4jmCaQ.png";
                break;
            case "fire":
                icono = "http://imgfz.com/i/mOaR1Ui.png";
                break;
            case "ghost":
                icono = "http://imgfz.com/i/6H2TvYj.png";
                break;
            case "bug":
                icono = "http://imgfz.com/i/xyP9MVo.png";
                break;
            case "flying":
                icono = "http://imgfz.com/i/HULCNwt.png";
                break;

        }
        return icono;
    }
    return (
        <React.Fragment>
            <div className="card d-flex justify-content-center" style={{ backgroundColor: "#242325" }}>
                <div className="card" style={{ backgroundColor: "#242325", color: "#fff" }}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={pokeImg} style={{ width: "50%", height: "50%" }} className="card-img-top img-fluid" />
                    </div>
                    <button onClick={chageImg} className='btn btn-warning' style={{ marginLeft: "30%", marginRight: "30%" }}>{!isShiny ? "Ver Shiny" : "Ver Normal"}</button>
                    <div className="card-body">
                        <h3 className="card-title d-flex" style={{ textTransform: "capitalize", wordWrap: "break-word", wordBreak: "break-all" }}>
                            <p style={{ color: "gray" }}>#{data.id}&nbsp;</p> {data.name}
                        </h3>
                        <div className='d-flex justify-content-center grid gap-2'>
                            {data.types.map((type, index) => (
                                <img key={index} src={getTipo(type.type.name)} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <Estadisticas stats={data.stats} />
                </div>
            </div>
        </React.Fragment>

    )
}

export default PokeView