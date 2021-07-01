/* eslint-disable */
import React, { Component } from 'react';
import { Col, Input, Label, ModalBody, Row, Modal } from 'reactstrap';
import Images from '../../../assets/images'
import { Tabs } from 'antd';
import StarRatings from 'react-star-ratings';
const { TabPane } = Tabs;


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starConditions: ['All', '5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
      currentConditionIndex: 0,
      isShowModal: false,
    }
  }

  getClassConditionStar(currentIndex, index, total) {
    if (currentIndex === index) {
      // current Index = 0 -> border color, border-radius-top-left, boder-radius-bottom-left
      if (currentIndex === 0) {
        return 'div_star div_star_selected_0';
      } else if (currentIndex > 0 && currentIndex < total - 1) {
        return 'div_star div_star_selected_center';
      } else {
        return 'div_star div_star_selected_last'
      }
    } else if (index > currentIndex) {
      if (index === total - 1) {
        return 'div_star div_star_unselect_last';
      } else {
        return 'div_star div_star_unselect_right';
      }
    } else {
      //index < current index
      if (index === 0) {
        return 'div_star div_star_unselect_0';
      } else {
        return 'div_star div_star_unselect_left';
      }
    }
  }

  toggle = () =>
    this.setState(prevState => ({
      isShowModal: !prevState.isShowModal
    }));

  render() {
    const { starConditions, currentConditionIndex, isShowModal } = this.state;
    return (
      <div className="animated fadeIn">
        <Row className="justify-content-center div_parrent">
          <Row className='header-row'>
            <img style={{ width: 22, marginRight: 30 }} src={Images.ic_search} alt="profile" className='header_search' />
            <div style={{ position: 'relative' }}>
              <img src={Images.ic_noti} alt="profile" className='header_noti' />
              <div class="div_circle" />
            </div>

            <div className='header_separate' />
            <div className='header_profile_text'>tester tester</div>
            <div className="header_profile_div">
              <img src={Images.ic_profile} alt="profile" className='header_profile_img' />
            </div>
          </Row>
          <Row className='div_rating'>
            <Row className='div_rating_title'>
              <div className='rating_title'>Shop Rating</div>
              <div className='rating_sub_title'>View the rating to your shop</div>
            </Row>
            <Row className='div_rating_value'>
              <div class='rating_value'>4.0</div>
              <div className='rating_total'>/ 5</div>
            </Row>
          </Row>
          <div className='div_separate' />
          <Row style={{ width: '100%', marginLeft: 10 }}>
            <Col xl="4" lg="4" md="6" sm="6" className="">
              <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col xs="3" sm="5" md="5" className="">
                  <Label htmlFor="name">Product name:</Label>
                </Col>
                <Col xs="6" sm="7" md="7" className="">
                  <Input type="text" placeholder={'Enter product name'} />
                </Col>
              </Row>
            </Col>
            <Col xl="4" lg="4" md="6" sm="6" className="">
              <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col xs="3" sm="5" md="5" className="">
                  <Label htmlFor="name">Variation name:</Label>
                </Col>
                <Col xs="6" sm="7" md="7" className="">
                  <Input type="text" placeholder={'Enter variation name'} />
                </Col>
              </Row>
            </Col>
            <Col xl="4" lg="4" md="6" sm="6" className="">
              <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col xs="3" sm="5" md="5" className="">
                  <Label htmlFor="name">User name:</Label>
                </Col>
                <Col xs="6" sm="7" md="7" className="">
                  <Input type="text" placeholder={'Enter user name'} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ width: '100%', marginLeft: 10, marginTop: 20, marginBottom: 20 }}>
            <Col xl="4" lg="4" md="6" sm="6" className="">
              <Row>
                <Col xs="3" sm="5" md="5" className="">
                  <Label htmlFor="name">Review time:</Label>
                </Col>
                <Col xs="6" sm="7" md="7" className="">
                  <div className='div_calendar'>
                    <img src={Images.ic_calendar} alt="profile" style={{ width: 20, height: 20, marginRight: 10, marginLeft: 5 }} />
                    <div style={{ color: '#cfd5da' }}>Set pediod</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="div_parrent_content">
            <Row className='flex_row'>
              <div className='btn_search' style={{ marginRight: 20 }} onClick={() => this.toggle()}>Search</div>
              <div className='btn_reset'>Reset</div>
            </Row>
            <Row style={{ marginTop: 40 }}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="All" key="1">
                  <div style={{ display: 'flex', marginBottom: 10 }}>
                    {
                      starConditions.map((e, index) => {
                        return <div
                          key={e}
                          className={this.getClassConditionStar(currentConditionIndex, index, starConditions.length)}
                          onClick={() => this.setState({ currentConditionIndex: index })}
                        >{e}</div>
                      })
                    }
                  </div>
                  <Row style={{ marginTop: 20, marginBottom: 30 }}>
                    <Col xs="4" sm="4" md="4" className="title_review">
                      <div>Production Information</div>
                    </Col>
                    <Col xs="4" sm="4" md="4" className="title_review">
                      <div>Buyer's Review</div>
                    </Col>
                    <Col xs="4" sm="4" md="4" className="title_review">
                      <div>Your Reply</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3" sm="3" md="3" className="div_review_top" style={{ justifyContent: 'flex-start', paddingLeft: 30 }}>
                      <div>Username: </div>
                      <img src={Images.ic_profile} alt="profile" className='user_review_profile' />
                      <div>sieuhong.ma</div>
                    </Col>
                    <Col xs="6" sm="6" md="6" className="div_review_top">
                    </Col>
                    <Col xs="3" sm="3" md="3" className="div_review_top">
                      <div>Order ID: 1234567890987</div>
                    </Col>
                  </Row>
                  <div style={{ backgroundColor: '#ffffff', paddingBottom: 10, marginBottom: 100 }}>
                    <Row>
                      <Col xs="3" sm="3" md="3" className="item_review_border_bottom" style={{ justifyContent: 'flex-start', paddingLeft: 30 }} >
                        <img src={Images.ic_profile} alt="profile" className='product_img' />
                        <div>Thick Hoodle</div>
                      </Col>
                      <Col xs="6" sm="6" md="6" className="item_review_border_bottom item_review_border_left item_review_border_right" style={{ justifyContent: 'flex-start', paddingLeft: 30 }}>
                        <StarRatings
                          rating={2}
                          starRatedColor="#f6be42"
                          numberOfStars={5}
                          starDimension='15px'
                          starSpacing='3px'
                          name='rating'
                        />
                        <div>Such a fast shipping!</div>
                        <img src={Images.ic_profile} alt="profile" className='product_img' />
                        <div>06-03-2020 18:09</div>
                      </Col>
                      <Col xs="3" sm="3" md="3" className="item_review_border_bottom">
                        <div>Test</div>
                        <div>06-03-2020 18:09</div>
                      </Col>
                    </Row>

                  </div>
                </TabPane>
                <TabPane tab="On Shop" key="2">
                  On Shop
                </TabPane>
                <TabPane tab="On Products" key="3">
                  On Product
                </TabPane>
              </Tabs>
            </Row>
          </div>
        </Row >
        <Modal
          isOpen={isShowModal}
          toggle={this.toggle}
          centered
          backdrop={false}
        >
          <ModalBody>
            <div>
              <div className='modal_header'>
                <div className='modal_header_text'>Reply</div>
                <img style={{ width: 20, height: 20 }} src={Images.ic_close} onClick={() => this.toggle()} />
              </div>
              <div className='modal_body_vote_div'>
                <div className='modal_body_vote_text'>Testing</div>
                <StarRatings
                  rating={5}
                  starRatedColor="#f6be42"
                  numberOfStars={5}
                  starDimension='15px'
                  starSpacing='3px'
                  name='rating'
                />
              </div>
              <div>
                <Input type="textarea" name="text" id="exampleText" />
              </div>
              <div className='modal_bottom'>
                <div className='modal_bottom_cancel_btn' style={{ marginRight: 20 }} onClick={() => this.toggle()} > CANCEL</div>
                <div className='modal_bottom_submit_btn' onClick={() => this.toggle()} > SUBMIT</div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div >
    );
  }
}

export default Home;
