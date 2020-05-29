import React, { useState, useEffect,createContext, useContext, useMemo, useCallback, memo } from 'react';

const CountContext = createContext()
const NameContext = createContext()

function Bar () {
  const count = useContext(CountContext)
  const name = useContext(NameContext)
  return (
    <div>
      <p>{count}</p> 
      <p>{name}</p> 
    </div>
  ) 
}

function Foo () {
  return (
    <div>
      <Bar />
    </div>
    
  )
}

const Number = memo(function (props) {
  console.log('Numer render agein! ')
  const { number, click }  = props
  return (
    <div onClick={click}>{ number }</div>
  )
}) 

function App(props) {
  const [count, setCount] = useState(()=> props.defaultCount || 10)
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  useEffect(()=> {
    document.title = count
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=> {
    window.addEventListener('resize', onResize, false)
    return ()=> window.removeEventListener('resize', onResize, false)
  },[])

  const number = useMemo(() => {
    return count
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count === 13])

  // const click = () => console.log(1111)

  // const click = useMemo(() => {
  //   return ()=> console.log(1111)
  // },[])

  const click = useCallback(() => console.log(1111), [])

  /**
   * useMemo(() => fn) == useCallback(fn)
   */

  return (
    <div>
      <button onClick={()=> setCount(count + 1)}>
        {count}
      </button>
      <p>{size.width}* {size.height}</p> 
      <CountContext.Provider value={count}>
        <NameContext.Provider value={'zhangsan'}>
          <Foo />
        </NameContext.Provider>
      </CountContext.Provider>

      <Number number={number} click={click} />
    </div>
  );
}

export default App;
