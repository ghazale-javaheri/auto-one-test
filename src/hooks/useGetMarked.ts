import { useEffect, useState } from "react";
const MARKED= "%66"
function useGetMarked() {
    const [marked, setMarked] = useState<string[]>(() => {
        const saved:string = localStorage.getItem(MARKED) || "";
        const initialValue:string[] = saved  ? saved.split(',')  : [];
        
        return initialValue 
      }); 
    useEffect(()=>{
        
        localStorage.setItem(MARKED, marked.join(','))
    },[marked])

    const setMarkeDown=(stockNumber:string,remove=false)=>{
        console.log([...marked, stockNumber], remove,'dddd');
        
        if(!remove){
            console.log('!remove');
            
            setMarked([...marked, stockNumber])
            }else{
                console.log('remove');
                
            setMarked(marked.filter(item => item!== stockNumber))
            }
    }

    return {marked, setMarked:setMarkeDown};
}

export default useGetMarked;