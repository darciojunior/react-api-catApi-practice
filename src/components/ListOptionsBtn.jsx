import './ListOptionsBtn.css'
import { ListRequest } from '../App'
import { useContext } from 'react'
import api from '../services/api'

export default function ListOptionsBtn(props) {

    const useListReqContext = useContext(ListRequest)

    function dados() {
        if (useListReqContext.requestType === 'breed') useListReqContext.setCatImage(props.data.image)
        else if (useListReqContext.requestType === 'category') {
            api.get(`v1/images/search?category_ids=${props.data.id}`)
                .then(response => useListReqContext.setCatImage(response.data[0]))
        }


    }

    return <button className='listBtn' onClick={dados}>{props.data.name}</button>
}