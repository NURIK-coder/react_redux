import { useEffect } from "react";
import {currentUser} from '../store/actions/UserActions'
import {store}from '../store/store'
import { useSelector } from "react-redux";
import {UpdateActions} from '../store/actions/ItemsAction';
function Main(){

    const user = useSelector((state)=>state.user);
    const items_list = useSelector((state)=>state.items);

    useEffect(()=>{
        // const unsubscribe = store.subscribe(()=>{console.log('Store changed')})
        store.dispatch(currentUser());
        store.dispatch(UpdateActions());
        // return ()=>{unsubscribe()}
    }, [])
    return (
        <>
            <header className="header">
                Welcome to the Website <p>{user.first_name}</p>  <p>{user.email}</p>
            </header>
            <div>
                {items_list.map((item, index)=>(
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </>
        
        
    )
}
export default Main;