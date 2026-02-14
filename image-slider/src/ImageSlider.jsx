import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'
function ImageSlider({ url, limit = 5, page }) {
  const [image, setImage] = useState([])
  const [currentSlide, setCurrentslide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchImages(getUrl) {
    try {
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if (data) {
        setImage(data)
        setLoading(false)
      }



    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false)

    }

  }

  useEffect(() => {
    if (url !== '') fetchImages(url)

  }, [url])
  console.log(image);

  if (loading) return (
    <div>
      loading data plz try again

    </div>
  )
  if (errorMsg !== null) {
    <div>error occured {errorMsg}</div>
  }
  return (
    <div className='continer'>

      <BsArrowLeftCircleFill className='arrow arrow-left' />
      {
        image && image.length
          ? image.map((imageItem) => {
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className='current-image'
            />
          }) : null
      }
      <BsArrowRightCircleFill className='arrow arrow-right' />
      <span className='circle-indicators'>
  {
    image && image.length
      ? image.map((_, index) => (
          <button
            key={index}
            className='current-indicator'
          ></button>
        ))
      : null
  }
</span>

      


    </div>
  )
}

export default ImageSlider