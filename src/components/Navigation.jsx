import React, { Fragment, useState} from 'react';
import Link from 'next/link';

import {
    BoltIcon,
    BriefcaseIcon,
    PresentationChartBarIcon,
    XMarkIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Insights', href: 'insights', icon: BoltIcon, current: false },
    { name: 'Manage', href: 'manage', icon: BriefcaseIcon, current: false },
    { name: 'Visualize', href: 'visualize', icon: PresentationChartBarIcon, current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Navigation() {

    const [currentItem, setCurrentItem] = useState(null);

    return (
        <>


            <div className="w-1/6 flex flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                <div className="flex pt-12 pb-10 h-16 shrink-0 items-center">
                    <img
                        className="h-23 w-auto"
                        src="/images/opensight.png"
                        alt="Opensight"
                    />
                    <p className="pl-2 italic text-indigo-600 font-bold">OpenSight</p>
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={classNames(
                                                currentItem === item
                                                    ? 'bg-gray-50 text-indigo-600'
                                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                            )}
                                            onClick={() => setCurrentItem(item)}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                    'h-6 w-6 shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="-mx-6 mt-auto">
                            <Link
                                href="profile"
                                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                            >
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                                    <span className="text-sm font-medium leading-none text-white">CJ</span>
                                </span>
                                <span aria-hidden="true" className="text-xs">Carlos Ospina</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
