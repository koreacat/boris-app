import { useEffect, useState } from 'react';
import { Root, createRoot } from 'react-dom/client';
import styled, { keyframes } from 'styled-components';

interface ToastProps {
  onAnimationEnd: () => void;
	children: React.ReactNode;
}

const Toast = ({ onAnimationEnd, children }: ToastProps) => {
  const [_, setData] = useState<number[]>([]);

  const miningBitcoin = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    setData(new Array(10000000).fill(0));
    console.log('setData');
  }

  /**
   * TODO 3.
   * [메모리 패널 - 누수 확인하기]
   */
  useEffect(() => {
    miningBitcoin();

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
  const handleUnmount = (root: Root, toastContainer: HTMLDivElement) => {
    document.body.removeChild(toastContainer);
    root.unmount();
  }

  const showToast = (msg: string) => {
    const toastContainer = document.createElement('div');
    const toastElement = (<Toast onAnimationEnd={() => handleUnmount(root, toastContainer)}>{msg}</Toast>);
    const root = createRoot(toastContainer);
    document.body.appendChild(toastContainer);
    root.render(toastElement);
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
