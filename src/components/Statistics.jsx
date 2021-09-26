import '../style/statistics.css'

const Statistics = ({ ukupanPrihod, ukupanRashod }) => {
    let ukupnoStanje = ukupanPrihod - ukupanRashod;
    return (
        <div className="container">
            <div className="prvi">
                <p>Dostupan budzet u Novembru 2019 je:</p>
                {ukupnoStanje > 0 //sve ovo samo zbog prikaza znaka + kada je suficit
                    ?
                    <p> + {ukupnoStanje}</p>
                    :
                    <p>{ukupnoStanje}</p>
                }
                <div className="zeleni">
                    <div className="drzi_sirinu">
                        <div>PRIHOD</div>
                        <div>{ukupanPrihod}</div>
                    </div>
                </div>
                <div className="crveni">
                    <div className="drzi_sirinu">
                        <div>RASHOD</div>
                        <div>{ukupanRashod}</div>
                    </div>
                    {//da ne bi pisalo NaN% kada je na pocetku ukupanPrihod=0
                        ukupanPrihod > 0
                            ?
                            <div className="procentualni">{parseFloat(((ukupanRashod * 100) / ukupanPrihod).toFixed(2))}%</div>
                            :
                            <div></div>
                    }
                </div>
            </div>
        </div >
    )
}
export default Statistics;