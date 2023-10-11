import { useRef, useState, useCallback} from 'react';
import onclickoutside from "../component/onclickoutside";
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {

  const [close, setClose] = useState(false);

  const wrapperRef = useRef();

  const onClickOutsideCallback = useCallback(() => {
    setClose(false);
  }, []);

  onclickoutside(wrapperRef, onClickOutsideCallback);

  return (
    <div className={styles.Homecontainer}>
    <div ref={wrapperRef}>
      <button onClick={()=> setClose(!close)}>
        Button
      </button>
    {
      close && (
      <div className={styles.box}>
        <p>To close this box</p>
        <p>Click outside the box</p>
        
      </div>
      )
    }
    </div>
    <button><Link href="/test">Test Page</Link></button>
    </div>
  )
}
