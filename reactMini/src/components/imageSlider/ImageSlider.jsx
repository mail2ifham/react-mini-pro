
// https://picsum.photos/v2/list?page=2&limit=10
// https://picsum.photos/v2/list

import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./style.css"

function ImageSlider({ url, limit }) {
    const [images, setImages] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)


    async function fetchData(getUrl) {
        try {
            setIsLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImages(data)
                setIsLoading(false)
            }
        } catch (e) {
            setError(e.message)
            setIsLoading(false)
            console.log(e.message);
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)

    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)

    }

    useEffect(() => {
        if (url !== "") fetchData(url)
    }, [url])

    if (isLoading) {
        return <div>Loading data!! please wait</div>
    }
    if (error !== null) {
        return <div>Something went wrong!!! {error}</div>
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />

            {images && images.length ?
                images.map((image, index) => (
                    <img key={image.id} src={image.download_url} alt={image.download_url} className={currentSlide === index ? "current-image" : "current-image hide-image"} />
                ))
                : null}

            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators">
                {images && images.length ?
                    images.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlide(index)} className={currentSlide === index ? "current-indicator" : "current-indicator inactive"}></button>
                    ))
                    : null}

            </span>
        </div>
    )

}

export default ImageSlider;