'use client';

import { useCompletion } from 'ai/react';
import { useState } from 'react';

export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/huggingface',
  });
  const [showQuestion, setShowQuestion] = useState<boolean>(false);

  return (
    <section className='items-center'>
      <div className='absolute top-0 w-full'>
        <header className='flex flex-row justify-around w-full h-16 items-center dark:bg-gray-800'>
          <blockquote className='text-2 m-1.5 font-extrabold italic text-center text-slate-900 '>
            <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block'>
              <span className='relative text-white'>SMART</span>
            </span>
            <span className='ml-1 text-white'> ASSISTANT</span>
          </blockquote>
          <button className='material-icons ml-40 text-white'>home</button>
          <button className='material-icons text-white'>close</button>
        </header>
      </div>
      <div className='relative top-24'>
        <main className='flex flex-col justify-between gap-2 overflow-y-auto max-full text-white '>
          {showQuestion && (
            <div className='flex flex-row gap-3 p-1 h-12 items-center dark:border-gray-900/50 flex-grow relative border border-black/10 dark:text-white rounded-l  shadow-xs dark:shadow-xs dark:bg-gray-700 bg-white '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#ec4899'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
                  clipRule='evenodd'
                />
              </svg>
              <p>{input}</p>
            </div>
          )}

          <p>{completion}</p>
        </main>
      </div>
      <div className='fixed bottom-0 w-full'>
        <footer className='flex flex-row w-full h-16 items-center dark:bg-gray-800'>
          <div className='flex w-full items-center p-2.5 '>
            <div className='flex flex-col w-full dark:border-gray-900/50 flex-grow relative border border-black/10 dark:text-white rounded-xl  shadow-xs dark:shadow-xs dark:bg-gray-700 bg-white'>
              <form onSubmit={handleSubmit}>
                <input
                  className='resize-none py-[10px] focus:outline-none dark:bg-transparent pl-3 h-10 p-1'
                  placeholder='Send a message'
                  value={input}
                  onChange={handleInputChange}
                />
                {/* <output>Completion result: {completion}</output> */}
                <button
                  className='absolute  dark:hover:bg-gray-900 right-2 bottom-1.5 material-symbols-outlined'
                  disabled={isLoading}
                  type='submit'
                >
                  <span className='material-icons'>send</span>
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
