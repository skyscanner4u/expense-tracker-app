import React from 'react';

export const IncomeExpense = () => {
    return(
            <div className ="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">+Rs 0.00</p>
                </div>
                <div>
                    <h4>Expenses</h4>
                    <p className="money minus">-Rs 0.00</p>
                </div>
            </div>
    )
}
export default IncomeExpense;