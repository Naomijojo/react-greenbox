import axios from "axios";


export const fixerApi = {
  getRates: async (symbols) => {
    try {
      const response = await axios.get("https://api.apilayer.com/fixer/latest", {
        headers:{
          apikey: import.meta.env.VITE_FIXER_API_KEY,  //fixer說要有header 且為apikey
        },
        params: {
          base: "USD",
          symbols: symbols,
        },
      })
      
      return response.data  
    } catch (error) {
      console.error("獲取fixerApi資料錯誤:", error)
    }
  },
};