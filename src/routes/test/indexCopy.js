/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import {connect} from 'dva';
import ReactToPrint from "react-to-print";

class Test11 extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <a href="#">Print this out!</a>
          )}
          content={() => this.componentRef}
          onBeforePrint={() => {
            console.log("before print!");
          }}
          onAfterPrint={() => {
            console.log("after print!");
          }}
        />
        <div ref={(el) => this.componentRef = el}>
          <div>adfasfasfdsaf</div>
        </div>
      </div>
    );

  }
}

export default connect(({User}) => ({User}))(Test11);
