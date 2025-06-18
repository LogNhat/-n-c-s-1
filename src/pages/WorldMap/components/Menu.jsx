function Menu({ onClick }) {
  return (
    <div className="absolute top-20 right-10 z-99">
      <div
        onClick={onClick}
        className="py-2 px-6 bg-amber-300 cursor-pointer hover:bg-amber-500 text-lg font-medium text-white"
      >
        Button
      </div>
    </div>
  );
}

export default Menu;
