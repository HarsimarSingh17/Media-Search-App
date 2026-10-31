import React from 'react'
import { removeFromCollection } from '../redux/features/collectionSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const collectionCard = ({ item }) => {

    const dispatch = useDispatch();

    const removeCollection = (item)=>{
        dispatch(removeFromCollection(item.id));
        toast.info("Removed from Collection!");
    }

    return (
        <div className='w-70 h-50 bg-white rounded-xl mb-18'>

            <a href={item.src}><img src={item.thumbnail} alt={item.id} className='w-full h-full object-cover rounded-xl' /></a>

            <div className="w-full h-auto flex justify-between align-center m-3 mb-5">

                <div className=" w-50 capitalize">{item.title}</div>

                <button className="bg-red-600 rounded-xl font-lg font-weight-bold w-17 h-8 curson-pointer" onClick={()=>{
                    removeCollection(item);
                }} >Remove</button>


            </div>

        </div>
    )
}

export default collectionCard
