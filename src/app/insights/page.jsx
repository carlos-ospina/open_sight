
import InsightList from "@/components/InsightList";
import {Prompt} from "@/components/Prompt";

export default function Insights() {


    return (
        <div className="grid">
            <h1 className="py-6 mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                En base al estado y atributos de tus demandas, deberías prestar atencion a las siguientes para avanzar con ellas.
            </h1>
            <InsightList/>
            <Prompt/>
        </div>

    )
}