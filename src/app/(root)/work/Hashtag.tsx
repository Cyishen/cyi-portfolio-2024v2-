interface HashtagsProps {
  tags: string[];
}

const Hashtags: React.FC<HashtagsProps> = ({ tags }) => {
  return (
    <div className='flex flex-nowrap gap-2'>
      {tags.map((tag, index) => (
        <div 
          key={index} 
          className='bg-gray-100 rounded-full px-3'
        >
          <span className="text-sm font-light text-gray-500 capitalize">
            # {tag}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Hashtags;
