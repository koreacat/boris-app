import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import styled, { keyframes } from 'styled-components';

function fetchData() {
  return new Promise(resolve => setTimeout(resolve, 5000));
}

interface ToastProps {
  onAnimationEnd: () => void;
	children: React.ReactNode;
}

const Toast = ({ onAnimationEnd, children }: ToastProps) => {
  const [data, setData] = useState<any[]>([]);
  
  useEffect(() => {
    (async () => {
      await fetchData();
      setData(new Array(10000000).fill(0));
      console.log('setData');
    })();

    return (() => {
      console.log('unmount');
    })
  }, []);

  return (
    <ToastWrap onAnimationEnd={onAnimationEnd}>{children}</ToastWrap>
  )
}


interface ToastHook {
  showToast: (msg: string) => void;
}

const useToast = (): ToastHook => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);

    return () => {
      document.body.removeChild(toastContainer);
    };
  }, []);

  const showToast = (msg: string) => {
    if(isShow) return;

    const handleUnmount = () => {
      if (container) {
        root.unmount();
        setIsShow(false);
      }
    }

    const toastElement = (<Toast onAnimationEnd={handleUnmount}>{msg}</Toast>);
    const container = document.getElementById('toast-container');
    const root = createRoot(container!);
    root.render(toastElement);
    setIsShow(true);
  };

  return { showToast };
};

const fadeInOut = keyframes`
  0%, 100% {
    transform: translateY(10px);
    opacity: 0;
  }
  20%, 80% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const ToastWrap = styled.div`
  animation: ${fadeInOut} 2s;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  opacity: 0;
  z-index: 1000;
`;

export default useToast;
