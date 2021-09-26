import { useState } from "react";
import "../style/expense.css"

const Expense = ({ ukupanPrihod, nizRashoda, setNizRashoda }) => {
    const [style, setStyle] = useState({ display: 'none' });

    return (
        <div className="stavka_rashoda">
            <h3>RASHODI</h3>
            <span className="underscored"></span>
            {nizRashoda.map(stavka =>
                //moglo i u zasebnu komnponentu
                <>
                    <div className="ispisR" key={stavka.id}
                        onMouseEnter={() => {
                            setStyle({ display: 'block' });
                        }}
                        onMouseLeave={() => {
                            setStyle({ display: 'none' })
                        }}>
                        <div>{stavka.opis}</div>
                        <div>
                            <button style={style} onClick={() => {
                                setNizRashoda((prev) => {
                                    let kopija = [...prev];
                                    let index = kopija.findIndex(el => el.opis === stavka.opis)
                                    kopija.splice(index, 1);
                                    console.log(kopija);
                                    return kopija;
                                })
                            }
                            }>Obrisi stavku</button>
                        </div>
                        <div> -{stavka.iznos}</div>
                        <div className="procentualni_box">
                            <div>{parseFloat(((stavka.iznos * 100) / ukupanPrihod).toFixed(2))}%</div>
                        </div>
                    </div>
                    <span className="underscored"></span>
                </>
            )
            }
        </div >
    )
}

export default Expense;