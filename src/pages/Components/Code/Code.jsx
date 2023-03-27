import { useParams } from 'react-router-dom';
import SpinnerCode from '@/components/Spinner/SpinnerCode';
import { useRef, useState } from 'react';

const Code = () => {
  const { component } = useParams();
  const [code, setCode] = useState(null);

  const myRef = useRef();

  const onClick = () => {
    console.log('...');
    navigator.clipboard.writeText(code);
    myRef.current.classList.remove('hidden');
    setTimeout(() => {
      myRef.current.classList.add('hidden');
    }, 500);
  };

  return (
    <div>
      <div className="relative w-full py-2 mt-4 border border-slate-200">
        {component === 'modal-html' && <ModalHtml />}
        {component === 'spinner' && (
          <SpinnerCode code={code} setCode={setCode} />
        )}
        <span
          ref={myRef}
          id="test-id"
          className="absolute -top-6 right-0 hidden px-1 py-0.5 border bg-slate-200 border-slate-600 text-slate-600 rounded"
        >
          Copiado!
        </span>
        <button
          onClick={onClick}
          className="absolute top-4 right-4 p-2 border border-slate-200"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default Code;
