import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Ripple from 'react-ink';
import setPlatform from '../../actions/setPlatform';
import getCategories from '../../actions/getCategories';
import setCategory from '../../actions/setCategory';
import setIsColor from '../../actions/setIsColor';
import setSize from '../../actions/setSize';
import getCategoryIcons from '../../actions/getCategoryIcons';
import getSearchIcons from '../../actions/getSearchIcons';

import './platform.css';

class Platform extends Component {

  setPlatform() {
    const {platform, isColor, size, currentCategory, search, setPlatform, getCategories, setCategory, setIsColor, setSize, getCategoryIcons, getSearchIcons} = this.props;
    setPlatform(platform);
    getCategories(platform);
    setCategory(currentCategory);
    setIsColor(isColor);
    setSize(size);
    search === ''
      ? getCategoryIcons(platform, currentCategory)
      : getSearchIcons(platform, search)
  }

  render() {
    const {title, platform, currentPlatform} = this.props;
    return (
      <button
        onClick={this.setPlatform.bind(this)}
        className={platform !== currentPlatform ? 'platform' : 'platformActive'}>
        <span className="platformText">{title}</span>
        <span className="platformCaret"/>
        <Ripple
          style={{color: '#2979FF'}}
          background={true}
        />
      </button>
    )
  }
}

const mapStateToProps = state => ({
  currentPlatform: state.platform,
  currentCategory: state.category,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  setPlatform: bindActionCreators(setPlatform, dispatch),
  getCategories: bindActionCreators(getCategories, dispatch),
  setCategory: bindActionCreators(setCategory, dispatch),
  setIsColor: bindActionCreators(setIsColor, dispatch),
  setSize: bindActionCreators(setSize, dispatch),
  getCategoryIcons: bindActionCreators(getCategoryIcons, dispatch),
  getSearchIcons: bindActionCreators(getSearchIcons, dispatch)
});

Platform = connect(mapStateToProps, mapDispatchToProps)(Platform);

export default Platform;