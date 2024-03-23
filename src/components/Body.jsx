// Trong file src/components/Body.jsx
import React, { useState } from 'react';
import data from "../dataGlasses.json";

export default function Body() {
  const [listGlasses] = useState(data);
  const [glassesDetail, setGlassesDetail] = useState({
    url: "",
    name: "",
    desc: ""
  });

  const renderDetailGlasses = (glasses) => {
    setGlassesDetail(glasses);
  }

  const renderListGlasses = () => {
    return listGlasses.map((glasses) => (
      <div key={glasses.id} className='col-sm-2'>
        <div className="card py-3">
          <img className="card-img-top" src={glasses.url} alt onClick={() => renderDetailGlasses(glasses)} />
        </div>
      </div>
    ));
  }

  return (
    <div className='body'>
      <div className='container'>
        <div className="row pb-5">
          <div className="col-sm-7">
            <div className="card card-right text-center ">

              <img className='imgDetail img-fluid' src={glassesDetail.url} alt />
              <img className="card-img-top img-fluid" src="./glassesImage/model.jpg" alt />
              <div className="card-body">
                <h4 className="card-title">{glassesDetail.name}</h4>
                <p className="card-text">{glassesDetail.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card card-left text-center ml-auto">
              <img className='imgDetail img-fluid' src={glassesDetail.url} alt />
              <img className="card-img-top img-fluid" src="./glassesImage/model.jpg" alt />
              <div className="card-body">
                <h4 className="card-title">{glassesDetail.name}</h4>
                <p className="card-text">{glassesDetail.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content p-5">
          <div className="row">
            {renderListGlasses()}
          </div>
        </div>
      </div>
    </div>
  );
}
