import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/collectionCard';
import { clearCollection } from '../redux/features/collectionSlice';
import { toast } from 'react-toastify';

const pageCollection = () => {

    const collection = useSelector(state => state.collections.items);

    const dispatch = useDispatch();

    const clearAllCollection = ()=>{
        dispatch(clearCollection());
        toast.warning("Cleared Collection!");
    }


    return (
        <div>

            <div className="w-full h-fit p-5 font-semibold text-5xl flex justify-between">
                <h1>My Collection</h1>
                <div className='w-fit h-fit text-lg'>
                    <button className='w-40 h-10 bg-red-600 rounded ' onClick={()=>{
                        clearAllCollection();
                    }}>Clear Collection</button>
                </div>
            </div>

            <div className='flex justify-start item-start w-full min-h-fit h-auto  flex-wrap gap-4 p-7'>
                {collection.map((item) => {
                    return <CollectionCard item={item} key={item.id} />
                })}
            </div>

        </div>
    )
};

export default pageCollection
