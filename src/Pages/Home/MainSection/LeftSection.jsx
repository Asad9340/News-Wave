import { NavLink } from 'react-router-dom';
import useCategories from '../../../Hooks/useCategories';

function LeftSection() {
  const categories = useCategories();
  console.log(categories);
  return (
    <div>
      {categories.map(category => (
        <div key={category.id} className="text-lg font-medium text-[#9F9F9F]">
          <NavLink
            // className={({ isActive }) => (isActive ? 'py-4 bg-[#E7E7E7]' : 'bg-[#fff]')}
          >
            {category.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default LeftSection;
