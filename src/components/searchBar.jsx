import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const searchBar = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    function onTyping(e) {
        setText(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        dispatch(setQuery(text));

        setText('');
    }

    

    return (
        <div className='w-full h-fit bg-(--c1)'>
            <form className='w-full h-20 flex m-auto justify-center align-center gap-5 p-5' onSubmit={(e) => {
                submitHandler(e);
            }}>
                <input onChange={(e) => {
                    onTyping(e);
                }} required type="text" placeholder='Search anything...' className='h-10 w-full border-2 border-white m-auto mr-0 text-white font-semibold text-base p-3' value={text} />
                <button className='h-10 w-30 border-2 border-white m-auto ml-0 text-white font-semibold text-base active:scale-90'>Search</button>
            </form>
        </div>
    )
}

export default searchBar
