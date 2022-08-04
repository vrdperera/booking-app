import FeaturedItem from './atoms/featuredItem';
import { featured_Data } from './data/featuredItemsData';

export default function Featured() {
  return (
    <div className="Featured w-full max-w-7xl mx-auto flex justify-between gap-5">
      {featured_Data.map(({ id, src, alt, propertyName, properties }) => (
        <FeaturedItem
          key={id}
          src={src}
          alt={alt}
          propertyName={propertyName}
          properties={properties}
        />
      ))}
    </div>
  );
}
