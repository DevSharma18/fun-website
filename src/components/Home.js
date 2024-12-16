
import '../styles.css';

import React, { useState, useEffect } from 'react';

const MemeViewer = () => {
    const [memes, setMemes] = useState([]);
    const [likes, setLikes] = useState({});

    // Fetch memes from an API (e.g., ImgFlip API or placeholder JSON)
    useEffect(() => {
        // Placeholder API for memes
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((data) => {
                setMemes(data.data.memes.slice(0, 20)); // Fetch only top 10 memes
            })
            .catch((error) => console.error('Error fetching memes:', error));
    }, []);

    // Handle Like Button
    const handleLike = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: (prevLikes[id] || 0) + 1,
        }));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>😂 Latest Memes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {memes.map((meme) => (
                    <div
                        key={meme.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            padding: '10px',
                            background: '#f9f9f9',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={meme.url}
                            alt={meme.name}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                        <h3>{meme.name}</h3>
                        <button
                            onClick={() => handleLike(meme.id)}
                            style={{
                                background: '#4CAF50',
                                color: '#fff',
                                padding: '8px 16px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Like 👍
                        </button>
                        <p>Likes: {likes[meme.id] || 0}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const LandingPage = () => {
    return (
        <div>
            <header style={{ textAlign: 'center', padding: '20px', background: '#4CAF50', color: '#fff' }}>
                <h1>🎮 Fun Entertainment 🎮</h1>
                <p>Explore the latest memes and enjoy games on this platform!</p>
            </header>

            <div style={{ margin: '20px auto', width: '90%', maxWidth: '1200px' }}>
                <MemeViewer />
            </div>
        </div>
    );
};

export default LandingPage;
