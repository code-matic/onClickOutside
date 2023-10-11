## onClickOutside
A component designed to facilitate the automatic closure of a button element upon clicking outside its boundaries.
## Getting Started
Install package

```bash
npm i @codematic/onclickoutside
```

## USAGE

```javascript

import onclickoutside from "onclickoutside";
import { useRef, useState, useCallback} from 'react';

export default function ClickFunction() {

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
    </div>
  )
}

```