import React from 'react'
import "./newsAndVideos.css"
import eleves from '../../Assets/school/eleves.webp'

const NewsAndVideos = () => {
  return (
    <div className='newsAndVideos'>
      <div className='newsAndVideosFils'>
        <div className='news'>
            <h3>New & Updates</h3>
            <a>Read All News</a>
            <img src={eleves} alt='img' className='img' />
            <p className='newsDate'>June 6, 2019 / Admission, Updates</p>
            <b className='newsTitle'>Campus Camping and Learning Session</b>
        </div>
        <div className='news'>
            <div className='smallNews'>
                <img src={eleves} alt='img' />
                <div className='smallNewsInfo'>
                    <p className='newsDate'>June 6, 2019 / Admission, Updates</p>
                    <b className='newsTitle'>Campus Camping and Learning Session</b>
                </div>
            </div>
            <div className='smallNews'>
                <img src={eleves} alt='img' />
                <div className='smallNewsInfo'>
                    <p className='newsDate'>June 6, 2019 / Admission, Updates</p>
                    <b className='newsTitle'>Campus Camping and Learning Session</b>
                </div>
            </div>
            <div className='smallNews'>
                <img src={eleves} alt='img' />
                <div className='smallNewsInfo'>
                    <p className='newsDate'>June 6, 2019 / Admission, Updates</p>
                    <b className='newsTitle'>Campus Camping and Learning Session</b>
                </div>
            </div>
        </div>
        <div className='news'>
            <h3>Compus Videos</h3>
            <a>View All Videos</a>
            <iframe className='video' src="https://www.youtube.com/embed/DueoUPN9OFo?si=ih9YyedWe-9bgtDV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='video' src="https://app.videas.fr/embed/media/9cf9ccd3-3006-4e26-8576-b870bfb4a92c/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default NewsAndVideos
