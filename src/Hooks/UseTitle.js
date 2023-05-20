
import { useEffect } from "react"

const UseTitle =title=>{
    useEffect(()=>{
      document.title=`Toy Box-${title}`
    },[title])
}

export default UseTitle