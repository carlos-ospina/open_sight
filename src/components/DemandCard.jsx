import {CalendarDaysIcon, CreditCardIcon, UserCircleIcon} from "@heroicons/react/20/solid";
import {classNames} from "@/utils/utils";


const steps_org = [
    {id: 1, name: "Borrador", id_simple: 1},
    {id: 2, name: "Enviado", id_simple: 1},
    {id: 3, name: "Priorización" , id_simple: 2},
    {id: 4, name: "Análisis", id_simple: 3},
    {id: 5, name: "Desarrollo", id_simple: 4},
    {id: 6, name: "Aceptación pruebas", id_simple: 5},
    {id: 7, name: "Implantación", id_simple: 6},
    {id: 8, name: "Pendiente finalizar", id_simple: 6},
    {id: 9, name: "Finalizado", id_simple: 6}
];

const steps = [
    {id: 1, name: "Iniciado"},
    {id: 2, name: "Priorización"},
    {id: 3, name: "Diseño"},
    {id: 4, name: "Desarrollo"},
    {id: 5, name: "Pruebas"},
    {id: 6, name: "Finalizado"}
];


function StateMetro(state) {

    const statusObj = steps_org.find(step => step.name === state.state);
    const widthPercentage = statusObj.id_simple / 6 * 100;

    return (
        <div className="grid grid-cols-1 w-full">
            <p className="w-full text-center text-sm font-medium text-gray-900">Estado demanda</p>
            <div className="grid w-full justify-center items-center mt-6" aria-hidden="true">
                <div className="overflow-hidden rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-indigo-600" style={{ width:`${widthPercentage}%` }} />
                </div>
                <div className="mt-6 hidden grid-cols-6 text-sm font-medium text-gray-600 sm:grid">
                    {steps.map((step) => (
                        <div className={classNames(
                            statusObj.id_simple >= step.id ? 'text-indigo-600' : '', 'text-center'
                        )}>{step.name}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

    const chatResponse = [
        {ppm: "PPM100108968", response:"Para el estado \"Priorización\", es necesario que estén informados los campos `tamanyo`, `complejidad`, y `tipo_linea`. Del JSON proporcionado, `tamanyo` ya está informado con un valor \"<= 400\", pero `complejidad` no tiene valor y `tipo_linea` está en `null`. **Para avanzar el registro desde su estado \"Priorización\", debes informar los campos `complejidad` y `tipo_linea`."},
        {ppm: "PPM100118021", response: "Para el estado \"Análisis\", es necesario que el campo `tiene_pd` tenga un valor de 1. En el JSON proporcionado, el campo `tiene_pd` ya está informado con un valor de 1. **Cuentas con todos los campos necesarios para avanzar el registro desde su estado \"Análisis\".** No necesitas hacer cambios adicionales."},
        {ppm: "PPM100092613", response: "Para avanzar este ppm es necesario crear una pagina de confluence con la propuesta de solucion, ¿deseas hacerlo?."},

    ]

function getResponse(ppmCode) {
    const found = chatResponse.find(item => item.ppm === ppmCode);
    return found ? found.response : null;
}

function PPMResponse({ ppmCode }) {
    const response = getResponse(ppmCode);

    if (!response) {
        return null;  // or render some default content
    }

    return (
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
            <a href="#" className="text-sm font-semibold leading-6 text-indigo-500 italic">
                {response}
            </a>
        </div>
    );
}


export function DemandCard(ppm){
    console.log(ppm)

    return (
        <tr>
            <td colSpan="5" className="p-0 m-0">
                <div className="flex min-w-full w-full">
                    <div className="w-full rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                        <dl className="flex flex-wrap">
                            <div className="flex-auto pl-6 pt-6 justify-center">
                                <StateMetro state={ppm.ppm.estado}/>
                            </div>
                            <PPMResponse ppmCode={ppm.ppm.code}/>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Descripción:</p>
                                <p className="text-xs font-normal text-gray-900 max-w-lg overflow-hidden text-overflow: ellipsis">{ppm.ppm.description}</p>
                            </div>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Tipo:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.tipo}</p>
                            </div>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Quarter Inicio:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.quarter_inicio}</p>
                            </div>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Iniciativa:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.sel_iniciativa}</p>
                            </div>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Propuesta de gasto:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.pd_asociada}</p>
                            </div>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Tamaño:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.tamanyo}</p>
                            </div>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Iniciativa:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.sel_iniciativa}</p>
                            </div>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Tipo iniciativa presupuestaria:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.tipo_linea}</p>
                            </div>
                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Fecha fin planificada:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.fecha_fin}</p>
                            </div>
                            <div className="mt-6 pb-4 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                <p className="text-xs font-bold text-gray-900 truncate">Version de compromiso:</p>
                                <p className="text-xs font-normal text-gray-900 truncate">{ppm.ppm.version}</p>
                            </div>
                        </dl>
                    </div>
                </div>
            </td>
        </tr>

    )
}