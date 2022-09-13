import React from "react"

export default function Game(){
    return(
        <div className='grid grid-cols-6 gap-6 mt-16'>

              <a href="" className='relative rounded-lg overflow-hidden'>
                <img src="/game-1.png" alt="img game" />

                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='text font-bold text-white block'>
                    League Of Legends
                    </strong>
                  <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
                </div>
              </a>

              <a href="" className='relative rounded-lg overflow-hidden'>
                <img src="/game-2.png" alt="img game" />

                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='text font-bold text-white block'>
                    DOTA 2
                    </strong>
                  <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
                </div>
              </a>

              <a href="" className='relative rounded-lg overflow-hidden'>
                <img src="/game-3.png" alt="img game" />

                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='text font-bold text-white block'>
                    Counter Strike: Global Offensive
                    </strong>
                  <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
                </div>
              </a>

              <a href="" className='relative rounded-lg overflow-hidden'>
                <img src="/game-4.png" alt="img game" />

                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='text font-bold text-white block'>
                    Apex Legends
                    </strong>
                  <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
                </div>
              </a>

              <a href="" className='relative rounded-lg overflow-hidden'>
                <img src="/game-5.png" alt="img game" />

                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='text font-bold text-white block'>
                    Fortnite
                    </strong>
                  <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
                </div>
              </a>

              <a href="" className='relative rounded-lg overflow-hidden'>
                <img src="/game-6.png" alt="img game" />

                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='text font-bold text-white block'>
                    World Of Warcraft
                    </strong>
                  <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
                </div>
              </a>

        </div>


       
    )
}