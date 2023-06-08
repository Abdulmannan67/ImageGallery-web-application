import React from 'react'
import GalleryItem from './GalleryItem'
import { useState , useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Cental from './Cental'


const Gallery = (props) => {
    
    const [page, setpage] = useState(1)
    const [totalpage, settotalpage] = useState(0)
    const [articles, setArticles] = useState([])
    const [cenimg, setcenimg] = useState([])
    const [title, settitle] = useState([])
    const Imageload = async ()=> {
       
        props.setprogress(10)// loading bar k liye
        const url = `https://api.unsplash.com/search/photos?page=${page+1}&query=${props.category}&client_id=${props.apikey}`
        let data = await fetch(url);
        props.setprogress(30)
        let parsedData = await data.json()
        props.setprogress(70)
        setArticles(parsedData.results)
        settotalpage(parsedData.total_pages)
        props.setprogress(100)

        setcenimg(parsedData.results[5].urls.full)
        settitle(parsedData.results[5].alt_description)
        
        
    }

    useEffect(() => {
        Imageload();
        
      
    },[props.category])


    const Imageloadmore = async ()=> {
       
        const url = `https://api.unsplash.com/search/photos?page=${page+1}&query=${props.category}&client_id=${props.apikey}`
       
        setpage(page+1)
        let data = await fetch(url);
      
        let parsedData = await data.json()
      
        setArticles(articles.concat(parsedData.results))
        settotalpage(parsedData.total_pages)
            
    }

  
    

  return (
    <>
    <Cental category={props.category} imgurl={cenimg} title={title} />
    <InfiniteScroll
        dataLength={articles.length}
        next={Imageloadmore}
        hasMore={articles.length !== totalpage}
        loader={<h4>Loading...</h4>}
      >
        
    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                             
                            return <div className="col-md-4" key={element.id}>
                                <GalleryItem title={element.alt_description ? element.alt_description : ""} img={element.urls.full ? element.urls.full : ""}  download={element.links.download} userimg={element.user.profile_image.small} username={element.user.name} instalink={element.user.portfolio_url} />
                            </div>
                        })}
                    </div>
    </div>
    </InfiniteScroll>
    </>
  )
}

export default Gallery