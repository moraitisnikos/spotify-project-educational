import React from 'react';
import './mainpage.css';
import download from './download.jpg';

function Mainpage() {
    return(
        <div>
            <div>
                <nav className='nav-list'>
                    <ul className='nav-list-content'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Download</a></li>
                        <li><a href='#'>Log in</a></li>
                    </ul>
                </nav>
            </div>
            <div className='grid-container'>
                <div className='grid-item grid-item-1'>
                    <ul className='nav-list-left'>
                        <li><a href='#'>Search</a></li>
                        <li><a href='#' className='test'>Your library</a></li>
                        <li><a href='#'>Create playlist</a></li>
                        <li><a href='#'>Liked Songs</a></li>
                    </ul>
                </div>
                <div className='grid-item grid-item-2'>
                    <div className='flexbox-shows-see'>
                        <div>Shows to try</div>
                        <div>See all</div>
                    </div>
                    <div className='flexbox-cards'>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                    </div>
                    <div className='flexbox-shows-see'>
                        <div>Shows to try</div>
                        <div>See all</div>
                    </div>
                    <div className='flexbox-cards'>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                    </div>
                    <div className='flexbox-shows-see'>
                        <div>Shows to try</div>
                        <div>See all</div>
                    </div>
                    <div className='flexbox-cards'>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                    </div>
                    <div className='flexbox-shows-see'>
                        <div>Shows to try</div>
                        <div>See all</div>
                    </div>
                    <div className='flexbox-cards'>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                        <div className='card'>
                            <div><img src={download}/></div>
                            <div>A cute dog</div>
                            <div>Daily happiness</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-playlist'>
                <div className='flex-playlist-left'>
                    <img src={download} className='happy-puppy'/>
                    <span>cute</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </div>
                <div className='flex-playlist-centre grid-items-sound'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward" viewBox="0 0 16 16">
                    <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm7 1.133L1.696 8 7.5 11.367V4.633zm7.5 0L9.196 8 15 11.367V4.633z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-forward" viewBox="0 0 16 16">
                    <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z"/>
                </svg>
                    <input type="range" class="form-range" id="customRange1"/>
                </div>
                <div className='flex-playlist-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                    <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                <input type="range" class="form-range" id="customRange1"/>
                </div>
            </div>
        </div>
    );
}

export default Mainpage;
