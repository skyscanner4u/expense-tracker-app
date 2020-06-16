import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount,setAmount] = useState(0)

    return(
        <>
        <h3>Add new Transaction</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Type of Transaction</label>
                <input type="text" value={text} onChange = {(e) => setText(e.target.value)} placeholder="Enter text ..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"> Amount <br /> -ve (Expense) +ve (income) </label>
                <input type = "number" value ={amount} onChange ={(e) => setAmount(e.target.value)}
                 placeholder="Enter Amount in Rupees " /> 
            </div>
            <button className="btn">Add Transaction</button>
        </form>

        </>
    )
}
export default AddTransaction;