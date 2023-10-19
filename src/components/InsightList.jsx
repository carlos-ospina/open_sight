import ppms from '/src/data/data_ppm_clean.json'
import {daysPassedSince, classNames} from "@/utils/utils";

/**
 * Formato del Json que mostrara los datos de la tabla
 * gestor: String que contiene el nombre del gestor
 * servicio: String que contiene el nombre del servicio
 * code: String que contiene el codigo del ppm
 * estado: String que contiene el estado del ppm
 * description: String que contiene la descripcion del ppm
 * pd_asociada: String que contiene la pd asociada al ppm
 * ejercio: Año del ejercicio
 * tamanyo: Sring con el tamaño aproximado del ppm
 * createdDate: String con la fecha de creacion del ppm en formato yyyy-MM-ddTHH:mm:ss
 * quarter_inicio: String con el trimestre de inicio del ppm
 * cartera: Nombre de la cartera
 * name: Nombre del ppm
 * tipo: Tipo de ppm
 * es_peit: Booleano que indica si el ppm es peit
 * tiene_pd: Booleano que indica si el ppm tiene pd
 * tiene_version: Booleano que indica si el ppm tiene version
 * date_in_quarter: Booleano que indica si el ppm se ha creado en el trimestre
 *
 * @returns {JSX.Element}
 * @constructor
 */

const statuses = {
    "Desarrollo": "text-blue-700 bg-blue-50 ring-blue-600/20",
    "Análisis": "text-purple-700 bg-purple-50 ring-purple-600/20",
    "Borrador": "text-yellow-700 bg-yellow-50 ring-yellow-600/20",
    "Priorización": "text-orange-700 bg-orange-50 ring-orange-600/20",
    "Finalizado": "text-green-700 bg-green-50 ring-green-600/20",
    "Pendiente finalizar": "text-lime-700 bg-lime-50 ring-lime-600/20",
    "Enviado": "text-gray-700 bg-gray-50 ring-gray-600/20",
    "Implantación": "text-teal-700 bg-teal-50 ring-teal-600/20",
    "Aceptación pruebas": "text-cyan-700 bg-cyan-50 ring-cyan-600/20",
}

function getRandomElements(arr, count) {
    // Shuffle the array
    const shuffled = arr.slice(0); // Create a shallow copy to avoid modifying the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }

    // Return the first 'count' elements of the shuffled array
    return shuffled.slice(0, count);
}

export default function InsightList() {

    const randomPpms = getRandomElements(ppms, 6)

    return (
        <div className="flex px-4 justify-center">
            <ul role="list" className="divide-y divide-gray-100">
                {randomPpms.slice(0, 10).map((ppm) => (
                    <li key={ppm.code} className="flex gap-x-16 py-5">
                        <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{ppm.code} - {ppm.name}</p>
                                <p
                                    className={classNames(
                                        statuses[ppm.estado],
                                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                                    )}
                                >
                                    {ppm.estado}
                                </p>
                            </div>
                            <p className="mt-1 line-clamp-3 text-sm leading-6 text-gray-600">{ppm.description}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-x-4">
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-xs leading-6 text-indigo-600">{ppm.gestor ? ppm.gestor : "Gestor no asignado"}</p>
                                <p className="flex-none text-xs text-gray-600">
                                    <time>Creado hace {daysPassedSince(ppm.createdDate)} días</time>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
