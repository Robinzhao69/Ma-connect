import React, { useEffect, useState } from 'react';
import "./Post.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './inputOption';
import Posts from './Posts';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function Post() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Robin Zhao',
            description: 'dit is een test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

  return (
    <div className='post'>
        <div className="post_inputContainer">
            {/* tekst balk */}
            <div className="post_input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            {/* content buttons */}
            <div className="post_inputOptions">
               <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
               <InputOption Icon={VideoLibraryIcon} title='Video' color="#ffaf1c"/>
               <InputOption Icon={EventNoteIcon} title='Event' color="#9b9b9b"/>
               <InputOption Icon={CalendarViewDayIcon} title='Write article' color="13b113"/>
            </div>
        </div>

        {/* posts */}
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <Posts 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
    </div>
  )
}

export default Post