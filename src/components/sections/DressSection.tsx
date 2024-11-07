import Color from "../Color"
import ArrowDownComponent from "../ui/ArrowDownComponent"

const colorPalet = {
    black: [
        { id: 1, color: 'bg-[#010101]' },
        { id: 2, color: 'bg-[#383838]' },
        { id: 3, color: 'bg-[#696969]' },
        { id: 4, color: 'bg-[#8F8D8D]' },
        { id: 5, color: 'bg-[#C1BDB4]' }
    ],
    blue: [
        { id: 6, color: 'bg-[#22466F]' },
        { id: 7, color: 'bg-[#6086AA]' },
        { id: 8, color: 'bg-[#96AEC2]' },
        { id: 9, color: 'bg-[#C4D8EB]' },
        { id: 10, color: 'bg-[#DEEBF3]' }
    ],
    lilac: [
        { id: 11, color: 'bg-[#461F6E]' },
        { id: 12, color: 'bg-[#4D175E]' },
        { id: 13, color: 'bg-[#6D3A7E]' },
        { id: 14, color: 'bg-[#8D649D]' },
        { id: 15, color: 'bg-[#D4BADF]' }
    ],
    pink: [
        { id: 16, color: 'bg-[#F56C9B]' },
        { id: 17, color: 'bg-[#F77CA7]' },
        { id: 18, color: 'bg-[#F492B6]' },
        { id: 19, color: 'bg-[#F9C2D8]' },
        { id: 20, color: 'bg-[#FCDCEA]' }
    ],
    orange: [
        { id: 21, color: 'bg-[#F17223]' },
        { id: 22, color: 'bg-[#EF8A3F]' },
        { id: 23, color: 'bg-[#F1A262]' },
        { id: 24, color: 'bg-[#ECBF98]' },
        { id: 25, color: 'bg-[#F7E1CD]' }
    ],
    yellow: [
        { id: 26, color: 'bg-[#FEC235]' },
        { id: 27, color: 'bg-[#FFD372]' },
        { id: 28, color: 'bg-[#FEDA82]' },
        { id: 29, color: 'bg-[#F7DDA2]' },
        { id: 30, color: 'bg-[#FFF3D7]' }
    ]
}

const DressSection = () => {
    return (
        <section id="la ropa" className="h-full relative text-center fontStyles leading-[17px] flex flex-col justify-between snap-start">
            <h3 className="text-[56px] h-[10%] flex justify-center items-end">la ropa</h3>
            <div className="h-[88%] flex flex-col justify-between items-center pb-24">
                <div className="w-[360px] m-auto">
                    <p>Nos encantaría que sus atuendos sean formales para hacer de este día algo aún más especial. Para las damas, sugerimos un vestido largo o si lo prefieren un pantalón elegante. y para Los caballeros, sugerimos traje formal.</p>
                    <br />
                    <p>Agradecemos que cada detalle de su presencia sume a la magia de este día inolvidable.</p>
                </div>
                <div className="w-[360px] m-auto">
                    <p className="theNautigalFont mb-4 text-gray-400">Paleta de Color</p>
                    <p>Inspírate en estos colores para elegir la ropa que usarás en este día tan especial</p>
                </div>
                <div className="flex justify-center space-x-[8px] [&>ul]:space-y-[8px]">
                    <ul>
                        {colorPalet.black.map((data) => (
                            <Color key={data.id} color={data.color} />
                        ))}
                    </ul>
                    <ul>
                        {colorPalet.blue.map((data) => (
                            <Color key={data.id} color={data.color} />
                        ))}
                    </ul>
                    <ul>
                        {colorPalet.lilac.map((data) => (
                            <Color key={data.id} color={data.color} />
                        ))}
                    </ul>
                    <ul>
                        {colorPalet.pink.map((data) => (
                            <Color key={data.id} color={data.color} />
                        ))}
                    </ul><ul>
                        {colorPalet.orange.map((data) => (
                            <Color key={data.id} color={data.color} />
                        ))}
                    </ul>
                    <ul>
                        {colorPalet.yellow.map((data) => (
                            <Color key={data.id} color={data.color} />
                        ))}
                    </ul>
                </div>
            </div>
            <ArrowDownComponent />
        </section>
    )
}

export default DressSection