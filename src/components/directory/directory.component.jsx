// Components
import DirectoryItem from "../directory-item/directory-item.component";

// JSON
import categories from '../../categories.json'

// Styles
import { DirectoryContainer } from './directory.styles'

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map(category => {
        return (
          <DirectoryItem category={category} key={category.id} />
        )
      })}
    </DirectoryContainer>
  );
}

export default Directory;