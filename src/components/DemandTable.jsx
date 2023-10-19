'use client'

import { Fragment } from "react";
import {DemandCard} from "@/components/DemandCard";
import React, { useState } from 'react';
import {daysPassedSince} from "@/utils/utils";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function DemandTable({data}){

    const [selectedPpmCode, setSelectedPpmCode] = useState(null);

    return (
        <div className="mt-8 flow-root">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-4">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300 table-fixed">
                            <thead className="bg-white">
                            <tr>
                                <th scope="col" className="max-w-lg overflow-hidden truncate px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Demanda
                                </th>
                                <th scope="col" className="max-w-xs px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Gestor
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Tipo
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Creado hace
                                </th>
                                <th scope="col" className="py-3.5 pl-3 pr-4 sm:pr-3">
                                    <span className="sr-only">View</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            {data.map((quarter) => (
                                <Fragment key={quarter.quarter_inicio}>
                                    <tr className="border-t border-gray-200">
                                        <th
                                            colSpan={5}
                                            scope="colgroup"
                                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                                        >
                                            {quarter.quarter_inicio}
                                        </th>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <th
                                            colSpan={5}
                                            scope="colgroup"
                                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                                        >
                                            {quarter.servicios.servicio}
                                        </th>

                                    </tr>
                                    {quarter.servicios.ppms.map((ppm, ppmIdx) => (
                                        <>
                                            <tr
                                                key={ppm.code}
                                                className={classNames(ppmIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                                            >
                                                <td className="max-w-lg overflow-hidden truncate whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-900 sm:pl-3">
                                                    <Link href={ppm.url_demanda} className="text-indigo-600 hover:text-indigo-900" target="_blank" rel="noopener noreferrer">
                                                        {ppm.code} - {ppm.name}
                                                    </Link>
                                                </td>
                                                <td className="max-w-xs whitespace-nowrap px-3 py-4 text-xs text-gray-500">{ppm.gestor}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">{ppm.tipo}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">{daysPassedSince(ppm.createdDate)} días.</td>
                                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                                    <a href="#"
                                                       className="text-indigo-600 hover:text-indigo-900"
                                                       onClick={() => setSelectedPpmCode(ppm.code === selectedPpmCode ? null : ppm.code)}
                                                    >
                                                        Ver<span className="sr-only"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                            {selectedPpmCode === ppm.code && (
                                                <DemandCard ppm={ppm}/>
                                            )}
                                        </>
                                    ))}

                                </Fragment>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}