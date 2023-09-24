import './App.css';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
function App() {
 const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }
    return (
        <>
            <div className='grid place-content-center w-full h-screen'>
                <div  className='w-[50vw]'>
                    <h6 className='text-center font-medium text-[30px]'>Speech to text Convertor</h6>
                    <p className='mt-5 mb-16 text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptates accusamus veniam, eveniet rerum natus.</p>
                    <div className='h-full sm:mr-4 sm:ml-4 bg-white p-4 shadow-lg rounded-md'>
                        {/* <textarea className='w-full  bg-transparent outline-none'  name="text" rows='10'>{transcript}</textarea>
                         */}
                         <p className='h-full overflow-auto'>{transcript}</p>
                        <div className='flex justify-between m-1'>
                            <button className='bg-orange-400 rounded-md p-3 text-white'>Copy to Clipboard</button>
                            <button className='bg-orange-400 rounded-md p-3 text-white' onClick={startListening}>Start listening</button>
                            <button className='bg-orange-400 rounded-md p-3 text-white' onClick={SpeechRecognition.stopListening}>Stop listening</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
