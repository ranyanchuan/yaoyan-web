/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import { connect } from 'dva';
import { Icon, Tag, Input, Button } from 'antd';
import styles from './index.less';

class PeopleItem extends React.Component {
  render() {
    const { studentList } = this.props;
    console.log('=====', studentList);
    return (
      <div>
        {studentList && studentList.length > 0 && studentList.map((item) => {
          return (
            <div className={styles.peopleItem} key={`${item.id}ee`}>
              <div className={styles.info}>
                <div className={styles.imgBody}><img src="img/default.jpeg" alt="" /></div>
                <div className={styles.basicBody}>
                  <div><h2><a
                    href={`/profile?college=${item.college}&id=${item.id}&speciality=${item.speciality}&grade=${item.grade}`}
                  >{item.name}</a>
                  </h2></div>
                  <div className={styles.bItem}>学院：{item.college}</div>
                  <div className={styles.bItem}>专业：{item.speciality}</div>
                  <div className={styles.bItem}>班级：{item.grade}</div>
                  <div className={styles.bItem}>
                    <span>标签：</span>
                    {
                      item.tags && item.tags.length > 0 && item.tags.split(/\|/g).map((it, index) => {
                        return (
                          <Tag key={`${index}dddd`}>{it}</Tag>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
              <div className={styles.view}>
                <span><Icon type="eye-o" /></span>
                <span className={styles.vNum}>{item.view}</span>
                <span>views</span>
              </div>
            </div>);
        })
        }

      </div>
    );
  }
}

export default PeopleItem;
