import { useEffect, useState } from "react"

const useProductDetails = productId =>{
    const [tool , setTool] = useState({});

    useEffect(() =>{
            const url = `https://manufacture-n.herokuapp.com/tool/${productId}`
            // console.log(url);
            fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [productId])
    
    return [tool];
}

export default useProductDetails;