/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import { connect } from 'dva';
import { Button, Input, Carousel, Form, Icon, Tabs, Badge, Divider } from 'antd';
import styles from './index.less';

class GraphQL extends React.Component {

  componentDidMount() {
    this.getStarData();
  }

  getStarData = () => {
    const gql = `
        query {
               lists(category:"basketball"){
                 _id,
                 avatar,
                 name,
                 name_cn,
                 gender,
                 email,
                 phone,
                 nationality,
                 nationality_cn,
                 birthday,
                 height,
                 weight,
                 position,
                 tags,
                 city,
                 school,
                 hometown,
                 city_cn,
                 school_cn,
                 hometown_cn,
                 wiki_baidu,
                 wiki,
                 debut{year,situation,situation_cn,team,team_cn},
                 polo_shirts,
                 annuals{year,money,unit},
                 relationships{id,relation},
                 teams{year,name,name_cn},
                 honors{year,title,title_cn}                
               }
             }
        `;

    this.props.dispatch({
      type: 'star/getStar',
      payload: { gql },
      callback: (response) => {
        console.log('response', response);
      },
    });
  };

  render() {
    return (
      <div className={styles.index}>
        <div>asdfasdfasf</div>
      </div>
    );
  }
}

export default connect(({ User }) => ({ User }))(GraphQL);
