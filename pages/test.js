import Image from 'next/image';
import { useEffect, useRef, useState, useCallback} from 'react';
import styles from '../styles/Home.module.css';


export default function useOnClickOutsideTest() {

  const [close, setClose] = useState(false);
  const ref = useRef();

  const handler = useCallback(() => {
    setClose(false)
  }, [])

  const clickOutside = () => {
    setClose(!close)
  }

  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);


  return (
    <div ref={ref} className={styles.container}>
      <button onClick={clickOutside} className={styles.buttonClick}>Button Select</button>
      { close && 
      (<div className={styles.option}>
        <p>Option</p>
        <p>Option</p>
        <p>Option</p>
        <p>Option</p>
      </div>)}
    </div>
  )
}

