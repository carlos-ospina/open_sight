'use client'

import kpis from '/src/data/kpi.json'
import {KpiBox} from "@/components/KpiBox";
import {RadarChart} from "@/components/RadarChart";


const kpi_descriptions = {
    ppm_not_intiative: "PPMs en priorización sin iniciativa.",
    ppm_not_pd: "PPMs en análisis sin PD.",
    ppm_not_version: "PPMs en desarrollo sin versión.",
    ppm_current_quarter: "PPMs iniciados en el trimestre.",
};



export default function Visualize() {
    return (

        <div className="bg-white sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-4xl">
                            KPIs para que puedas tomar decisiones de impacto.
                        </h2>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {kpis.map((kpi) => (
                            <KpiBox title={kpi_descriptions[kpi.kpi_key]} value={kpi.value}/>
                        ))}
                    </dl>
                    <div className="relative pt-24">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                    </div>
                    <div className="flex pt-6">
                        <dl className="mx-auto grid w-8/12 grid-cols-1 sm:grid-cols-1 lg:px-1 xl:px-0">

                            <RadarChart/>

                        </dl>
                    </div>
                </div>
            </div>
        </div>

    )
}