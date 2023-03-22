import React from 'react';
import IfoodOption from './IfoodOption';
import WhatsappOption from './WhatsappOption';

function OrderOptions() {
  return (
    <div>
      <span>ou peça no:</span>
      <IfoodOption />
      <WhatsappOption />
    </div>
  );
}

export default OrderOptions;
