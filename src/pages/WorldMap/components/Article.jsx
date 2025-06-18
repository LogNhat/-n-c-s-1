import listview_by_aleart from "../json/listview_by_alert.json";

function Article({ marker }) {
  return (
    <div className="w-full h-full max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
      {marker.alertids.map((alertId, index) => {
        const articlesObject = listview_by_aleart[alertId];
        if (!articlesObject) return null;

        const article = articlesObject[marker.place_id];
        if (!article) return null;

        return (
          <div
            key={index}
            className="px-2 py-1 w-full border-b border-gray-200 flex flex-row justify-between !mb-1"
          >
            <h2 className="font-bold text-md text-blue-400 !m-0">
              {article.title}
            </h2>
            <p className="text-sm !font-thin text-gray-700 !m-0">
              {article.date}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Article;
