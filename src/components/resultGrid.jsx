import React, { useEffect } from 'react'
import { fetchGIFS, fetchPhotos } from '../api/mediaApi'
import { setQuery, setActiveTab, setError, setLoading, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './resultCard'

const resultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

    const dispatch = useDispatch();



    useEffect(() => {


        const getData = async () => {

            dispatch(setLoading(true));
            dispatch(setError(null));

            try {
                let data = [];

                if (activeTab == 'photos') {
                    const response = await fetchPhotos(query);
                    data = response.map((item) => ({
                        id: item.id,
                        title: item.alt_description || "photo",
                        type: "photo",
                        thumbnail: item.urls.regular,
                        src: item.urls.full
                    }));
                }
                if (activeTab == 'GIF') {
                    const response = await fetchGIFS(query);
                    data = response.map((item) => ({
                        id: item.id,
                        title: item.title || "GIF",
                        type: item.type,
                        thumbnail: item.images.fixed_width.url,
                        src: item.images.original.url
                    }));
                }

                
                dispatch(setResults(data));

            }catch(err){
                dispatch(setError(err,message));
            }

        }
        getData();

    }, [query, activeTab, dispatch]);

    if (error) return (<h1>ERROR OCCURED</h1>);
    if (loading) return (<h1>Loading...</h1>);

    return (
        <div className='flex justify-start item-start w-full min-h-fit h-auto  flex-wrap gap-4 p-7'>
            {results.map((item) => {
                // return (<h1 key={item.id}>{item.title}</h1>);
                return <ResultCard  item={item} key = {item.id}/>
            })}
        </div>
    )
}

export default resultGrid
