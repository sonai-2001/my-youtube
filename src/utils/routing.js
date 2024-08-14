import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainContainer from "../components/MainContainer"
import Watch from "../components/Watch"


const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
           {
            path:"/",
            element:<MainContainer/>
           },{
            path:"/watch",
            element:<Watch/>
           }
      ]
    }
])

export default appRouter