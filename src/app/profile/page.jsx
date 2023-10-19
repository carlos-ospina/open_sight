'use client'

import { Switch } from '@headlessui/react'
import { useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile({ children }) {

    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)

    return (
        <div className="mx-auto max-w-2xl pt-12 space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none pr-4 pb-6">
            <div>
                <h1 className="text-base font-semibold leading-10 text-gray-900 pb-12">Perfil</h1>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Grupo y servicios</h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                    Define los demandas que quieres visualizar en tus insights.
                </p>

                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                    <div className="pt-6 sm:flex">

                        <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Nombre de grupo</dt>
                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-500">Commercial</div>
                            <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Modificar
                            </button>
                        </dd>
                    </div>
                    <div className="pt-6 sm:flex">
                        <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Servicios asociados</dt>
                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-500">Información Cliente, Call me, Muro, Catálogo de productos, NotifyMe</div>
                            <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Modificar
                            </button>
                        </dd>
                    </div>
                </dl>
            </div>
            <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Partners tecnológicos</h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">Conecta con los equipos con los que interactuas de forma habitual.</p>

                <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                    <li className="flex justify-between gap-x-6 py-6">
                        <div className="font-medium text-gray-900">NTT Data</div>
                        <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Eliminar
                        </button>
                    </li>
                    <li className="flex justify-between gap-x-6 py-6">
                        <div className="font-medium text-gray-900">Minsait</div>
                        <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Eliminar
                        </button>
                    </li>
                </ul>

                <div className="flex border-t border-gray-100 pt-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        <span aria-hidden="true">+</span> Añade otro equipo de trabajo
                    </button>
                </div>
            </div>
        </div>
    )
}