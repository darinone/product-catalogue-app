import React from "react";
import './FilterPanelComponent.css';
const FilterPanelComponent = ({ setFilter, currentFilter }) => {
    const filters = [
        { id: 'filter.all', name: 'All', value: 'All' },
        { id: 'filter.software', name: 'Software', value: 'Software' },
        { id: 'filter.mobileDevices', name: 'Mobile devices', value: 'Mobile devices' },
        { id: 'filter.fashion', name: 'Fashion', value: 'Fashion' }
    ];

    return (
        <div className="FilterPanelComponent">
            {filters.map(filter => (
                <div
                    key={filter.id}
                    id={filter.id}
                    className={`Filter ${currentFilter === filter.value ? 'Selected' : ''}`}
                    onClick={() => setFilter(filter.value)}
                >
                    {filter.name}
                </div>
            ))}
        </div>
    );
};

export default FilterPanelComponent;
