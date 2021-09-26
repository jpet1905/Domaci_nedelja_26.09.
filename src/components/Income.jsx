import { useState } from "react";
import "../style/income.css"


const Income = ({ nizPrihoda, setNizPrihoda }) => {
    const [style, setStyle] = useState({ display: 'none' });

    return (
        <div className="stavka_prihoda">
            <h3>PRIHODI</h3>
            <span className="underscored"></span>
            {nizPrihoda.map(stavka =>
                // moglo i u zasebnu komnponentu
                <>
                    <div className="ispisP" key={stavka.opis}
                        onMouseEnter={() => {
                            setStyle({ display: 'block' });
                        }}
                        onMouseLeave={() => {
                            setStyle({ display: 'none' })
                        }}>
                        <div>{stavka.opis}</div>
                        <div>
                            <button style={style} onClick={() => {
                                setNizPrihoda((prev) => {
                                    let kopija = [...prev];
                                    let index = kopija.findIndex(el => el.opis === stavka.opis)
                                    kopija.splice(index, 1);
                                    console.log(kopija);
                                    return kopija;
                                })
                            }
                            }>Obrisi stavku</button>
                        </div>
                        <div> +{stavka.iznos}</div>
                    </div>
                    <span className="underscored"></span>
                </>
            )
            }
        </div >
    )
}

export default Income;