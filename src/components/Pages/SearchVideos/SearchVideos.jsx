import { lazy } from 'react'

const SearchForm = lazy(() => import(/* webpackChunkName: "SearchForm" */ './SearchForm/SearchForm'))

const SearchVideos = () => {
    return (
        <section>
            <SearchForm/>
        </section>
    )
}

export default SearchVideos

