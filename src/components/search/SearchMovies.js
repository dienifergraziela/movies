import React, { useState } from 'react';
import "./style.css";

function SearchMovies({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div id='btn'>
            <input
                type="text"
                placeholder="Pesquisar filmes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button  type="button" class="btn btn-outline-secondary"onClick={handleSearch}><i class="fas fa-search"></i></button>

        </div>
    );
}

export default SearchMovies;
