/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import { connect } from 'dva';
import { Icon, Steps, Timeline } from 'antd';
import styles from './index.less';

class Comment extends React.Component {
  render() {
    const data = [
      { key: '1', name: '高媛', txt: '谦逊是前进的第一步阶梯', date: '2018-02-12', good: 30, bad: 1 },
      { key: '2', name: '孟莹', txt: '谦逊是前进的第一步阶梯', date: '2018-02-15', good: 20, bad: 10 },
      { key: '3', name: '罗然', txt: '谦逊是前进的第一步阶梯', date: '2018-02-16', good: 10, bad: 0 },
      { key: '4', name: '郑一鸣', txt: '谦逊是前进的第一步阶梯', date: '2018-06-16', good: 70, bad: 5 },
    ];


    return (
      <div>
        {data && data.map((item) => {
          return (
            <div className={styles.comment} key={item.key}>
              <div className={styles.avatar}>
                <img src="img/comment.jpg" alt="" />
              </div>
              <div className={styles.desc}>
                <div><h2>{item.name}</h2></div>
                <div className={styles.commentTxt}>{item.txt}</div>
                <div className={styles.action}>
                  <div>时间：{item.date}</div>
                  <div>
                    <span><Icon type="like-o" />&nbsp;&nbsp;{item.good}</span>
                    <span><Icon type="dislike-o" />&nbsp;&nbsp;{item.bad}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })

        }

      </div>
    );
  }
}

export default Comment;
