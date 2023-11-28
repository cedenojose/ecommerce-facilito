import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

// codigo proporcionado por gatsby

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)
  }
  return stripePromise
}

const Checkout = ({shoppingCart}) => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: shoppingCart.map((product) => ({price: product.id, quantity: product.quantity })),
      successUrl: `http://localhost:8000/completado/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      className="w-full app-btn text-xl"
      onClick={redirectToCheckout}
    >
      Comprar
    </button>
  )
}

export default Checkout