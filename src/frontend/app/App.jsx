import React, {useState, useEffect} from 'react';
import FilterPanelComponent from "../components/filterPanel/FilterPanelComponent";
import ProductComponent from "../components/product/ProductComponent";
import './App.css';

const products = require('../../products.json');

const App = () => {
    const [visibleProductCount, setVisibleProductCount] = useState(10);
    const [filter, setFilter] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 10));

    useEffect(() => {
        let newFilteredProducts = products;
        if (filter !== 'All') {
            newFilteredProducts = products.filter(product => product.category === filter);
        }
        setFilteredProducts(newFilteredProducts);
    }, [filter]);

    useEffect(() => {
        setVisibleProducts(filteredProducts.slice(0, visibleProductCount));
    }, [visibleProductCount, filteredProducts]);

    const handleLoadMore = () => {
        setVisibleProductCount(prevCount => prevCount + 10);
    };

    const isAllProductsLoaded = visibleProducts.length === filteredProducts.length;

  return (
      <div>
        <header>
          <FilterPanelComponent currentFilter={filter} setFilter={setFilter} />
        </header>
        <main>
            <div className="ProductComponentContainer">
                {visibleProducts.map((product) => {
                    return <ProductComponent key={product.id} productData={product} />;
                })}
            </div>
            {!isAllProductsLoaded &&
                <button
                    className="LoadMoreButtonStyle"
                    id="loadMore.button"
                    name="Load More"
                    onClick={() => handleLoadMore()}
                >
                    Load More
                </button>
            }
        </main>
      </div>
  );
};

export default App;
