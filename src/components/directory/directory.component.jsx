// Components
import CategoryItem from "../directory-item/directory-item.component";

// JSON
import categories from '../../categories.json'

// Styles
import './directory.styles.scss'

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