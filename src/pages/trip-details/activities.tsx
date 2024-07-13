import { CircleCheck } from "lucide-react";

export function Activities() {
    return (
        <div className="space-y-8">
            <div className="space-y-2.5">
                <div className="flex items-baseline gap-2">
                    <span className="text-zinc-300 text-lg font-semibold">Dia 17</span>
                    <span className="text-xs text-zinc-500">Sábado</span>
                </div>
                <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
                <div className="flex items-baseline gap-2">
                    <span className="text-zinc-300 text-lg font-semibold">Dia 17</span>
                    <span className="text-xs text-zinc-500">Sábado</span>
                </div>
                <div className="space-y-2.5">
                    <div className="px-4 py-2.5  rounded-xl shadow-shape flex items-center gap-3 bg-zinc-900">
                        <CircleCheck className="size-5 text-lime-300"/>
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
                    </div>
                </div>
                <div className="space-y-2.5">
                    <div className="px-4 py-2.5  rounded-xl shadow-shape flex items-center gap-3 bg-zinc-900">
                        <CircleCheck className="size-5 text-lime-300"/>
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
                    </div>
                </div>
                <div className="space-y-2.5">
                    <div className="px-4 py-2.5  rounded-xl shadow-shape flex items-center gap-3 bg-zinc-900">
                        <CircleCheck className="size-5 text-lime-300"/>
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
                    </div>
                </div>
            </div>
        </div>
    )
}