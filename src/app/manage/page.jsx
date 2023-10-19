
import {DemandTable} from "@/components/DemandTable"
import ppms_grouped from '/src/data/ppm_grouped_reduced.json'

const statuses = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Manage() {
    return (
        <div className="flex">
            <DemandTable data={ppms_grouped}/>
        </div>
    )
}
