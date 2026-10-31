import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const tabs = () => {
    const tab = ['photos', 'videos', 'GIF'];
    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab);

    return (
        <div>
            {tab.map((elem, idx) => {
                return (<button key={idx} className={`${activeTab==elem?`bg-blue-500`:`bg-green-500`} capitalize transition w-20 h-5 border-2 border-white rounded-md h-7 m-3`} onClick={()=>{
                    dispatch(setActiveTab(elem));
                }}>
                    {elem}
                </button>);
            })}
        </div>
    )
}

export default tabs
