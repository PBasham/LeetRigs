import * as OrderApi from '../../utilities/orders-api'
import { useEffect, useState } from 'react'


export default function PastOrdersPage() {

  const [orders, setOrders] = useState(null)

  let userOrders = OrderApi.pastOrders()

  useEffect(function() {
    (async function getUserOrders(){
        setOrders(userOrders)
    })()
}, [])



{
  userOrders.map(myOrder => { myOrder }
  )
}
return (
  <div>MY PAST ORDERS</div>

  )
}

