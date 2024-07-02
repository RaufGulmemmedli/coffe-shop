import React, { useState } from "react";
import style from "../main/coffeMain.module.css";
import Img from "../img/img.svg";
import Modal from "../modal/Modal.jsx";

const CoffeMain = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleOpenOrderModal = () => {
    setShowOrderModal(true);
  };

  const handleOpenFeedbackModal = () => {
    setShowFeedbackModal(true);
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
    setShowFeedbackModal(false);
  };

  return (
    <>
      <div className={style.coffeMain}>
        <div className={style.left}>
          <h1>
            Enjoy Your <span>Coffee</span> before your activity
          </h1>
          <p>
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <button className="btn1" onClick={handleOpenOrderModal}>Order Now</button>
          <button className="btn1" onClick={handleOpenFeedbackModal}>Feedback</button>
        </div>
        <div className={style.right}>
          <img src={Img} alt="" />
        </div>
      </div>
      <Modal show={showOrderModal} handleClose={handleCloseModal}>
       
      </Modal>
      <Modal show={showFeedbackModal} handleClose={handleCloseModal}>
     
      </Modal>
    </>
  );
};

export default CoffeMain;
