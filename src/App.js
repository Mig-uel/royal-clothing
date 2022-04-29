import './categories.styles.scss';
import categories from './categories';

const App = () => {

  return (
    <div className="categories-container">
      {categories.map(category => {
        return (
          <div className="category-container" key={category.id}>
            <div className="background-image" style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;