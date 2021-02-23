import Axios from 'axios'

export  async function Price (data) {
    console.log("Login object is ",data)
    const response= await Axios.get("http://localhost:4000/User/price",data )
      return response
}
