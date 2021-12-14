import { useState } from 'react'

function BinaryConverter() {

    const [binaryInput, setBinaryInput] = useState('')
    const [decimalOutput, setDecimalOutput] = useState('')
    const [error, setError] = useState('')

    const convertFromBinToDec = (binaryNum) => {
        setBinaryInput(binaryNum)

        if (binaryNum.length === 0) {
            setDecimalOutput('')
            setError('')
            return
        }

        let result = 0
        for (let i = 0; i < binaryNum.length; i++) {
            if (binaryNum[i] === '1') {
                result += 2 ** (binaryNum.length - i - 1)
            }
            else if (binaryNum[i] !== '0') {
                setDecimalOutput('')
                setError("Input must contain only 0's and 1's")
                return
            }
        }
        setDecimalOutput(result.toString())
        setError('')
    }

    const onKeyPress = (e) => {
        if (e.key !== '0' && e.key !== '1') {
            e.preventDefault()
        }
    }

    return (
        <div className="binary-converter">
            <h2 className="name">Binary To Decimal Converter</h2>
            <div className="input">
                <label htmlFor="binary-input">Binary Number</label>
                <input type="text" id="binary-input" value={binaryInput} onChange={e => {
                    convertFromBinToDec(e.target.value)
                }
                } onKeyPress={onKeyPress} autoComplete="off" />
            </div>
            <div className="input">
                <label>Decimal Number</label>
                <input type="text" value={decimalOutput} readOnly autoComplete="off" />
            </div>
            <div className="error">
                {error ? <p>Error: {error}</p> : ''}
            </div>
        </div>
    )
}

export default BinaryConverter
