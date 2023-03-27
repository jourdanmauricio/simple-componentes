import { useParams } from 'react-router-dom';
import SpinnerCode from '@/components/Spinner/SpinnerCode';
import { useState } from 'react';

const Code = () => {
  const { component } = useParams();
  const [code, setCode] = useState(null);

  const onClick = () => {
    console.log('...');
    navigator.clipboard.writeText(code);
  };

  return (
    <div>
      <div className="relative w-full py-2 mt-4 border border-slate-200">
        {component === 'modal-html' && <ModalHtml />}
        {component === 'spinner' && (
          <SpinnerCode code={code} setCode={setCode} />
        )}
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
