export default function CategoryList({ categories }) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {categories.map((category, i) => (
        <div
          key={category.id || Math.random()}
          className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-transform transform hover:scale-105 duration-200 overflow-hidden"
        >
          <h2 className="text-xl font-semibold">
            {i + 1}{") "}{category.snippet?.title || "No Title Available"}
          </h2>
          <br />
          <p className="text-gray-600">kind: {category.kind || "No Channel ID"}</p>
          <p className="text-gray-600">etag:{category.etag || "No Channel ID"}</p>
          <p className="text-gray-600">ID: {category.id || "No ID"}</p>
          <p className="text-gray-600">
            Channel ID: {category.snippet?.channelId || "No Channel ID"}
          </p>

          <p
            className={`text-sm mt-2 ${
              category.snippet?.assignable ? "text-green-600" : "text-red-600"
            }`}
          >
            {category.snippet?.assignable ? "Assignable" : "Not Assignable"}
          </p>
        </div>
      ))}
    </div>
  );
}
