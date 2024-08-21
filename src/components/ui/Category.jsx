export default function Category({ category: { id, title, image } }) {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col group items-center gap-y-2 text-center p-3 transition hover:bg-purple-50 "
      >
        <img
          src={image}
          alt={title}
          className="w-12 h-12 rounded border border-gray-200"
        />
        <span className="text-sm font-semibold whitespace-nowrap text-gray-700 hover:text-[#5d3ebc]">
          {title}
        </span>
      </a>
    </div>
  );
}
