import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContent} from '../../actions/getContent';
import Platforms from '../../components/platforms/platforms';
import Categories from '../../components/categories/categories';
import Search from '../../components/search/search';
import Icons from '../../components/icons/icons';

import './home.css';

class Home extends Component {

  componentDidMount() {
    const {getContent} = this.props;
    getContent();
  }

  render() {

    const {platforms, categories, icons} = this.props;

    return (
      <div className="container">
        <div className="panelContainer">
          <div className="topContainer">
            <Search/>
          </div>
          <div className="filtersContainer">
            <div className="platformsContainer">
              <Platforms platforms={platforms}/>
            </div>
            <div className="categoriesContainer">
              <Categories categories={categories}/>
            </div>
          </div>
        </div>
        <div className="contentContainer">
          <div className="iconsContainer">
            <Icons icons={icons}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  platforms: state.platforms,
  categories: state.categories,
  icons: state.icons
});

const mapDispatchToProps = dispatch => ({
  getContent: bindActionCreators(getContent, dispatch)
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
