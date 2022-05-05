// Styles
import './categories.styles.scss';

// JSON
import categories from './categories';

// Components
import CategoryItem from './components/category-item/category-item.component'

const App = () => {

  return (
    <div className="categories-container">
      {categories.map(category => {
        return (
          <CategoryItem category={category} key={category.id} />
        )
      })}
    </div>
  );
}

export default App;