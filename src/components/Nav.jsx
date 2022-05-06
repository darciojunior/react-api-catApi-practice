import { useContext } from 'react'
import { ListRequest } from '../App'
import api from '../services/api'
import './Nav.css'

export default function Nav() {

    const useListReqContext = useContext(ListRequest)

    function reqBreed() {
        api.get("v1/breeds")
            .then(response => useListReqContext.setList(response.data))

        useListReqContext.setRequestType('breed')
    }

    function reqCategory() {
        api.get("v1/categories")
            .then(response => useListReqContext.setList(response.data))

        useListReqContext.setRequestType('category')
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className='header-nav'>
            <button className='nav-btn' onClick={refreshPage}>Nova imagem</button>
            <button className='nav-btn' onClick={reqBreed}>Raças</button>
            <button className='nav-btn' onClick={reqCategory}>Categorias</button>
        </div>
    )
}