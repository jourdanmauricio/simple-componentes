import { Link, Outlet, useParams } from 'react-router-dom';
import ModalHtml from '@/components/ModalHtml/ModalHtml';
import Spinner from '@/components/Spinner/Spinner';
import { useState } from 'react';
import Parallax from '@/components/Parallax/Parallax';
import AlternateTextImage from '@/components/AlternateTextImage/AlternateTextImage';
import TextCenterImage from '@/components/TextCenterImage/TextCenterImage';
import SubscriptionForm from '@/components/SubscriptionForm/SubscriptionForm';
import Loader from '@/components/Loader/Loader';

const Components = () => {
  const { component } = useParams();
  const [showCode, setShowCode] = useState(false);

  const onToggle = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center my-8  ">Componente: {component}</h1>
      <div className="relative w-full py-20 mt-4 border border-slate-200">
        {component === 'modal-html' && <ModalHtml />}
        {component === 'parallax' && <Parallax />}
        {component === 'spinner' && <Spinner />}
        {component === 'alternate-text-image' && <AlternateTextImage />}
        {component === 'text-center-image' && <TextCenterImage />}
        {component === 'subscription-form' && <SubscriptionForm />}
        {component === 'loader' && <Loader />}
      </div>

      <div onClick={onToggle} className="mt-4">
        <Link to="code">{showCode === true ? 'Ocultar ' : 'Ver '}código</Link>
      </div>
      <div className="mt-4">{showCode === true && <Outlet />}</div>
    </div>
  );
};

export default Components;
