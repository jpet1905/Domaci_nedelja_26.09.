import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../style/form.css'

const Form = ({ setNizPrihoda, setNizRashoda }) => {
    const [selectedValue, setSelectedValue] = useState('prihod');
    const [inputText, setInputText] = useState('');
    const [inputNum, setInputNum] = useState('');
    //mora prazan string jer izbaci upozorenje kad probam da setujem nulu kao pocetno stanje
    const [style, setStyle] = useState({ display: 'none' });

    return (
        <div id="drugi">
            <div>
                <select value={selectedValue} onChange={(e) => {
                    setSelectedValue(e.target.value);
                }}>
                    <option value="prihod">Prihod</option>
                    <option value="rashod">Rashod</option>
                </select>
                <input id="text" value={inputText} onChange={(e) => {
                    let unos = e.target.value;
                    setInputText(unos);
                }} />
                <input type="number" value={inputNum} onChange={(e) => {
                    let unos = e.target.value;
                    if (!isNaN(Number(unos)) && Number(unos) >= 0) {
                        setInputNum(Number(unos));
                    }

                }} />
                {/* dugme za submit: pravi novi objekat i ubacuje u odgovarajuci niz*/}
                <button className="submit" onClick={() => {
                    if (inputText === '') {//ako je ostalo na default stanju
                        console.log("morate uneti opis");
                        setStyle({ display: 'block' });
                    } else {
                        if (inputNum === '') { //ako je ostalo nesetovano na novu vr. (jer nije proslo gore uslov)
                            console.log("morate uneti pozitivan broj");
                            setStyle({ display: 'block' });
                        } else {
                            //kad je proslo obe validacije, moze dalje
                            setStyle({ display: 'none' });
                            if (selectedValue === "prihod") {
                                let novaStavka = {
                                    opis: inputText,
                                    iznos: inputNum
                                }
                                setNizPrihoda((prev) => {
                                    let kopija = [...prev];
                                    kopija.push(novaStavka);
                                    console.log(kopija);
                                    return kopija
                                })

                            } else { //za rashod imamo i id zbog promene procenta
                                let novaStavka = {
                                    id: uuidv4(),
                                    opis: inputText,
                                    iznos: inputNum
                                }
                                setNizRashoda((prev) => {
                                    let kopija = [...prev];
                                    kopija.push(novaStavka);
                                    console.log(kopija);
                                    return kopija
                                })
                            }
                            setInputText('');
                            setInputNum('');
                        }
                    }
                }
                }
                >Potvrdi unos</button>
            </div>
            <div id="valid_msg" style={style}>Neispravan unos!</div>
        </div>
    )

}
export default Form;