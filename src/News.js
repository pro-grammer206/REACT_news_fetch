import {useState} from 'react';

const News = () =>{

    const[news,getNews] = useState([]);
  

    const fetchNews = () =>{
        fetch("https://newsapi.org/v2/everything?q=covid%20maharashtra&apiKey=7b79136fbfb04e339e0a9ada65e385fb")
            .then(res =>res.json())
            .then(content=> {getNews(news.concat(content.articles))})
            .catch(err=>console.log(err));
    }

    const listNews = news.map((ele)=><div className="newsBlock"><li key={ele.id}><a href={ele.url}><p>{ele.title}</p><p>{ele.content}</p></a></li></div>)
   
    return(
        <div className="News">
            <h2>Latest News</h2>
            <button onClick={fetchNews}>Click Here for latest news</button>
            <ul>
                {listNews}
            </ul>  
        </div>
    )

}

export default News;