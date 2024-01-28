// components/Sidebar.js
const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        <a href="" className="tag-pill tag-default">
          Tag 1
        </a>
        {/* 他のタグ */}
      </div>
    </div>
  );
};

export default Sidebar;
