import React from 'react';
import IfoodOption from './IfoodOption';
import WhatsappOption from './WhatsappOption';

function OrderOptions() {
  return (
    <div className="order-options">
      <span>Ou peça no:</span>
      <IfoodOption />
      <WhatsappOption />
    </div>
  );
}

export default OrderOptions;
