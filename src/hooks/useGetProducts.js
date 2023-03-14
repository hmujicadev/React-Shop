import { useState,useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) =>{
  const [products, setProducts] = useState([]);

	useEffect(() => {
		async function requestData () {
		 const response = await axios(API);
		 setProducts(response.data);
		}
		requestData();
	}, [])

  return products;
}

export default useGetProducts;