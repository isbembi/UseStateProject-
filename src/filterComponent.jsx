import React, { useState, useEffect } from 'react';

const FilterComponent = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = [
            { id: 1, name: "Apple" },
            { id: 2, name: "Banana" },
            { id: 3, name: "Grapes" },
            { id: 4, name: "Pineapple" },
            { id: 5, name: "Mango" },
            { id: 6, name: "Marakuya" },
            { id: 7, name: "Orange" },
            { id: 8, name: "Peach" },
            { id: 9, name: "Raspberry" },
            { id: 10, name: "Watermelon" },
        ];

        setData(fetchData);
        setFilteredData(fetchData); 
    }, []);

    useEffect(() => {
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    return (
        <div>
            <h1>Data Filter</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilterComponent;
