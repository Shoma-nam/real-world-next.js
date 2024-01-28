// components/Banner.js
const Banner = ({ title, subtitle }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
