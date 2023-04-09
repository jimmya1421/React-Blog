import React from 'react';
import { useLocation } from 'react-router-dom';


const Post = () => {
  const location = useLocation();
  let t = JSON.stringify(location.state.title);let s = JSON.stringify(location.state.content);
  t = t.replace(/"([^"]+(?="))"/g, '$1');s = s.replace(/"([^"]+(?="))"/g, '$1')

  return (
    <div className="flex justify-center ">
    <div className=' '>
      <h1 className='text-4xl font-serif p-8 w-full  bg-gray-100'>{t}</h1>
      <p className='ml-10 mr-2 font-mono md:pr-60 '>{s}</p>
    </div>
    </div>
  );
}

export default Post;
