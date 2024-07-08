import { useEffect, useState } from "react"
import "./style.css"

function LoadMoreButton() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0)
    const [product, setProduct] = useState([])
    const [disableBtn, setDisableBtn] = useState(false)

    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json();

            if (data && data.products && data.products.length) {
                setProduct([...product,...data.products])
                setLoading(false)
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [count])

    useEffect(() => {
        product && product.length === 100 ? setDisableBtn(true) : setDisableBtn(false)
    }, [product])

    return (
        <div className="load-more-container">
            <div className="product-container">
                {loading && <p>Loading!!!</p>}
                {
                    product && product.length ?
                        product.map(item => <div key={item.id} className='product' >
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                        )
                        : null
                }

            </div>
            <div className="button-container">
                <button disabled={disableBtn} onClick={() => setCount(count + 1)}>Load more image</button>
                {disableBtn && <p>you have reached 100 products.</p>}
            </div>
        </div>
    )

}

export default LoadMoreButton