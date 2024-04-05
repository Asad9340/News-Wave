import { NavLink } from 'react-router-dom';
import useCategories from '../../../Hooks/useCategories';

function LeftSection() {
  const categories = useCategories();
  return (
    <div className="text-center space-y-3">
      {categories.map(category => (
        <div key={category.id} className="text-md font-medium text-[#9F9F9F]">
          <NavLink to='/'>{category.name}</NavLink>
        </div>
      ))}
    </div>
  );
}

export default LeftSection;
