import './Search.css';

export default function Search() {
    return (
        <div className="SearchDiv">
            <form className='SearchForm'>
                <input type="search" placeholder="Search ports..." name="query" />
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
}