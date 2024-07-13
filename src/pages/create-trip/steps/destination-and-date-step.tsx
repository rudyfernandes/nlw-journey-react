import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput
}: DestinationAndDateStepProps) {
    return (
        <form className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex gap-2 items-center flex-1'>
              <MapPin className='size-5 text-zinc-400'/>
              <input disabled={isGuestsInputOpen} className="bg-transparent placeholder-zinc-400 text-lg outline-none flex-1" type="text" placeholder="Para onde você vai?"/>
            </div>
            
            <div className='flex gap-2 items-center'>
              <Calendar className='size-5 text-zinc-400'/>
              <input disabled={isGuestsInputOpen} className="bg-transparent placeholder-zinc-400 text-lg w-24 outline-none" type="text" placeholder="Quando?"/>
              
              <div className='w-px h-6 bg-zinc-700 mx-4'/>

              { isGuestsInputOpen ? (
                <Button onClick={closeGuestsInput} variant='secondary'>
                  Alterar local/data
                  <Settings2 className='size-5'/>
                </Button>
              ) : (
                <Button onClick={openGuestsInput} variant='primary'>
                  Continuar
                  <ArrowRight className='size-5'/>
                </Button>
              ) }
            </div>
          </form>
    )
}