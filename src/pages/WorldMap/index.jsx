import WorldMapComponent from "./components/WorldMapComponent";
import ListArticle from "./components/ListArticle";
import { useState } from "react";
import Menu from "./components/Menu";
function WorldMap() {
  const [showList, setShowList] = useState(false);
  const handleButtonClick = () => {
    setShowList((prev) => !prev); // Toggle hiển thị danh sách
  };
  return (
    <div className="w-full h-screen relative bg-blue-50 overflow-hidden">
      <WorldMapComponent className="z-0" />
      <ListArticle visible={showList} />
      <Menu onClick={handleButtonClick} />
    </div>
  );
}

export default WorldMap;
