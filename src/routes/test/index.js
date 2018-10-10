/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import {connect} from 'dva';
import {Button, Input, Carousel, Form, Icon, Tabs, Badge, Divider, List, Avatar} from 'antd';
import styles from './index.less';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import ReactToPrint from "react-to-print";


const FormItem = Form.Item;
const Search = Input.Search;
const {TabPane} = Tabs;

class Test extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const operations = <a className={styles.tabMore}>更多</a>;

    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
    ];

    return (
      <div className={styles.index}>
        <Header></Header>
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
          <div className={styles.aim}>
            <div>Data</div>
            <div>▪</div>
            <div>Knowledge</div>
            <div>▪</div>
            <div>Intelligence</div>
            <div>▪</div>
            <div>Decision</div>
          </div>
          <div className={styles.searchTitle}>
            <div className={styles.search}>
              <div className={styles.inputStyle}>
                <Input placeholder="詹姆斯" size="large"/>
              </div>
              <div>
                <Button type="primary" size="large">搜索</Button>
              </div>
            </div>
          </div>
          <div className={styles.star}>
            <div className={styles.bar}>
              {["安涛", "高媛", "王旭飞", "张晨慢", "占利锋", "谢良山", " 肖明超", '崔洋', '檀晓羽'].map((item, index) => {
                return (
                  <a href="/people" key={index.toString()} className={styles.starName}>{item},</a>
                )
              })}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.new}>
              <Carousel autoplay>
                <div><img src="http://img1.gtimg.com/chinanba/pics/hv1/244/232/2290/148966654.jpg" alt=""/></div>
                <div><img src="http://img1.gtimg.com/chinanba/pics/hv1/241/232/2290/148966651.jpg" alt=""/></div>
                <div><img src="http://img1.gtimg.com/chinanba/pics/hv1/243/232/2290/148966653.jpg" alt=""/></div>
                <div><img src="http://img1.gtimg.com/chinanba/pics/hv1/236/232/2290/148966646.jpg" alt=""/></div>
              </Carousel>
            </div>


            <div className={styles.infos}>
              <Tabs tabBarExtraContent={operations}>
                <TabPane tab="头条新闻" key="1">
                  <List
                    className={styles.listNew}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src="http://img1.gtimg.com/chinanba/pics/hv1/103/231/2290/148966258.jpg"/>}
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, a design language for background applications is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                  <div style={{'textAlign': 'center'}}>
                    <Button size='small'>查看更多</Button>
                  </div>
                </TabPane>
                <TabPane tab="体育常识" key="2">
                  <div>
                    <Badge dot>
                      <Icon type="notification"/>
                    </Badge>
                    <a href="">AI and Communication </a>
                  </div>
                  <div>
                    <Icon type="file-text"/>
                    <a href="">AI and Communication </a>
                  </div>
                  <div>
                    <Icon type="file-text"/>
                    <a href="">AI and Communication </a>
                  </div>
                </TabPane>
                <TabPane tab="体育排名" key="3">
                  <div>
                    <Badge dot>
                      <Icon type="notification"/>
                    </Badge>
                    <a href="">2018体育运动员收入排行榜</a>
                  </div>
                  <div>
                    <Icon type="file-text"/>
                    <a href="">2018年中国十大体育类大学排名体育类院校排行榜</a>
                  </div>
                  <div>
                    <Icon type="file-text"/>
                    <a href="">最知名的世界顶级体育赛事排行榜</a>
                  </div>
                  <div>
                    <Icon type="file-text"/>
                    <a href="">世界运动品牌排行榜</a>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>

          <div className={styles.statistics}>
            <div className={styles.container}>
              <div>
                <div>
                  <span className={styles.number}>2.6 </span>
                  <span className={styles.unit}>亿</span>
                  <Divider className={styles.divider} type="vertical"/>
                </div>
                <div className={styles.titleName}>体育达人</div>
              </div>
              <div>
                <div>
                  <span className={styles.number}>8.6 </span>
                  <span className={styles.unit}>亿</span>
                  <Divider className={styles.divider} type="vertical"/>
                </div>
                <div className={styles.titleName}>新闻资讯</div>
              </div>
              <div>
                <div>
                  <span className={styles.number}>200 </span>
                  <span className={styles.unit}>国家</span>
                  <Divider className={styles.divider} type="vertical"/>
                </div>
                <div className={styles.titleName}>全球覆盖</div>
              </div>
              <div>
                <div>
                  <span className={styles.number}>11.5 </span>
                  <span className={styles.unit}>亿</span>
                </div>
                <div className={styles.titleName}>年度访问</div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default connect(({User}) => ({User}))(Form.create()(Test));
