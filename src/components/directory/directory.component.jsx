// Components
import CategoryItem from "../category-item/category-item.component";

// JSON
import categories from '../../categories.json'

const Directory = () => {
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

export default Directory;