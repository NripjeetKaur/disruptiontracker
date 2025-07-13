import './NewsFeedMore.css'
import { useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useParams } from 'react-router-dom';

export default function NewsFeedMore() {
  const [newsItem, setNewsItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/NewsFeedMore/${id}`)
      .then((response) => {
        setNewsItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!newsItem) return <div>Loading...</div>;

  return (
    <>
    <div className='NewsFeedMore'>
      <h3 className='Titleofnews'>{newsItem.titleofnews}</h3>
      <p className='Content'>{newsItem.content}</p>
    </div>
    </>
  );
}