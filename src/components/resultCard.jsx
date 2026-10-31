import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCollection } from '../redux/features/collectionSlice';
import { toast } from 'react-toastify';

const resultCard = ({ item }) => {
  let title = item.title;

  const dispatch = useDispatch();

  const addCollection = (item) => {
    // dispatch(addToast());
    dispatch(addToCollection(item));
    toast.success("Added to Collection ✅");
  }

  return (
    <div className='w-70 h-50 bg-white rounded-xl mb-18'>

      <a href={item.src}><img src={item.thumbnail} alt={item.id} className='w-full h-full object-cover rounded-xl' /></a>

      <div className="w-full h-auto flex justify-between align-center m-3 mb-5">

        <div className=" w-50 capitalize">{item.title}</div>

        <button className="bg-red-600 rounded-xl font-lg font-weight-bold w-15 h-7 curson-pointer" onClick={() => {
          addCollection(item);
        }} >Save</button>


      </div>

    </div>
  )
}

export default resultCard
