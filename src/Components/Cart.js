import { useDispatch, useSelector } from "react-redux"
import { decreamentQty, increamentQty, removeQty } from "../Redux/ProductSlice";



export default function Cart(){
   const cartss = useSelector(state=>state.infoCart.value)
   console.log("yee aa gya :",cartss)
    const dispatch = useDispatch();
    return(
        <div className="container">
    <h3 className="alert-success ">Shopping Cart</h3>
    <div className="row">
      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Product Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartss.map((data,index)=>{
              return<tr>
                <td>{index+1}</td>
              </tr>
          })}
        </tbody>
        
        {/* <tbody> */}
           {/* {select.map((data,index)=>{
            return<tr key={index}>
            <td>{index+1}</td>
            <td><img src={data.addData.thumbnail} width={80} height={80}/> </td>  
            <td>{data.addData.title} /{data.addData.brand}/{data.addData.category}</td>
            <td>$.{data.addData.price}</td>
            <td>
              <button className="btn btn-success" 
              onClick={()=>dispatch(decreamentQty(data.addData.id))}
              >
                -
              </button> &nbsp;
              
              {}  &nbsp;

              <button className="btn btn-danger" 
               onClick={()=>dispatch(increamentQty(data.addData.id))}
              >
                +
              </button>
            </td>
            <td><b>$.{}</b></td>
            <td>
              <button className="btn btn-danger"
               onClick={()=>dispatch(removeQty(data.addData.id))} 
             >
                Remove Item
              </button>
            </td>
          </tr>
   
        })}
            
          
        </tbody> */}
      </table>

    </div>
  </div>
    )
}