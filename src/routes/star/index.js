/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import {connect} from 'dva';
import {List, Avatar, Icon,Tree} from 'antd';
import styles from './index.less';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

const DirectoryTree = Tree.DirectoryTree;

class Star extends React.Component {
  componentDidMount() {
    // this.getStarData();
  }

  render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }

    const IconText = ({type, text}) => (
      <span>
        <Icon type={type} style={{marginRight: 8}}/>
        {text}
      </span>
    );

    return (
      <div className={styles.star}>
        <Header/>
        <div className={styles.startBody}>
          <div className={styles.searchContent}>
            <div>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt=""/>
            </div>
            <div>dddddd</div>
            <div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default connect(({User}) => ({User}))(Star);
