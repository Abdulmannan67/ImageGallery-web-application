import React from "react";
import "../style.css";

const GalleryItem = (props) => {
  let { title, img, download, userimg, username, instalink } = props;

  return (
    <>
      <div>
        <div
          className="card my-2"
          style={{
            right: "0",
          }}
        >
          <img
            src={img}
            style={{ height: "400px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text text-secondary">{title}.</p>

            <div className="container  ">
              <div className="row  justify-content-end  ">
                <div className="rank-label-container mt-2">
                  <img className="img-circle" src={userimg} />
                  <span className="label label-default rank-label ml-2 ">
                    {username}
                  </span>

                  <a href={instalink}>
                    <i className="fab fa-instagram my-1 mx-2"></i>
                  </a>
                  <a href={download}>
                  <i className="fa-sharp fa-solid fa-download"></i>
                </a>
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
