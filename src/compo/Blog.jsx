import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Blog = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [blogPost, setBP] = useState([]);
    const addPost = () => {if(title !== '' && content !== ''){
         setBP([...blogPost, { id: blogPost.length + 1, title: title, content: content }]
            );
         }
        }
    return (
        <div className='w-full'>
            <div className='mx-auto p-8 container  '>
            <h1 className='text-xl pb-5 pl-1'>Crate a Blog !</h1>
                <div className='flex flex-col'>
                    <input type="text" name='title' className=' bg-zinc-100 m-1 rounded border-x-4' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='enter title' />
                    <textarea name="content" cols="30" rows="5" className=' border-x-4 bg-zinc-100 m-1 rounded' value={content} onChange={(e) => { setContent(e.target.value) }} placeholder='enter content'></textarea>
                    <button onClick={addPost} className='p-1 bg-green-200 hover:bg-green-500 rounded'>POST</button>
                </div>
            </div>
            <div className='mx-auto container '>
               { (blogPost!==0)? <h2 className='text-xl pb-5 pl-5'>Our Blogs</h2>: <h1> </h1> }
                <ul className=' columns-1  mx-3 mb-2 '>
                        {blogPost.map((todo) => {
                            return <li key={todo.id} className='bg-gray-100 flex flex-row m-2 p-2 rounded'>

                                <h3 className='pl-2'> {todo.title}</h3>
                                <p className=' px-1 mx-2 hover:underline hover:text-neutral-500' >
                                      
                                <Link to={`/Post/${todo.id}`} state={{title:todo.title, content:todo.content}}>
                                    <button className='hover:underline'>Read BloG</button>
                                  </Link>
                                </p>
                            </li>
                        })}
                   
                </ul>
            </div>

        </div>
    );
}

export default Blog;

