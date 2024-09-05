export default  function ShoppingButton({button}){
    const handleShopping = () =>{
        console.log("du har shoppet!")
    }

    return <button class="shopping-btn" onClick={handleShopping}>Legg i handlekurv</button>
}