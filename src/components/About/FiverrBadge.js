// FiverrBadge.js
import React from 'react';

function FiverrBadge() {
  return (
    <div itemscope itemtype='http://schema.org/Person' className='fiverr-seller-widget' style={{ display: 'inline-block' }}>
      <a itemprop='url' href='https://www.fiverr.com/ahmednajaf2' rel="nofollow" target="_blank" style={{ display: 'inline-block' }}>
        <div className='fiverr-seller-content' id='fiverr-seller-widget-content-2600f161-6fbd-4f29-9a55-c9acc61d40d0' itemprop='contentURL' style={{ display: 'none' }}></div>
        <div id='fiverr-widget-seller-data' style={{ display: 'none' }}>
            <div itemprop='name'>ahmednajaf2</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>Your description here...</div>
        </div>
      </a>
      <script id='fiverr-seller-widget-script-2600f161-6fbd-4f29-9a55-c9acc61d40d0' src='https://widgets.fiverr.com/api/v1/seller/ahmednajaf2?widget_id=2600f161-6fbd-4f29-9a55-c9acc61d40d0' data-config='{"category_name":"Programming \u0026 Tech"}' async={true} defer={true}></script>
    </div>
  );
}

export default FiverrBadge;
